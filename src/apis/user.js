import axios from "./axios";

const fetchAPI = (page) => {
    return (
        axios.get(`/api/users?page=${page}`)
    );
}

export {fetchAPI}