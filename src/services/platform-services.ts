import APIClient from "./api-clent";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export default new APIClient<Platform>('/platforms/lists/parents')