import { create } from 'zustand'; // Correct for zustand 4.x
import * as Apicalls from '../ApiCalls';

const store = create((set, get) => ({
    all_blogs: [],

    get_all: async () => {
        try {
            const blogs = await Apicalls.get_all_blogs();  // Assuming this API call works correctly
            set({ all_blogs: blogs });
        } catch (error) {
            console.error('Failed to fetch blogs:', error);
        }
    },

    find_blog_by_id: async (id) => await Apicalls.get_blog_by_id(id)

}));

export default store;
