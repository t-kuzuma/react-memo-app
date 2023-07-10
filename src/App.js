import { useEffect } from "react";
import "./App.css";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";
import useMemos from "./useMemos";

export default function App() {
  const { memos, handleNew, handleEdit, handleSubmit, handleDelete } =
    useMemos();

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  return (
    <div className="App">
      <div className="MemoList">
        <button onClick={handleNew}>+</button>
        <MemoList memos={memos} handleEdit={handleEdit} />
      </div>
      <MemoEditor
        memos={memos}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
