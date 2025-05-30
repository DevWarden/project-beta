const Loader = () => (
  <div style={{ marginTop: "1rem", textAlign: "center" }}>
    <div className="spinner" />
    <p>Loading...</p>
    <style>{`
      .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #007bff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: spin 1s linear infinite;
        margin: auto;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default Loader;