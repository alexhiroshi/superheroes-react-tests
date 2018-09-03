import React from 'react';
import MockService from '../services/MockService';
import Superhero from '../pages/Superhero';
import SuperheroService from '../services/SuperheroService';

describe('<Superhero />', () => {
    beforeEach(() => {
        MockService.initialize(SuperheroService.service);
    });

    it('renders li element', async () => {
        var wrapper = shallow(<Superhero />);
        await wrapper.instance().componentDidMount();
        expect(wrapper.find('ul').childAt(0).type()).toEqual('li');
        expect(wrapper.find('ul').children().length).toEqual(8);
    });
});
