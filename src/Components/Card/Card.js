import "./Card.css";

function Card(props) {
  const { id, title } = props.card;
  return (
  <div className="card_title">
    {title}
  </div>
   );
}

export default Card;
