import { useEffect, useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { getAllCoursesSorted } from '../../services/requests/Courses.js';
import '../../styles/styleGuide/Buttons.sass';
import '../../styles/pagination/EducationalModulesTabView.sass';
import CourseCardInLine from '../cards/CourseCardInLine.jsx';

export default function EducationalModulesTabView() {
    const [courseCount, setCourseCount] = useState(3);
    const [filter, setFilter] = useState("matriculados");
    const [courses, setCourses] = useState([]);

    const onTabchange = (filter) => {
        setFilter(filter);
        setCourseCount(3);
    };

    const loadMoreCourses = () => {
        let count = courseCount
        setCourseCount(count + 3);
    };

    useEffect(() => {
        async function getCourses() {
            let courses = await getAllCoursesSorted([filter], "desc", courseCount);
            setCourses(courses);
        }
        getCourses();
    }, [filter, courseCount]);

    return (
        <Tabs
            defaultActiveKey="matriculados"
            id="uncontrolled-tab-example"
            className="mb-3 tab-view"
            onSelect={(filter) => onTabchange(filter)}
        >
            <Tab eventKey="matriculados" title="Mais populares" className='tab-item'>
                {courses.map((e) => <CourseCardInLine course={e}></CourseCardInLine>)}
                <Button className="secondary-button load-more"
                size='lg'
                onClick={() => loadMoreCourses()}
                >Ver mais</Button>
            </Tab>
            <Tab eventKey="avaliacao" title="Mais bem avaliados">
                {courses.map((e) => <CourseCardInLine course={e}></CourseCardInLine>)}
                <Button className="secondary-button load-more"
                size='lg'
                onClick={() => loadMoreCourses()}
                >Ver mais</Button>
            </Tab>
            <Tab eventKey="criado_em" title="Mais recentes">
                {courses.map((e) => <CourseCardInLine course={e}></CourseCardInLine>)}
                <Button className="secondary-button load-more"
                size='lg'
                onClick={() => loadMoreCourses()}
                >Ver mais</Button>
            </Tab>
        </Tabs>
    );
}