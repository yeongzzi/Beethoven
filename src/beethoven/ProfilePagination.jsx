
const ProfilePagination = ({ curPage, totPage, prevPaging, nextPaging }) => {
    return (
        <div className="pagination">
            <button className='xi-angle-left' onClick={prevPaging}></button>
            <span>{curPage}</span>
            <span>/</span>
            <span>{totPage}</span>
            <button className='xi-angle-right' onClick={nextPaging}></button>
        </div>
    );
};

export default ProfilePagination;