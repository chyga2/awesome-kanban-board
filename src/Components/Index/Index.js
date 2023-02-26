import React, {useEffect, useState} from "react";
import Board from "../Board/Board";
import "./Index.css";
import Footer from "../Footer/Footer";

function Index() {
    const [boards, setBoards] = useState(
        JSON.parse(localStorage.getItem("kanban")) || [{
            id: 1,
            title: 'Backlog',
            cards: [{id: 1, title: "Login page - performance issues", description: "This task has no description"},
                {id: 2, title: "Spring bugfix", description: "This task has no description"},]
        }, {
            id: 2,
            title: 'Ready',
            cards: [{id: 3, title: "Shop page - performance issues", description: "This task has no description"},
                {id: 4, title: "Checkout bugfix", description: "This task has no description"},
                {id: 5, title: "Shop bug1", description: "This task has no description"},
                {id: 6, title: "Shop bug2", description: "This task has no description"},
                {id: 7, title: "Shop bug3", description: "This task has no description"},
                {id: 8, title: "Shop bug4", description: "This task has no description"},
                {id: 9, title: "Shop bug5", description: "This task has no description"},
                {id: 10, title: "Shop bug6", description: "This task has no description"},
                {id: 11, title: "Shop page - performance issues", description: "This task has no description"}]
        },
            {
                id: 3,
                title: 'In Progress',
                cards: [{id: 12, title: "User page - performance issues", description: "This task has no description"},
                    {id: 13, title: "Auth bugfix", description: "This task has no description"}]
            },
            {
                id: 4,
                title: 'Finished',
                cards: [{id: 14, title: "Main page - performance issues", description: "This task has no description"},
                    {id: 15, title: "Main page bugfix", description: "This task has no description"},]
            },
        ]
    );

    const addCardHandler = (id, title) => {
        const index = boards.findIndex((item) => item.id === id);
        if (index < 0) return;

        const tempBoards = [...boards];
        tempBoards[index].cards.push({
            id: Date.now(),
            title,
        });
        setBoards(tempBoards);
    };

    const moveCardHandler = (card, id) => {
        const move = () => {
        const tempBoards = [...boards];
        const ref = tempBoards[id-2]?.cards
        tempBoards[id-1].cards.push(ref.find(n => n.title === card))
        const index = ref.findIndex(n => n.title === card);

        if (index !== -1) {
            ref.splice(index, 1);
        }
        return tempBoards
    }
        setBoards(move)
    }

    useEffect(() => {
        localStorage.setItem("kanban", JSON.stringify(boards));
    }, [boards]);
    return (
        <div className="container">
            <div className="app">
                <div className="app_boards_container">
                    <div className="app_boards">
                        {boards.map((item) => (
                            <Board
                                id={item.id}
                                key={item.id}
                                board={item}
                                addCard={addCardHandler}
                                moveCard={moveCardHandler}
                                prevBoardCards={boards[item.id - 2]?.cards}
                            />
                        ))}
                    </div>
                    <Footer
                        active={boards[0].cards.length}
                        finished={boards[3].cards.length}
                    />
                </div>
            </div>
         </div>
    );
}

export default Index;
