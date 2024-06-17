import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const CodeEditor = ({ language = "jsx" }) => {
  const [code, setCode] = useState(`function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);

`);
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div>
      <textarea
        id="code-editor"
        value={code}
        onChange={handleCodeChange}
        spellcheck="false"
      />
      <pre id="highlight" aria-hidden="true">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;
