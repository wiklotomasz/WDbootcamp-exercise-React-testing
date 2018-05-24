import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList.js';
import AddPlayer from './components/AddPlayer/AddPlayer.js';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should updateplayer score', () => {
	const appComponent = shallow(<App />);
	const players = [{name: 'Piotr', score: 5}, {name: 'Paweł', score: 2}];
	appComponent.setState({players});
	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

	onScoreUpdate(0, 7);

	const playersAfterUpdate = appComponent.state('players');

	expect(playersAfterUpdate[0].score).toEqual(12);
});

it('should add new player', () => {
	const appComponent = shallow(<App />);
	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');

	onPlayerAdd('Jan');

	const players = appComponent.state('players');

	expect(players.length).toEqual(1);
	expect(players[0].name).toEqual('Jan');
	expect(players[0].score).toEqual(0);
});

it('should remove player', () => {
	const appComponent = shallow(<App />);
	const players = [{name: 'Piotr', score: 5}, {name: 'Paweł', score: 2}];
	appComponent.setState({players});

	const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');

	onPlayerRemove();

	expect(players.length).toEqual(1);

});