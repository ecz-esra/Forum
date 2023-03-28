import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPostsController from './pages/ListPosts/ListPostsController';
import "./styles/style.css"
import AddPostController from './pages/AddPost/AddPostController';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<ListPostsController/>}/>
   <Route path='/add-post' element={<AddPostController/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
