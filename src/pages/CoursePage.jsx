import { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import NavigationBar from "../components/NavigationBar";
import '../index.css';
import '../styles/pageStyles/CoursePage.sass';
import '../styles/styleGuide/Typography.sass';

export default function CoursePage() {
    const [stars, setStars] = useState([]);
    const [course, setCourse] = useState({});
    const [activePgae, setActivePage] = useState();
    const myLocation = useLocation();

    const renderObjectives = () => {
        let objectives = course.objetivo_especifico
        // eslint-disable-next-line eqeqeq
        if (objectives == undefined) {
            return(<p> Este curso não possui objetivo geral educacionais especificados.</p>);
        } else {
            let lines = objectives.split(".")
            console.log(lines);
            for (var i=0; i< lines.length; i++) {
                return(<li>{lines[i]
                    .replace("b)", "")
                    .replace("c)", "")
                    .replace("a)", "")
                    .replace("-", "")}.</li>
                );
            }
        }
    };

    useEffect(() => {
        setActivePage(myLocation.pathname)
        setCourse(myLocation.state);
    }, [myLocation.pathname, myLocation.state]);

    useEffect(() => {
        const setRatingStars = () => {
            let rate = course.avaliacao
            let stars = [];
            let intValue = parseInt(rate);
            let floatValue = parseFloat(rate) - intValue;  
            for (var i=0; i < intValue; i++) {
                stars.push("full");
            } 
    
            if (floatValue > 0.0) {
                stars.push("half");
            }
    
            do {
                if (stars.length === 5) {
                    continue
                }
                stars.push("empty");
            } while (stars.length < 5);
            setStars(stars);
        };
        setRatingStars();
    }, [course.avaliacao]);

    return(
        <div className="page">
            <NavigationBar activePage={activePgae}></NavigationBar>
            <div className="course-header" style={{backgroundImage: `url(${course.capa})`}}>
                <div className="header-content">
                    <Breadcrumb className="breadcrumb-text">
                        <Breadcrumb.Item className="breadcrumb-text" href="/">Início</Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumb-text" href="/courses">Cursos</Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumb-text" href="/courses">Módulos</Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumb-text" active>{course.titulo}</Breadcrumb.Item>
                    </Breadcrumb>
                    <h3 className="course-partners">{course.parceiros}</h3>
                </div>
                <div className="info-section text-center">
                    <h1>Informações Gerais do Curso</h1>
                    <div className="infos row">
                        <div className='col-lg-2 col-sm-3 course-info'>
                            <div className='row-info'>
                                <MdOutlineAccessTimeFilled className="icon"></MdOutlineAccessTimeFilled>
                                <p>{course.duracao} horas</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-5 course-info'>
                            <div className='row-info'>
                                <BsFillCalendarCheckFill className="icon"></BsFillCalendarCheckFill>
                                <p>Desde de {course.criado_em}</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 course-info'>
                            <div className='row-info'>
                                <img
                                src={require('../assets/icons/users.svg').default}
                                alt={`Icone usuários`}
                                className="icon"
                                />
                                <p>{course.matriculados} alunos matriculados</p>
                            </div>
                        </div>
                        <div id="rate" className='col-lg-4 col-sm-8 course-info'>
                            <div className='row-info'>
                                {stars.map((star) => {
                                    if (star === "full") {
                                        return <img
                                        src={require('../assets/icons/full.svg').default}
                                        alt={`Icon full star`}
                                        className="icon-star"
                                        />
                                    } else if (star === "half") {
                                        return <img
                                        src={require('../assets/icons/half.svg').default}
                                        alt={`Icon full star`}
                                        className="icon-star"
                                        />                        
                                    } else {
                                            return <img
                                            src={require('../assets/icons/empty.svg').default}
                                            alt={`Icon full star`}
                                            className="icon-star"
                                            />                            }
                                })}
                                <p>{course.avaliacao} ({course.numero_avaliacoes} avaliações)</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="info-title">Sobre o curso</h3>
                    <p id="about">{course.sobre}</p>

                    <h3 className="info-title">Objetivos</h3>
                    <h6 className="objectives objective-title">Objetivo Geral</h6>
                    <p className="objectives">{course.objetivo_geral ?? "Este curso não possui objetivo geral educacionais especificados."}</p>
                    
                    <h6 className="objectives objective-title mt-4">Objetivos Específicos</h6>
                    <div className="objectives">
                        {renderObjectives()}
                    </div>

                    <h3 className="info-title">Recursos educacionais</h3>
                    <p>{course.recursos_educacionais ?? "Este curso não possui recursos educacionais especificados."}</p>

                    <h3 className="info-title">Créditos</h3>
                    <div className="credito-row">
                        {course.creditos?.map((credito) => <img
                        src={credito.capa}
                        alt={credito.titulo}
                        className="image-credit"
                        >
                        </img>)}
                    </div>
                </div>
            </div>
        </div>
    );
}