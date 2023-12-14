import './App.css'
import { Route, Routes } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import SingleArticle from './components/SingleArticle'
import Header from './components/Header'
import Nav from './components/Nav'
import CommentList from './components/CommentList'
import Home from './components/Home'
import { UserProvider } from './components/contexts/UserContext'
import Users from './components/Users'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './components/Filter'
import Error from './components/Error'

function App() {
 return (
    <div>
        <UserProvider>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<ArticleList />}/>
                <Route path="/users" element={<Users />} />
                <Route path="/articles?topic=:topic" element={<Filter />} />
                <Route path="/articles/:article_id" element={<SingleArticle />} />
                <Route path="/articles/:article_id/comments" element={<CommentList />} />
                <Route path="/*" element={<Error message="Page not found!" />} />
            </Routes>
            <ToastContainer />
        </UserProvider>
        
        
    </div>
 )
}


export default App
