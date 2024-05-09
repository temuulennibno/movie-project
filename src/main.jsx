import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout";
import { Home } from "./pages/home";
import { SearchPage } from "./pages/search";
import { MoviePage } from "./pages/movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "movie/:movieId",
    element: <MoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RootLayout>
    <RouterProvider router={router} />
  </RootLayout>
);
