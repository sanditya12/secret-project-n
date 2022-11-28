import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import LoaderPage from "../loadings/LoaderPage";

interface Props {
  children?: ReactNode;
}

const ProfileShells = ({ children }: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const isProfile = router.pathname.includes("/profile");
  useEffect(() => {
    !user && isProfile && router.push("/profile");
  });

  return !user ? (
    isProfile ? (
      <LoaderPage />
    ) : (
      <div>{children}</div>
    )
  ) : (
    <div>{children}</div>
  );
};

export default ProfileShells;
