import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Education from "./pages/services/Education";
import Learner from "./pages/services/Learner";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services + Nested Routes */}
        <Route path="/services" element={<Services />}>
          <Route path="education" element={<Education />} />
          <Route path="learner" element={<Learner />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
