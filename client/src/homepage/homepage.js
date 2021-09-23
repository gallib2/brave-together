import React from 'react';

import './homepage.scss';

class Homepage extends React.Component {

    onStartButtonClick = () => {
        let token = localStorage.getItem('token');

        /*
        if (!token) {
            this.props.history.push('/login');
        }

        else {
            this.props.history.push('/storyCheck');
        }
        */

        //for development, moving directly to storyCheck even without token..
        this.props.history.push({
            pathname: `/storyCheck`,
            state: {
                template: {id: 1, backgroundImg: 'images/frame2.png', templateImg: `images/template1.png`}
            }
        })
    }

    render() {
        return(
            <div className='homepage-container'>
                <h1 className='header'>
                    ברוכים הבאים להעצמה אחת ביום
                </h1>
                <div className='opening-text'>
                    אנו מזמינים אותך ליצור העצמה אישית בהשראת סיפורים של גיבורים
                    וגיבורות מהשואה.
                    המוטו שלנו הוא "לעשות" ולא לשכוח. באתר אתם מוזמנים
                    לקרוא סיפורי גבורה, העצמה אישית וסיפורים 
                    מעוררי השראה. אנו מזמינים אתכם לקרוא את 
                    הסיפורים והעדויות של הגיבורים שלנו ולבחור את
                    הציטוט אותו תרצו לשתף. בין אם זה ביום הזיכרון,
                    בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה,
                    אנו מזמינים כל אחד למצוא את הציטוט אליו 
                    הוא מתחבר, לעצב אותו באתר ולשתף היכן שתרצו לעוד
                    מידע על העמותה וכלל הפרויקטים שלנו מוזמנים לאתר 
                    מצעד הגבורה
                </div>
                <button onClick={() => this.onStartButtonClick()}>בואו נתחיל</button>
            </div>
        );
    }
};

export default Homepage;