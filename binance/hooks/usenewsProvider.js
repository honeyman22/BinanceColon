import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { NewsAtom } from "../atoms/NewsAtom";

const usenewsProvider = () => {
  const Url = "https://bing-news-search1.p.rapidapi.com/news";

  const options = {
    params: { safeSearch: "Off", textFormat: "Raw" },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "7ea43d8172mshb25220bf45835c9p14354ajsn863a85c24ad5",
    },
  };
  const [news, Setnews] = useRecoilState(NewsAtom);

  useEffect(() => {
    axios
      .get(Url, options)
      .then((res) => {
        Setnews(res.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return news;
};

export default usenewsProvider;
