import React from 'react';

import './storyCheck.scss';
import BackButton from '../backButton/backButton';

import axios from 'axios';

const mock = [
    { id: 1, category: 2, title: 'סיפורה של משפחת וינרב ערב ליל הסדר', storyImg: 'https://s3-alpha-sig.figma.com/img/cece/efeb/edb4dfebfefa0ec110fde46a32f44700?Expires=1617580800&Signature=IbdGK2K5OpthyN9QpU2EWHj0Mf8H8JuWl4GpwH~GqJ7ZpCqLbdS4BnaSqC7QAFH2Y~8BGFGVjeiee~VRn7jVeybi5uMlmNtPuszDGmmPC~LwVDtJHs6pADP9U7HpxbHxC56EbmnvXqTAAOnkGQ4ylPRHdiV3nAafWySRECfE3Wd6K9xn0g7ZFQG6MAgJWunQ0TqCNabmoNLOFl5ajNOSwfX7w4~dFr9tgPP6FQ8kVYISI9R5db1PxWWG~UXdfq6M5u1lpHmfNSYLfmUzO0wsvJKky4IfWOJi5A9g9w37Ckh1I58Jx9exhMWJQN6pEo25RLfhvZUEJw3zK90Mb1wcRQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 2, category: 2, title: 'הפסח האחרון בגטו וארשה', storyImg: 'https://s3-alpha-sig.figma.com/img/188d/619f/17d46cbffab645584e34a6e6a5cc3446?Expires=1617580800&Signature=WdUbIasuZCOdakV5-YOszQvTPHJt3mrKCKBnMehcdQ9AJdQJKjE2lkSaJu-QEE0XdG39URwZoxHcbw8ddBG78YvnPCa-LSZ~-~yNjsYV7IuJuRAHxPomeZl7HkInibWsAesmjfpirhJuSz7bdtqSYau5OYriuEUdU1fLxRCIJcDdp4kOTpDDjbwa7IGbrTykGrZ0kprRTNYy8VRzZ9pm4Cs3ski2XMQFhSH4ddrPLwYVDydWF3HcuH515WLMMMR8PnnhfxU8fqszGXatvOc3nTo9dI26JcuSwAl4c8AZRcBlf68f7tS5PtULNYeRdV8lPgDeEHmLU9500xWtLp~ThQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    { id: 3, category: 2, title: 'פסח האחרון', storyImg: 'https://s3-alpha-sig.figma.com/img/e0a3/df00/82fa5f5578a40b43ca5f5f121a52dc3a?Expires=1617580800&Signature=KYlP3GTFcuZmK8LSLAYhksfXwZWkMBItgU81gW9MmkJpNMSdPXzTHtkpXMT7QqyqJWoE~b0vqVQuapn~naWSXUgHDRzjvUx5Ych3grC4qVpPAvFReftVROhKuruvSRPGHqtaO32C7~WuaCUa~Rq4JXm0y-yabJy9hYOz0KfzGJd6BgxuSkkfefqtdPYBQsAvmqSrtgwX5a5GdBlTE61M9QL7EMphbpkb1XRyxy11d6jiMB4qdEK-qAC-Odhzxt68c77xwcODTcIF3-agXtcU3bWlVZhP8p3wH~c6vEGGXm68txwg0roLNLJxpnt-mVAHQdCvgjOKhq6aFg1sGEpysw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 4, category: 1, title: '"כשאמא שלי בכתה"', storyImg: 'https://www.maariv.co.il/HttpHandlers/ShowImage.ashx?id=386326&w=690&h=407' },
        { id: 5, category: 1, title: 'סיפורה של חנה גוסלר-פיק', storyImg: 'https://www.yadvashem.org/sites/default/files/120_portret.jpg' },
        { id: 6, category: 1, title: 'המסע של שמואל ולינברג', storyImg: 'https://www.yadvashem.org/sites/default/files/willenberg.jpg' }
];

const categories = [
    { id: 0, name: 'הכל' },
    { id: 1, name: 'יהודים מצילים יהודים' },
    { id: 2, name: 'והגדת לבנך - חג הפסח' },
]

class StoryCheck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: categories[0],
            stories: []
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token');
        
        /*
        if (!token) {
            this.props.history.push('/')
        }

        else {
            axios.get("http://localhost:5000/stories", { 
                auth: {
                    username: res.data.token
                }
            }).then(res => {
                if (res.status == '200' || res.status == 'OK') {
                    this.setState({stories: res.data})
                } else {
                    this.props.history.push('/login');
                }
            });
        }
        */

        this.setState({stories: mock});
    }
    

    handleTestimonyClick = (event, testimony) => {
        this.props.history.push({
            pathname: `/testimony`,
            state:
            {
                testimony: testimony,
                template: this.props.history.location.state.template
            }
        })
    }

    handleCategoryChosen = (category) => {
        const newStories = category.id === 0 ? mock : mock.filter((story) => category.id === story.category);

        this.setState({stories: newStories, category: category});
    }

    render() {
        return (
            <div className='storyCheck-container'>
                <BackButton history={{...this.props.history}}/> 
                <h3>בחרו עדות ומתוכה הדגישו את העצמה היומית שלכם.ן</h3>
                <div className='categories'>
                    <div className='category-header'>קטגוריות</div>
                    {categories.map((category, index) => {
                        return (
                            <button className='category' key={index} onClick={() => this.handleCategoryChosen(category)}>{category.name}</button>
                        )
                    })
                    }
                </div>
                <div className='chosen-category'>{this.state.category.name}</div>

                <div className='stories'>
                    {this.state.stories.map((testimony, index) => {
                        return (
                            <div key={index} onClick={(event) => this.handleTestimonyClick(event, testimony)}>
                                <div className='story-img' style={
                                    {
                                        // Need to change to testimony.media[0] because of API structure
                                        background: `url(${testimony.storyImg}) no-repeat center`,
                                        // backgroundSize: 'cover'
                                    }}>
                                    <div className='title'>
                                        <span>{testimony.title}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default StoryCheck;