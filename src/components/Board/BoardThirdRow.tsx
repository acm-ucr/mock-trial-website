import Image from "next/image";
import AbinayaHariharan from "@/public/board/abinaya_hariharan.webp";
import SriVidyaCharepalli from "@/public/board/sri_vidya_charepalli.webp"

const BoardThirdRow = () => {
  return (
    <div className="flex items-center justify-center gap-16 p-20">
        <div className="flex relative w-80 h-80 rounded-4xl bg-gradient-to-b from-mocktrial-yellow to-amber-100 mx-14" />
        <div className="absolute w-104 mb-58 mr-95" >
            <Image src = {AbinayaHariharan} alt = "Abinaya Hariharan" className="w-full h-full object-cover" />
        </div>
        <div className="flex relative w-80 h-80 rounded-4xl bg-gradient-to-b from-mocktrial-yellow to-amber-100" />
        <div className="absolute w-75 mb-16 ml-120" >
          <Image src = {SriVidyaCharepalli} alt = "Sri Vidya Charepalli" className="w-full h-full object-cover" />
        </div>
        {/*
        <div className="flex flex-row text-mocktrial-darkblue relative text-4xl items-center font-bold inset-x-0">
            <p>Abinaya Hariharan</p>
            <p>Sri Vidya Charepalli</p>
        </div>
        <div className="text-mocktrial-darkblue relative text-2xl font-semibold">
            <p>Co-Fundraising Chair</p>
            <p>Co-Fundraising Chair</p>
        </div>
        */}

    </div>
  )
};

export default BoardThirdRow