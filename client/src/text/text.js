import React from 'react';

import './text.scss';

const images = [
    'images/icons/CloseIcon.png',
    'images/icons/VeeIcon.png',
]
class TextEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fixedText: this.props.history.location.state.template.text
        };
    }

    onSubmitText = () => {
        this.props.history.push({
            pathname: `/templateEdit`,
            state:
            {
                template: this.props.history.location.state.template
            }
        })
    }

    onPickAnotherText = () => {
        this.props.history.goBack()
    }
        

    handleChange = (event) => {
        this.setState({fixedText: event.target.value});
      }
    

    render() {
        return (
            <div className='text-container'>
                <div className='continue-back'>
                    <div className='reject-button' style = {{backgroundImage: `url(${images[0]})`}} onClick={this.onPickAnotherText}/>
                    <div className='accept-button' style = {{backgroundImage: `url(${images[1]})`}} onClick={this.onSubmitText}/>
                </div>
                    <h3>ערכו את טקסט</h3>
                
                 <div className='text-area'>
                    <textarea className='text-box'  value={this.state.fixedText} onChange={this.handleChange} maxLength={256}/>
                 </div>
               
            </div>
        )
    }
}

export default TextEdit;