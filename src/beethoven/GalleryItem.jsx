import React from 'react';

const GalleryItem = ({ item, handleSelImg }) => {
    const { no, img } = item
    return (
        <li onClick={() => handleSelImg(no, img)}>
            <img src={img} alt={no} />
        </li>
    );
};

export default GalleryItem;

{/* img > alt 수정방법찾기 */ }