import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { NewsContent } from "./components/NewsContent/NewsContent";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [categories, setCategories] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const API_KEY = "cece660fbc2d45b3aa291e648e5da435";

  const newsApi = async () => {
    try {
      const news = await axios.get(
        ` https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${categories}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(newsArray);
  useEffect(() => {
    newsApi();
  }, [newsResults,  categories ,loadMore])

   return (
    <div className="App">
      <Navbar setCategories={setCategories} />
      <NewsContent 
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          />
      <Footer />
    </div>
  );
}

export default App;
