import "./Card.css";

function Card(props) {
    const {title} = props.card;
    return (
        <div className="card_title">
            <p className="card_back">{title}</p>
        </div>
    );
}

export default Card;
