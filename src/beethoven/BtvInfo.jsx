import InfoTab from './InfoTab';
import InfoContent from './InfoContent';
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
                <InfoTab selTab={selTab} setSelTab={setSelTab} />
                <InfoContent selTab={selTab} selChar={selChar} formSearchUrl={formSearchUrl} />
            </div>
        </BtvInfoStyled>
    );
};

export default BtvInfo;