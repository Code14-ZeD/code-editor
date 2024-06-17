import "./App.css";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Code Editor</h1>
      </div>
      <CodeEditor language="javascript" />
    </div>
  );
}

export default App;
