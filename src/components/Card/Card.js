import React, { Component } from "react";

class Card extends Component {

    handleKeyDown(e) {
        e.target.style.height = "inherit";
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    handleDragStart(e, card, parent) {
        card.previousParent = parent;
        e.dataTransfer.setData("text/plain", JSON.stringify(card));
    }

    render() {
        let card = { id: this.props.id, title: this.props.title };

        return (
            <div
                className="card"
                draggable="true"
                onDragStart={(e) => this.handleDragStart(e, card, this.props.parent)}
            >
                <textarea
                    draggable="false"
                    ref={this.props.cardField}
                    className="card__field"
                    placeholder={"Add a new title..."}
                    defaultValue={this.props.title ? this.props.title : null}
                    value={this.props.value}
                    onKeyUp={this.handleKeyDown}
                    onBlur={(event) => {
                        this.props.onCardBlur(event, card, this.props.parent);
                    }}
                />
            </div>
        );
    }
}

export default Card;
