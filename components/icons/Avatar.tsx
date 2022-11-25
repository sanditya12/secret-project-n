interface Props {
  className?: string;
}

const Avatar = ({ className }: Props) => {
  return (
    <img
      className={`cursor-pointer object-cover rounded w-10 h-10`}
      src="/PLACEHOLDERS/sha.jpeg"
      alt="Avatar"
    />
  );
};

export default Avatar;
