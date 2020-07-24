import React from 'react';
import PirateForm from '../components/PirateForm';
import { navigate } from '@reach/router';

export default function New() {
    return(
        <div>
            <h1>Add a Pirate</h1>
            <button onClick={() => navigate('/pirates')}>Back to the Crew!</button>
            <PirateForm />
        </div>
    )
}