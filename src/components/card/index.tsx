import React from 'react';
import $ from 'jquery'
import ImageForArticle from '../../assets/images/drawers.jpg'
import IconFacebook from '../../assets/images/icon-facebook.svg'
import IconTwitter from '../../assets/images/icon-twitter.svg'
import IconPinterest from '../../assets/images/icon-pinterest.svg'
import AvatarPerfil from '../../assets/images/avatar-michelle.jpg'

import './style.css'

const animationButton = () => {
    let buttonForAnimate = $(".card-article-info-perfil-btn")
    buttonForAnimate.toggleClass('active')
    
}
const animationSocialMedia = () => {

    let cardArticlePerfilSocialMedia = $(".card-article-info-perfil-social")
    cardArticlePerfilSocialMedia.toggleClass('active-social')

    if(cardArticlePerfilSocialMedia.hasClass('active-social')){
        $(".card-article-info-perfil-social").animate({
            width: '100%',
            'padding-left': '2rem'
          }, 1000, "linear")
    } else{
        $(".card-article-info-perfil-social").animate({
            width: '0%',
            'padding-left': '0rem'
          }, 1000, "linear")
    }
    animationButton()
}

function Card() {
    return (
        <section className="card-article">
            <section className="card-article-image">
                <img src={ImageForArticle} alt="Imagem do Artigo"/>
            </section>
            <section className="card-article-info">
                <section className="card-article-info-details">     
                    <h2 className="card-article-info-details-title">
                        Shift the overall look and fell by adding these wonderful touches to furniture in your home
                    </h2>

                    <p className="card-article-info-details-body">
                        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
                    </p>
                </section>
                <section className="card-article-info-perfil">
                    <section className="card-article-info-perfil-user">
                        <img src={AvatarPerfil} alt="Imagem do perfil"/>
                        <section className="card-article-info-perfil-user-info">
                            <strong className="perfil-user-name">
                                Michelle Appleton
                            </strong>
                            <p className="perfil-user-data">
                                28 Jun 2020
                            </p>
                        </section>
                    </section>
                    <section className="card-article-info-perfil-social">
                        <section className="perfil-social-content">
                            <p className="perfil-social-content-text">
                                SHARE
                            </p>
                            <img src={IconFacebook} alt="Ícone Facebook"/>
                            <img src={IconTwitter} alt="Ícone Twitter"/>
                            <img src={IconPinterest} alt="Ícone Pinterest"/>
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

export default Card;