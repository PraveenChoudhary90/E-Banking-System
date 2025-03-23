import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Nopage from "./pages/Nopage"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import SubmitCash from "./pages/SubmitCash"
import WithdrawCash from "./pages/WithdrawCash"
import ResetPassword from "./pages/ResetPassword"
import BalanceInquiry from "./pages/BalanceInquiry"
import AccountStatement from "./pages/AccountStatement"
import MiniStatement from "./pages/MiniStatement"
import Profile from "./pages/Profile"
import Login from "./pages/Login"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="registration" element={<Registration/>}/>
      <Route path="about" element={<About/>}/>
      {/* <Route path="*" element={<Nopage/>}/> */}
      </Route>
    </Routes>
    <Routes>
      <Route path="dashboard" element={<Dashboard/>}>
      <Route path="submitcash" element={<SubmitCash/>}/>
      <Route path="withdrawcash" element={<WithdrawCash/>}/>
      <Route path="reset" element={<ResetPassword/>}/>
      <Route path="balanceinquiry" element={<BalanceInquiry/>}/>
      <Route path="accountstatement" element={<AccountStatement/>}/>
      <Route path="ministatement" element={<MiniStatement/>}/>
      <Route path="profile" element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
