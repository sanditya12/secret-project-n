import Link from "next/link";

interface Props {
  className?: string;
}

const HeaderLinks = ({ className }: Props) => {
  return (
    <ul
      className={`${className} flex text-light-grey align-middle space-x-5 text-xs`}
    >
      <li className="hover:text-grey focus:text-white cursor-pointer">
        <Link href="/">
          <h3>Home</h3>
        </Link>
      </li>
      <li className="hover:text-grey focus:text-white  cursor-pointer">
        <Link href="/">
          <h3>Time capsule</h3>
        </Link>
      </li>
      <li className="hover:text-grey focus:text-white cursor-pointer">
        <Link href="/">
          <h3>Nostalgia</h3>
        </Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
