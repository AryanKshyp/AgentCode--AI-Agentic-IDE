import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <Editor
      height="100%"
      language="python"
      theme="vs-dark"
      defaultValue={code}
      onChange={handleEditorChange}
      options={{
        fontSize: 16,
        minimap: { enabled: false },
        padding: { top: 10 },
      }}
    />
  );
};

export default CodeEditor;
