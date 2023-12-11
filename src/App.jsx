import './App.css'
import { Route, Routes } from 'react-router-dom'
import ArticleList from './components/ArticleList'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/home'

function App() {
 return (
    <div>
        <Header />
        <Nav />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/articles" element={<ArticleList />}/>
        </Routes>
        
        
    </div>
 )
}

export default App
