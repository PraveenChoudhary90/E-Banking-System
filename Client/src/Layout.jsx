import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

const Layout =()=>{
    return(
        <>
        <Header/>
        <TopNav/>
        <main className="maindata"><Outlet/></main>
        <Footer/>
        
        </>
    )
}

export default Layout;