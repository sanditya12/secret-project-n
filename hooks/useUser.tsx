import { useRecoilState } from "recoil";
import { userState } from "../atoms/user.atom";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  //   const getUserFromLocal = () => {
  //     const value = localStorage.getItem("user");
  //     if (value !== "" && value !== null) setUser(value);
  //   };

  //   const switchAccount = () => {
  //     localStorage.removeItem("user");
  //     setUser("");
  //   };

  return { user, setUser };
};
