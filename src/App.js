import './App.css';
import LeftBar from './components/LeftBar';
import NavBar from './components/NavBar';
import NewPost from './components/newPost';
import Posts from './components/Posts';
import Storyies from './components/storyies';

function App() {
  return (
    <div className="bg-blue-200 text-white p-4 text-center">
  <NavBar/>
  <LeftBar/>
  <Storyies/>
  <NewPost/>
    <Posts/>
  </div>
  );
}

export default App;
