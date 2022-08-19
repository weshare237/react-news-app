import { createContext, useState, useContext } from 'react'

interface Props {
  children: React.ReactNode
}

const NewsContext = createContext({} as NewsContextType)

export const NewsState = () => {
  return useContext(NewsContext)
}

const NewsProvider: React.FC<Props> = ({ children }) => {
  const [category, setCategory] = useState<string>('general')
  const [news, setNews] = useState<News[]>([])
  const [totalResults, setTotalResults] = useState<number>(0)

  return (
    <NewsContext.Provider
      value={{
        category,
        setCategory,
        news,
        setNews,
        totalResults,
        setTotalResults,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider
