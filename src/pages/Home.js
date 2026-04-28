import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navlat from "../components/Navlat";

function Home() {
  return (
      <div>
        <Navlat />
        <Routes>
          <Route path="/name" element={<h1>Name</h1>} />
          <Route path="/address" element={<h1>Address</h1>} />
          <Route path="/phone" element={<h1>Phone</h1>} />
        </Routes>
      </div>
  );
}

export default Home;