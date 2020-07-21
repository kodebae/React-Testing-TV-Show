import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

const EpisodesList = []
test('renders without errors', () => {
    render(<Episodes episodes={EpisodesList}/>)
})