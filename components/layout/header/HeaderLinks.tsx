import Link from "next/link";
import ComingSoonSm from "../../ComingSoons/ComingSoonSm";

interface Props {
  className?: string;
}

const HeaderLinks = ({ className }: Props) => {
  return (
    <ul
      className={`${className} flex text-light-grey align-middle space-x-5 text-xs`}
    >
      <li className="hover:text-grey focus:text-white cursor-pointer">
        <Link href="#memories">
          <h3>Memories</h3>
        </Link>
      </li>
      <li className="hover:text-grey focus:text-white  cursor-pointer relative">
        <ComingSoonSm className="absolute -right-4 -top-1" />
        <Link href="/">
          <h3>Time capsule</h3>
        </Link>
      </li>
      <li className="hover:text-grey focus:text-white cursor-pointer relative">
        <ComingSoonSm className="absolute -right-4 -top-1" />
        <Link href="/">
          <h3>Nostalgia</h3>
        </Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
