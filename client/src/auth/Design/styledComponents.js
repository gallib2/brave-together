import styled from 'styled-components'


export const Body = styled.body`

background-image: url('../assets/images/background.jpg');
background-repeat: no-repeat;
background-position: 50% 50%;
`

export const Submit = styled.input`
background-color: #1749d2;
color: white;
font-size: 12px;
font-weight:bold;
height:37px;
width:63%;
display:block;
margin-left:19.2%;
margin-bottom:5%;
border-radius:20px;
cursor: pointer;
border:1px solid #3fa2f1;
&:hover{background-color: #3fa2f1;}
&:disabled {
  color: grey;
  opacity: 0.7;
  cursor: default;
}
`;

export const DivForm = styled.div`
color:black;
border: 1px solid #3fa2f1; 
background-color: rgba(255, 255, 255, 0.8);
text-align: center;
border-radius: 2%; 
height:100%;
position:relative;
width:25%;
margin:auto;
margin-top: 4%;
`;

export const Root = styled.div`
position:relative;
background-color:#ffffff;
height:480px;
display:flex;
margin:10% 30% 10% 30%;
justify-content:center;
align-items:center;`;

export const LoginForm = styled.div`
width:50px;
height:50px;
background-color:red;
position:absolute;
transform:translate(-50%,-50%);`;

export const Save = styled.input`
background-color: #007991;
color: white;
font-size: 12px;
font-weight:bold;
height:37px;
width:40%;
margin-bottom:25%;
margin-left:30%;
border:1px solid #ddd;
&:hover{color:black;}`;

export const Create = styled.input`
background-color: #007991;
color: white;
font-size: 12px;
font-weight:bold;
height:32px;
width:32%;
float:right;
border:1px solid #ddd;
&:hover{color:black;}`;

export const AddNewCompany = styled.input`
background-color: #007991;
color: white;
font-size: 12px;
font-weight:bold;
height:32px;
width:12%;
margin-left:67%;
border:1px solid #ddd;
&:hover{color:black;}`;

export const AddNewUser  = styled.input`
background-color: #007991;
color: white;
font-size: 12px;
font-weight:bold;
height:32px;
width:10%;
margin-left:69%;
border:1px solid #ddd;
&:hover{color:black;}`;

export const Cancel = styled.input`
background-color: white;
color: black;
font-size: 12px;
font-weight:bold;
height:32px;
width:22%;
float:left`;

export const Input =styled.input`
height:32px;
width:62%;
margin-left: 19.2%;
display:block;
border-radius: 20px;
margin-bottom:3%;
background-color: rgba(255, 255, 255, 0.8);;
border: 2px solid #3fa2f1;`;

export const CheckBoxStyle =styled.input`
height:15px;
width:20px;`

export const Form = styled.form`
color:black;
text-align: left;
background-color: #ffffff;
height:100%;
width:34%;
margin:auto;
`;



export const Div = styled.body`
background-color:#222e50;
`;

export const Input2 = styled.input`
margin-right:4.2%;
margin-left: 4.2%;
height:32px;
width:26.7%;
border: 1px solid #ddd;`;

export const Label2 = styled.label`
margin-right:18.3%;
margin-left: 4.2%;
height:30px;
width:26.7%;
font-size: 12px;
font-weight: bold;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;



export const Header = styled.h1`
font-size:18px;
margin-bottom:2%;
margin-top:2%;
`;

export const Label = styled.label`
display:block;
float:left;
justify-content: left;
margin-left: -19.2%;
text-align:right;
width:100%;
margin-bottom: 5px;
font-size: 14px;
font-weight: bold;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;


