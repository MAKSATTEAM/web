
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import faviconUrl from "./assets/favicon.ico";

const ensureFavicon = () => {
  const existing = document.querySelector<HTMLLinkElement>("link[rel='icon']");
  if (existing) {
    existing.href = faviconUrl;
    return;
  }
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/x-icon";
  link.href = faviconUrl;
  document.head.appendChild(link);
};

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
  
