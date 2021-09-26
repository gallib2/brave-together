import React from 'react';
import * as htmlToImage from 'html-to-image';
import Draggable from 'react-draggable';
import { CompactPicker } from 'react-color';
import Select from 'react-select';

import mock from './mock';
import './template-edit.scss';
import BackButton from '../backButton/backButton';
// import { Constants } from '../assets';
import { Constants } from '../assets/consts';
// import colored from consts} ;

const closeButtonIcon = 'images/icons/CloseIcon.png'
const logoButtonIcon = 'images/template-images/logo-05.png'
class TemplateEdit extends React.Component {
    constructor(props) {
        super(props);

        this.imageId = 'final-image'
        this.text = this.props.history.location.state.template.text;
        this.chosenTemplate = {};
        this.options = {
            colors: Constants.colors,
            images: Constants.images,
            backgrounds: Constants.backgrounds,
            fonts: Constants.fonts
        }

        this.state = {
            chosenOption: '',
            backgroundImageColor: '',
            backgroundImg: '',
            image: '',
            shareUrl: '',
            pickerColor: '#0000',
            fontSize: '16px',
            fontFamily: ''
        }
    }

    componentDidMount() {
        this.chosenTemplate = mock[0]; // TODO G - get by id

        this.setState({
            backgroundImg: this.chosenTemplate.backgroundImg,
            backgroundImageColor: this.chosenTemplate.backgroundImageColor,
            image: this.chosenTemplate.image,
            fontFamily: this.chosenTemplate.fontFamily,
            fontSize: this.chosenTemplate.fontSize
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
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize
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


    getFontStyle = () => {
        return {
            fontSize: this.state.fontSize,
            fontWeight:"500",
            direction:"rtl"
        }
    }

    getOptionStyle = (chosenOption, option) => {
        const style = {
            width: '70px',
            height: '70px',
            marginLeft: '5px',
            marginBottom: '15px'
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
                break;
            case 'backgrounds':
                style.backgroundImage = `url(${option})`;
                style.width = '100px';
                style.height = '100px';
                style.backgroundRepeat = 'no-repeat';
                style.backgroundSize = 'cover';
                style.backgroundPosition = 'center';
                break;
            case 'fonts':
                style.backgroundImage = `url(${option})`;
                style.width = '150px';
                style.height = '100px';
                style.backgroundSize = 'contain';
                style.backgroundPosition = 'center';
                break;    
            default:
                break;
        }

        return style;
    }

    setBackgroundColor = (color) => {
        this.setState({ backgroundImageColor: color, backgroundImg: ''});
    }

    getFontFamily = (option) => {
        // console.log(option);

        let temp = option.split("/");
        let arr = temp[temp.length -1 ]
        let temp2 = arr.split(".")
        return(temp2[0])
    }

    handleFontChange = (option) => {
        this.setState({ fontSize: option })
        console.log(option)
    }

    onOptionStyleClick = (chosenOption, option) => {

        switch (chosenOption) {
            case 'colors':
                this.setState({ backgroundImageColor: option, backgroundImg: "" });
                break;
            case 'images':
                this.setState({ image: option });
                break;
            case 'backgrounds':
                this.setState({ backgroundImg: option });
                break;
            case 'fonts':
                this.setState({ fontFamily: this.getFontFamily(option)})
                break;
            default:
                break;
        }
    }

    renderSpecificOptions = () => {
        return (
            <div className='drawer-content'>
                <div className='drawer-content-header'>
                    <span className='drawer-content-close' style = {{backgroundImage: `url(${closeButtonIcon})`}} onClick={() => this.setState({ isOptionChosen: false })}/>
                    {/* <span className='drawer-content-title'> {this.state.chosenOption === 'colors' ? 'צבע' : 'תמונה'}</span> */}
                    <span className='drawer-content-title'> {this.state.chosenOption === 'colors' ? 'צבע' 
                    : this.state.chosenOption === 'images' ?  'תמונה'
                    : this.state.chosenOption === 'backgrounds'? 'רקע'
                    : 'פונט'}</span>
                    
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
                        <div className='colorPicker'>{this.state.chosenOption === 'backgrounds' && 
                        <CompactPicker
                        color={this.state.pickerColor}
                        onChange={ (color) => {
                            this.setState({ pickerColor: color})
                            this.setBackgroundColor(color.hex)}}
                            />}
                        </div>
                        <div className='fontSizes'>{this.state.chosenOption === 'fonts' && 
                        <Select options={Constants.options} 
                        menuPlacement="top"
                        size={this.state.fontSize}
                        onChange={(size) => {console.log(size.value)
                            this.setState({fontSize: size.value}) 
                        } }
                        placeholder="גודל" 
                        />
                    }</div>
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
            });


        htmlToImage.toPng(document.getElementById(this.imageId))
            .then((dataUrl) => {

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
        const download = 'images/icons/download.png';
        const colorFill = 'images/icons/color-fill.png';
        const image = 'images/icons/imgs.png';
        const font = 'images/icons/font.png';

        return (
            <div className='drawer-content'>
                <div className='edit-options'>
                    <div>
                        <div className='edit-option' style={{ backgroundImage: `url(${download})` }}
                            onClick={() => this.saveImage()}/>
                        <div className='edit-option-text'>הורדה</div>
                    </div>

                    <div>
                        <div className='edit-option' style={{ backgroundImage: `url(${font})` }}
                            onClick={() => this.getContentOptions('fonts')} />
                        <div className='edit-option-text'>פונט</div>
                    </div>

                    <div>
                        <div className='edit-option' style={{ backgroundImage: `url(${image})` }}
                            onClick={() => this.getContentOptions('images')} />
                        <div className='edit-option-text'>תמונות</div>
                    </div>

                    <div>
                        <div className='edit-option' style={{ backgroundImage: `url(${colorFill})` }} 
                        onClick={() => this.getContentOptions('backgrounds')}/>
                        <div className='edit-option-text'>רקעים</div>
                    </div>
                </div>
                
                <div className='share-buttons'>
                    <div onClick={this.shareImg}>שתפו</div>
                </div>
            </div>
        );
    }
//style={{backgroundImage: `url(${logoButtonIcon})`, width:"50px", height:"50px"}}
    render() {
        return (
            
            <div className='template-edit-container'>
                <BackButton history={{...this.props.history}}/>
                <div className='template-edit-title'>עצבו את מסר הגבורה שלכם</div>
                <div className='image-container'>
                    <div className='image-body' id={this.imageId} style={this.getBGStyle()}>
                        <Draggable bounds={{top: -50, left: -50, right: 200, bottom: 200}}>
                              <div style={this.getImgStyle()}></div>
                        </Draggable>
                        <Draggable bounds={{top: -150, left: -100, right: 100, bottom: 100}}>
                            <div style={this.getFontStyle()}>{this.text}</div>
                        </Draggable>
                        {/* <img src={logoButtonIcon} /> */}
                        <div style={{backgroundImage: `url(${logoButtonIcon})`, width: '60%',
                            height: '50px',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center', margin: "0 auto"}}></div>
                    </div>
                </div>
                <div className="drawer-container">
                    {!this.state.isOptionChosen && this.getDrawerContent()}
                    {this.state.isOptionChosen && this.renderSpecificOptions()}
                </div>
            </div>
        )
    }
}

export default TemplateEdit;