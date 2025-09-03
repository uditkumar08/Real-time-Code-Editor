import React, { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";

function Editor() {
  const editorRef = useRef(null);
  const cmInstanceRef = useRef(null); // ✅ track instance

  useEffect(() => {
    if (!cmInstanceRef.current) { 
      cmInstanceRef.current = CodeMirror.fromTextArea(editorRef.current, {
        lineNumbers: true,
        mode: "javascript",
        theme: "dracula",
        autoCloseBrackets: true,
      });
    }
  }, []);

  return <textarea ref={editorRef}></textarea>;
}

export default Editor;
