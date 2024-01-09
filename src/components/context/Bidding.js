import React, { createContext, useContext, useState } from "react";

const BidContext = createContext();

const BidProvider = ({ children }) => {
  const [bids, setBids] = useState([]);

  const addBid = (bid) => {
    setBids((prevBids) => [...prevBids, bid]);
  };

  return (
    <BidContext.Provider value={{ bids, addBid }}>
      {children}
    </BidContext.Provider>
  );
};

const useBidContext = () => {
  const context = useContext(BidContext);
  if (!context) {
    throw new Error("useBidContext must be used within a BidProvider");
  }
  return context;
};

export { BidProvider, useBidContext };
