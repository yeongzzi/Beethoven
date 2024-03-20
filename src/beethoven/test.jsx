// InfoActivity.jsx 작업 전

import { useState, useEffect } from 'react';
import ProfilePagination from './ProfilePagination';

const InfoActivity = ({ selChar }) => {
    const { profActv } = selChar;
    const groupTab = Array.from(new Set(profActv.map(item => item.group)));

    const [curGroup, setCurGroup] = useState(groupTab[0]);
    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        const filteredData = profActv.filter(item => item.group === curGroup);
        setGroupData(filteredData);
    }, [curGroup, profActv]);

    return (
        <div className='infoActv'>
            <GroupTabs groupTab={groupTab} curGroup={curGroup} setCurGroup={setCurGroup} />
            <ActivityList groupData={groupData} />
            <ProfilePagination groupData={groupData} />
        </div>
    );
};





const GroupTabs = ({ groupTab, curGroup, setCurGroup }) => {
    const handleCurGroup = (groupName) => {
        setCurGroup(groupName);
    };

    return (
        <div className='groupTab'>
            <ul>
                {groupTab.map((groupName, idx) => (
                    <li key={idx} onClick={() => handleCurGroup(groupName)} className={curGroup === groupName ? 'active' : ''}>
                        {curGroup === groupName ? `${groupName} ${groupData.length}` : groupName}
                    </li>
                ))}
            </ul>
        </div>
    );
};







const ActivityList = ({ groupData }) => {
    return (
        <div className='cardList'>
            {groupData.map(item => (
                <div key={item.no} className='cardItem'>
                    <strong>{item.title}</strong>
                    <p>{item.des}</p>
                    <p>{item.date}</p>
                </div>
            ))}
        </div>
    );
};

export default InfoActivity;
