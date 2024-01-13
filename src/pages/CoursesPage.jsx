import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Footer from '../components/Footer';
import CoursesTabView from "../components/pagination/CoursesTabView";
import '../index.css';
import '../styles/styleGuide/Typography.sass';
import '../styles/pageStyles/CoursesPage.sass';

export default function CoursesPage() {
    const [activePgae, setActivePage] = useState();

    const myLocation = useLocation();
    useEffect(() => {
        setActivePage(myLocation.pathname)
    }, [myLocation.pathname])
    
    return(
        <div className="page">
            <NavigationBar activePage={activePgae}></NavigationBar>
            <div className="module-content text-center">
                <Breadcrumb className="breadcrumb-text-primary">
                    <Breadcrumb.Item className="breadcrumb-text-primary" href="/">Início</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-text-primary" href="/courses">Cursos</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-text-primary" href="/courses" active>Módulos</Breadcrumb.Item>
                </Breadcrumb>
                <h1 id="title">Módulos Educacionais</h1>
                <CoursesTabView></CoursesTabView>
            </div>
            <Footer></Footer>
        </div>
    );
}