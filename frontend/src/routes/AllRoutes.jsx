import {Routes,Route} from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { AllUrl } from "../pages/AllUrl"
import { Details } from "../pages/Details"
import { NotFound } from "../pages/NotFound"
import { ProtectedRoute } from "./ProtectedRoute"
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/all" element={<ProtectedRoute><AllUrl/></ProtectedRoute>}></Route>
        <Route path="/details/:id" element={<ProtectedRoute><Details/></ProtectedRoute>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  )
}
