import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Widget =({type})=>{
    let data;
    let amount=100
    let diff=20
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"see all users",
                icon:(<PersonOutlineOutlinedIcon className="icon" style={{
                    color:"crimson" ,backgroundColor:"rgba(255,0,0,0.2)"
                }}/>)
            }
            break;
            case "order":
                data={
                    title:"ORDERS",
                    isMoney:false,
                    link:"view all orders",
                    icon:<PersonOutlineOutlinedIcon className="icon" style={{
                        color:"green" ,backgroundColor:"rgba(0,128,0,0.2)"
                    }}/>
                }
                break;
                case "earning":
                    data={
                        title:"EARNINGS",
                        isMoney:true,
                        link:" view net earnings",
                        icon:<PersonOutlineOutlinedIcon className="icon" style={{
                            color:"purple" ,backgroundColor:"rgba(128,0,128,0.2)"
                        }}/>
                    }
                    break;
                case "balance":
                data={
                    title:"BALANCE",
                    isMoney:true,
                    link:"see details",
                    icon:<PersonOutlineOutlinedIcon className="icon" style={{
                        color:"goldenrod" ,backgroundColor:"rgba(218,165,32,0.2)"
                    }}/>
                }
                break;
            default:
                break
    }


    return(
        <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"}{amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
           
            <div className="percentage negative">
            <KeyboardArrowUpIcon/>
            {diff}%</div>
            {/* <PersonOutlineOutlinedIcon className="icon"/> */}
            {data.icon}
        </div>

        </div>
    )
}
export default Widget