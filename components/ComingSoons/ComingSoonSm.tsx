interface Props {
  className?: string;
}

const ComingSoonSm = ({ className }: Props) => {
  return (
    <div
      className={` px-1 text-[8px]  text-center rounded-full bg-red text-white font-bold ${className}`}
    >
      coming soon
    </div>
  );
};
export default ComingSoonSm;
