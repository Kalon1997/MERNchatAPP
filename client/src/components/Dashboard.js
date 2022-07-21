import React from 'react'
import ChatArea from './ChatArea';
import SidePanel from './SidePanel';
import './Dashboard.css'
const Dashboard = ( ) => {
    return (
<div className='dashboard'>

        <ChatArea />
        <SidePanel />

</div>
    )
}

export default Dashboard;