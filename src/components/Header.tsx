"use client";

type HeaderProps = {
  title: string;
};

const Header = ({title} : HeaderProps) => {
    return(
        // <div className="flex w-full bg-mocktrial-blue border-t-8 border-yellow-500 justify-center items-center">
        //     <p className="text-center text-black font-bold text-2xl mb-0 p-1">{title}</p>
        // </div>
        <div className="flex w-full h-full pt-2 pb-2 mb-2 bg-mocktrial-yellow">
            <div className="flex w-full p-4 justify-center items-center bg-mocktrial-blue">
                <p className="text-center text-5xl p-1 font-bold text-white">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default Header;