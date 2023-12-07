import {Routes,Route} from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { AllUrl } from "../pages/AllUrl"
import { Details } from "../pages/Details"
import { NotFound } from "../pages/NotFound"
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/all" element={<AllUrl/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  )
}
