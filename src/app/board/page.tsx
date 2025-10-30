import Header from "@/components/Header";
import BoardFirstRow from "@/components/Board/BoardFirstRow";
import BoardSecondRow from "@/components/Board/BoardSecondRow";

const Board = () => {
  return (
    <>
      <Header title="Board" />
      <BoardFirstRow />
      <BoardSecondRow />
    </>
  );
};

export default Board;
