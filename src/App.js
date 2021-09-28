import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col, Card, Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import News from "./components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=c848c7a032184eb99555803dd4a30b50"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
     { news.length===0 ? 
       <Spinner animation="border" variant="primary" />
     :
        <Container>
        <Row xs={1} md={3} className="g-4">
          {
            news.map(nw=><News news={nw}></News>)
          }
        </Row>
        </Container>
     }
    </div>
  );
}

export default App;
