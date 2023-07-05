import "./App.css";
import MemoList from "./MemoList";
import MemoEditor from "./MemoEditor";

function App() {
  return (
    <div className="App">
      <div className="MemoList">
        <MemoList
          memos={[
            {
              title: "メモ1",
              content: "メモ1の内容",
            },
            {
              title: "メモ2",
              content: "メモ2の内容",
            },
          ]}
        />
        <button>+</button>
      </div>
      <div className="MemoEditor">
        <MemoEditor />
      </div>
    </div>
  );
}

export default App;
