import React, { useEffect, useState } from "react";
import axios from "axios";

const BlockchainViewer = () => {
  const [blocks, setBlocks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch Blockchain data when the component loads
    axios
      .get("http://127.0.0.1:5000/chain")
      .then((response) => setBlocks(response.data.chain))
      .catch((error) => {
        setError("Error fetching blockchain data");
        console.error(error);
      });
  }, []);

  return (
    <div className="pt-4">
      {error && <p className="text-red-700">{error}</p>}
      <div className="pl-4">
        {blocks.map((block) => (
          <div
            key={block.index}
            className=" bg-white shadow-lg rounded-lg p-4 border border-gray-300"
          >
            <p className="font-bold">
              Index: <span className="font-normal">{block.index}</span>
            </p>
            <p className="font-bold">
              Timestamp:
              <span className="font-normal">
                {new Date(block.timestamp * 1000).toLocaleString()}
              </span>
            </p>
            <p className="font-bold">
              Data: <span className="font-normal">{block.data}</span>
            </p>
            <p className="font-bold">
              Previous Hash:{" "}
              <span className="font-normal">{block.previous_hash}</span>
            </p>
            <p className="font-bold">
              Hash: <span className="font-normal">{block.hash}</span>
            </p>
            <p className="font-bold">
              Nonce: <span className="font-normal">{block.nonce}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockchainViewer;
