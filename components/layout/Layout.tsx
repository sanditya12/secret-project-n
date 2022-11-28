import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import LoaderPage from "../loadings/LoaderPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { motion } from "framer-motion";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const isProfile = router.pathname.includes("/profiles");
  const [isLoading, setIsLoading] = useState(true);

  console.log(isProfile);
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
    <motion.div className="font-netflix-sans text-white relative overflow-x-clip ">
      {user && <Header />}
      {children}
      {user && <Footer />}
    </motion.div>
  );
};

export default Layout;
