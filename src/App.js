import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetails/PostDetail';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/friend/:friendId' element={<FriendDetails />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail />}></Route>
        </Route>
        <Route path='/countries' element={<Countries></Countries>}></Route>
        <Route path='/country/:countryName' element={<CountryDetails></CountryDetails>}></Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
