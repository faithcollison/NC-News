import './App.css'
import { Route, Routes } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import Header from './components/Header'
import Nav from './components/Nav'
import CommentList from './components/CommentList'

function App() {
 return (
    <div>
        <Header />
        <Nav />
        <Routes>
            <Route path="/articles" element={<ArticleList />}/>
            <Route path="/articles/:article_id/comments" element={<CommentList />} />
        </Routes>
        
        
    </div>
 )
}

export default App
