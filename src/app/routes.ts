import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Advisory } from "./pages/Advisory";
import { Fund } from "./pages/Fund";
import { TrustCenter } from "./pages/TrustCenter";
import { Cases } from "./pages/Cases";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "advisory", Component: Advisory },
      { path: "fund", Component: Fund },
      { path: "trust-center", Component: TrustCenter },
      { path: "cases", Component: Cases },
      { path: "contact", Component: Contact },
    ],
  },
]);
