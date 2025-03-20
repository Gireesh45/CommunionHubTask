import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Sun, Moon } from "lucide-react"; 
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex flex-col`}>
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-sm sm:text-xl font-bold">Communion Hub</h1>
          <div className="flex items-center gap-4">
            <Link to="/" className="px-4">Home</Link>
            <Link to="/events" className="px-4">Events</Link>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full bg-gray-200 text-black">
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/events" element={<Events isDarkMode={isDarkMode} />} />
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
};

export default App;
