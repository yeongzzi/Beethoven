
const GalleryBig = ({ selImg }) => {
    return (
        <div className="bigImg">
            <img src={selImg} alt={selImg} />
        </div>
    );
};

export default GalleryBig;