export const Other = styled.span`
font-size: 14px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const UnorderedList = styled.ul`
list-style-type:none;
margin: 0;
padding: 0;
overflow:hidden;
background-color:#222e50;
box-shadow : 0 2px 4px 0 rgba(255,255,255,.2);
`;

export const UnorderedNavbar = styled.ul`
list-style-type:none;
margin: 0;
margin-left:8px;
padding: 0;
overflow:hidden;
`;

export const ListItem = styled.li`
float:left;`

export const ListItemRight = styled.li`
display:inline-block;`

export const A = styled.a`
display:block;
color:white;
&:hover{
  text-decoration: underline;
  
}
`;

export const VerticalSeparator = styled.div`
border-right: 1px solid gray;
height:30px;
margin-top:6px;
margin-right:20px;
margin-left: 20px;
top:0;`;

export const HorizontalSeparator = styled.div`
border-right: 1px solid gray;
height:5px;
width:100px;`;

export const Logo = styled.img`
margin-top: 10px;
margin-left:20px;`;

export const LogoImg = styled.img`
margin-top: 5%;
width:128px;
height:128px;`;

export const Nav = styled.nav`
box-shadow : 0 2px 4px 0 rgba(0,0,0,.2);`;

export const LeftSection = styled.div`
margin-top:2px;
border:1px solid white;
width:22%;
height:100vh;
box-shadow : 0 2px 4px 0 rgba(0,0,0,.2);`;

export const ColumnLeft = styled.div`
box-sizing:border-box;
float:left;
width:35%`;

export const ColumnRight = styled.div`
box-sizing:border-box;
float:left;
width:65%`;

export const LeftColumn = styled.div`
box-sizing:border-box;
float:left;
width:30%`;

export const CenterColumn = styled.div`
box-sizing:border-box;
margin: auto;
width:30%`;

export const RightColumn = styled.div`
box-sizing:border-box;
float:right;
width:30%`;

export const Row = styled.div`
display:flex;
flex-direction:row;
flex-wrap:nowrap;
justify-content:space-between;
&:after{
  content:"";
  display:table;
  clear:both;
}`;

export const FullInput = styled.input`
width:100%;
height:32px;
display:block;
margin-bottom:3%;
border: 1px solid #ddd;`;

export const FormLabel = styled.label`
font-size: 12px;
margin-bottom:10%;
font-weight: bold;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`;

export const BlankImg = styled.img`
border-radius:100%;
width:96px;
height:96px;`;

export const MinimizedImg = styled.img`
border-radius:100%;
margin-top:10px;
display:block;
margin-left:50%;
width:28px;
height:28px;`;

export const BellImg = styled.img`
border-radius:100%;
text-align:center;
margin-top:80%;
margin-left:10%;
display:block;
width:18px;
height:18px;`;


export const DropLabel = styled.label`
font-size: 12px;
margin-bottom:10%;
font-weight: bold;
margin-left:8%;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`;

export const DropImg = styled.label`
margin-bottom:10%;
border-radius:100%;
width:28px;
height:28px;`;



export const DropdownContent = styled.div`
display:block;
position:absolute;
background-color:#f9f9f9;
min-width:188px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;`;

export const DropButton = styled.button`
background-color: #4CAF50;
color: white;
padding: 16px;
font-size: 16px;
border: none;
cursor: pointer;
${DropdownContent}:hover & {
  background-color:red;
}`;

export const DropdownItem = styled.a`
color:black;
padding: 12px 16px;
text-decoration:none;
display:block;`;

export const Dropdown =styled.div`
position:absolute;
margin-left:85%;
display:inline-block;
${DropdownContent}:hover & {
  background-color:red;
}`;

export const Select = styled.select`
width:62%;
border: 1px solid #ddd;
height:40px;`;


export const disablePage ={
  display:"none"
}

export const navLinkStyleBlack = {
  display:"block",
  color: "black",
  textAlign: "center",
  padding: "16px 12px",
  textDecoration:"none",
  fontSize: "11px",
  fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  
}

export const LinkStyle = {
  marginTop:"5px",
  marginBottom:"5px",
  display:"block",
  color: "black",
  textAlign: "left",
  textDecoration:"none",
  fontSize: "12px",
  fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  
}

export const navLinkStyleWhite = {
  display:"block",
  color: "white",
  textAlign: "center",
  padding: "16px 12px",
  textDecoration:"none",
  fontSize: "11px",
  fontWeight:"bold",
  fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  
}