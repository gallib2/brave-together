import React from 'react';
import AWS from 'aws-sdk'

import './share.scss';

const S3_BUCKET ='team-23';
const REGION ='us-east-1';

// AWS.config.update({
//     accessKeyId: '',
//     secretAccessKey: ''
// })

AWS.config.update({
    // region: "eu-west-1",
    // endpoint: "s3://team-23",
    // header: 'Access-Control-Allow-Origin:*',
    accessKeyId: "AKIAXYIQCGYTQJ74WDUQ",
    secretAccessKey: "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"
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})



function imageBase64ToBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/png'});
}



class Share extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            selectedFile: props.history.location.state.shareUrl
        }
    }

    uploadFile = () => {

        const params = {
            ACL: 'public-read',//'public-read-write',
            Body: imageBase64ToBlob(this.props.history.location.state.shareUrl),
            Bucket: S3_BUCKET,
            Key: 'test.png',
            ContentEncoding: 'base64',
            ContentType: 'image/png'
        };

        // myBucket.putObject(params)
        myBucket.upload(params)
            .on('httpUploadProgress', (evt) => {
                this.setState({progress: Math.round((evt.loaded / evt.total) * 100)})
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }

    shareImage = () => {
        // this.uploadFile();
    }


    render() {
        const FB = 'images/icons/FBicon.png';
        const instegram = 'images/icons/InstIcon.png';
        const twitter = 'images/icons/TwitterIcon.png';
        const whatsapp = 'images/icons/whatsappIcon.png';

        return (
            <div className='share-options-container'>
                <img style={{width: '300px', height: '300px'}} src={this.props.history.location.state.shareUrl}></img>
                <div className='share-options-drawer'>
                    <div className='title'>שתפו ב</div>
                    {/* <a href={`https://www.facebook.com/sharer.php?imageurl='https://team-23.s3.amazonaws.com/test.png'}`}>clicklcicl</a> */}
                    <div className='share-options'>
                        {/* <div onClick={this.uploadFile}>upload to AWS ?</div> */}
                        <div className='share-option' style={{backgroundImage: `url(${FB})`}}
                            onClick={() => this.shareImage('facebook')} />
                        <div className='share-option' style={{backgroundImage: `url(${instegram})`}} 
                            onClick={() => this.shareImage('instagrem')}/>
                        <div className='share-option' style={{backgroundImage: `url(${whatsapp})`}} 
                            onClick={() => this.shareImage('whatsapp')}/>
                        <div className='share-option' style={{backgroundImage: `url(${twitter})`}}
                            onClick={() => this.shareImage('twitter')} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Share;