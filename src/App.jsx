import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Spinner from "./components/Spinner"; // Loading indicator

// Lazy load the Watch page for better performance
const Watch = lazy(() => import("./pages/Watch"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:videoId" element={<Watch />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
