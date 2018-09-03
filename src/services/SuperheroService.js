import axios from 'axios';
import { config } from '../config';

class SuperheroService {
    service = null;
    constructor() {
        this.service = axios.create({
            baseURL: config.API_URL
        });
    }

    async get() {
        let heroes = await this.service.get('/superhero');
        return heroes;
    }

    async getById(id) {
        let hero = await this.service.get(`/superhero/${id}`);
        return hero;
    }
}

export default new SuperheroService();