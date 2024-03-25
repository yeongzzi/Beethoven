import useStore from '../store/useStore';
import GalleryItem from './GalleryItem';

const GalleryList = () => {
    const { selChar: { imgList } } = useStore();

    return (
        <ul className='imgList'>
            {
                imgList.map(item => <GalleryItem key={item.no} item={item} />)
            }
        </ul>
    );
};

export default GalleryList;