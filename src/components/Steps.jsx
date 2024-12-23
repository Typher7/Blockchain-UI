import React, { useEffect, useState } from "react";
import axios from "axios";

const Step = () => {
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
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {error && <p className="text-red-700">{error}</p>}
      <div className="grid max-w-5xl mx-auto">
        {blocks.map((block) => (
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 opacity-0 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                  {block.index}
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-xl font-semibold sm:text-base shadow-sm rounded-sm ">
                  {block.data} <br />
                  <span className="font-normal">
                    {new Date(block.timestamp * 1000).toLocaleString()}
                  </span>
                  <li className="flex items-start">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-purple-600"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Nonce: {block.nonce}
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-purple-600"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Hash: {block.hash}
                  </li>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step;
