import Header from "@/components/Header";
import BoardSecondRow from "@/components/Board/BoardSecondRow";
import BoardThirdRow from "@/components/Board/BoardThirdRow";

const Board = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Board" />
      <BoardSecondRow />
      <BoardThirdRow />
    </div>
  );
};

export default Board;
