import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { routes } from "./routes.tsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <h1 className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
      hello
    </h1>
    {/* <RouterProvider router={createBrowserRouter(routes)} /> */}
  </StrictMode>,
);
