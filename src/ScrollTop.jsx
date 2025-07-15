// src/ScrollTop.jsx
import { useLayoutEffect } from "react";
import { useLocation }     from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // primary window scroll
    window.scrollTo(0, 0);

    // older browsers / fallback
    document.body.scrollTop         = 0;
    document.documentElement.scrollTop = 0;

    // if you happen to have an inner scrollable wrapper:
    const appEl = document.getElementById("root");
    if (appEl) {
      appEl.scrollTop = 0;
    }

    console.log("🔼 forced scroll to top for", pathname);
  }, [pathname]);

  return null;
}
