interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <img
        width={100}
        height={100}
        className="cursor-pointer object-contain"
        src="/images/logoshalamanya_red.png"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
