import './App.css';
import NewPost from './components/newPost';
import Posts from './components/Posts';
import Storyies from './components/storyies';

function App() {
  return (
    <div className="bg-blue-200 text-white p-4 text-center">
  <Storyies/>
  <NewPost/>
    <Posts/>
  </div>
  );
}

export default App;
