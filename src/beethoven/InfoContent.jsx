import InfoCharacter from './InfoCharacter';
import InfoProfile from './InfoProfile';
import InfoActivity from './InfoActivity';
import InfoNews from './InfoNews';

const InfoContent = ({ selTab, selChar, formSearchUrl }) => {
    return (
        <div className="infoContent">
            {selTab === 'char' && <InfoCharacter selChar={selChar} />}
            {selTab === 'prof' && <InfoProfile selChar={selChar} formSearchUrl={formSearchUrl} />}
            {selTab === 'actv' && <InfoActivity selChar={selChar} />}
            {selTab === 'news' && <InfoNews selChar={selChar} formSearchUrl={formSearchUrl} />}
        </div>
    );
};

export default InfoContent;

/*  
    하드코딩 -> 유연성 높이기 : 탭에 따른 컴포넌트 매핑하는 방식, 조건부 렌더링을 처리하는 함수 별도 분리        
*/
