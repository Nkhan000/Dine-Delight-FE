import { useEffect, useRef } from "react";

export function useOutsideClick(functionOnClick, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.classList.contains("no-outside-click")
      )
        functionOnClick();
    }

    //setting TRUE means listening to the event while capturing phase but not while bubling phase (as the event moves down the DOM tree)

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [functionOnClick, listenCapturing]);

  return ref;
}
