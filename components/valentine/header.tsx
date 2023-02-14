function HeaderVal() {
  return (
    <header
      className={`bg-valentine-background px-[4%] py-8 max-h-14  w-full top-0 z-50 flex justify-between`}
    >
      <div className="flex items-center space-x-6">
        <div className={`w-[75px] px-2`}>
          <img
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            src="/images/logoshalamanya-v.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <h2 className="text-2xl font-extrabold ">
          Our very first Valentine together, Yay!
        </h2>
      </div>
    </header>
  );
}

export default HeaderVal;
