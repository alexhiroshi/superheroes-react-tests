import React from 'react';
import MockService from '../services/MockService';
import SuperheroDetail from '../pages/SuperheroDetail';
import SuperheroService from '../services/SuperheroService';

describe('<SuperheroDetail />', () => {
    beforeEach(() => {
        MockService.initialize(SuperheroService.service);
    });

    it('renders wrapper element', async () => {
        var wrapper = shallow(<SuperheroDetail match={{params: {id: 1}}} />);
        await wrapper.instance().componentDidMount();
        expect(wrapper.find('.detail').length).toEqual(1);
    });

    it('renders title', async () => {
        var wrapper = shallow(<SuperheroDetail match={{params: {id: 1}}} />);
        await wrapper.instance().componentDidMount();
        expect(wrapper.find('h3').text()).toEqual('#1 Super-Man');
    });

    it('renders alias', async () => {
        var wrapper = shallow(<SuperheroDetail match={{params: {id: 1}}} />);
        await wrapper.instance().componentDidMount();
        expect(wrapper.find('p').text()).toEqual('Clark Kent');
    });
});
