import "./App.css";

function Memo(props) {
  return (
    <div onClick={() => props.handleEdit(props.memo)}>{props.memo.title}</div>
  );
}

export default Memo;
