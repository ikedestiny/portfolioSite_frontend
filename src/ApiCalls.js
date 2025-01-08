import axios from 'axios';

const url = "https://portfoliosite-backend-springboot.onrender.com/api";

export const get_all_projects = async () => {
    try {
        const response = await axios.get(`${url}/project/all`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        throw error;
    }
};

export const add_project = async (params) => {
    try {
        const response = await axios.post(`${url}/project/new`, params);
        return response.status;
    } catch (error) {
        console.error("Failed to add project:", error);
        throw error;
    }
};
