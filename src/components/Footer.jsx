import { useEffect, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import '../styles/Footer.sass';
import '../styles/styleGuide/Typography.sass';

export default function Footer() {
    const [year , setYear] = useState();

    const getYear = () =>  setYear(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])

    return(
        <footer className="page-footer">
            <div className="container-fluid text-center text-md-left">
                <div className="row footer-authors ">
                    <h4>Realização</h4>
                    <div className="col-md-3 mt-md-0">
                        <img
                            width={'100%'}
                            src={require(`../assets/logos/logo_lais.svg`).default}
                            alt="Logo Lais"
                            className="footer-image"
                        />
                    </div>

                    <div className="col-md-3 mt-md-0">
                        <img
                            width={'100%'}
                            src={require(`../assets/logos/logo_ufrn.svg`).default}
                            alt="Logo UFRN"
                            className="footer-image"
                        />
                    </div>
                </div>
                <div className="row footer-navigation">
                    <div className="col-lg-2 mt-md-0">
                        <img
                            id="logo-lais"
                            width={'50%'}
                            src={require(`../assets/logos/logo_lais.svg`).default}
                            alt="Logo Lais"
                        />
                        <p id="footer-text" className="mt-2" style={{color: "white"}}>Laboratório de Inovação Tecnológica em Saúde.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-lg-2 mb-md-0 mb-3">
                        <h3 style={{color: "white"}}>Links Úteis</h3>
                        <ul className="list-unstyled">
                            <li><a className="navigation-links" href="/">Início</a></li>
                            <li><a className="navigation-links" href="#!">Sobre Nós</a></li>
                            <li><a className="navigation-links" href="/courses">Módulos</a></li>
                            <li><a className="navigation-links" href="/partners">Parceiros</a></li>
                            <li><a className="navigation-links" href="/transparency">transparência</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 mb-md-0 mb-3">
                        <h3 style={{color: "white"}}>Redes sociais</h3>
                        <div className="row social-midias">
                            <a className="col-icon col-sm-1 icon-social" href="https://www.facebook.com/sgtes" target={"_blank"} rel="noreferrer">
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a className="col-icon col-sm-1 icon-social" href="https://twitter.com/sgtes_ms" target={"_blank"} rel="noreferrer">
                                <BsTwitter></BsTwitter>
                            </a>
                            <a className="col-icon col-sm-1 icon-social" href="https://www.instagram.com/sgtesms/" target={"_blank"} rel="noreferrer">
                                <BsInstagram></BsInstagram>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="copyrigth" className="footer-copyright copyrigth">
                {year} © {<a id="link-lais" className="copyrigth" href="https://lais.huol.ufrn.br/" target={"_blank"} rel="noreferrer">LAIS (HUOL)</a>}. Todos os direitos reservados
            </div>

        </footer>
    );
}