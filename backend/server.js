import express from "express"
import axios from "axios"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors())

app.get("/api/news", async (req, res) => {
  try {

    const category = req.query.category || "general"

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
    )

    res.json(response.data)

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})