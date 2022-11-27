import { log } from "console";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";

interface Props {
  className?: string;
  username: string;
  avatar: string;
}

const Profile = ({ className, username, avatar }: Props) => {
  const { user, setUser } = useUser();
  const router = useRouter();

  const handleClick = () => {
    setUser(username);
  };

  //   useEffect(() => {
  //     localStorage.setItem("user", username);
  //   }, [user]);

  return (
    <div className={`${className} text-center group pb-12`}>
      <Link href="/">
        <img
          onClick={handleClick}
          className={`cursor-pointer object-cover rounded h-32 w-32 group-hover:border-solid group-hover:border-white group-hover:border-2`}
          src={avatar}
          alt={username}
        />
      </Link>
      <Link href="/">
        <div className="mt-4 onClick={handleClick}">
          <h2 className={`text-light-grey group-hover:text-white`}>
            {username}
          </h2>
        </div>
      </Link>
    </div>
  );
};
export default Profile;
