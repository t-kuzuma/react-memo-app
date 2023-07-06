import "./App.css";

function MemoEditor(props) {
  const selectedMemo = props.memos.find((memo) => memo.isEdit === true);

  if (!selectedMemo) {
    return null;
  }

  return (
    <div className="MemoEditor">
      <form onSubmit={(e) => props.handleSubmit(selectedMemo, e)}>
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          value={selectedMemo.title}
          onChange={(e) => props.handleChange("title", selectedMemo, e)}
        />
        <label htmlFor="content">内容</label>
        <textarea
          id="content"
          value={selectedMemo.content}
          onChange={(e) => props.handleChange("content", selectedMemo, e)}
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
