import { create } from 'zustand';
import * as apiCalls from "../ApiCalls";

const useProjectStore = create((set, get) => ({
    projects: [],
    name: "",
    repository: "",
    website: "",
    description: "",
    set_project_name: (param) => { set({ name: param }) },
    set_project_repository: (param) => { set({ repository: param }) },
    set_project_website: (param) => { set({ website: param }) },
    set_project_description: (param) => { set({ description: param }) },
    get_all: async () => {
        try {
            const projects = await apiCalls.get_all_projects();
            set({ projects });
        } catch (error) {
            console.error("Failed to fetch projects:", error);
        }
    },
    add_project: async () => {
        const params = {
            name: get().name,
            repository: get().repository,
            website: get().website,
            description: get().description
        };
        try {
            const status = await apiCalls.add_project(params);
            if (status === 200) {
                // Optionally, you can update the projects list here
                get().get_all();
            }
            return status;
        } catch (error) {
            console.error("Failed to add project:", error);
            throw error;
        }
    }
}));

export default useProjectStore;
