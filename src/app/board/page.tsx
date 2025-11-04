import Header from "@/components/Header";
import BoardFirstRow from "@/components/Board/BoardFirstRow";
import BoardSecondRow from "@/components/Board/BoardSecondRow";
import BoardThirdRow from "@/components/Board/BoardThirdRow";
import BoardFourthRow from "@/components/Board/BoardFourthRow";

const Board = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Board" />
      <BoardFirstRow />
      <BoardSecondRow />
      <BoardThirdRow />
      <BoardFourthRow />
    </div>
  );
};

export default Board;
