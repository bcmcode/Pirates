import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function PirateForm() {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [treasureChests, setTreasureChests] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [position, setPosition] = useState('');
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hook, setHook] = useState(true);
    const [errors, setErrors] = useState([]);

    const createPirate = e => {
        e.preventDefault();
        axios.post('/api/pirates', {
            name,
            imageUrl,
            treasureChests,
            catchPhrase,
            position,
            pegLeg,
            eyePatch,
            hook
        })
            .then(()=>navigate('/pirates'))
            .catch(err =>{
                setErrors(Object.values(err.response.data.errors).map(field => field.properties.message));
            });
    }

    return(
        <form onSubmit={createPirate}>
            {errors.map((error, idx) => <p style={{color: "red"}} key={idx}>{error}</p>)}
            <div>
                <label>Name:</label>
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
            </div>
            <div>
                <label>Image URL:</label>
                <input type="text" onChange={e => setImageUrl(e.target.value)} value={imageUrl} />
            </div>
            <div>
                <label>Treasure Chests:</label>
                <input type="number" onChange={e => setTreasureChests(e.target.value)} value={treasureChests} />
            </div>
            <div>
                <label>Catch Phrase:</label>
                <input type="text" onChange={e => setCatchPhrase(e.target.value)} value={catchPhrase} />
            </div>
            <div>
                <label>Position:</label>
                <select name="position" id="position" onChange={e => setPosition(e.target.value)} value={position}>
                    <option value="" disabled>Select a Postion</option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
            </div>
            <div>
                <label>Peg Leg:</label>
                <input type="checkbox" onChange={e => setPegLeg(e.target.checked)} checked={pegLeg} />
            </div>
            <div>
                <label>Eye Patch:</label>
                <input type="checkbox" onChange={e => setEyePatch(e.target.checked)} checked={eyePatch} />
            </div>
            <div>
                <label>Hook Hand:</label>
                <input type="checkbox" onChange={e => setHook(e.target.checked)} checked={hook} />
            </div>
            <button type="submit" >Submit</button>
        </form>
    )
}