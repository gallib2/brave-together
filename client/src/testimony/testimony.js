import React from 'react';

import './testimony.scss';

import mock from './mock';
import BackButton from '../backButton/backButton';

const buttonOptions = {
    chooseText: 'chooseText',
    textOptions: 'textOptions',
    submitChoice: 'submitChoise'
}

class Testimony extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testimony: {},
            toShowTexts: false,
            freeSelection: "",
            buttonToShow: buttonOptions.chooseText
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

    onTextChosen = (text) => {
        const template = {
            backgroundImg: this.props.history.location.state.template.backgroundImg,
            text: text
        }
        this.props.history.push({
            pathname: `/textEdit`,
            state:
            {
                template: template
            }
        })
    }


    getTexts = () => {
        return (
            <div className='texts-container'>

                <div className='choose-text-title'> טקסט לבחירה
                <span className='close-icon' onClick={() => this.setButtonContent(buttonOptions.chooseText)} >X</span>
                </div>
                <div className='optional-texts-container'>
                    {this.state.testimony.optionalTexts.map((text, index) => {
                        return (
                            <button className='optional-text' onClick={() => this.onTextChosen(text)} key={index}>{text}</button>
                        );
                    })}
                    <button className='optional-text free-choice' onClick={this.getFreeChoice}>סימון חופשי</button>
                </div>
            </div>
        );
    }

    getFreeChoice = (event) => {
        this.setButtonContent(buttonOptions.submitChoice);

        document.addEventListener('selectionchange', this.handelSelectionChange); // tODO G - remove the event
    }

    handelSelectionChange = () => {
        //chack text "selection = window.getSelection().toString();"
        const freeSelection = window.getSelection().toString()
        this.setState({ freeSelection })
    }

    setButtonContent = (choice) => {
        this.setState({ buttonToShow: choice })
    }

    onSubmitFreeSelection = () => {
        if(!this.state.freeSelection) {
            alert('your selection is empty, please select text or choose from the options');
            return;
        }

        document.removeEventListener('selectionchange', this.handelSelectionChange);
        this.onTextChosen(this.state.freeSelection);
    }

    buttonContent = () => {
        switch (this.state.buttonToShow) {
            case buttonOptions.chooseText: {
                return (
                    <div className='choose-text-title' onClick={() => this.setButtonContent(buttonOptions.textOptions)}>בחרו טקסט</div>
                );
            }
            case buttonOptions.textOptions: {
                return this.getTexts();
            }
            case buttonOptions.submitChoice: {
                return (
                    <React.Fragment>
                        <div className='choose-text-title' onClick={() => this.setButtonContent(buttonOptions.textOptions)}>חזרה לאפשרויות</div>
                        <div className='choose-text-title' onClick={this.onSubmitFreeSelection}>אישור</div>
                    </React.Fragment>
                );
            }
            default:
                break;
        }
    }

    render() {
        return (
            <div className='testimony-container'>
                <BackButton history={{ ...this.props.history }} />
                <div className='testimony-content'>
                    <h5>שלב 2 מתוך 4 </h5>
                    <h3>בחרו טקסט מעצים והוסיפו אותו טמפלייט שלכם.ן </h3>
                    <div className='contant-title'>{this.state.testimony.title}</div>
                    <div className='content-container'>
                        <div className='content- body'>
                            {this.state.testimony.testimony}
                        </div>
                    </div>
                </div>
                <div className='choose-text'>
                    {
                        this.buttonContent()
                    }
                </div>
            </div>
        )
    }
}

export default Testimony;