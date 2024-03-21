import { Link } from "react-router-dom";
import "./displayImage.css";
function DisplayImage({name, image, id}) {

    return(
        <div>
            <Link to={`/image/${id}`} id="link" >
                <div className="image-box">    
                    <h2>{id}</h2> 
                    <img src={image} />
                </div>
            </Link>
            
        </div>
        
    );
}



export {
    DisplayImage
}