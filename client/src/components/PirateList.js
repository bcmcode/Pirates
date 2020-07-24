import React from 'react';
import DeleteButton from './DeleteButton';
import { navigate } from '@reach/router';

export default function PirateList({pirates, setPirates}) {
    return(
        <>
            {pirates.map((pirate, idx) => {
                return <div key={idx}>
                    <div>
                        <img src={pirate.imageUrl} alt={pirate.name} style={{width: "200px"}}/>
                    </div>
                    <h3>{pirate.name}</h3>
                    <button type="button" onClick={() => navigate("/pirate/"+pirate._id)}>View the Pirate</button>
                    <DeleteButton id={pirate._id} setPirates={setPirates} pirates={pirates} />
                </div>
            })}
        </>
    )
}
