import React from 'react';
import * as htmlToImage from 'html-to-image';
import mock from './mock';
import Draggable from 'react-draggable';

import './template-edit.scss';

// https://codepen.io/sosuke/pen/Pjoqqp

const images = [
    'images/template-images/Candle.png',
    'images/template-images/davivstar.icon-pic.png',
    'images/template-images/flower-01.png',
    'images/template-images/flower-02-01.png',
    'images/template-images/olive-leaf-04.png',

    'images/template-images/flower-03-01-01.png',
    'images/template-images/hand-01.png',
    'images/template-images/hands-01.png',
    'images/template-images/paperboat-01.png',
    'images/template-images/star-of-david-01.png',
]

const colors = ['#C2DDC8', '#99BFB3', '#E2C547', '#CDD1CC', '#ACACAC', '#D9C1B8', '#D97373', '#2E5559', '#F29966', '#BF4215']

class TemplateEdit extends React.Component {
    constructor(props) {
        super(props);

        this.imageId = 'final-image'
        this.text = this.props.history.location.state.template.text;
        this.chosenTemplate = {};
        this.options = {
            colors: colors,
            images: images
        }

        this.state = {
            chosenOption: '',
            isOptionChosen: false,
            backgroundImageColor: '',
            backgroundImg: '',
            image: '',
            shareUrl: '',

        }
    }

    componentDidMount() {
        this.chosenTemplate = mock[0]; // TODO G - get by id

        this.setState({
            backgroundImg: this.chosenTemplate.backgroundImg,
            backgroundImageColor: this.chosenTemplate.backgroundImageColor,
            image: this.chosenTemplate.image
        })
    }

    getBGStyle = () => {
        return {
            backgroundImage: `url(${this.state.backgroundImg})`,
            width: '300px',
            height: '300px',
            backgroundSize: '300px 300px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: this.state.backgroundImageColor,
            // display: 'flex'
        }
    }

    getImgStyle = () => {
        return {
            backgroundImage: `url(${this.state.image})`,
            width: '150px',
            height: '150px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
            // display: 'flex'
        }
    }


    getOptionStyle = (chosenOption, option) => {
        const style = {
            width: '70px',
            height: '70px',
            marginLeft: '5px',
            marginBottom: '5px'
        };
        switch (chosenOption) {
            case 'colors':
                style.backgroundColor = option;
                break;
            case 'images':
                style.backgroundImage = `url(${option})`;
                style.backgroundRepeat = 'no-repeat';
                style.backgroundSize = 'contain';
                style.backgroundColor = '#ffffff';
                style.backgroundPosition = 'center';
            default:
                break;
        }

        return style;
    }

    onOptionStyleClick = (chosenOption, option) => {

        switch (chosenOption) {
            case 'colors':
                this.setState({ backgroundImageColor: option });
                break;
            case 'images':
                this.setState({ image: option });
                break;
            default:
                break;
        }
    }

    renderSpecificOptions = () => {
        return (
            <div className='drawer-content'>
                <div className='drawer-content-header'>
                    <span className='drawer-content-title'>title</span>
                    <span className='drawer-content-close' onClick={() => this.setState({ isOptionChosen: false })}>
                        X
                    </span>
                </div>
                <div className='drawer-options'>
                    {
                        this.options[this.state.chosenOption].map((option, index) => {
                            return (
                                <div
                                    key={index}
                                    style={this.getOptionStyle(this.state.chosenOption, option)}
                                    onClick={() => this.onOptionStyleClick(this.state.chosenOption, option)}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    getContentOptions = (chosenOption) => {
        this.setState({ isOptionChosen: true, chosenOption: chosenOption });
    }

    saveImage = () => {

        // htmlToImage.toJpeg(document.getElementById(this.imageId), { quality: 0.95 })
        // .then(function (dataUrl) {
        //     var link = document.createElement('a');
        //     link.download = 'my-image-name.jpeg';
        //     link.href = dataUrl;
        //     link.click();
        // });

        htmlToImage.toPng(document.getElementById(this.imageId))
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.png';
                link.href = dataUrl;
                link.click();
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    shareImg = () => {

        htmlToImage.toCanvas(document.getElementById(this.imageId))
            .then((canvas) => {
                // function imageBase64ToBlob(dataURI) {
                //     var binary = atob(dataURI.split(',')[1]);
                //     var array = [];
                //     for(var i = 0; i < binary.length; i++) {
                //         array.push(binary.charCodeAt(i));
                //     }
                //     return new Blob([new Uint8Array(array)], {type: 'image/png'});
                // }
                // // document.body.appendChild(canvas);
                // console.log('canvas: ', canvas.toDataURL())
                // const blob = imageBase64ToBlob(canvas.toDataURL());

                // this.setState({shareUrl: dataUrl})

                // this.props.history.push({
                //     pathname: `/share`,
                //     state:
                //     {
                //         shareUrl: dataUrl,
                //     }
                // })
            });


        // htmlToImage.toJpeg(document.getElementById(this.imageId), { quality: 0.95 })
        // .then((dataUrl) => {
        //     this.setState({shareUrl: dataUrl})

        //     this.props.history.push({
        //         pathname: `/share`,
        //         state:
        //         {
        //             shareUrl: dataUrl,
        //         }
        //     })
        // });


        htmlToImage.toPng(document.getElementById(this.imageId))
            .then((dataUrl) => {
                // var link = document.createElement('a');
                // link.download = 'my-image-name.png';
                // link.href = dataUrl;
                // // link.click();
                // return dataUrl;

                this.setState({ shareUrl: dataUrl })

                this.props.history.push({
                    pathname: `/share`,
                    state:
                    {
                        shareUrl: dataUrl,
                    }
                })
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    getDrawerContent = () => {
        const add = 'images/icons/add.png';
        const colorFill = 'images/icons/color-fill.png';
        const image = 'images/icons/imgs.png';
        const font = 'images/icons/font.png';

        return (
            <div className='drawer-content'>
                <div className='edit-options'>
                    <div className='edit-option' style={{ backgroundImage: `url(${add})` }} />
                    <div className='edit-option' style={{ backgroundImage: `url(${colorFill})` }}
                        onClick={() => this.getContentOptions('colors')} />
                    <div className='edit-option' style={{ backgroundImage: `url(${image})` }}
                        onClick={() => this.getContentOptions('images')} />
                    <div className='edit-option' style={{ backgroundImage: `url(${font})` }} />
                </div>
                <div className='save-buttons'>
                    <div onClick={this.shareImg}>share</div>
                    <div onClick={this.saveImage}>save</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='template-edit-container'>
                <div className='template-edit-title'>design</div>
                <div className='image-container'>
                    <div id={this.imageId} style={this.getBGStyle()}>
                        <Draggable>
                            <div style={this.getImgStyle()}></div>
                        </Draggable>
                        <Draggable>
                            <div >{this.text}</div>
                        </Draggable>
                    </div>
                </div>
                <div className="drawer-container">
                    {!this.state.isOptionChosen && this.getDrawerContent()}
                    {this.state.isOptionChosen && this.renderSpecificOptions()}
                </div>
                {/* <div className="fb-share-button" 
                    data-href="https://s3.amazonaws.com/team-23/test.png"
                    data-layout="button_count">
                    </div> */}
            </div>
        )
    }
}

export default TemplateEdit;