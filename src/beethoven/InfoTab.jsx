
const InfoTab = ({ selTab, setSelTab }) => {
    return (
        <div className='infoTab'>
            <ul>
                <li onClick={() => setSelTab('char')} className={selTab === 'char' ? 'active' : ''}>등장인물</li>
                <li onClick={() => setSelTab('prof')} className={selTab === 'prof' ? 'active' : ''}>프로필</li>
                <li onClick={() => setSelTab('actv')} className={selTab === 'actv' ? 'active' : ''}>작품활동</li>
                <li onClick={() => setSelTab('news')} className={selTab === 'news' ? 'active' : ''}>뉴스</li>
            </ul>
        </div>
    );
};

export default InfoTab;

/* 
    1. 중복된 코드 줄이기 > 하나의 함수로 추출
    2. 클래스명 하드코딩 > 외부에서 전달받거나 동적으로 생성하여 유연하게 설정
    3. tabIndex : 키보드로 탭 선택가능 
*/
