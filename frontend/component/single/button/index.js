import "./button.css";

export default function Button({ children, type, onClickEvent, href }) {
  return (
    <div className="button-comp" type={type} onClick={onClickEvent}>
      {children}
    </div>
  );
}
