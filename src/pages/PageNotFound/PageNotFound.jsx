import Main from "../../components/Main/Main";
import useTitle from "../../hooks/useTitle";

const PageNotFound = () => {
  useTitle("404");

  return (
    <Main className="page-not-found__main">
      <p className="page-not-found__error-code">404</p>
      <p className="page-not-found__body">Page coud not be found</p>
    </Main>
  );
};

export default PageNotFound;
