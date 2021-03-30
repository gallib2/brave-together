import React from 'react';

import './backButton.scss';


class BackButton extends React.Component {

    onBackButtonClick = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className='go-back'>
                <button onClick={this.onBackButtonClick}>back</button>
            </div>
        )
    }
}

export default BackButton;