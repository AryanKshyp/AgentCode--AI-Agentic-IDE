import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputPane from "./components/OutputPane";
import Toolbar from "./components/Toolbar";
import { runPython } from "./utils/pyodideRunner";

function App() {
  const [code, setCode] = useState(`print("Hello from Pyodide!")\nx = 5 + 14\nprint(x)`);
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    setOutput("Running...");
    const result = await runPython(code);
    setOutput(result);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121212",
        color: "#fff",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Toolbar */}
      <Toolbar onRun={handleRun} />

      {/* Main Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: "12px",
          padding: "12px",
          boxSizing: "border-box",
        }}
      >
        {/* Code Editor */}
        <div
          style={{
            flex: 2,
            backgroundColor: "#1e1e1e",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <CodeEditor code={code} setCode={setCode} />
        </div>

        {/* Output Panel */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#1e1e1e",
            borderRadius: "10px",
            padding: "16px",
            overflowY: "auto",
          }}
        >
          <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Output</h3>
          <OutputPane output={output} />
        </div>
      </div>
    </div>
  );
}

export default App;
