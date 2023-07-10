import { useState } from "react";

export default function useMemos() {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("memos")) || []
  );

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

  return { memos, handleNew, handleEdit, handleSubmit, handleDelete };
}
