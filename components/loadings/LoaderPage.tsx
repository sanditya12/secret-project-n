import Logo from "../icons/Logo";
import Loader from "./Loader";

const LoaderPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-dark">
      <div>
        <Logo className="mb-3" />
        <Loader variant="indeterminate" />
      </div>
    </div>
  );
};
export default LoaderPage;
