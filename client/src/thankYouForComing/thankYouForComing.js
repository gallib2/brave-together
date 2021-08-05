import React from 'react';

import './thankYouForComing.scss';

class ThankYouForComing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onSubmitText = () => {
        this.props.history.push({
            pathname: `/`,
            state:
            {
                template: null,
                text: null,
                fixedText: null
            }
        })
    }

    render() {
        return (
            <div className='thankYou-container'>
                <h2>תודה שלקחת חלק בשימור והעצמת סיפורי הגבורה</h2>
                <React.Fragment>
                <div>
                    <h3>האם תרצה לעצב מסר נוסף?</h3>
                </div>             
                        <button className='thankYou-container button-style' onClick={this.onSubmitText}>התחילו כאן</button>
                </React.Fragment>
            </div>
        )
    }
}

export default ThankYouForComing;