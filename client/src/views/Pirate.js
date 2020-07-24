import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function Pirate({ id }) {

    const [pirate, setPirate] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('/api/pirates/'+id)
            .then(res => {
                setPirate(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [id])

    const updatePirate = field => {
        axios.put('/api/pirates/'+id, {[field]: !pirate[field]})
            .then(res => setPirate(res.data))
            .catch(console.log);
    }

    if(!loaded) return "Loading ...";

    return(
        <div>
            <h1>{pirate.name}</h1>
            <button type="button" onClick={() => navigate("/pirates")}>Back to the Crew!</button>
            <div>
                <img src={pirate.imageUrl} alt={pirate.name} style={{width: "400px"}}/>
                <h3>"{pirate.catchPhrase}"</h3>
            </div>
            <div>
                <h3>About</h3>
                <p>Positon: {pirate.position}</p>
                <p>Treasure Chests: {pirate.treasureChests}</p>
                <p>Peg Leg: {pirate.pegLeg ? "Yarrr" : "No matey" }
                    <input type="checkbox" checked={pirate.pegLeg} onChange={() => updatePirate("pegLeg") }/>
                </p>
                <p>Eye Patch: {pirate.eyePatch ? "Yarrr" : "No matey" }
                    <input type="checkbox" checked={pirate.eyePatch} onChange={() => updatePirate("eyePatch") }/>
                </p>
                <p>Hook Hand: {pirate.hook ? "Yarrr" : "No matey" }
                    <input type="checkbox" checked={pirate.hook} onChange={() => updatePirate("hook") }/>
                </p>
            </div>
        </div>
    )
}