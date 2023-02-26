import React from "react";
import Card from "../Card/Card";
import AddCard from "../addCard/addCard";
import "./Board.css";
import DropdownButton from "../DropdownButton";
import {Link} from "react-router-dom";

function Board(props) {
    return (
        <div className="b">
            <div className="board">
                <div className="board_cards custom-scroll">
                    <div className="board_header">
                        <p className="board_header_title ">
                            {props.board?.title}
                        </p>
                    </div>
                    {props.board?.cards?.map((item) => (
                        <Link className="a"
                              to={`/${item.id}`}
                              key={item.id}
                              state={{item: item}}
                    >
                            <Card
                                key={item.id}
                                card={item}
                                boardId={props.board.id}
                            />
                        </Link>
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
                                buttonText="+ Add card"
                                options={props.prevBoardCards.map(el => el.title)}
                                onSelect={(props.moveCard)}
                                id={(props.id)}
                            />
                        )}
                </div>
            </div>
        </div>
    );
}

export default Board;
