import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
