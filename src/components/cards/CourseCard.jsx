import '../../styles/styleGuide/Buttons.sass';
import '../../styles/styleGuide/Typography.sass';
import '../../styles/cards/CourseCard.sass';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function CourseCard({course}) {
    const [stars, setStars] = useState([]);

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
    
    return (
        <div className='course-card container-fluid'>
                <div className='row'>
                <div className='course-thumbnail'>
                    <img
                    src={course.capa}
                    alt={`Capa de curso ${course.titulo}`}
                    className="course-thumbnail"
                    loading='eager'
                    />
                </div>
                <div id="title" className='course-title-section'>
                    <h4 className='course-title-inline'>
                        {course.titulo}
                    </h4>
                    <p className='course-card-partners'>
                        {course.parceiros}
                    </p>
                </div>
                <div className='course-info'>
                    <div className='card-infos'>
                        <div id ="infos-users-time" className="row-info">
                            <img
                            src={require('../../assets/icons/users.svg').default}
                            alt={`Icone usuários`}
                            className="icon-card"
                            />
                            <p>{course.matriculados}</p>
                            <MdOutlineAccessTimeFilled className="icon-card"></MdOutlineAccessTimeFilled>
                            <p>{course.duracao}</p>
                        </div>
                        <div id="stars" className="row-info">
                            {stars.map((star) => {
                            if (star === "full") {
                                return <img
                                src={require('../../assets/icons/full.svg').default}
                                alt={`Icon full star`}
                                className="icon-card-star"
                                />
                            } else if (star === "half") {
                                return <img
                                src={require('../../assets/icons/half.svg').default}
                                alt={`Icon full star`}
                                className="icon-card-star"
                                />                        
                            } else {
                                    return <img
                                    src={require('../../assets/icons/empty.svg').default}
                                    alt={`Icon full star`}
                                    className="icon-card-star"
                                    />                            }
                            })}
                            <p>{course.avaliacao}</p>
                        </div>
                    </div>
                </div>
                <div className='resume'>
                    <p className='course-card-resume'>{course.resumo.replace(" Ver mais", "...")}</p>
                </div>
                <Link to={ "/course"} state={course} className='see-more-link'>Ver mais</Link>
            </div>
        </div>
    );
}