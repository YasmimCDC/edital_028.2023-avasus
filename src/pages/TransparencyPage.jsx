import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from '../components/Footer';
import { Breadcrumb } from "react-bootstrap";
import GeneralDataCard from "../components/cards/GeneralDataCard";
import {getTransparencyData} from "../services/requests/Transparency.js"
import GraphCard from "../components/cards/GraphCard";
import '../styles/cards/GraphCard.sass';
import '../index.css';

export default function TransparencyPage() {
    const [activePgae, setActivePage] = useState();
    const [data, setData] = useState({});
    const myLocation = useLocation();
    useEffect(() => {
        setActivePage(myLocation.pathname)
    }, [myLocation.pathname]);

    useEffect(() =>{
        async function getData() {
            let data = await getTransparencyData();
            setData(data);
        }
        getData()
    }, [])
    
    return(
        <div className="page">
            <NavigationBar activePage={activePgae}></NavigationBar>
            <div className="module-content text-center">
                <Breadcrumb className="breadcrumb-text-primary">
                    <Breadcrumb.Item className="breadcrumb-text-primary" href="/">Início</Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-text-primary" href="/transparency" active>Transparência</Breadcrumb.Item>
                </Breadcrumb>
                <h1 id="title">Transparência</h1>
                <GeneralDataCard data={data?.dados_gerais}></GeneralDataCard>
                <div className="row">
                    <div className="graph-card">
                        <GraphCard 
                        data={data?.usuarios_por_curso} 
                        title={"Usuários por curso"} 
                        type={"pie"}></GraphCard>
                    </div>
                    <div className="graph-card">
                        <GraphCard 
                        data={data?.usuarios_por_estado} 
                        title={"Usuários por Estado"} 
                        type={"map"}></GraphCard>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}