import React, { useState, useEffect } from "react";
import PageTitle from "./Typography/PageTitle";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Pagination,
} from "@windmill/react-ui";
import axios from "axios";
import AvatarImg from "../assets/blockchain.png";

function Blocks() {
  const [blocks, setBlocks] = useState([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    // Fetch Blockchain data when the component loads
    axios
      .get("http://127.0.0.1:5000/chain")
      .then((response) => {
        setBlocks(response.data.chain);
        setDataTable1(response.data.chain.slice(0, resultsPerPage)); // Set initial data for the table
      })
      .catch((error) => {
        setError("Error fetching blockchain data");
        console.error(error);
      });
  }, []);
  const response = blocks;

  // setup pages control for table
  const [pageTable1, setPageTable1] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])

  // pagination setup
  const resultsPerPage = 15;
  const totalResults = response.length;

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(
      response.slice(
        (pageTable1 - 1) * resultsPerPage,
        pageTable1 * resultsPerPage
      )
    );
  }, [pageTable1]);

  return (
    <div className="container mx-auto">
      {error && <p className="text-red-700">{error}</p>}
      <PageTitle>Blocks</PageTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader className="bg-gray-800">
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Nonce</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((block, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={AvatarImg}
                      alt="avatar"
                    />
                    <div>
                      <p className="font-bold text-black">{block.data}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{`${block.hash.substring(
                        0,
                        25
                      )}...`}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {block.nonce}</span>
                </TableCell>
                <TableCell>
                  <Badge type="">{block.nonce}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(block.timestamp * 1000).toLocaleString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter className="bg-gray-800">
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
}

export default Blocks;
