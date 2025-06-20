import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Menubar from "./components/Menubar";

export default function App() {
  return (
    <Router
      root={props => (
        <div class="flex p-4 h-screen">
          <Menubar>
            <Suspense>{props.children}</Suspense>
          </Menubar>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
