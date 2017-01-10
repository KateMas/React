import React from 'react';

import Header from './../Header';
import Footer from './../Footer';

class PageBlog extends React.Component {
    render () {
        return (
            <div className = "site">
                <div className="header-placeholder"></div>
                <Header/>
                <section id="blog" className="page-about-us">
                    <div className="wrapper">
                        <div className="wrapper-about page-blog">
                            <img src="images/features/image1.jpg" />
                            <p>Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                        </div>
                        <div className="wrapper-about page-blog">
                            <img src="images/features/image2.jpg" />
                            <p>Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default PageBlog;