const ProfilePagination = ({ curPage, totPage, prevPaging, nextPaging }) => {
    
    return (
        <div className="pagination">
            <button onClick={prevPaging}>&lt;</button>
            <span>{curPage}</span>
            <span>/</span>
            <span>{totPage}</span>
            <button onClick={nextPaging}>&gt;</button>
        </div>
    );
};

export default ProfilePagination;