interface NewsContextType {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  news: News[]
  setNews: React.Dispatch<React.SetStateAction<News[]>>
  totalResults: number
  setTotalResults: React.Dispatch<React.SetStateAction<number>>
}

interface News {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
  content: string | null
}
