"use client";
import { useAuth } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useEffect } from "react";
import { firebaseConfig } from "@/lib/firebase";
import { Button } from "@/components/Button";
import { HorizontalDivider, VerticalDivider } from "@/components/Divider";

// Initialize Firebase app with config
initializeApp(firebaseConfig);

export default function App() {
  const { getToken } = useAuth();

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

  return (
    <section className="flex flex-col gap-4">
      <section className="flex w-full flex-col gap-4 p-4">
        <h3 className="relative">
          This is an example prompt, I want to make it long enough to be
          correctly portrayed, but not so long there&#39;s never a prompt like
          this.
          <div className="absolute left-[8%] top-0 -z-10 h-full w-5/6 bg-gradient-to-r from-slate-800 via-sky-800 to-slate-800 blur-2xl"></div>
        </h3>
        <div className="flex gap-2">
          <Button>New</Button>
          <Button>Edit</Button>
        </div>
        <HorizontalDivider className="self-center" />
      </section>
      <form className="relative flex flex-wrap justify-center gap-4 pt-3">
        <label
          htmlFor="promptResponse"
          className="absolute left-4 top-0  bg-gradient-to-b from-slate-800/5 via-slate-800/90 to-slate-800 pl-2 pr-1"
        >
          Tell your story...
        </label>
        <textarea
          id="promptResponse"
          name="promptResponse"
          className="h-48 w-full resize-none border border-slate-500 bg-gradient-to-b from-slate-800 to-slate-900 p-2 outline-none"
        />
      </form>
    </section>
  );
}
