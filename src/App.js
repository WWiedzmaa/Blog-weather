import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePages from "./pages/HomePages";
import ContactPAge from "./pages/ContactPAge";
import PostPage from "./pages/PostPage";
import Weather from "./pages/Weather";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages/>}></Route>
          <Route path="/weather" element={<Weather/>}></Route>
          <Route path="/contact" element={<ContactPAge/>}></Route>
          <Route path="/blog/:title" element={<PostPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
