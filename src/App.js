import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between min-h-screen'>
        <Navbar />

        <main className='flex-1 flex'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre-nos' element={<About />} />
            <Route path='/cadastro' element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

