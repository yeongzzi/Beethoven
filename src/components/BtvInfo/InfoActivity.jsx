import { useState, useEffect } from 'react';
import useStore from '../../store/useStore';
import ActvGroupTab from './ActvGroupTab';
import ActvList from './ActvList';
import ProfilePagination from './ProfilePagination';

const InfoActivity = () => {
    const { selChar: { profActv } } = useStore();

    const groupTab = Array.from(new Set(profActv.map(item => item.group))) // 중복된 작품그룹 처리
    const [selGroup, setSelGroup] = useState(groupTab[0]) // 선택한 그룹명
    const [groupData, setGroupData] = useState([]) // 선택한 그룹 데이터
    const [curPage, setCurPage] = useState(1)

    useEffect(() => {  // 불필요한 렌더링 줄이기 위해 useEffect()
        const filteredData = profActv.filter(item => item.group === selGroup) // selGroup과 동일한 데이터를 필터링
        setGroupData(filteredData)
    }, [selGroup])

    const handleSelGroup = (groupName) => {
        setSelGroup(groupName)
        setCurPage(1) 
    }

    const nextPaging = () => { curPage < totPage ? setCurPage(curPage + 1) : curPage }
    const prevPaging = () => { curPage > 1 ? setCurPage(curPage - 1) : curPage }
    
    const perPage = 8 // 페이지당 항목 수 
    const totPage = Math.ceil(groupData.length / perPage) // 마지막 페이지
    const firstIndex = (curPage - 1) * perPage // 첫번째 항목의 인덱스
    const lastIndex = curPage * perPage // 마지막 항목의 인덱스
    

    return (
        <div className='infoActv'>
            <ActvGroupTab groupTab={groupTab} selGroup={selGroup} groupData={groupData} handleSelGroup={handleSelGroup} />
            <ActvList groupData={groupData} firstIndex={firstIndex} lastIndex={lastIndex} />
            {totPage > 1 && <ProfilePagination curPage={curPage} totPage={totPage} prevPaging={prevPaging} nextPaging={nextPaging} />}
        </div>
    );
};

export default InfoActivity;