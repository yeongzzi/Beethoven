import GalleryItem from './GalleryItem';

const GalleryList = ({ selChar: { imgList }, handleSelImg }) => {

    return (
        <ul className='imgList'>
            {
                imgList.map(item => <GalleryItem key={item.no} item={item} handleSelImg={handleSelImg} />)
            }
        </ul>
    );
};

export default GalleryList;