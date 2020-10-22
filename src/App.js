import React, { useEffect } from "react";
import ReactGA from "react-ga";

export default function App() {
  useEffect(() => {
    ReactGA.initialize("G-KGSTLYFBPM");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return <h1>hello world</h1>;
}
