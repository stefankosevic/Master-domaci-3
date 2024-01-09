import React from "react";
import { useBidContext } from "../context/Bidding";

const History = () => {
  const { bids } = useBidContext();

  return (
    <div>
      <h2>Istorija licitacija</h2>
      <ul>
        {bids.map((bid, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              marginBottom: "16px",
              gap: "2px",
              color: "#555",
              padding: "16px",
            }}
          >
            <div>Vrednost: {bid.value} WEI</div>
            <div>Aukcija: {bid.to}</div>
            <div>Od wallet-a: {bid.from}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
