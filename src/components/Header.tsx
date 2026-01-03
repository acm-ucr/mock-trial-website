"use client";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="bg-mocktrial-yellow pt-2 pb-2">
      <div className="bg-mocktrial-blue p-4">
        <p className="p-1 text-center text-2xl font-bold text-white md:text-4xl lg:text-5xl">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Header;
