import './App.css'
import { Route, Routes } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import SingleArticle from './components/SingleArticle'
import Header from './components/Header'
import Nav from './components/Nav'
import CommentList from './components/CommentList'
import Home from './components/Home'

function App() {
 return (
    <div>
        <Header />
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />}/>
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/articles/:article_id/comments" element={<CommentList />} />
        </Routes>
        
        
    </div>
 )
}


export default App
