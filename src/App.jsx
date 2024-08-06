import { HelmetProvider } from "react-helmet-async"
import Router from "./pages/Router"
import "./styles/index.css"
import MobileNavContext from "./context/MobileNavContext";

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <MobileNavContext>
        <Router />
      </MobileNavContext>
    </HelmetProvider>
  )
}

export default App
