import React from "react";

import Card from "../Card/Card";
import AddCard from "../addCard/addCard";

import "./Board.css";

function Board(props) {
  return (
    <div className="board">
{console.log(props.board.id)}

      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id
            }
          />
        ))}
       {props.board.id === 1 ?
       <AddCard
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
        :
        <button>хуй</button>
      } 
        
        </div>
    </div>
  );
}

export default Board;
