import React from 'react';

import './text.scss';


class TextEdit extends React.Component {

    onSubmitText = () => {
        this.props.history.push({
            pathname: `/templateEdit`,
            state:
            {
                template: this.props.history.location.state.template
            }
        })
    }

    render() {
        return (
            <div className='text-container'>
                hello from text
                <button onClick={this.onSubmitText}>next</button>
            </div>
        )
    }
}

export default TextEdit;