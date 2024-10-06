import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import PaginaDeBuscas from "../pages/Buscas";
import FotosFull from "../pages/fotosFull";
import Photos from "../pages/Photos";
import Collection from "../pages/Collection";
import RodaPe from "../components/RodaPe";
import Sobre from "../pages/Sobre";
import Error404 from "../pages/Erro";

export default function Rotas () {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/photos" element={<Photos/>}/>
                <Route path="/photos/:id" element={<FotosFull/>}/>
                <Route path="/search" element={<PaginaDeBuscas/>}/>
                <Route path="/collections" element={<Collection/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
            <RodaPe/>
        </BrowserRouter>
    )
}