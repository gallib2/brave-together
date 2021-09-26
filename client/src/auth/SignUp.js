import React, { Component } from 'react';
import {Submit, Input, DivForm, Input2, Label2, Header, Label,LogoImg,Body} from './Design/styledComponents';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from '../assets/images/Logo.jpg';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            phone:'',
            fName:'',
            lName:''
      };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const input = event.target;
        const value = input.value;
        this.setState({[input.name] : value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log("state : ",this.state.email); 
        const signupDocument = JSON.stringify({
            "email":this.state.email,
            "password":this.state.password,
            "cellphone":this.state.phone,
            "first_name":this.state.fName,
            "last_name":this.state.lName
        });
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json  ',
                "Access-Control-Allow-Origin": "*"
            }
          };
        console.log(signupDocument);
        await axios.post("http://localhost:5000/user " , signupDocument, axiosConfig ) // calling api request to create a new user
        .then(response =>{
             console.log(response);
             alert("!ההרשמה למערכת הושלמה בהצלחה");
             this.props.history.push("/");
        });   
    } 
    render() {    
        document.body.style.background = "rgba(255, 255, 255, 0.1) url('https://brave-together.com/wp-content/uploads/2020/04/IMG_3198-2-1.jpg')" ;
        document.body.style.backgroundSize = "100vw 100vh"
        return (
                <DivForm>
                    <LogoImg src = "https://brave-together.com/wp-content/uploads/2021/05/%D7%9C%D7%95%D7%92%D7%95-%D7%A8%D7%99%D7%91%D7%95%D7%A2%D7%99-%D7%A9%D7%A7%D7%95%D7%A3-300x300.png" width="128" height="128"></LogoImg>
                    <Header>הרשמה</Header>
                    <form onSubmit={this.handleSubmit}>
                    <Label for="emailBox">כתובת אימייל </Label>
                    <Input id="emailBox" type="email" name="email" value = {this.state.email} title="כתובת האימייל חייבת להיות חוקית." required onChange={this.handleChange}></Input>
                    <Label for="passwordBox">סיסמא </Label>
                    <Input id="passwordBox" type="password" name="password"  required onChange={this.handleChange}></Input>
                    <Label for="phoneBox">מספר פלאפון </Label>
                    <Input id="phoneBox" type="tel" name="phone"  title="מספר הפלאפון חייב להיות חוקי ובעל 10 ספרות בלבד" pattern ="[0-9]{10}" required onChange={this.handleChange}></Input>
                    <Label for="firstNameBox">שם פרטי </Label>
                    <Input id="firstNameBox" type="text" name="fName"  title="שם פרטי חייב להיות באותיות בלבד" required onChange={this.handleChange}></Input>
                    <Label for="lastNameBox">שם משפחה </Label>
                    <Input id="lastNameBox" type="text" name="lName"  title="שם משפחה חייב להיות באותיות בלבד" required onChange={this.handleChange}></Input>
                    <br></br>
                    <Submit type="submit" value="הרשמה"></Submit>
                    <div style ={{height:"50px", color:"white"} }>
                        <Link to="/">?משתמש רשום</Link>
                     </div>
                    </form>  
                </DivForm>
          );
    }
}
 
export default SignUp;