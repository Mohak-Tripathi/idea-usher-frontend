// Grid.js
import React, { useState, useEffect } from "react";
import "./Grid.css";

const Grid = () => {
  const [selectedCell, setSelectedCell] = useState(null);

  const [useChessBoard, setChessBoard] = useState([]);

  const toggleHighlight = (cell) => {
    // console.log(cell);
    setSelectedCell(cell);

  };


  useEffect(() => {
    let chessBoard = [];

    let counter = 0;
    for (let i = 0; i < 8; i++) { 
      for (let j = 0; j < 8; j++) {
        chessBoard.push(counter);
        counter++;
      }
//did counter++ here to get alternate black and white pattern for each row in chessboard
      counter++;
    }
    // console.log(chessBoard);
    setChessBoard(chessBoard);
  }, []);

  return (
    <>
    <h1 className="heading">IdeaUsher chessBoard Task</h1>
    {/* //to center the chessboard */}
      <div className="grid-outline">
        <div className="grid-container">
          {useChessBoard.map((box) => {
            return (
              <div
                key={box}
                className={`box ${box % 2 === 0 ? "box-black" : "box-white"}`}
                style={{ backgroundColor: selectedCell === box ? "red" : "" }}
                onClick={() => toggleHighlight(box)}
              >
                {" "}
              </div>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default Grid;
