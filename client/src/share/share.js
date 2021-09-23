import React from 'react';
import AWS from 'aws-sdk';
import BackButton from '../backButton/backButton';

import { 
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    LinkedinIcon,
} from 'react-share';

import './share.scss';

const S3_BUCKET = 'imagestoshare';
const REGION = 'us-east-2';
const IdentityPoolId = 'us-east-2:20f3a166-1792-4bce-86df-a3b0892dd39d'

AWS.config.update({
    region: REGION,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId
    })
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})


class Share extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            selectedFile: props.history.location.state.shareUrl,
            finalUrl: ''
        }
    }

    componentDidMount() {
        this.shareImage();
    }

    shareImage = () => {
        const image = this.props.history.location.state.shareUrl

        const S3ImageUrl = this.addPhoto('images', image);

        // this.uploadFile();
        //thankYouForComing
        /*
        this.props.history.push({
            pathname: `/thankYouForComing`
        })
        */
    }

    addPhoto = (albumName, image) => {
        const albumPhotosKey = encodeURIComponent(albumName) + "/";

        // just to have a unique name.. need to think about something else
        //const photoKey = albumPhotosKey + new Date().toDateString().split(" ").join("") + '.png';
        const photoKey = albumPhotosKey + 'myImage' + '.png';

        fetch(image)
            .then(res => res.blob())
            .then(res => {
                const upload = new AWS.S3.ManagedUpload({
                    params: {
                      Bucket: S3_BUCKET,
                      Key: photoKey,
                      Body: res,
                      ContentType: 'image/png'
                    }
                  });

                  const promise = upload.promise();

                  promise.then(
                    function(data) {
                      alert("Successfully uploaded photo.");
                      console.log(data);

                      return data;
                    },
                    function(err) {
                      return alert("There was an error uploading your photo: ", err.message);
                    }
                  ).then(data => this.setState({finalUrl: data.Location}));
            })
      }


    render() {
        //  *** Change to finalUrl (url of image in S3) ***
        const sharedUrl = 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181010131059-australia-best-beaches-cossies-beach-cocos3.jpg';

        return (
            <div className='share-options-container'>
                <BackButton history={this.props.history}/>
                <div className='share-options-title'>עצבו את מסר הגבורה שלכם.ן</div>
                <div className='image-container'>
                    <div className='image-container-border'>
                        <img style={{ width: '300px', height: '300px' }} src={this.props.history.location.state.shareUrl}></img>
                    </div>
                </div>

                <div className='share-options-drawer'>
                    <div className='title'>שתפו ב</div>

                    <div className='share-options'>
                    {/* <a href={`https://www.facebook.com/sharer.php?imageurl='https://team-23.s3.amazonaws.com/test.png'}`}>clicklcicl</a> */}
                    <div className='share-option-container'>
                        <FacebookShareButton
                             url = {sharedUrl}  >
                            <FacebookIcon size={50} round={true}  ></FacebookIcon>
                        </FacebookShareButton>
                        </div>
                  
                    <div className='share-option-container'>
                        <LinkedinShareButton
                             url = {sharedUrl}  >
                            <LinkedinIcon size={50} round={true}  ></LinkedinIcon>
                        </LinkedinShareButton>
                        </div>

                        <div className='share-option-container'>
                            <WhatsappShareButton
                            url={sharedUrl} >
                                <WhatsappIcon size={50} round={true}/>
                            </WhatsappShareButton>
                        </div>
                        <div className='share-option-container'>
                        <TwitterShareButton
                            url={sharedUrl} >
                                <TwitterIcon size={50} round={true}/>
                            </TwitterShareButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Share;