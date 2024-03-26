import useStore from '../../store/useStore';

const GalleryItem = ({ item }) => {
    const { no, webp, jpeg } = item
    const { updateSelImg } = useStore();

    const handleSelImg = () => updateSelImg(no)

    return (
        <li onClick={handleSelImg}>
            <picture>
                <source srcSet={webp} type='image/webp' />
                <source srcSet={jpeg} type='image/jpeg' />
                <img src={jpeg} alt={jpeg} />
            </picture>
        </li>
    );
};

export default GalleryItem;