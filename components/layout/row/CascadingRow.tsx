import Image from "next/image";

interface Props {
  className?: string;
  direction: string;
  images: string[];
}

interface ChildProps {
  img: string;
}

const RowChildren = ({ img }: ChildProps) => {
  return (
    <div className="relative h-52 w-32 drop-shadow-md">
      <Image src={img} className=" object-cover " layout="fill" />
    </div>
  );
};

const CascadingRow = ({ direction, className, images }: Props) => {
  return (
    <div className="flex  drop-shadow-2xl ">
      {images.map((img) => (
        <RowChildren img={img} key={img} />
      ))}
    </div>
  );
};
export default CascadingRow;
