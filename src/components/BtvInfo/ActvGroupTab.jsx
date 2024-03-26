const ActvGroupTab = ({ groupTab, selGroup, groupData, handleSelGroup }) => {

    return (
        <div className='groupTab'>
            <ul>
                {
                    // 함수로 그룹명 전달, 그룹명 일치하면 클래스 추가, 개수 추가
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