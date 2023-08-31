import { useEffect } from "react";

import Main from "../../components/Main/Main";

const PageNotFound = () => {
  useEffect(() => {
    document.title = `Audiophile | HiFi Store | 404`;

    return () => {
      document.title = "Audiophile | HiFi Store";
    };
  });

  return (
    <Main className="page-not-found__main">
      <p className="page-not-found__error-code">404</p>
      <p className="page-not-found__body">Page coud not be found</p>
    </Main>
  );
};

export default PageNotFound;
