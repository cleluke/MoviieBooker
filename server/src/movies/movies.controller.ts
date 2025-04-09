import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    /*@Get()
    async getMovies(
        @Query('page') page?: number,
        @Query('search') search?: string,
        @Query('sort') sort?: string,
    ) {
        return this.moviesService.getMovies(page, search, sort);
    }*/
}
