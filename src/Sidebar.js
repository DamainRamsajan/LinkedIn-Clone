import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div>
            <div className = "sidebar__top">
                <img src ="" alt = ""/>
                <Avatar className = "sidebar__avatar" />
                <h2>Damain Ramsajan</h2>
                <h4>peterdramsajan@gmail.com</h4>
            </div>

            <div className = "sidebar__bottom">

            </div>
        </div>
    )
}

export default Sidebar
