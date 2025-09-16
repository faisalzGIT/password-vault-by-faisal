import { Outlet } from "react-router-dom"
import NAVBAR from './Navbar'

const Layout = () => {
  return (
    <div>
      <NAVBAR />
      <Outlet />
    </div>
  )
}

export default Layout
