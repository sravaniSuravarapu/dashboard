import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Tm from "./Tm.jpg"
const Navbar =()=>{
    return(
        <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="search..."/>
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item">
                <LanguageIcon className="icon"/>
                English  
                </div>
                <div className="item">
                <DarkModeOutlinedIcon className="icon"/>  
                </div>
                <div className="item">
                <CropFreeOutlinedIcon className="icon"/>  
                </div>
                <div className="item">
                <NotificationsNoneOutlinedIcon className="icon"/>
                <div className="counter">1</div>  
                </div>
                <div className="item">
                <ChatBubbleOutlineOutlinedIcon className="icon"/>  
                <div className="counter">1</div>
                </div>
                <div className="item">
                <FormatListBulletedOutlinedIcon className="icon"/>  
                </div>
                <div className="item">
                <img src={Tm} alt="avatar" className="avatar"/> 
                </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar