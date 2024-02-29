import routes from "./utils/routes/routes";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} Component={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
