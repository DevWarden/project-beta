import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    // const res = await axios.post('https://rusttest-ui7h.shuttle.app/paraphrase', { text: input });
    const res = await axios.post('https://text-paraphraser-hb2k.onrender.com/paraphrase', { text: input });
    setResult(res.data.paraphrased);
  };

  return (
    <div className="app">
      <h1>AI Paraphraser</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to paraphrase..."
        rows={6}
        cols={60}
      />
      <br />
      <button onClick={handleSubmit}>Paraphrase</button>
      <h2>Result</h2>
      <p>{result}</p>
    </div>
  );
}

export default App;
