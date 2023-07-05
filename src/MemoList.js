import "./App.css";
import Memo from "./Memo";

function MemoList(props) {
  return (
    <div>
      <ul>
        {props.memos.map((memo) => (
          <li>
            <Memo title={memo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemoList;
