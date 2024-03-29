const ActvGroupTab = ({ groupTab, selGroup, groupData, handleSelGroup }) => {

    return (
        <div className='groupTab'>
            <ul>
                {
                    groupTab.map((groupName, idx) => (
                        <li
                            key={idx}
                            onClick={() => handleSelGroup(groupName)}
                            className={selGroup === groupName ? 'active' : ''}
                        >
                            {selGroup === groupName ? `${groupName} ${groupData.length}` : groupName}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ActvGroupTab;