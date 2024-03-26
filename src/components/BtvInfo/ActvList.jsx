const ActvList = ({ groupData, firstIndex, lastIndex }) => {
    return (
        <div className='cardList'>
            {
                groupData.slice(firstIndex, lastIndex).map(item =>
                    <div key={item.no} className='cardItem'>
                        <strong>{item.title}</strong>
                        <p>{item.des}</p>
                        <p>{item.date}</p>
                    </div>
                )
            }
        </div>
    );
};

export default ActvList;
