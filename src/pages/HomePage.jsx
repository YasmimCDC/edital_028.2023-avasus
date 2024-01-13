import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import NavigationBar from "../components/NavigationBar";
import EducationalModulesTabView from '../components/pagination/EducationalModulesTabView';
import '../styles/pageStyles/HomePage.sass';
import '../styles/styleGuide/Typography.sass';
import '../index.css';
import CarouselHome from '../components/Carousel';

export default function HomePage() {
    const [activePgae, setActivePage] = useState();
    const myLocation = useLocation();
  
    useEffect(() => {
        setActivePage(myLocation.pathname)
    }, [myLocation.pathname])

    return(
        <div className="page">
            <NavigationBar activePage={activePgae}></NavigationBar>
            <CarouselHome></CarouselHome>
            <div className="content text-center">
                <div className='courses-section'>
                    <h2>Módulos Educacionais</h2>
                    <EducationalModulesTabView></EducationalModulesTabView>
                </div>
                
                <div className='partners-section'>
                    <h2>Parceiros</h2>
                    <div className='row partners'>
                        <div className='col-lg-3 col-md-5 mt-2'>
                            <h3 sx={{color: "black"}}>Governo do RN</h3>
                            <h5>
                                Governo do Estado do Rio Grande do Norte.
                            </h5>
                        </div>
                        <div className='col-lg-3 col-md-5 mt-2'>
                            <h3 sx={{color: "black"}}>SESAP</h3>
                            <h5>
                            Secretaria de Saúde Pública do Estado do Rio Grande do Norte.
                            </h5>
                        </div>
                        <div className='col-lg-3 col-md-5 mt-2'>
                            <h3 sx={{color: "black"}}>UFRN</h3>
                            <h5>
                            Universidade Federal do Rio Grande do Norte.
                            </h5>
                        </div>
                        <div className='col-lg-3 col-md-5 mt-2'>
                            <h3 sx={{color: "black"}}>HUOL</h3>
                            <h5>
                            Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). 
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}