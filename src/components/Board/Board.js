import React, { Component } from "react";
import Column from "../Column/Column";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Board.css"

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backlog: [
                { id: 1, title: "Login page - performance issues" },
                { id: 2, title: "Spring bugfix" },
            ],
            ready: [
                { id: 3, title: "Shop page - performance issues" },
                { id: 4, title: "Checkout bugfix" },
                { id: 5, title: "Shop bug1"},
                { id: 6, title: "Shop bug2"},
                { id: 7, title: "Shop bug3"},
                { id: 8, title: "Shop bug4"},
                { id: 9, title: "Shop bug5"},
                { id: 10, title: "Shop bug6"},
                { id: 11, title: "Shop page - performance issues"},
            ],
            "in progress": [
                { id: 12, title: "User page - performance issues" },
                { id: 13, title: "Auth bugfix" },
            ],
            finished: [
                { id: 14, title: "Main page - performance issues" },
                { id: 15, title: "Main page bugfix" },
            ],
            columns: ["backlog", "ready", "in progress", "finished"],
        };
    }

    onClick = (type) => {
        const newCard = {};
        newCard.id = new Date().getTime();
        this.setState({ [type]: this.state[type].concat(newCard) });
    };

    onCardBlur = (event, card, parent) => {
        let idToReplace;
        card.title = event.target.value;
        if (!card.title || card.title === "") {
            this.setState({ [parent]: this.state[parent].pop() });
        }

        this.state[parent].forEach((item, index) => {
            if (item.id === card.id) {
                idToReplace = index;
            }
        });

        const cloneState = Object.assign(this.state[parent]);
        cloneState[idToReplace] = card;

        this.setState({ [parent]: cloneState });
    };

    onHandleDrop = (e, cardHeader) => {
        e.preventDefault();
        e.stopPropagation();
        const data = JSON.parse(e.dataTransfer.getData("text"));
        console.log("dropped", data, cardHeader);
        if (data.previousParent !== cardHeader) {
            this.setState({
                [data.previousParent]: this.state[data.previousParent].filter(
                    (item) => item.id !== data.id
                ),
            });
            this.setState({ [cardHeader]: this.state[cardHeader].concat(data) });
        }
    };

    componentDidMount() {
        this.localState = JSON.parse(localStorage.getItem("state"));
        this.setState({ ...this.localState });
    }

    componentDidUpdate() {
        const stringState = JSON.stringify(this.state);
        localStorage.setItem("state", stringState);
    }

    render() {
        localStorage.clear()
        return (
            <div className="board">
                <Header/>
                <Column
                    name={this.state.columns[0]}
                    onHandleDrop={this.onHandleDrop}
                    cards={this.state.backlog}
                    onClick={() => this.onClick(this.state.order[0])}
                    onCardBlur={this.onCardBlur}
                ></Column>
                <Column
                    name={this.state.columns[1]}
                    onHandleDrop={this.onHandleDrop}
                    cards={this.state.ready}
                    onClick={() => this.onClick(this.state.order[1])}
                    onCardBlur={this.onCardBlur}
                ></Column>
                <Column
                    name={this.state.columns[2]}
                    onHandleDrop={this.onHandleDrop}
                    cards={this.state["in progress"]}
                    onClick={() => this.onClick(this.state.order[2])}
                    onCardBlur={this.onCardBlur}
                ></Column>
                <Column
                    name={this.state.columns[3]}
                    onHandleDrop={this.onHandleDrop}
                    cards={this.state.finished}
                    onClick={() => this.onClick(this.state.order[3])}
                    onCardBlur={this.onCardBlur}
                ></Column>
                <Footer backlog={this.state.backlog} finished={this.state.finished} />
            </div>
        );
    }
}

export default Board;
