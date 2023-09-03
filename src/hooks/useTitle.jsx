import React from "react";

const useTitle = (title = "") => {
  useEffect(() => {
    document.title = `Audiophile | HiFi Store | ${title}`;

    return () => {
      document.title = "Audiophile | HiFi Store";
    };
  });
};

export default useTitle;
