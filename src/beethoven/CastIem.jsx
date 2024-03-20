
const CastItem = ({ item, handleSelChar }) => {
    const { id, actor, character, imgUrl } = item
    const { webp, jpeg } = imgUrl
    return (
        <li onClick={() => handleSelChar(id)}>
            <picture>
                <source srcSet={webp} type='image/webp' />
                <source srcSet={jpeg} type='image/jpeg' />
                <img src={jpeg} alt={character} />
            </picture>
            <strong>{actor}</strong>
            <p>{character}</p>
            <span>{id}</span>
        </li>
    );
};

export default CastItem;