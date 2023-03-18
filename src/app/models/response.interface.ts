import { Movie } from "./movie.interface";

export interface Response {
    entries: number;
    next: string;
    page: number;
    results: any[]
} 