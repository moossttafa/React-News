import React from 'react'
import "./Navbar.css"
import SidebarDrawer from "./SidebarDrawer";

export const Navbar = ({setCategories}) => {
    return (
        <div className="nav">
            <div className="icon">
                <SidebarDrawer setCategories={setCategories} />
            </div>
            
            <img  style={{ cursor:"pointer"}}
            src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
            alt="logo"
            height="80%"
             />
        </div>
    )
}
 