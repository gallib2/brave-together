import React from "react";
import "./about.scss";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>About Us</h1>
        </div>

        <div className="card">
          <h2>Our Story</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only
          </p>
        </div>
        <div className="card">
          <img alt="Avatar"></img>
        </div>
        <div className="card">
          <img alt="Avatar"></img>
        </div>
        <div className="card">
          <h2>Our Vision</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only
          </p>
        </div>
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only
          </p>
        </div>
        <div className="card">
          <img alt="Avatar"></img>
        </div>
      </div>

      //     <Card style={{ width: '18rem' }}>
      //     <Card.Img variant="top" src="holder.js/100px180" />
      //     <Card.Body>
      //       <Card.Title>Card Title</Card.Title>
      //       <Card.Text>
      //         Some quick example text to build on the card title and make up the bulk of
      //         the card's content.
      //       </Card.Text>
      //       <Button variant="primary">Go somewhere</Button>
      //     </Card.Body>
      //   </Card>
    );
  }
}

export default About;
