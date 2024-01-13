import '../../styles/styleGuide/Typography.sass';
import '../../styles/cards/GraphCard.sass';

export default function GeneralDataCard({data}) {
    
    return (
        <div className='data-card container-fluid mb-4'>
            <h3 className='.transparency-card-title'>Dados Gerais</h3>
            <div id="data-row" className='row'>
                <div className='col-lg-4 data-section'>
                    <div className='row-data-title'>
                        <img
                        src={require("../../assets/icons/users.svg").default}
                        alt={`Title`}
                        className="icon-transparency"
                        />
                        <p className='transparency-data-title'>Total de usuários registrados</p>
                    </div>
                    <h3 className='transparency-data'>{data?.usuarios_registrados}</h3>
                </div>

                <div className='col-lg-3 data-section'>
                    <div className='row-data-title'>
                        <img
                        src={require('../../assets/icons/subscribe.svg').default}
                        alt={`Title`}
                        className="icon-transparency"
                        />
                        <p className='transparency-data-title'>Inscrições realizadas</p>
                    </div>
                    <h3 className='transparency-data'>{data?.incricoes_realizadas}</h3>
                </div>

                <div className='col-lg-2 data-section'>
                    <div className='row-data-title'>
                        <img
                        src={require('../../assets/icons/course.svg').default}
                        alt={`Title`}
                        className="icon-transparency"
                        />
                        <p className='transparency-data-title'>Cursos ativos</p>
                    </div>
                    <h3 className='transparency-data'>{data?.cursos_ativos}</h3>
                </div>

                <div className='col-lg-3 data-section'>
                    <div className='row-data-title'>
                        <img
                        src={require('../../assets/icons/certificate.svg').default}
                        alt={`Title`}
                        className="icon-transparency"
                        />
                        <p className='transparency-data-title'>Direito à Certificação</p>
                    </div>
                    <h3 className='transparency-data'>{data?.direito_certificacao}</h3>
                </div>

                <div className='col-lg-5 data-section'>
                    <div className='row-data-title'>
                        <img
                        src={require('../../assets/icons/investiment.svg').default}
                        alt={`Title`}
                        className="icon-transparency"
                        />
                        <p className='transparency-data-title'>Investimento médio por curso</p>
                    </div>
                    <h3 className='transparency-data'>{data?.investimento_medio_curso}</h3>
                </div>

                <div className='col-lg-5 data-section'>
                    <div className='row-data-title'>
                        <img
                        src={require('../../assets/icons/investiment_per_student.svg').default}
                        alt={`Title`}
                        className="icon-transparency"
                        />
                        <p className='transparency-data-title'>Investimento médio por aluno</p>
                    </div>
                    <h3 className='transparency-data'>{data?.investimento_medio_aluno}</h3>
                </div>

            </div>
        </div>
    );
};