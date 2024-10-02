import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import PaginaDeBuscas from "../pages/Buscas";
import FotosFull from "../pages/fotosFull";

export default function Rotas () {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/search" element={<PaginaDeBuscas/>}/>
                <Route path="/photos/:id" element={<FotosFull/>}/>
            </Routes>
        </BrowserRouter>
    )
}