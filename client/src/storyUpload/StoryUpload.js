import React from "react";
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
    };
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    document.getElementById("form").checkValidity();
    console.log("button clicked");
    // axios
    //   .post('http://localhost:5000/stories', this.state)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    var today = new Date();

    this.setState({
      date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
    });
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
          <input
            type="text"
            id="title"
            name="title"
            pattern="[0-9]{3}"
            required
          />
          <br />
          <br />
          <label for="story" className="content">
            תוכן
          </label>
          <br></br>
          <textarea
            id="story"
            name="text"
            rows="6"
            cols="23"
            onChange={this.handleInputChanges}
            required="required"
            style={{ resize: "none" }}
          />
          <br />
          <label for="title">תגיות</label>
          <br></br>
          <input
            type="text"
            id="tags"
            name="tags"
            onChange={this.handleTagsChange}
          />
          <p>רשמו מספר מילים מרכזיות מהסיפור על מנת לצבור חשיפה גבוהה יותר</p>

          <br></br>
          <div id="button">
          <button
            type="submit"
            onClick={this.handleSubmit}
            style={{
              borderRadius: "8px"
            }}
          >
            העלאת הסיפור
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default StoryUpload;
