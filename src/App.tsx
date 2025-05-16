import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="maladroit">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
