import React, { useState } from 'react';
import './App.css';

function App() {
  const [votes, setVotes] = useState(0);

  const handleVote = async (type) => {
    const token = localStorage.getItem('token');
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(`http://localhost:8000/api/votes/${type}`, requestOptions);
      const data = await response.json();
      setVotes(data.votes);
    } catch (error) {
      console.error(`Error ${type}ing vote:`, error);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Vote Count: {votes}</h1>
        <div>
          <button onClick={() => handleVote('increment')}>Increment</button>
          <button onClick={() => handleVote('decrement')}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
