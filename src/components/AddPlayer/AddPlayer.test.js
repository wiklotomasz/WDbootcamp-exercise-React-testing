import AddPlayer from './AddPlayer.js';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('AddPlayer', () => {
	it('renders without crashing', () => {
		shallow(<AddPlayer />);
	});

	it('calls onPlayerAdd properly' , () => {
		const onPlayerAdd = jest.fn();
		const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

		const nameInput = addPlayerComponent.find('input').first().getDOMNode();
		nameInput.value = 'Michał';

		const form = addPlayerComponent.find('form');
		form.simulate('submit');

		expect(onPlayerAdd).toBeCalledWith('Michał');
	});

});
