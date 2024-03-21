import {Routes, Route} from 'react-router-dom'
import { Image } from '../components/image/Image';
import { Imageinfo } from '../components/ImageInfo/Imageinfo';

function ImageRoutes() {

    return(
        <main className="userRoutes">

            <Routes>
                <Route path='/' element={<Image/>} />
                <Route path='/image/:id' element={<Imageinfo />} />
            </Routes>
        </main>

    );
}

export {
    ImageRoutes
}