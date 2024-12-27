import { Publisher } from "../entities/Publishers";
import APIClient from "./api-clent";
import { Genre } from "./genre-services";
import { Platform } from "./platform-services";

export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    background_image: string;
    publishers: Publisher[];
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;

}

export default new APIClient<Game>('/games')