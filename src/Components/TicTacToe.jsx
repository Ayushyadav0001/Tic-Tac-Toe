import "./tictactoe.css";
import UseTictactoe from "../Hooks/Usehooks";
function TicTacToe() {
  const { board, handleClick, statusMessage, resetGame } = UseTictactoe();
  return (
    <>
      <div className="game mx-auto py-20 text-center">
        <div className="grid grid-cols-3 justify-center ">
          {board.map((i, index) => (
            <button
              className="h-28 w-32 cursor-pointer rounded-md border-2 border-gray-200 text-4xl leading-none transition-colors duration-300 font-semibold font-sans  hover:bg-gray-300"
              key={index}
              onClick={() => handleClick(index)}
              disabled={i !== null}
            >
              {i}
            </button>
          ))}
        </div>
        <div className="mt-20 flex justify-between text-lg">
          <div className="text-xl font-semibold">{statusMessage()}</div>
          <button
            className="w-32 rounded-md border border-gray-300 font-semibold hover:bg-gray-300 hover:text-black"
            onClick={resetGame}
          >
            Reset game
          </button>
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
