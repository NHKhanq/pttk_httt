import axios from "./axios";

const fetchAPI = () => {
    return (
        axios.get("/api/users?page=2")
    );
}

export {fetchAPI}