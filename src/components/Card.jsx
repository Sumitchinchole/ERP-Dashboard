import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-data">
        <span className="card-text">{props.CardText}</span>
        <span className="card-num" style={props.Styled}>{props.CardNum}</span>
      </div>
      <div className="card-data1">
        <span className="card-text1">{props.CardText1}</span>
        <span className="card-num1" style={props.Styled}>
          {props.CardNum1}
        </span>
      </div>
    </div>
  );
}
