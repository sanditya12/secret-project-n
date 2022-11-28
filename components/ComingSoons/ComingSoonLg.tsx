interface Props {
  className?: string;
}

const ComingSoonLg = ({ className }: Props) => {
  return (
    <div
      className={` px-3 py-2 text-md text-center rounded-full bg-red text-white font-bold ${className}`}
    >
      COMING SOON
    </div>
  );
};
export default ComingSoonLg;
