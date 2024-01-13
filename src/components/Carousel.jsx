import image1 from "../assets/images/img_1.png";
import image2 from "../assets/images/img_2.png";
import image3 from "../assets/images/img_3.png";
import Carousel from 'react-bootstrap/Carousel';
import '../styles/CarouselHome.sass';

export default function CarouselHome() {
  return (
    <Carousel id="carousel">
      <Carousel.Item key={"item1"}>
            <img
            className="d-block w-100 carousel-image"
            src={image1}
            alt="Primeira Imagem"/>
            <Carousel.Caption>
                <img
                    src={require(`../assets/logos/logo_avasus_carousel.svg`).default}
                    alt="Logo Avasus"
                    className="logo"
                />
                <br></br>
                <img
                    src={require(`../assets/images/line.svg`).default}
                    alt="Line"
                    className="line"
                /> 
                <br></br>   
                <img
                    src={require(`../assets/images/conhecimento_aberto_em_saude.svg`).default}
                    alt="Caption"
                    className="sub-caption"
                />  
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item key={"item2"}>
            <img
            className="d-block w-100 carousel-image"
            src={image2}
            alt="Primeira Imagem"
            />
            <Carousel.Caption>
                <img
                    src={require(`../assets/logos/logo_avasus_carousel.svg`).default}
                    alt="Logo Avasus"
                    className="logo"
                />     
                <br></br>  
                <img
                    src={require(`../assets/images/line.svg`).default}
                    alt="Line"
                    className="line"
                /> 
                <br></br>      
                <img
                    src={require(`../assets/images/conhecimento_aberto_em_saude.svg`).default}
                    alt="Caption"
                    className="sub-caption"
                />  
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item key={"item3"}>
            <img
            className="d-block w-100 carousel-image"
            src={image3}
            alt="Primeira Imagem"
            />
            <Carousel.Caption>
                <img
                    src={require(`../assets/logos/logo_avasus_carousel.svg`).default}
                    alt="Logo Avasus"
                    className="logo"
                /> 
                <br></br>
                <img
                    src={require(`../assets/images/line.svg`).default}
                    alt="Line"
                    className="line"
                /> 
                <br></br>      
                <img
                    src={require(`../assets/images/conhecimento_aberto_em_saude.svg`).default}
                    alt="Caption"
                    className="sub-caption"
                />  
            </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
