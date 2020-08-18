import React from 'react';
import $ from 'jquery'
import ImageForArticle from '../../assets/images/drawers.jpg'
import IconFacebook from '../../assets/images/icon-facebook.svg'
import IconTwitter from '../../assets/images/icon-twitter.svg'
import IconPinterest from '../../assets/images/icon-pinterest.svg'

import './style.css'

const animationButton = () => {
    let buttonForAnimate = $(".card-article-info-perfil-btn")
    buttonForAnimate.toggleClass('active')
    
}
const animationSocialMedia = () => {

    let cardArticlePerfilSocialMedia = $(".card-article-info-perfil-social")
    let widthAnimationforSocialMedia = (window.screen.width < 767) ? '100%' : '53%'
    cardArticlePerfilSocialMedia.toggleClass('active-social')

    if(cardArticlePerfilSocialMedia.hasClass('active-social')){

        $(".card-article-info-perfil-social").animate({
            width: widthAnimationforSocialMedia,
            'padding-left': '2rem',
          }, 1000, "linear")

    } else{
        $(".card-article-info-perfil-social").animate({
            width: '0%',
            'padding-left': '0rem',
          }, 1000, "linear")
    }
    animationButton()
}

interface ArticlePreviewProps {
    title: string,
    body: string,
    nameUser: string,
    date: string,
    avatar: string,
    facebookLink: string,
    twitterLink: string,
    pinterestLink: string
}

const ArticlePreview: React.FunctionComponent<ArticlePreviewProps> = (props) => {
    return (
        <section className="card-article">
            <section className="card-article-image">
                <img src={ImageForArticle} alt="Imagem do Artigo"/>
            </section>
            <section className="card-article-info">
                <section className="card-article-info-details">     
                    <h2 className="card-article-info-details-title">
                        {props.title}
                    </h2>

                    <p className="card-article-info-details-body">
                        {props.body}
                    </p>
                </section>
                <section className="card-article-info-perfil">
                    <section className="card-article-info-perfil-user">
                        
                        <img src={props.avatar} alt="Imagem do perfil"/>
                        <section className="card-article-info-perfil-user-info">
                            <strong className="perfil-user-name">
                                {props.nameUser}
                            </strong>
                            <p className="perfil-user-data">
                                {props.date}
                            </p>
                        </section>
                    </section>
                    <section className="card-article-info-perfil-social">
                        <section className="perfil-social-content">
                            <p className="perfil-social-content-text">
                                SHARE
                            </p>
                            <a href={props.facebookLink} target="_blank" rel="noopener noreferrer">
                                <img src={IconFacebook} alt="Ícone Facebook"/>
                            </a>
                            <a href={props.twitterLink} target="_blank" rel="noopener noreferrer">
                                <img src={IconTwitter} alt="Ícone Twitter"/>
                            </a>
                            <a href={props.pinterestLink} target="_blank" rel="noopener noreferrer">
                                <img src={IconPinterest} alt="Ícone Pinterest"/>
                            </a>
                        </section>
                    </section>
                    <button className="card-article-info-perfil-btn" onClick={animationSocialMedia}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                    </button>
                </section>
            </section>
        </section>
    )
}

export default ArticlePreview;