//import app from "./app.css"
import { Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Start from "./pages/Start";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/post/:id" element={<Post />}/>
      </Routes>
    </div>
  );
}

export default App;
