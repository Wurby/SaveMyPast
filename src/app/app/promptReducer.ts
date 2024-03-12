import { Prompt } from "./getPrompts";

type initPayload = {
  prompts: Prompt[];
  activePromptIndex: number;
};

type nextPromptPayload = {
  activePromptIndex: number;
};

type updatePromptPayload = {
  prompt: string;
};

export type PromptStateAction = {
  type: string;
  payload?: initPayload | nextPromptPayload | updatePromptPayload;
};

export type PromptState = {
  immutablePrompts: Prompt[];
  allPrompts: Prompt[];
  activePromptIndex: number;
};

export const promptReducer = (
  state: PromptState,
  action: PromptStateAction,
) => {
  console.log("action ::", action);
  switch (action.type) {
    case "init": {
      const payload = action.payload as initPayload;
      return {
        immutablePrompts: payload.prompts,
        allPrompts: payload.prompts,
        activePromptIndex: payload?.activePromptIndex,
      };
    }
    case "next prompt": {
      const nextIndex =
        state.activePromptIndex + 1 < state.allPrompts.length
          ? state.activePromptIndex + 1
          : 0;

      return {
        ...state,
        activePromptIndex: nextIndex,
      };
    }
    case "update prompt": {
      const payload = action.payload as updatePromptPayload;
      return {
        ...state,
        allPrompts: state.allPrompts.map((prompt, index) => {
          if (index === state.activePromptIndex) {
            return {
              ...prompt,
              prompt: payload?.prompt,
            };
          }
          return prompt;
        }),
      };
    }
    case "reset": {
      return {
        ...state,
        allPrompts: state.immutablePrompts,
      };
    }
    default: {
      return state;
    }
  }
};
