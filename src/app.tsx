import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="flex flex-col gap-4 p-4">
          <Navbar />
          <div class="card card-border bg-base-100 w-full h-full">
            <Suspense>{props.children}</Suspense>
          </div>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
