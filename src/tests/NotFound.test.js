import React from 'react';
import NotFound from '../pages/NotFound';

describe('<NotFound />', () => {
	it('render page not found message', () => {
		const element = shallow(<NotFound />);
		expect(element.find('div').text()).toEqual('Ops! Page not found');
	});
});
