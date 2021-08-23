import { useState, useEffect } from 'react'


function FetchGet(token, link) {
    const [items, setItems] = useState([]);

    let entetes = new Headers();
    entetes.append('Authorization', 'Bearer ' + token);
    entetes.append('Content-Type', 'application/json')
    entetes.append('Accept', 'application/json')

    let requete = new Request(link);
    
    const getOptions = { method: 'GET',
               headers: entetes,
               mode: 'cors',
               cache: 'default' };
       
    useEffect(() => {
        fetch(requete, getOptions)
        .then(function (res) {
            if (res.status > 400) {
                return false
            }
            else {
                return res.json();
            }
        })
        .then(
            (result) => {
                setItems(result);
            },
        )
    }, [])
    
    return items;
}

export default FetchGet