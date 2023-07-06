import { useState } from "react";
import "./App.css";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";
import { useEffect } from "react";

function App() {
  const [memos, setMemos] = useState([
    {
      id: 1,
      title: "メモ1",
      content: "メモ1の内容",
      isEdit: false,
    },
    {
      id: 2,
      title: "メモ2",
      content: "メモ2の内容",
      isEdit: false,
    },
  ]);

  function handleNew() {
    const validMemos = memos
      .filter((memo) => memo.title.trim() !== "")
      .map((memo) => ({
        ...memo,
        isEdit: false,
      }));

    const newMemo = {
      id: Date.now(),
      title: "",
      content: "",
      isEdit: true,
    };

    const newMemos = validMemos.concat(newMemo);
    setMemos(newMemos);
  }

  function handleEdit(selectedMemo) {
    const validMemos = memos
      .filter((memo) => memo.title.trim() !== "")
      .map((memo) => ({
        ...memo,
        isEdit: false,
      }));

    const updatedMemo = {
      ...selectedMemo,
      isEdit: true,
    };

    const updatedMemos = validMemos.map((memo) =>
      memo.id === selectedMemo.id ? updatedMemo : memo
    );
    setMemos(updatedMemos);
  }

  function handleSubmit(selectedMemo, e) {
    e.preventDefault();
    if (e.target.elements.title.value.trim() === "") {
      return;
    }
    const updatedMemos = memos.map((memo) =>
      memo.id === selectedMemo.id
        ? {
            ...selectedMemo,
            title: e.target.elements.title.value,
            content: e.target.elements.content.value,
            isEdit: false,
          }
        : memo
    );

    setMemos(updatedMemos);
  }

  function handleDelete(selectedMemo, e) {
    e.preventDefault();
    const updatedMemos = memos.filter((memo) => memo.id !== selectedMemo.id);
    setMemos(updatedMemos);
  }

  useEffect(() => {
    console.log(memos);
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

export default App;
