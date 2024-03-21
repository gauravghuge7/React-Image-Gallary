import "./image.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import { DisplayImage } from "../display/DisplayImage";
import { Imageinfo } from "../ImageInfo/Imageinfo";

function Image() {

    const [imageGallary, setImageGallary] = useState({});

    const [loading, setLoading] = useState(true);


    async function getImage() {

        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");

        console.log(response);
        console.log(response.config.url);
        // console.log(response.data);

        const photos = response.data.photos;


        // console.log(photos);
        // const photoInfo = photos.map((info) => axios.get(info.url))
        // console.log(photoInfo);

        // const gallaryData = await axios.all(photoInfo);
        
        const photoList = photos.map((gallary) => {
            return{
                name: gallary.title,
                image: gallary.url,
                id: gallary.id
            }
           
        })
        


        

        console.log(photoList);
        
        setImageGallary(photoList);


        setLoading(false);
       

    }


    useEffect(() => {
        getImage();
    },[])

   let a = 1;
   let b = a++;



    return(
        <div className="image-get">
            {(loading) ? "gallary downloading images from server" :
                imageGallary.map((i) => <DisplayImage name={i.name} image={i.image} key={b} id={i.id} />)
            }
            
            {/* {
                imageGallary.map((info) => <Imageinfo name={info.name} id={info.id} image={info.image} desc={info.desc} /> )
            } */}

        </div>

    );

}



export {
    Image
}

