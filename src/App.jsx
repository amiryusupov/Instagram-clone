import { Routes, Route } from "react-router-dom";
import routes from "./route";
import { Suspense } from "react";
import Loading from "./components/Loading";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((item) => {
            return (
              <Route key={item.id} path={item.path} element={item.component} />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;