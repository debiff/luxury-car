import { useEffect } from "react";

/**
 * This Hook can be used for detecting clicks outside the Opened Menu
 */
export const useClickOutside = (ref: any, onClickOutside: () => void) => {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};
