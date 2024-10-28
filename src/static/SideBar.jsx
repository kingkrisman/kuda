import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/kuda.png"
const Sidebar = ({toggle, setToggle}) => {
    const test = () =>{
        setToggle(false)
    }
    return(
        <Container>
<img src={logo} width="100px" />
<Buttons>
                <SignBtn>Sign In</SignBtn>
                <Link to="/companies">
                <JoinBtn>Join Kuda</JoinBtn>
                </Link>
          
          </Buttons>
          <Nav>
           <Link to="/" onClick={test}>
           <nav className="lnk">Personal</nav>
           </Link></Nav>

           <Nav>  <Link to="/business" onClick={test} >
           <nav className="lnk">Business</nav></Link></Nav>

           <Nav> <Link to="/companies" onClick={test}>
           <nav className="lnk">Companies</nav></Link></Nav>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
min-height: calc(100vh - 80px);
background-color:white;
color: white;
z-index:1;
width:300px;
margin-left:130px;
position:absolute;
border:1px solid purple;
border-radius:20px;
padding:20px;
`

const Nav = styled.div`
border-bottom:1px solid purple;
margin-top:20px;
text-decoration:none;
`


const Buttons = styled.div`
display: flex;
align-items: center;
margin-top:20px;
margin-bottom:20px;
}
`
const SignBtn = styled.button`
background-color: transparent;
border: none;
outline: none;
font-weight: 600;
color: #40196D;

`
const JoinBtn = styled.button`
width: 150px;
height: 45px;
border-radius: 10px;
outline: none;
border: none;
color: #fff;
font-weight: 700;
background-color: #5e025e;
margin: 0px 25px;

`