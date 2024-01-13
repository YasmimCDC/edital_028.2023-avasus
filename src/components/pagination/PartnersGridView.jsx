import { useEffect, useState } from 'react';
import { getAllPartnersPaginated, getAllPartners } from '../../services/requests/Partners.js';
import PartnerCard from '../cards/PartnerCard.jsx';
import PaginationComponent from './PaginationComponent.jsx';
import '../../styles/pagination/Pagination.sass';
import '../../styles/pageStyles/PartnersPage.sass';

export default function PartnersGridView() {
    const [page, setPage] = useState(1);
    const [partners, setPartners] = useState([]);
    const [partnersCount, setPartnersCount] = useState(0)
    const [partnersShowed, setPartnersShowed] = useState(6);

    useEffect(() => {
        async function getPartners() {
            let partners = await getAllPartnersPaginated(page, 6);
            setPartners(partners);
        }
        async function getPartnersNumberCount() {
            let partners = await getAllPartners();
            setPartnersCount(partners.length);
        }
        getPartners();
        getPartnersNumberCount();
        if (page === 0) {
            setPage(1);
        }
    }, [page]);

    return (
        <div>
            <p className='search-result'>{partnersShowed} de {partnersCount} resultados</p>
            <div className='partners-grid row'>
                {partners.map((partner) => <PartnerCard partner={partner}></PartnerCard>)}
            </div>
            <PaginationComponent
                itemsCount={partnersCount}
                itemsPerPage={6}
                itemsShowed={partnersShowed}
                currentPage={page}
                setCurrentPage={setPage}
                setItemsShowed={setPartnersShowed}
            >
            </PaginationComponent>
        </div>

    );
}