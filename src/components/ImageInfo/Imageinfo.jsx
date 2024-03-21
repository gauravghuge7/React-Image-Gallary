import axios from 'axios';
import {useParams} from 'react-router-dom';

function Imageinfo(image, name, desc) {
    const {id } = useParams();
    console.log(id);


    async function getinfo() {
        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")

        console.log(response.data);
    }

    return(
        <div>
            <div> <img src={image} /></div> 
            <div>
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export {
    Imageinfo
}