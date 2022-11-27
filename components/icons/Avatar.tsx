import Router, { useRouter } from "next/router";
import { useUser } from "../../hooks/useUser";

interface Props {
  className?: string;
}

const Avatar = ({ className }: Props) => {
  const { user, setUser } = useUser();
  const router = useRouter();

  return (
    <img
      onClick={() => {
        setUser("");
        router.push("/profiles");
      }}
      className={`cursor-pointer object-cover rounded w-10 h-10`}
      src={`/PLACEHOLDERS/${user.toLowerCase()}.jpeg`}
      alt="Avatar"
    />
  );
};

export default Avatar;
