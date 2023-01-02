import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import LoaderPage from "../loadings/LoaderPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { signIn, useSession } from "next-auth/react";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { data: session } = useSession();
  const { user } = useUser();
  const router = useRouter();
  const isProfile = router.pathname.includes("/profiles");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    !user && !isProfile && router.push("/profiles");
    isProfile && setIsLoading(false);
    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <LoaderPage />
  ) : (
    <>
      {session ? (
        <div className="font-netflix-sans text-white relative overflow-x-clip ">
          {user && <Header />}
          {children}
          {user && <Footer />}
        </div>
      ) : (
        <div className="h-screen bg-dark-grey text-white flex flex-col p-10 justify-center space-y-4 items-center">
          <p>You are not permitted to see this page.</p>
          <button className="p-4 w-32 bg-red" onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      )}
    </>
  );
};

export default Layout;
