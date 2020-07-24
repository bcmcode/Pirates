import React, { useState, useEffect }from 'react';
import { navigate } from '@reach/router';
import PirateList from '../components/PirateList';
import axios from 'axios';


export default function Crew() {
    const [pirates, setPirates] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('/api/pirates')
            .then(res => {
                const sortedNames = res.data.map(pirate => pirate.name).sort();
                const sorted = [];
                const pirates = res.data;
                for(const name of sortedNames){
                    for(const pirate of pirates){
                        if(pirate.name === name) {
                            sorted.push(pirate);
                            break;
                        }
                    }
                }
                setPirates(sorted);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <div>
                <h1>Pirate Crew</h1>
                <button type="button" onClick={()=>navigate("/pirate/new")}>Add Pirate</button>
            </div>
            {loaded && <PirateList pirates={pirates} setPirates={setPirates}/>}
        </div>
    )
}