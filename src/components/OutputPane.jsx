const OutputPane = ({ output }) => {
  return (
    <div style={{ whiteSpace: "pre-wrap", color: "#d4d4d4", fontFamily: "monospace" }}>
      {output}
    </div>
  );
};

export default OutputPane;
