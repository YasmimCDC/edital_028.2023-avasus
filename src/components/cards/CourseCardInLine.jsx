import '../../styles/styleGuide/Buttons.sass';
import '../../styles/styleGuide/Typography.sass';
import '../../styles/cards/CourseCardInLine.sass';
import { Button } from 'react-bootstrap';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function CourseCardInLine({course}) {
    const [stars, setStars] = useState([]);
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate( "/course", {state: course});
    };

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
        <div className='card container-fluid'>
                <div className='row'>
                <div className='col-lg-1 col-md-1 col-sm course-image'>
                    <img
                    src={course.capa}
                    alt={`Capa de curso ${course.titulo}`}
                    className="course-image"
                    loading='eager'
                    />
                </div>
                <div id="title-course" className='col-lg-3 col-md-8 col-sm course-info'>
                    <h4 className='course-title-inline'>
                        {course.titulo}
                    </h4>
                    <p className='course-card-partners'>
                        {course.parceiros}
                    </p>
                </div>
                <div className='col-lg-1 col-md-2 col-xsmall course-info'>
                    <div className='row-info'>
                        <img
                        src={require('../../assets/icons/users.svg').default}
                        alt={`Icone usuários`}
                        className="icon"
                        />
                        <p>{course.matriculados}</p>
                    </div>
                </div>
                <div className='time-info course-info'>
                    <div className='row-info'>
                        <MdOutlineAccessTimeFilled className="icon"></MdOutlineAccessTimeFilled>
                        <p>{course.duracao}</p>
                    </div>
                </div>
                <div id="rate" className='col-lg-2 col-md-4 course-info'>
                    <div className='row-info'>
                        {stars.map((star) => {
                            if (star === "full") {
                                return <img
                                src={require('../../assets/icons/full.svg').default}
                                alt={`Icon full star`}
                                className="icon-star"
                                />
                            } else if (star === "half") {
                                return <img
                                src={require('../../assets/icons/half.svg').default}
                                alt={`Icon full star`}
                                className="icon-star"
                                />                        
                            } else {
                                    return <img
                                    src={require('../../assets/icons/empty.svg').default}
                                    alt={`Icon full star`}
                                    className="icon-star"
                                    />                            }
                        })}
                        <p>{course.avaliacao}</p></div>
                    </div>
                <div className='col-lg-2 course-info'>
                    <Button className='small-button'
                    onClick={() => onClickButton()}
                    >
                        Ver módulo
                    </Button>
                </div>
            </div>
        </div>
    );
}