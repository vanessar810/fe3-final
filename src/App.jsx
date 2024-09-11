
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { routes } from "./routes";


function App() {
  return (
    <>
    <Navbar />
  <Routes>
    <Route path={routes.home} element={<Home />}/>
    <Route path={routes.detail} element={<Detail />}/>
    <Route path={routes.contact} element={<Contact />}/>
    <Route path={routes.favs} element={<Favs />}/>
    <Route path="/detail/:id" element={<Detail />}/>
    <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
