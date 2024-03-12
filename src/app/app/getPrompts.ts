import { db } from "@/lib/firebase";
import { collection, query, getDocs } from "firebase/firestore";

export const getPrompts = async () => {
  const q = query(collection(db, "prompts"));
  const querySnapshot = await getDocs(q);
  const prompts = [] as Prompt[];

  querySnapshot.forEach((doc) => {
    const prompt = {
      id: doc.id,
      ...(doc.data() as {
        age: number;
        response: string;
        responseDate: string;
        prompt: string;
      }),
    };
    prompts.push(prompt);
  });
  return prompts;
};

export type Prompt = {
  id: string;
  age: number;
  response: string;
  responseDate: string;
  prompt: string;
};
