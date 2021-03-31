import React from 'react';

import './text.scss';

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
                    <button className='reject-button' onClick={this.onPickAnotherText}>X</button>
                    <button className='accept-button' onClick={this.onSubmitText}>V</button>
                </div>
                    <h3>ערכו טקסט</h3>
                
                 <div className='text-area'>
                    <textarea className='text-box'  value={this.state.fixedText} onChange={this.handleChange} maxLength={256}/>
                 </div>
               
            </div>
        )
    }
}

export default TextEdit;