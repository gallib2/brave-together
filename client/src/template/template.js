import React from 'react';

import './template.scss';


const mock = [
    // {id: 1, backgroundImg: 'images/frame2.png', templateImg: `images/template1.png`},
    // {id: 1, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/be4c/b4f4/34e6f82c825499c3af763293b82349ba?Expires=1618185600&Signature=EPKMLK4C7wLvG~PGDIh1pBo~L9pmRm7FfY4h5SB8X4ZjxHV9XJvhlh0GYTiudEL5ykRtWoiqgecGMzTUzm5Egfurj3GLWXaA2B5mkvewKFlh4GqYzu-5sg6H2dcYF-eti3gwrkbq2OCsachMChJYsBFEeCsYtau6sKVmq4qEzwDh~uDIERHnLbr4XV47z3We2NJrzIiHq2OPg-r~kQOw8Y0SNq8uVvTfpXCvGoKpLaoUJq8kWgmGY-vQFYf03gq5Nk9hYZOPSo6DlngWF-bwmDB1Md2dr-4wzDlKB8wjbk8bAwpmYDG0MmtjHQRiCCIAG3~vm1K8qHJfNPMqTaHQOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 1, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/de96/59d9/f547a40dd86170ac7841158a99cb1258?Expires=1618185600&Signature=ETRPd7BrLDtj~4wUcm4NOBlFFF6gTW55RXWAzITelRGFL3ez1T05XzbnaraP9ri8dulRyDmkayrvrCIsC4NJwP0MX3CJ7t7FanU15a2ScsMRIBJDlimg9XV-9PIYvqH7j8P8Cgw-rHZe~Q4sEt~Az1sS5fJQ2v2pVqBVYj~sVsXKFdvJQjGmX9m6cq55CvHKFMm~lKV8ojll9UfaWhZMhN7qDLO64Cjgd-YEdiuHa3EXp~A1n6eUvelhbwId3RmE9HNJGiQrOxZ9X9C5Ksx7U3Oq1oUfk5VXOgrhA8FQcbtX58AxqSMQ53nsLT3reZ68Sx4mrPoIVz-vo10qix7-Eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 2, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/8ec7/337e/c093c3dc478b854b975a99b956169828?Expires=1618185600&Signature=NGR50zbZcpYGq4H8-ZjxDQy7JOZfx5lWcUrwHt8W2lRFCZYGXwp19lvwAv-TkuvEZyALLFQ0fUEpY10yZl7C05olixgxG1r9nB1237bOUQ7sBd~o~hM1OJONF0yLpPlGCLwKXRbKL9XSVFeq7pq9cqccK3n29hDcBmIiGI5KnW80I~WUvCJzoHd4QgihaOnL9fS7edYbcX-pcgIVzHT98X1a-0rJuchPMvr7BbqTHdFRBNwb8ZfHv0dHj0scP4OTW8~UdyflvuOBhxwN5vH9GnGHPMAAFbUQPonvWMHWdgDvev1MPmBLVkIQqoJQ7wpbd23j0b9Uvwi-TLPQHIhBsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 3, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/6917/a6e6/5220c88b3098075d6c9900f761142805?Expires=1617580800&Signature=BAxi2ut1sjU2r7o9IrLOnPLeffRWqOA0TFug~1SGrb4x~NEyJUaCE3Z5AJjgt0us8GJIxY0LpLt4VNW2v7Yh1ypn5xj5-vE6mVeBxV8po4Njs3m6caGjAWKko0wWBsnZ0XyomRB~AbigrsUCb8oCflTwI0bKHu64HZ9ew0RujiEydoRnn79UscSHrqjerrrLYmYddQVmEFlmtYPCv8oqlvzqqb2~mxs6Gocr9I9qWh48Tbp1~lUbLWt2ll1Dasevs8oFUOTp6u3jbXUuOR7tI1JlYm~I16HOHfLWQKV-i8yWR-LDfM5RxRvGgbLM24ncup4kDTB75rb7Fzn7NlYA6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 4, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/085a/3f31/306ee576787105078e9777197b4d0cce?Expires=1618185600&Signature=EM~5~uiwWBZNr3F4njUnFIJX9SWz0oDYp2Cpep7t6Yil~PnLOkkXnKPN0qQYDH3wZ8yBlT0aG7aylnhmIUJYCpLClZf-I03tou95D00mcTPO7IIIG~D8QJZ27YScq-ibMPajU1F43lDWjmo8pKwmNF9KbpbrDif-pM-Bni5fHOdOMeleCNqFlsDgo-zEDiXnDbozI9mvIa91uT2~vb3Wn39BSuqmNWPkfxn3LLi3EfGQ6gYYfRPH9YCEJNWCqOKYv07NjYmeKN1J98jHyVHgHZqe-v2ffOm8N0P8AeezzPPnrRJaa0-ZtWYVU7RpAlTiYSym63uGQAT8ikiobBRrhw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 5, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/a7e0/dca3/e92ae47ff02cb301a6d3f2e728df4fc6?Expires=1618185600&Signature=Fu0PbfIYeKz2MBjB-hl0~VKnX6Ot-yDvNV3bQAJP-R-XRV6wvqO60XLUY0GSo~Ggl23-a9bf4LZmP9e7u6XUJtbxHG8jO~-JAY4Wupme7lm5dyqy9cAp1hx7NG~SGteqdSIUDbuV-yRPUPnaj~hv6PRmL2NobYq0fstZVpNMMFEMl4EX8-yufmlLZ6x1Y5Anq0kWsBazeSC2ST2gc28zTTI8uVmVprb4k7UUDJF3ePU9DmQat7CQlOZLdy8lXKw-plzgW6r3UDm7z50BRyxViRRMpYYEYz-L65X2El7aJGAYL2wQBv0ZFKH~ZBymJBLS~cyG-Wori308GXZWl0OjDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 6, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/be4c/b4f4/34e6f82c825499c3af763293b82349ba?Expires=1618185600&Signature=EPKMLK4C7wLvG~PGDIh1pBo~L9pmRm7FfY4h5SB8X4ZjxHV9XJvhlh0GYTiudEL5ykRtWoiqgecGMzTUzm5Egfurj3GLWXaA2B5mkvewKFlh4GqYzu-5sg6H2dcYF-eti3gwrkbq2OCsachMChJYsBFEeCsYtau6sKVmq4qEzwDh~uDIERHnLbr4XV47z3We2NJrzIiHq2OPg-r~kQOw8Y0SNq8uVvTfpXCvGoKpLaoUJq8kWgmGY-vQFYf03gq5Nk9hYZOPSo6DlngWF-bwmDB1Md2dr-4wzDlKB8wjbk8bAwpmYDG0MmtjHQRiCCIAG3~vm1K8qHJfNPMqTaHQOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 7, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/1061/79e5/209131b0b8624b3908ca5515be186801?Expires=1618185600&Signature=acVrYZgfS62hEw5ay1A8VxemCjbID6~qWmcWpQbKiSTFAI5c4MHBTYMW0GKWwAvg2V1jHxyX8wTBr8ILlx5xwsYxdEdJj7uqyLo1kCDVbSyWOGKFaxwL5FDGiMD3ugFbml7vJO0J8fMXRMCcol7qXFcWMbETrBJ9pQV49kB3CJ-vLhi~41jiz5lUdPH~A4TBi6VxZOI7BO6BqTb9iznNGuAV6lnnGGlHyvOlhbfbsHddwBtqNTrTtDAkOby~Al~ENqo2tNepUTRvlrGp1cNcLbaHDhgWdeSRIbB-tpzfwM4s-jZC0jPFNrJNidiSri8YnUuhwlK0Ovr-Cx3NeAlR1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {id: 8, backgroundImg: 'images/frame2.png', templateImg: 'https://s3-alpha-sig.figma.com/img/bfa8/1591/27c40080cd2c684bb7d454944a5bae10?Expires=1618185600&Signature=EPCSKuR7fNTq4KAR~F8khtv8z7a6vIRuwHtKLulCUvILP7~V7mIGI5B8oNUjz35Oc2757fycwVvxh36CEW5WCic8yYEjMhtIztQlz0ayOHxl4hJfS5YQJBciMKm407Ku7cld~nVcTbaLeNCTFRQ9li0PsuUHXWcaQ27vGpVnMD0q1iCjc1trZrcxZSjXbCmr8bqQ9YGyeTvAhyEdjYpbJJVerMTCMxTDmGTmmDAi6y9SnIkyzDtPioNcYyGp8lkyKLJrZf1krAPY2yplvhS1N9yeOwiBlkuCmEtyyQaVYkZWPw4Np6dcpdqu2I0B1MtVYWOSSUHbHpo2dR1llEGAVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
];


class Template extends React.Component {

    handleTemplateClick = (template) => {
        this.props.history.push({
            pathname: `/storyCheck`,
            state: {
                template: template
            }
        })
    }
    
    render() {
        return (
            <div className='template-container'>
                <div className='second-title'>ברוכים השבים להעצמה אחת ביום </div>
                <div className='first-title'>בחרו טמפלייט איתו תרצו לעצב את מסר הגבורה שלכם.ן</div>
                <div className='template-header'> החדשים ביותר </div>
                <div className='templates'>
                    {
                        mock.map((template, index) => {
                            return (
                                <div key={index} onClick={() => this.handleTemplateClick(template)}>
                                    <img className='template-img' src={template.templateImg}></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}



export default Template;