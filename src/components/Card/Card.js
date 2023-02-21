import React, { Component } from "react";

class Card extends Component {

    

        render() {
        let card = { id: this.props.id, title: this.props.title };

        return (
            <div
                className="card"
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
