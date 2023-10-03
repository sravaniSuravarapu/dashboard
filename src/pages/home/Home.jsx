import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../widgets/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import List from "../../components/tables/Table"
const Home =()=>{
    return(
        <div className="home">
        
        <Sidebar/>
        <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
        </div>
        <div className="charts">
        <Featured/>
        <Chart/>
        </div>
        <div className="listcontainer">
            <div className="listtitle">
                <p className="lastest">Lastest Transactions </p>
                <List/>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Home