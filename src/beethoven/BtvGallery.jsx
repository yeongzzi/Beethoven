import { BtvGalleryStyled } from './style';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';

const BtvGallery = ({ selChar, selImg, handleSelImg }) => {
    return (
        <BtvGalleryStyled>
            <div className='btvGallery'>
                <GalleryBig selImg={selImg} />
                <GalleryList selChar={selChar} handleSelImg={handleSelImg} />
            </div>
        </BtvGalleryStyled>
    );
};

export default BtvGallery;