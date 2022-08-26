import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddVisitor from "./components/add-visitor-component";
import Home from "./components/home-component.";
import Queue from "./components/queue-component";
import VisitorList from "./components/visitor-list-component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/addvisitor" element={<AddVisitor />} />
        <Route path="/visitor" element={<VisitorList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
