"use client";
import BoardCard from "./BoardCard";
import { boardInfo } from "@/data/boardinfo";

const Board = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center text-center md:grid-cols-2">
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
