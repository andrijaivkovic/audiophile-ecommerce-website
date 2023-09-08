import useTitle from "../../hooks/useTitle";

import Main from "../../components/Main/Main";
import Button from "../../components/Button/Button";

const PageNotFound = () => {
  useTitle("404");

  return (
    <Main className="page-not-found__main">
      <p className="page-not-found__error-code">404</p>
      <p className="page-not-found__body">Page coud not be found</p>
      <Button
        linkTo={"/home"}
        kind="right-arrow"
        buttonText={"Go to Home page"}
      />
    </Main>
  );
};

export default PageNotFound;
