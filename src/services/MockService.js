import MockAdapter from 'axios-mock-adapter';

class MockService {
    initialize(service) {
        const mock = new MockAdapter(service);

        this.heroes = [
            { id: 1, name: 'Super-Man', alias: 'Clark Kent' },
            { id: 2, name: 'Spider-Man', alias: 'Peter Parker' },
            { id: 3, name: 'Wolverine', alias: 'Logan' },
            { id: 4, name: 'Batgirl', alias: 'Cassandra Cain' },
            { id: 5, name: 'Iron Man', alias: 'Tony Stark' },
            { id: 6, name: 'Hulk', alias: 'Bruce' },
            { id: 7, name: 'Captain America', alias: 'Steve Rogers' },
            { id: 8, name: 'Batman', alias: 'Bruce Wayne' },
        ];
        this.superhero(mock);
        this.superheroDetail(mock);
    }

    superhero(mock) {
        mock.onGet('/superhero').reply(200, {
            heroes: this.heroes
        });
    }

    superheroDetail(mock) {
        var heroes = this.heroes;
        mock.onGet(/\/superhero\/(\d+)/).reply(function (config) {
            let id = parseInt(config.url.split('/')[2], 0);
            let hero = heroes.filter(h => h.id === id );
            return [200, hero];
        });
    }
}

export default new MockService();