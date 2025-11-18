"use client";
import BoardCard from "@/components/board/BoardCard";
import { boardInfo } from "@/data/BoardInfo";

const Board = () => {
  return (
    <div className="mt-20 mr-20 ml-20 grid grid-cols-1 justify-items-center text-center lg:grid-cols-2">
      {boardInfo.map((CARD, index) => (
        <BoardCard
          key={index}
          name={CARD.name}
          title={CARD.title}
          image={CARD.image}
        />
      ))}
    </div>
  );
};
export default Board;
