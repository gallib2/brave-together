import React from "react";
import BackButton from '../backButton/backButton';
import axios from 'axios';
// import ReactDOM from "react-dom";
import "./StoryUpload.css";

class StoryUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      text: "",
      date: "",
      tags: [],
      country: "Israel"
    };
  }

  getCurrDate(){
   



  }

  componentDidMount() {
    
    
    var today = new Date();

    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, "0");
    let day = today.getDate();

    this.setState({date: year + "-" + month +  "-" + day}, () => {
      console.log("date is " + this.state.date)
    })
    
    // let token = localStorage.getItem('token');
    
    // console.log("in mount")   
    // if (!token) {
    //     this.props.history.push('/')
    // }

    // else {
    //     axios.get("http://localhost:5000/stories", { 
    //         auth: {
    //             username: res.data.token
    //         }
    //     }).then(res => {
    //         if (res.status == '200' || res.status == 'OK') {
    //             console.log("aaaaaaaaaaaa")
    //         } else {
    //             this.props.history.push('/login');
    //         }
    //     });
    }
    

    // this.setState({stories: mock});
// };

// async handleSubmit(event) {

  handleSubmit = async(event) => {
    event.preventDefault();
    
    console.log("button clicked");

    const storyDocument = {
      "title": this.state.title,
      "description": this.state.description,
      "text": this.state.text,
      "date": this.state.date,
      "tags": this.state.tags,
      "country": this.state.country
  };

    let axiosConfig = {
      auth: {username: 
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNjMyNjg3Nzk5Ljk5NTIzM30.jFeXH4uyqJXXvYbcng8CfxYsl2pG6CMtYm8imao-X4Y"}     
      };

    console.log(storyDocument);
    axios.post("http://localhost:5000/stories", storyDocument, axiosConfig) // calling api request to create a new story
    .then(response =>{
         console.log(response);
         alert("!הסיפור הועלה בהצלחה");
         this.props.history.push("/");
    })   
    .catch ( err =>{
      console.log(err)
      this.props.history.push("/storyUpload");
    })
  };


  //Saving every change in object variable
  handleInputChanges = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Splitting the tags into array
  handleTagsChange = (event) => {
    let str = event.target.value;
    this.setState({ tags: str.split(" ") });
  };

  render() {
    return (
      <div className="story-container">
        <form id="form">
          <label for="title">כותרת</label>
          <br></br>
          <input type="text" id="title" name="title" onChange={this.handleInputChanges} required/>
          <br />
          <br />
          <label for="story" className="content">תוכן</label>
          <br></br>
          <textarea id="story" name="text" rows="6" cols="23" onChange={this.handleInputChanges} required="required"
           style={{ resize: "none" }}  />
          <br />
          <label for="title">תגיות</label>
          <br></br>
          <input type="text" id="tags"name="tags" onChange={this.handleTagsChange}/>
          <p>רשמו מספר מילים מרכזיות מהסיפור על מנת לצבור חשיפה גבוהה יותר</p>
          <br></br>
          <div id="button">
          <button type="submit" onClick={this.handleSubmit}
            style={{
              borderRadius: "8px"
            }}
          >העלאת הסיפור</button>
          </div>
        </form>
      </div>
    );
  }
}

export default StoryUpload;
