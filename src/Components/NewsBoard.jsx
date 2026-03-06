import React, { useEffect, useState } from "react"
import NewsItems from "./NewsItems"
import axios from "axios"

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {

    const fetchNews = async () => {

      try {

        const url = `https://news-backend-abc123.onrender.com/api/news?category=${category}`;

        const res = await axios.get(url)

        setArticles(res.data.articles)

      } catch (error) {

        console.error("failed to fetch news", error)

      }

    }

    fetchNews()

  }, [category])

  return (
    <div className="max-w-7xl mx-auto px-6 py-3">

      <h2 className="text-2xl gap-1 flex justify-center font-bold mb-6">
        Top <span className="text-red-700">{category}</span> Headlines
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {articles.map((news, index) => (

          <NewsItems
            key={index}
            title={news.title}
            urlToImage={news.urlToImage}
            url={news.url}
          />

        ))}

      </div>

    </div>
  )
}

export default NewsBoard