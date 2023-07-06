import "./App.css";
import Memo from "./Memo";

function MemoList(props) {
  return (
    <div>
      <ul>
        {props.memos.map((memo) => (
          <li key={memo.id}>
            <Memo memo={memo} handleEdit={props.handleEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemoList;
