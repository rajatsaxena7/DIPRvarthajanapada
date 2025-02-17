import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  NavContainer,
  NewsTicker,
  NewsItem,
  NewsWrapper
} from "../navbar/NavBar.styles";
import { NewsApi } from "../../services/categoryapi/CategoryApi";

const NavBar = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await NewsApi();
        console.log("Received news data:", data);
        
        if (data && data.data && Array.isArray(data.data)) {
          setHeadlines(data.data.map(article => article.title));
        } else {
          console.error("Invalid data format received", data);
          setHeadlines([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <NavContainer>
      <NewsWrapper>
        <NewsTicker>
          {headlines.map((headline, index) => (
            <NewsItem key={index}>{headline}</NewsItem>
          ))}
        </NewsTicker>
      </NewsWrapper>
    </NavContainer>
  );
};

export default NavBar;