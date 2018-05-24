import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow } from 'enzyme';

describe('PlayersList', () => {
	it('renders without crashing', () => {
		shallow(<PlayersList players={[]} />);
	});

	it('renders correct number of players', () => {
		const players = [{name: 'Jaś', score: 3}, {name: 'Małgosia', score: 5}];
		const playerComponent = shallow(<PlayersList players={players}/>);

		const expectedPlayersNumber = playerComponent.find(Player).length;

		expect(expectedPlayersNumber).toEqual(2);
	});

	it('click event calls onScoreUpdate', () => {
		const players = [{name: 'Jaś', score: 3}, {name: 'Małgosia', score: 5}];
		const mockedOnScoreUpdate = jest.fn();
		const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
		const firstPlayer = playerComponent.find(Player).first();
		const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');

		onPlayerScoreChange(10);
		expect(mockedOnScoreUpdate).toBeCalledWith(0,10);

	});

	it('click event calls onPlayerRemove', () => {
		const players = [{name: 'Jaś', score: 3}, {name: 'Małgosia', score: 5}];
		const mockedOnPlayerRemove = jest.fn();
		const playerComponent = shallow(<PlayersList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
		const firstPlayer = playerComponent.find(Player).first();
		const onPlayerRemove = firstPlayer.prop('onPlayerRemove');
		const expectedPlayersNumber = playerComponent.find(Player).length;

		onPlayerRemove();
		expect(expectedPlayersNumber).toEqual(1);

	});

});