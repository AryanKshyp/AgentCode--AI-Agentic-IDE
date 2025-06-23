const Toolbar = ({ onRun }) => {
  return (
    <div style={{ padding: "12px 16px", backgroundColor: "#1e1e1e", display: "flex", gap: "12px", borderBottom: "1px solid #333" }}>
      <button onClick={onRun} style={buttonStyle}>▶ Run</button>
      <button disabled style={buttonStyle}>🧠 Debug</button>
      <button disabled style={buttonStyle}>🧪 Test</button>
      <button disabled style={buttonStyle}>💡 Explain</button>
    </div>
  );
};

const buttonStyle = {
  padding: "8px 20px",
  borderRadius: "6px",
  backgroundColor: "#007bff",
  color: "white",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "background 0.2s",
};

export default Toolbar;
