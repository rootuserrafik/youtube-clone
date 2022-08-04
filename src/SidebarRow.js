import React from 'react';
import "./SidebarRow.css";

function SidebarRow({selected, SidebarIcon , title}) {
    return (
        <div className={`Sidebar__Row ${selected && "selected"}`}>
            <SidebarIcon className="SidebarRow__Icon"/>
            <h2 className="SidebarRow__Title">{title}</h2>
        </div>
    )
}

export default SidebarRow
