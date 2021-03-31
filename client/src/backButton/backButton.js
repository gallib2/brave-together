import React from 'react';

import './backButton.scss';

const backButtonIcon = 'images/icons/Back.png'
class BackButton extends React.Component {

    onBackButtonClick = () => {
        this.props.history.goBack()
    }

    render() {
        return (

            
            <div className='go-back' style = {{backgroundImage: `url(${backButtonIcon})`}} onClick={this.onBackButtonClick}/>
               
        )
    }
}

export default BackButton;