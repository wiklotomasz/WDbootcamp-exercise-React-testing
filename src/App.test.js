import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList.js';

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