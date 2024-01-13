import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from '../components/Footer';
import PartnersGridView from '../components/pagination/PartnersGridView';
import { Breadcrumb } from "react-bootstrap";
import '../index.css';
import '../styles/pageStyles/PartnersPage.sass';

export default function PartnersPage() {
    const [activePgae, setActivePage] = useState();
    const myLocation = useLocation();
    useEffect(() => {
        setActivePage(myLocation.pathname)
    }, [myLocation.pathname])

    return (
        <div className="page">
            <NavigationBar activePage={activePgae}></NavigationBar>
            <div className="partners-conten">
                <Breadcrumb className="breadcrumb-text-primary">
                    <Breadcrumb.Item className="breadcrumb-text-primary" href="/">Início</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-text-primary" href="/courses" active>Parceiros</Breadcrumb.Item>
                </Breadcrumb>
                <h1 id="title">Nossos parceiros</h1>
                <PartnersGridView></PartnersGridView>
            </div>
            <Footer></Footer>
        </div>
    );
}