import api from "../api";


const getAllCourses = async () => {
  try {
    const res = await api.get("cursos");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCourses };

const getAllCoursesFilteredPaginated = async (category, page, limit) => {
  let url = 'cursos?'
  if (category != null) {
    url += `cateroria=${category}`
  }
  if (page != null) {
    if (category != null) {
      url += `&_page=${page}`
    } else {
      url += `_page=${page}`
    }
  }
  if (limit != null) {
    if (category != null || page != null) {
      url += `&_limit=${limit}`
    } else {
      url += `_limit=${limit}`
    }
  }
  try {
    const res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCoursesFilteredPaginated };

const getAllCoursesSorted = async (params, ord, limit) => {
  let url = '/cursos?_sort='
  for (let index in params) {
    if (index === params.length - 1) {
      url += `${params[index]}`
    } else {
      url += `${params[index]},`
    }
  }
  url += `&_order=${ord}&_limit=${limit}`
  try {
    const res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCoursesSorted };