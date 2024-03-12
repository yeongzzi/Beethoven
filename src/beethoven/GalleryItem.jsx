const GalleryItem = ({ item, handleSelImg }) => {
    const { no, webp, jpeg } = item

    return (
        <li onClick={() => handleSelImg(no)}>
            <picture>
                <source srcSet={webp} type='image/webp' />
                <source srcSet={jpeg} type='image/jpeg' />
                <img src={jpeg} alt={jpeg} />
            </picture>
        </li>
    );
};

export default GalleryItem;