import routes from "./utils/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} Component={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
