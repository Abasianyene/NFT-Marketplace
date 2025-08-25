import { Route, Routes, useLocation } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import Rankings from './pages/Rankings'
import CollectionNFTsPage from './pages/CollectionNFTsPage'
import Contact from './pages/Contact'
import CreateNFT from './pages/CreateNFT'
import Explore from './pages/Explore'
import MarketPlacePage from './pages/MarketPlacePage'
import NFTDetail from './pages/NFTDetail'
import Profile from './pages/Profile'


function App() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);


  return (
    <>
    {!isAuthPage && <Header />}
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/rankings" element={<Rankings />} />
    <Route path="/collection" element={<CollectionNFTsPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/create" element={<CreateNFT />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/marketplace" element={<MarketPlacePage />} />
    <Route path="/nft/:id" element={<NFTDetail />} />
    <Route path="/profile" element={<Profile />} />
    {/* Add more routes as needed */}
  </Routes>
  {!isAuthPage && <Footer />}
    </>
  )
}

export default App
