import React, { Component } from 'react';
import {Submit, Input, DivForm, Input2, Label2, Header, Label,LogoImg,Body} from './Design/styledComponents';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from '../assets/images/Logo.jpg';
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
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
       
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json  ',
                "Access-Control-Allow-Origin": "*",
            }
          };
        
        await axios.get("http://localhost:5000/token" ,{ 
            auth: {
                username: this.state.email,
                password: this.state.password
            }
        } ) // calling api request to create a new user
        .then(response =>{
             localStorage.setItem('token',response.data.token);
             
             alert("logged in successfully!");
             this.props.history.push("/");
        });   
    } 
    
    render() {    
        document.body.style.background = "rgba(255, 255, 255, 0.1) url('https://brave-together.com/wp-content/uploads/2020/04/IMG_3198-2-1.jpg')" ;
        document.body.style.backgroundSize = "100vw 100vh"
        return (
                <DivForm>
                    <LogoImg src = "https://brave-together.com/wp-content/uploads/2021/05/%D7%9C%D7%95%D7%92%D7%95-%D7%A8%D7%99%D7%91%D7%95%D7%A2%D7%99-%D7%A9%D7%A7%D7%95%D7%A3-300x300.png" width="128" height="128"></LogoImg>
                    <Header>התחברות</Header>
                    <form onSubmit={this.handleSubmit}>
                    <Label for="emailBox">כתובת אימייל </Label>
                    <Input id="emailBox" type="email" name="email" value = {this.state.email} title="כתובת האימייל חייבת להיות חוקית." required onChange={this.handleChange}></Input>
                    <Label for="passwordBox">סיסמא </Label>
                    <Input id="passwordBox" type="password" name="password"  required onChange={this.handleChange}></Input>
                    <br></br>
                    <Submit type="submit" value="הרשמה"></Submit>
                    </form>
                    <div style ={{height:"50px", color:"white"} }>
                        <Link to="/">פתיחת חשבון חדש</Link>
                     </div>
                     <br></br>
                </DivForm>
          );
    }
}
 
export default Login;