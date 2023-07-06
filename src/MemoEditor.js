import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function MemoEditor(props) {
  const selectedMemo = props.memos.find((memo) => memo.isEdit === true);
  const [editingMemo, setEditingMemo] = useState(null);

  useEffect(() => {
    if (selectedMemo) {
      setEditingMemo({
        id: selectedMemo.id,
        title: selectedMemo.title,
        content: selectedMemo.content,
      });
    } else {
      setEditingMemo(null);
    }
  }, [selectedMemo]);

  const handleChange = (e) => {
    setEditingMemo({
      ...editingMemo,
      [e.target.id]: e.target.value,
    });
  };

  if (editingMemo === null) {
    return null;
  }

  return (
    <div className="MemoEditor">
      <form onSubmit={(e) => props.handleSubmit(editingMemo, e)}>
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          value={editingMemo.title}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="content">内容</label>
        <textarea
          id="content"
          value={editingMemo.content}
          onChange={(e) => handleChange(e)}
        />
        <div className="button-container">
          <button>編集</button>
          <button onClick={(e) => props.handleDelete(selectedMemo, e)}>
            削除
          </button>
        </div>
      </form>
    </div>
  );
}

export default MemoEditor;
