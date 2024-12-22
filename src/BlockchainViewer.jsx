import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlockchainViewer = () => {
    const [blocks, setBlocks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch Blockchain data when the component loads
        axios
          .get('http://127.0.0.1:5000/chain')
          .then((response) => setBlocks(response.data.chain))
          .catch((error) => {
            setError("Error fetching blockchain data");
            console.error(error);
          });
    }, []);
    
  return (
    <div>
      <h1 className='text-3xl bg-slate-500 text-white py-4 pl-4'>Blockchain Viewer</h1>
      {error && <p className='text-red-700'>{error}</p>}
      <div className='pl-4'>
        {blocks.map((block) => (
          <div key={block.index} className=''>
            <p><strong>Index:</strong> {block.index}</p>
            <p><strong>Timestamp:</strong> {new Date(block.timestamp * 1000).toLocaleString()}</p>
            <p><strong>Data:</strong> {JSON.stringify(block.data)}</p>
            <p><strong>Previous Hash:</strong> {block.previous_hash}</p>
            <p><strong>Hash:</strong> {block.hash}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlockchainViewer;