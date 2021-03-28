import React from 'react';

import './template.scss';

const mock = ["template 1", "template 2", "template 3"];

class Template extends React.Component {

    test = () => {
        console.log('props: ', this.props)
        this.props.history.push({
            pathname: `/text`,
        })
    }
    
    render() {
        return (
            <div className='template-container'>
                hello
                {
                    mock.map((template, index) => {
                        return (
                            <button key={index} onClick={this.test}>template name: {template}</button>
                        )
                    })
                }
            </div>
        )
    }
}

export default Template;