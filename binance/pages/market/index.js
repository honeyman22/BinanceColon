import { Table } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import MarketCard from "../../components/Market/Card";
import MarketTable from "../../components/Market/Table";
import Naivation from "../../components/Naivation";

const index = () => {
  return (
    <div>
      <div className="bg-black/10">
        <Naivation />
        <MarketCard />
      </div>
      <MarketTable />
      <Footer />
    </div>
  );
};

export default index;
