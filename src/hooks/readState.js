/*eslint-disable*/
import {useState, useEffect} from 'react';

const readState = (API) => {
    const [scripts, setScript] = useState({"sketchsInfo": { "intro":[], "audio":[], "dataCode":[], "gallery":[]}});
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setScript(data.sketchsInfo));
    }, []);

    return scripts;
}

export default readState;