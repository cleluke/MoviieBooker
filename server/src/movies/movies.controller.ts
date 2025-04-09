import {Controller, Get, Query, UseGuards} from '@nestjs/common';
import { MoviesService } from './movies.service';
import {ApiBearerAuth, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";
import {JwtGuard} from "../auth/jwt/jwt.guard";

@ApiTags('Movies')
@ApiBearerAuth()
@Controller('movies')
@UseGuards(JwtGuard)
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    @ApiOperation({ summary: 'Récupère la liste des films' })
    @ApiQuery({ name: 'page', required: false, type: Number, example: 1, description: 'Page de résultats' })
    @ApiQuery({ name: 'search', required: false, type: String, example: 'batman', description: 'Recherche de film par mot-clé' })
    @ApiQuery({ name: 'sort', required: false, type: String, example: 'popularity.desc', description: 'Tri des résultats (si dispo)' })
    async getMovies(
        @Query('page') page: number = 1,
        @Query('search') search?: string,
        @Query('sort') sort?: string,
    ) {
        return this.moviesService.getMovies(page, search, sort);
    }
}
