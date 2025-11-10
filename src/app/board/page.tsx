import Header from "@/components/Header";
import Board1 from "@/components/Board/Board";
import Demo from "@/components/Board/Demo";

const Board = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Board" />
      <Board1 />
      <Demo />
    </div>
  );
};

export default Board;
