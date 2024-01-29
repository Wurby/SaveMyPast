import Link from "next/link";
import { HorizontalDivider } from "../components/Divider";

export default function Home() {
  return (
    <>
      <section className="relative flex w-full flex-wrap justify-center gap-2">
        <div className="flex w-full items-center justify-center gap-2">
          <span className="text-sm font-light">Welcome to</span>
          <h1 className="self-center text-center">SaveMyPast</h1>
        </div>
        <HorizontalDivider />
        <h4 className="w-full">your new personal history assistant</h4>
        <div className="left-1/6 absolute top-0 z-[-1] h-full w-3/4 bg-gradient-to-r from-slate-800 via-sky-900 to-slate-800 blur-2xl"></div>
      </section>
      <section className="flex w-full flex-wrap justify-center gap-4 py-8">
        <div className="flex flex-col gap-2 border border-slate-500 px-8 py-4 md:w-5/12">
          <h3>A place to save your story</h3>
          <p>
            SaveMyPast has been designed with one mission in mind. To help you
            save your memories as effortlessly as possible. When you save a
            memory, you can be sure that you and you alone will be able to
            access it.
          </p>
        </div>
        <div className="flex flex-col gap-2 border border-slate-500 px-8 py-4 md:w-5/12">
          <h3>Find inspiration using our custom writing prompts</h3>
          <p>
            Our artificial intelligence powered prompter will analyze your story
            as you tell it and prompt you with intelligent follow up questions
            to ensure every detail you want to remember is saved. All it takes
            to start is to begin with a memory you want to save, or answer one
            of our pre-made prompts.
          </p>
        </div>
        <h5 className="w-full py-12">
          Get started today by <Link href="/app">Creating your account</Link>
        </h5>
      </section>
    </>
  );
}
