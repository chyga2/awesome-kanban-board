import {useLocation, useParams} from "react-router-dom";

function CardPage() {
    let {state} = useLocation()

    return (
        <div className="CardPage">
            <h1>{state.title}</h1>
        </div>
    );
}

export default CardPage;
