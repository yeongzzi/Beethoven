import { useState, useEffect } from 'react';
import ProfilePagination from './ProfilePagination';



const InfoActivity = ({ selChar }) => {
    const { profActv } = selChar
    const groupTab = Array.from(new Set(profActv.map(item => item.group))) // 작품활동의 중복된 그룹명을 처리


    const [curGroup, setCurGroup] = useState(groupTab[0]) // 현재 '그룹명'
    const [groupData, setGroupData] = useState([]) // 해당 그룹의 데이터


    // 페이징에 필요한 코드
    const [curPage, setCurPage] = useState(1) // 현재페이지
    const perPage = 8 // 페이지당 항목 수 
    const totPage = Math.ceil(groupData.length / perPage) // 마지막 페이지
    const firstIndex = (curPage - 1) * perPage // 첫번째 항목의 인덱스
    const lastIndex = curPage * perPage // 마지막 항목의 인덱스


    const handleCurGroup = (groupName) => { // 그룹명을 전달 
        setCurGroup(groupName)
        setCurPage(1) // 그룹 변경 시 페이지 초기화
    }

    // [선택 그룹]과 [작품활동 데이터]가 바뀔 때에만 [선택그룹]의 데이터를 필터링해라
    useEffect(() => {  // 불필요한 렌더링을 줄이기 위해 useEffect를 사용
        const filteredData = profActv.filter(item => item.group === curGroup) // curGroup과 동일한 데이터를 필터링
        setGroupData(filteredData)
    }, [curGroup, profActv])


    // 페이지네이션 함수
    const nextPaging = () => { curPage < totPage ? setCurPage(curPage + 1) : curPage }
    const prevPaging = () => { curPage > 1 ? setCurPage(curPage - 1) : curPage }



    return (
        <div className='infoActv'>
            <div className='groupTab'>
                <ul>
                    {
                        // groupTab 객체를 배열로 변경 / 함수로 그룹명을 전달 / curGroup과 그룹명이 일치하면 클래스명 추가하고, 그룹명 옆에 개수가 나타난다
                        Array.from(groupTab).map((groupName, idx) => (
                            <li key={idx} onClick={() => handleCurGroup(groupName)} className={curGroup === groupName ? 'active' : ''}>
                                {curGroup === groupName ? `${groupName} ${groupData.length}` : groupName}
                            </li>
                        ))}
                </ul>
            </div>

            <div className='cardList'>
                {
                    groupData.slice(firstIndex, lastIndex)
                        .map(item =>
                            <div key={item.no} className='cardItem'>
                                <strong>{item.title}</strong>
                                <p>{item.des}</p>
                                <p>{item.date}</p>
                            </div>
                        )
                }
            </div>
            {
                // 전체페이지 개수가 1보다 큰 경우만 페이지네이션이 보이게 하라
                totPage > 1 &&
                <ProfilePagination curPage={curPage} totPage={totPage} prevPaging={prevPaging} nextPaging={nextPaging} />
            }

        </div>
    );
};

export default InfoActivity;