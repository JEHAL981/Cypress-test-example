import React from 'react';
import { Router, Link } from '@reach/router';
import { MuiscBand } from './components/MusicBand';

const HomePage = () => (
    <ul>
        <li>
            <Link to="/music-band">MusicBand</Link>
        </li>
    </ul>
);


const MusicBandsPage = () => <MuiscBand />;


export function Routes() {
    return (
        <Router>
            <HomePage path="/" />
            <MusicBandsPage path="/music-band" />
        </Router>
    );
}
