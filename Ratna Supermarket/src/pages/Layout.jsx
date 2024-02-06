import { Outlet } from "react-router-dom"


function Layout({children}) {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Layout