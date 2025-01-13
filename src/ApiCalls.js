import axios from 'axios';

const url = "https://portfoliosite-backend-springboot.onrender.com/api";
const blog_url = 'https://ikedestiny-blogbackend.onrender.com'
//const blog_url = 'http://localhost:8081'

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


export const get_all_blogs = async () => {
    try {
        const response = await axios.get(`${blog_url}/posts`);
        console.log(response)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        throw error;
    }
}

export const get_blog_by_id = async (id) => {
    try {
        const response = await axios.get(`${blog_url}/posts/${id}`);
        console.log(response)
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        throw error;
    }
}
