import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  ArticleList,
  SingleArticle,
  Header,
  CommentList,
  Home,
  Users,
  Filter,
  Error,
} from "./components";
import { UserProvider } from "./components/contexts/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/articles?topic=:topic" element={<Filter />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route
            path="/articles/:article_id/comments"
            element={<CommentList />}
          />
          <Route path="/*" element={<Error message="Page not found!" />} />
        </Routes>
        <ToastContainer />
      </UserProvider>
    </div>
  );
}

export default App;
