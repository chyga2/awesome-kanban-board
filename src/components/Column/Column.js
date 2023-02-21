import React, { Component } from "react";
import Card from "../Card/Card";
import './Column.css'

class Column extends Component {
    constructor(props) {
        super(props);
        this.cardField = React.createRef();
    }

    handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    capitalizeFirstLetter(string) {
        return string.replace(string[0], string[0].toUpperCase());
    }

    render() {
        return (
            <div
                
            >
                <h4 className={[this.props.cardHeader, "column__header"].join(" ")}>
                    {this.capitalizeFirstLetter(this.props.name)}
                </h4>
                {this.props.cards.map((card, index, arr) => {
                    return (
                        <Card
                            parent={this.props.name}
                            onCardBlur={this.props.onCardBlur}
                            id={card.id}
                            key={card.id}
                            title={card.title}
                            cardField={
                                arr.length - 1 === index
                                    ? (textArea) => (this.cardField = textArea)
                                    : null
                            }
                        />
                    );
                })}
                <button
                    className={"column__add-card"}
                    onClick={() => {
                        this.props.onClick();
                        setTimeout(() => {
                            this.cardField.focus();
                        }, 0);
                    }}
                >
                    Add a card +
                </button>
            </div>
        );
    }
}

export default Column;
