import '../../styles/styleGuide/Typography.sass';
import '../../styles/cards/PartnerCard.sass';

export default function PartnerCard({partner}) {
    
    return (
        <div className='card-partner'>
            <div className='image-area'>
                <img
                src={partner.capa}
                alt={partner.titulo}
                className="partner-card-image"
                loading='eager'
                />
            </div>
            <hr className="solid card-division"></hr>
            <h3 className='partner-title'>{partner.titulo}</h3>
        </div>
    );
}