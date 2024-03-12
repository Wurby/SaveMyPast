import { Dispatch, useState } from "react";
import { PromptState, PromptStateAction } from "./promptReducer";
import { Button } from "@/components/Button";

const EditPromptDialog = ({
  store,
  dispatch,
}: {
  store: PromptState;
  dispatch: Dispatch<PromptStateAction>;
}) => {
  const [open, setOpen] = useState(false);
  const [updatedPrompt, setUpdatedPrompt] = useState<string>("");

  const handleSaveClick = () => {
    if (updatedPrompt) {
      setOpen(false);
      const action = {
        type: "update prompt",
        payload: {
          prompt: updatedPrompt,
        },
      };
      dispatch(action);
      setUpdatedPrompt("");
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Edit</Button>
      {open && (
        <section className="absolute left-0 top-0 z-10 flex h-screen w-full items-center justify-center ">
          <div
            className="absolute left-0 top-0 h-screen w-full bg-black/50"
            onClick={() => setOpen(false)}
          ></div>
          <div className=" z-20 flex max-w-xl flex-wrap gap-4 rounded-sm border border-slate-500 bg-gradient-to-b from-slate-800 to-slate-900 p-4">
            <div className="flex w-full flex-col gap-4">
              <h3>Edit Prompt</h3>
              <textarea
                placeholder={store.allPrompts[store.activePromptIndex].prompt}
                id="editPrompt"
                name="editPrompt"
                value={updatedPrompt}
                onChange={(e) => setUpdatedPrompt(e.target.value)}
                className="w-full resize-none border border-slate-500 bg-gradient-to-b from-slate-800 to-slate-900 px-2 py-3 outline-none"
              ></textarea>
            </div>
            <div className="flex w-full justify-end gap-4">
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                onClick={() => {
                  dispatch({
                    type: "reset",
                  });
                  setOpen(false);
                }}
              >
                Reset
              </Button>
              <Button onClick={handleSaveClick}>Save</Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default EditPromptDialog;
