/*eslint-disable*/
import {useState, useEffect} from 'react';

const readState = (API) => {
    const [scripts, setScript] = useState({ intro:[], audio:[], dataCode:[], gallery:[] });
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setScript(data));
    }, []);

    return scripts;
}

export default readState;