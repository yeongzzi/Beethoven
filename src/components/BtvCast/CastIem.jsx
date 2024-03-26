import useStore from "../../store/useStore";

const CastItem = ({ item }) => {
    const { id, actor, character, imgUrl } = item
    const { webp, jpeg } = imgUrl

    const { updateSelChar } = useStore();

    const handleChar = () => updateSelChar(id);

    return (
        <li onClick={handleChar}>
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