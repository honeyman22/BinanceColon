import React from "react";
import Footer from "../../components/Footer";
import Naivation from "../../components/Naivation";
import Converter from "../../components/Trade/Converter";
import Faqs from "../faqs";

const COnverter = () => {
  return (
    <div>
      <Naivation />
      <Converter />
      <Faqs />
      <Footer />
    </div>
  );
};

export default COnverter;
