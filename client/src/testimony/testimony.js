import React from 'react';

import './testimony.scss';

import mock from './mock';

class Testimony extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testimony: {},
            toShowTexts: false,
        }
    }

    componentDidMount() {
        console.log('this.props.history.location.state: ', this.props.history.location.state);
        this.getTestimonyData()
    }

    getTestimonyData = () => {
        const chosenTestimony = this.props.history.location.state.testimony;
        const testimony = mock.find(story => story.id === chosenTestimony.id);
        this.setState({ testimony: testimony });
    }


    getTexts = () => {
        return (
            <div className='texts-container'>
                <div className='choose-text-title'> טקסט לבחירה
                <span className='close-icon' onClick={this.openTextsOptions} >X</span>
                </div>
                <div className='optional-texts-container'>
                    {this.state.testimony.optionalTexts.map((text, index) => {
                        return (
                            <button className='optional-text' key={index}>{text}</button>
                        );
                    })}
                    <button className='optional-text'>סימון חופשי</button>
                </div>
            </div>
        );
    }

    openTextsOptions = (event) => {
        this.setState({ toShowTexts: !this.state.toShowTexts })
    }

    render() {
        return (
            <div className='testimony-container'>
                <div className='testimony-content'>
                    <h5>שלב 2 מתוך 4 </h5>
                    <h3>בחרו טקסט מעצים והוסיפו אותו לטיימפליט שלכם.ן </h3>
                    <div>{this.state.testimony.title}</div>
                    <div className='content-container'>
                        <div className='content'>
                            {this.state.testimony.testimony}
                        </div>
                    </div>
                </div>
                <div className='choose-text'>
                    {this.state.toShowTexts ?
                        this.getTexts() :
                        <div className='choose-text-title' onClick={this.openTextsOptions}>בחר טקסט</div>
                    }
                </div>
            </div>
        )
    }
}

export default Testimony;