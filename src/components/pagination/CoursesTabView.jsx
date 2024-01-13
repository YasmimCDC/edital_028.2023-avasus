import { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { getAllCoursesFilteredPaginated } from '../../services/requests/Courses.js';
import '../../styles/styleGuide/Buttons.sass';
import '../../styles/pagination/EducationalModulesTabView.sass';
import '../../styles/pagination/Pagination.sass';
import PaginationComponent from './PaginationComponent.jsx';
import CourseCard from '../cards/CourseCard.jsx';

export default function CoursesTabView() {
    const [filter, setFilter] = useState("Covid 19");
    const [courses, setCourses] = useState([]);
    const [page, setPage] = useState(1);
    const [coursesCount, setCoursesCount] = useState(0)
    const [coursesShowed, setCoursesShowed] = useState(6);

    const onTabchange = (filter) => {
        setFilter(filter);
        setPage(1)
    };

    useEffect(() => {
        async function getCourses() {
            let courses = await getAllCoursesFilteredPaginated(filter, page, 6);
            setCourses(courses);
            if (page === 1 && courses.length === 6) {
                setCoursesShowed(6);
            }
        };
        async function getCoursesCount() {
            let courses = await getAllCoursesFilteredPaginated(filter);
            setCoursesCount(courses.length);
            if (courses.length < 6) {
                setCoursesShowed(courses.length);
            } 
        }
        getCourses();
        getCoursesCount();
        if (page === 0) {
            setPage(1);
        }
    }, [filter, page]);

    return (
        <Tabs
            defaultActiveKey="Covid 19"
            className="mb-3 tab-view"
            onSelect={(filter) => onTabchange(filter)}
        >
            <Tab eventKey="Covid 19" title="Covid 19" className='tab-item nav-item-course'>
                <p className='search-result'>{coursesShowed} de {coursesCount} resultados</p>
                <div className='row row-courses-view'>
                    {courses.map((e) => <CourseCard course={e}></CourseCard>)}
                </div>
                <PaginationComponent
                    itemsCount={coursesCount}
                    itemsPerPage={6}
                    itemsShowed={coursesShowed}
                    currentPage={page}
                    setCurrentPage={setPage}
                    setItemsShowed={setCoursesShowed}
                >
                </PaginationComponent>
            </Tab>
            <Tab eventKey="Síflis e outras ist" title="Sífilis e outras Ist's" className='tab-item nav-item-course'>
                <p className='search-result'>{coursesShowed} de {coursesCount} resultados</p>
                <div className='row row-courses-view'>
                    {courses.map((e) => <CourseCard course={e}></CourseCard>)}
                </div>
                <PaginationComponent
                    itemsCount={coursesCount}
                    itemsPerPage={6}
                    itemsShowed={coursesShowed}
                    currentPage={page}
                    setCurrentPage={setPage}
                    setItemsShowed={setCoursesShowed}
                >
                </PaginationComponent>
            </Tab>
            <Tab eventKey="Preceptoria" title="Preceptoria" className='tab-item nav-item-course'>
                <p className='search-result'>{coursesShowed} de {coursesCount} resultados</p>
                <div className='row row-courses-view'>
                    {courses.map((e) => <CourseCard course={e}></CourseCard>)}
                </div>
                <PaginationComponent
                    itemsCount={coursesCount}
                    itemsPerPage={6}
                    itemsShowed={coursesShowed}
                    currentPage={page}
                    setCurrentPage={setPage}
                    setItemsShowed={setCoursesShowed}
                >
                </PaginationComponent>
            </Tab>
            <Tab eventKey="Doenças raras" title="Doenças raras" className='tab-item nav-item-course'>
                <p className='search-result'>{coursesShowed} de {coursesCount} resultados</p>
                <div className='row row-courses-view'>
                    {courses.map((e) => <CourseCard course={e}></CourseCard>)}
                </div>
                <PaginationComponent
                    itemsCount={coursesCount}
                    itemsPerPage={6}
                    itemsShowed={coursesShowed}
                    currentPage={page}
                    setCurrentPage={setPage}
                    setItemsShowed={setCoursesShowed}
                >
                </PaginationComponent>
            </Tab>
            <Tab eventKey="WebPalestras" title="Web Palestras" className='tab-item nav-item-course'>
                <p className='search-result'>{coursesShowed} de {coursesCount} resultados</p>
                <div className='row row-courses-view'>
                    {courses.map((e) => <CourseCard course={e}></CourseCard>)}
                </div>
                <PaginationComponent
                    itemsCount={coursesCount}
                    itemsPerPage={6}
                    itemsShowed={coursesShowed}
                    currentPage={page}
                    setCurrentPage={setPage}
                    setItemsShowed={setCoursesShowed}
                >
                </PaginationComponent>
            </Tab>
            <Tab eventKey="Sistema prisional" title="Sistema prisional" className='tab-item nav-item-course'>
                <p className='search-result'>{coursesShowed} de {coursesCount} resultados</p>
                <div className='row row-courses-view'>
                    {courses.map((e) => <CourseCard course={e}></CourseCard>)}
                </div>
                <PaginationComponent
                    itemsCount={coursesCount}
                    itemsPerPage={6}
                    itemsShowed={coursesShowed}
                    currentPage={page}
                    setCurrentPage={setPage}
                    setItemsShowed={setCoursesShowed}
                >
                </PaginationComponent>
            </Tab>
            <Tab eventKey="OPAS" title="OPAS" className='tab-item nav-item-course'>
                <p className='search-result'>{coursesShowed} de {coursesCount} resultados</p>
                <div className='row row-courses-view'>
                    {courses.map((e) => <CourseCard course={e}></CourseCard>)}
                </div>
                <PaginationComponent
                    itemsCount={coursesCount}
                    itemsPerPage={6}
                    itemsShowed={coursesShowed}
                    currentPage={page}
                    setCurrentPage={setPage}
                    setItemsShowed={setCoursesShowed}
                >
                </PaginationComponent>
            </Tab>
        </Tabs>
    );
}