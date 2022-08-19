interface NewsContextType {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  news: News[]
  setNews: React.Dispatch<React.SetStateAction<News[]>>
  totalResults: number
  setTotalResults: React.Dispatch<React.SetStateAction<number>>
  loadMore: number
  setLoadMore: React.Dispatch<React.SetStateAction<number>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
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
