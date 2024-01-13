import api from "../api";


const getPartners= async () => {
  try {
    const res = await api.get("parceiros");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export {getPartners}

const getAllPartners= async () => {
    try {
      const res = await api.get("parceiros");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

export {getAllPartners}

const getAllPartnersPaginated = async (page, limit) => {
    let url = 'parceiros?'
    if (page != null) {
        url += `_page=${page}`
    } 
    if (limit != null) {
        if (page != null) {
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
  
export {getAllPartnersPaginated};
