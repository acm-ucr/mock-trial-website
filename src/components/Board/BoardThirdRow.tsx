import Image from "next/image";
import AbinayaHariharan from "@/public/board/abinaya_hariharan.webp";
import SriVidyaCharepalli from "@/public/board/sri_vidya_charepalli.webp"

const BoardThirdRow = () => {
  return (
    <div className="grid grid-cols-2 ">
        <div className="flex relative w-[35vh] h-[35vh] rounded-4xl bg-gradient-to-b from-mocktrial-yellow to-amber-100" />
        <div className="flex relative w-[35vh] h-[35vh] rounded-4xl bg-gradient-to-b from-mocktrial-yellow to-amber-100" />
        <Image src = {AbinayaHariharan} alt = "Abinaya Hariharan" className="w-[50vh]" />
        <Image src = {SriVidyaCharepalli} alt = "Sri Vidya Charepalli" />
        <div className="text-mocktrial-darkblue relative text-4xl items-center font-bold">
            <p>Abinaya Hariharan</p>
            <p>Sri Vidya Charepalli</p>
        </div>
        <div className="text-mocktrial-darkblue relative text-2xl font-semibold">
            <p>Co-Fundraising Chair</p>
            <p>Co-Fundraising Chair</p>
        </div>

    </div>
  )
};

export default BoardThirdRow