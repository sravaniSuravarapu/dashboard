import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
const Sidebar =()=>{
    return(
        <div className="sidebar">
         <div className="top">
         <span className="logo">dashboard</span>
         </div>
         <hr/>
         <div className="center">
            <ul>
            <p className="title">MAIN</p>
                <li>
                <DashboardIcon className="icon"/>
                <span>dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                <span>users</span>
                </li>
                <li>
                <AddBusinessOutlinedIcon className="icon"/>
                <span>products</span>
                </li>
                <li>
                <Inventory2OutlinedIcon className="icon"/>
                <span>orders</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                <AirportShuttleIcon className="icon"/>
                <span>Delivary</span>
                </li>
                <li>
                <EqualizerOutlinedIcon className="icon"/>
                <span>stats</span>
                </li>
                <li>
                <NotificationsNoneOutlinedIcon className="icon"/>
                <span>notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                <span>system health</span>
                </li>
                <li>
                <AddCommentOutlinedIcon className="icon"/>
                <span>logs</span>
                </li>
                <li>
                <SettingsOutlinedIcon className="icon"/>
                <span>settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                <PersonPinOutlinedIcon className="icon"/>
                <span>profile</span>
                </li>
                <li>
                <LogoutOutlinedIcon className="icon"/>
                <span>logout</span>
                </li>
                
            </ul>
         </div>
         <div className="bottom">
            <div className="coloroption"></div>
            <div className="coloroption"></div>
            
         </div>
        </div>
    )
}
export default Sidebar