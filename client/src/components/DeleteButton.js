import React from 'react';
import axios from 'axios';

export default function DeleteButton({ id, setPirates, pirates }) {

    const walkThePlank = e => {
        axios.delete('/api/pirates/'+id)
            .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
            .catch(console.log)
    }

    return(
        <button type="button" onClick={walkThePlank}>Walk the Plank!</button>
    )
}