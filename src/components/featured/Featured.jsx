import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./featured.scss"
const Featured =()=>{
    return(
        <div className="featured">
        <div className="top">
            <div className="title">Total Revenue</div>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className='bottom'>
            <div className='featuredchart'>
            <CircularProgressbar value={70} text={'60%'} strokeWidth={5}/>
            </div>
            <p className='title'>Total number of sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'>previous transactions processing.last payments may not be included</p>
            <div className='summary'>
                <div className='item'>
                    <div className='itemtitle'>Target</div>
                    <div className='itemresult'>
                    <ExpandMoreIcon fontSize='small'/>
                    <div className='resultamount'>$12.4k</div>
                   </div>
                </div>

                <div className='item'>
                    <div className='itemtitle'>Last weak</div>
                    <div className='itemresult'>
                    <ExpandMoreIcon fontSize='small'/>
                    <div className='resultamount'>$12.4k</div>
                   </div>
                </div>

                <div className='item'>
                    <div className='itemtitle'>Last month</div>
                    <div className='itemresult'>
                    <ExpandMoreIcon fontSize='small'/>
                    <div className='resultamount'>$12.4k</div>
                   </div>
                </div>
            </div>

        </div>
        
        </div>
    )
}
export default Featured