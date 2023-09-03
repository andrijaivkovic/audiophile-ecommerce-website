import { useEffect } from "react";

const useTitle = (title = "") => {
  useEffect(() => {
    if (!title) return;

    document.title = `Audiophile | HiFi Store | ${title}`;

    return () => {
      document.title = "Audiophile | HiFi Store";
    };
  });
};

export default useTitle;
