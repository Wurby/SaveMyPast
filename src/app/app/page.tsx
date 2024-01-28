"use client";
import { useAuth } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useEffect } from "react";
import { firebaseConfig } from "@/lib/firebase";

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
    <>
      <div>app</div>
    </>
  );
}
