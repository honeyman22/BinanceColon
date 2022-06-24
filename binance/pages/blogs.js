import React from "react";
import Blog from "../components/Blog/Blog";
import HeadSection from "../components/Blog/HeadSection";
import MainCard from "../components/Blog/MainCard";
import NewsCard from "../components/Blog/NewsCard";
import Footer from "../components/Footer";
import Naivation from "../components/Naivation";
import Nav from "../components/Register.jsx/Nav";
import usenewsProvider from "../hooks/usenewsProvider";
import Faqs from "./faqs";

const Blogs = () => {
  const news = usenewsProvider();
  console.log(news);
  return (
    <div>
      <Naivation />
      <HeadSection />
      <MainCard />
      <NewsCard news={news} />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Blogs;
