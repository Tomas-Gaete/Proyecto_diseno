import { BrowserRouter, Routes, Route} from "react-router-dom";
export default function Router() {
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<Gamepage />} />
            <Route path="/games" element={<Gamepage />} />
            <Route path="/perfil" element={<Profile/>} />
            <Route path="/biblioteca" element={<Profile/>} />
            <Route path="/Carrito" element={<Profile/>} />

        </Routes>
    </BrowserRouter>
    )
   
}