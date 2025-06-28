import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <>
    <Navbar/>
    <main className="">
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout