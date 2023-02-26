import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import "./CardPage.css"

function CardPage() {
    let {state} = useLocation()
    const [description, setDescription] = useState(state.item.description || "This task has no description");

    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem("card", JSON.stringify(state.item));
    }, [state.item, description]);

    console.log(state.item)
    return (
        <div className="CardPage">
            <div className="description-area">
            <h1>{state.item.title}</h1>
                <textarea value={description} onChange={handleChange}></textarea>
            </div>
        </div>
    );
}

export default CardPage;
