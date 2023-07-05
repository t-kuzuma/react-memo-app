import "./App.css";

function MemoEditor() {
  return (
    <div>
      <form>
        <label htmlFor="title">タイトル</label>
        <input id="title" />
        <label htmlFor="content">内容</label>
        <textarea id="content" />
        <div className="button-container">
          <button>編集</button>
          <button>削除</button>
        </div>
      </form>
    </div>
  );
}

export default MemoEditor;
