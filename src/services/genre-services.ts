import APIClient from "./api-clent";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export default new APIClient<Genre>('/genres')