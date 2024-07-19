type KeyState = {
  [key: string]: boolean;
};

export const keyState: KeyState = {};

export function handleUserInput() {
  function handleKeys(e: KeyboardEvent) {
    keyState[e.key.toLowerCase()] = e.type === "keydown";
  }

  window.addEventListener("keydown", handleKeys);
  window.addEventListener("keyup", handleKeys);

  return () => {
    window.removeEventListener("keydown", handleKeys);
    window.removeEventListener("keyup", handleKeys);
  };
}
