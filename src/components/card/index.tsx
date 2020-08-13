import React from 'react';
import ImageForArticle from '../../assets/images/drawers.jpg'
import ButtonShare from '../../assets/images/icon-share.svg'
import IconFacebook from '../../assets/images/icon-facebook.svg'
import IconTwitter from '../../assets/images/icon-twitter.svg'
import IconPinterest from '../../assets/images/icon-pinterest.svg'
import AvatarPerfil from '../../assets/images/avatar-michelle.jpg'

import './style.css'

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

                            </p>
                            <img src={IconFacebook} alt="Ícone Facebook"/>
                            <img src={IconTwitter} alt="Ícone Twitter"/>
                            <img src={IconPinterest} alt="Ícone Pinterest"/>
                        </section>
                    </section>
                    <button className="card-article-info-perfil-btn">
                        <img src={ButtonShare} alt="botão para compartilhar"/>
                    </button>
                </section>
            </section>
        </section>
    )
}

export default Card;