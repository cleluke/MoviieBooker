import { Injectable } from '@nestjs/common';
//import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MoviesService {
    /*private readonly baseUrl = 'https://api.themoviedb.org/3';

    constructor(
        private readonly http: HttpService,
        private readonly config: ConfigService,
    ) {}

    async getMovies(page = 1, search?: string, sort?: string): Promise<any> {
        const apiKey = this.config.get<string>('TMDB_API_KEY');
        let url = `${this.baseUrl}/movie/popular?api_key=${apiKey}&language=fr-FR&page=${page}`;

        // Recherche
        if (search) {
            url = `${this.baseUrl}/search/movie?api_key=${apiKey}&query=${search}&language=fr-FR&page=${page}`;
        }

        const response = await firstValueFrom(this.http.get(url));
        let results = response.data.results;

        // Tri (par popularité, note, etc.)
        if (sort) {
            results = results.sort((a, b) => {
                if (sort === 'rating') return b.vote_average - a.vote_average;
                if (sort === 'date') return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
                return 0;
            });
        }

        return results;
    }*/
}