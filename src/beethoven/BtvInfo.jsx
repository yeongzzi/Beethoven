import InfoCharacter from './InfoCharacter';
import InfoProfile from './InfoProfile';
import InfoActivity from './InfoActivity';
import InfoNews from './InfoNews';
import { BtvInfoStyled } from './style';


const BtvInfo = ({ selChar, selTab, setSelTab }) => {

    // 네이버 검색을 위한 URL 생성
    const formSearchUrl = (url, job, actor) => {
        const mainJob = job.split(',')[0] // 첫번째 직업 추출
        const encoded = encodeURIComponent(`${mainJob} ${actor}`) // 정확한 검색결과를 위해 '직업+배우명'으로 검색
        return `${url}${encoded}`
    }


    return (
        <BtvInfoStyled>
            <div className='btvInfo'>
                <div className='infoTab'>
                    <ul>
                        <li onClick={() => setSelTab('char')} className={selTab === 'char' ? 'active' : ''}>등장인물</li>
                        <li onClick={() => setSelTab('prof')} className={selTab === 'prof' ? 'active' : ''}>프로필</li>
                        <li onClick={() => setSelTab('actv')} className={selTab === 'actv' ? 'active' : ''}>작품활동</li>
                        <li onClick={() => setSelTab('news')} className={selTab === 'news' ? 'active' : ''}>뉴스</li>
                    </ul>
                </div>
                <div className="infoContent">
                    {selTab === 'char' && <InfoCharacter selChar={selChar} />}
                    {selTab === 'prof' && <InfoProfile selChar={selChar} formSearchUrl={formSearchUrl} />}
                    {selTab === 'actv' && <InfoActivity selChar={selChar} />}
                    {selTab === 'news' && <InfoNews selChar={selChar} formSearchUrl={formSearchUrl} />}
                </div>
            </div>
        </BtvInfoStyled>
    );
};

export default BtvInfo;