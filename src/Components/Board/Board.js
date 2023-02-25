import React, {useEffect} from "react";
import Card from "../Card/Card";
import AddCard from "../addCard/addCard";
import "./Board.css";
import DropdownButton from "../Button";

function Board(props) {
    return (
        <div className="board">
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
                    : (
                        <DropdownButton
                            buttonText="Select an option"
                            options={props.prevBoardCards.map(el => el.title)}
                            onSelect={(props.moveCard)}
                            id ={(props.id)}
                        />
                    )}
            </div>
        </div>
    );
}

export default Board;
