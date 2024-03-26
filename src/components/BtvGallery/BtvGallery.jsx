import { BtvGalleryStyled } from '../style';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';

const BtvGallery = () => {

    return (
        <BtvGalleryStyled>
            <div className='btvGallery'>
                <GalleryBig />
                <GalleryList />
            </div>
        </BtvGalleryStyled>
    );
};

export default BtvGallery;