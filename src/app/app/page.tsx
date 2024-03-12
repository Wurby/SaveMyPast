"use client";
import { useAuth } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useEffect, useReducer, useState } from "react";
import { firebaseConfig } from "@/lib/firebase";
import { Button } from "@/components/Button";
import { HorizontalDivider } from "@/components/Divider";
import { getPrompts } from "./getPrompts";
import { promptReducer } from "./promptReducer";
import EditPromptDialog from "./EditPromptDialog";

// Initialize Firebase app with config
initializeApp(firebaseConfig);

// TODO: Add disabled while loading prompts
export default function App() {
  const { getToken } = useAuth();
  const [promptLoading, setPromptLoading] = useState(true);
  const [store, dispatch] = useReducer(promptReducer, {
    immutablePrompts: [],
    allPrompts: [],
    activePromptIndex: 0,
  });

  useEffect(() => {
    const signInWithClerk = async () => {
      const auth = getAuth();
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(auth, token!);

      /**
       * The userCredentials.user object will call the methods of
       * the Firebase platform as an authenticated user.
       */
      console.log("user ::", userCredentials.user);
    };

    signInWithClerk();
  }, [getToken]);

  useEffect(() => {
    getPrompts()
      .then((prompts) => {
        setPromptLoading(false);
        const action = {
          type: "init",
          payload: {
            prompts: prompts,
            activePromptIndex: 0,
          },
        };
        dispatch(action);
      })
      .catch((error) => {
        console.error("Error getting prompts: ", error);
        setPromptLoading(false);
      });
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <section className="flex w-full flex-col gap-4 pb-4 pt-8">
        <h3 className="relative">
          {/* TODO: create Loading component */}
          {promptLoading && "Loading..."}
          {store.allPrompts[store.activePromptIndex]?.prompt}
          <div className="absolute left-[8%] top-0 -z-10 h-full w-5/6 bg-gradient-to-r from-slate-800 via-sky-800 to-slate-800 blur-2xl"></div>
        </h3>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              dispatch({ type: "next prompt" });
            }}
          >
            Next Prompt
          </Button>
          <EditPromptDialog store={store} dispatch={dispatch} />
        </div>
      </section>
      <HorizontalDivider className="self-center" />
      <form className="relative my-4 flex flex-wrap justify-center gap-6">
        <label
          htmlFor="promptResponse"
          className="absolute -top-3 left-4 bg-gradient-to-b from-slate-800/5 via-slate-800/90 to-slate-800 pl-2 pr-1"
        >
          Tell your story...
        </label>
        <textarea
          id="promptResponse"
          name="promptResponse"
          className="h-60 w-full resize-none border border-slate-500 bg-gradient-to-b from-slate-800 to-slate-900 px-2 py-3 outline-none"
        />
        <div className="flex w-full items-center justify-end gap-4">
          <input
            placeholder="Your age at the time"
            id="age"
            name="age"
            className="h-8 w-64 border border-slate-500 bg-transparent pl-2 outline-none"
          ></input>
          <Button>Save</Button>
        </div>
      </form>
    </section>
  );
}
