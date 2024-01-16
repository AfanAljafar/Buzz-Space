import "./card.css";

export default function Card({ children }) {
  return (
    <div className="card-frame">
      <div className="card-content">{children}</div>
    </div>
  );
}
