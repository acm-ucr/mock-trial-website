import Header from "@/components/Header";
import BoardFirstRow from "@/components/Board/BoardFirstRow";
import BoardSecondRow from "@/components/Board/BoardSecondRow";
import BoardThirdRow from "@/components/Board/BoardThirdRow";

const Board = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Board" />
      <BoardFirstRow />
      <BoardSecondRow />
      <BoardThirdRow />
    </div>
  );
};

export default Board;
