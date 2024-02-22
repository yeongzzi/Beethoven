import React from 'react';

const CastItem = ({ item, handleSelChar }) => {
    const { id, actor, character, imgUrl } = item
    return (
        <li onClick={() => handleSelChar(id)}>
            <img src={imgUrl} alt={character} />
            <strong>{actor}</strong>
            <p>{character}</p>
            <span>{id}</span>
        </li>
    );
};

export default CastItem;