import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ViewTaskPage from "./pages/ViewTaskPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/view-task/:id" element={<ViewTaskPage/>} />
      </Routes>
    </>
  );
}

export default App;
