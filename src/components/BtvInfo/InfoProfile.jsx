import useStore from '../../store/useStore';

const InfoProfile = () => {
    const { selChar, isBlank } = useStore();
    const { actor } = selChar;
    const { job, birth, physique, agency, academic, debut, imgUrl } = selChar.profInfo;

    const getClassName = (value) => isBlank(value);

    const formSearchUrl = (job, actor) => {
        const searchUrl = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=';
        const mainJob = job.split(',')[0]; // 첫번째 직업만 추출
        const encoded = encodeURIComponent(`${mainJob} ${actor}`); // 정확한 검색결과를 위해 '직업+배우명'으로 검색
        return `${searchUrl}${encoded}`;
    };

    return (
        <div className='infoProf'>
            <div className="leftBox">
                <strong>{actor}</strong>
                <span>{job}</span>
                <dl>
                    <div>
                        <dt>출생</dt>
                        <dd>{birth}</dd>
                    </div>
                    <div>
                        <dt>신체</dt>
                        <dd>{physique}</dd>
                    </div>
                    <div className={getClassName(agency) ? 'blank' : ''}>
                        <dt>소속</dt>
                        <dd>{agency}</dd>
                    </div>
                    <div className={getClassName(academic) ? 'blank' : ''}>
                        <dt>학력</dt>
                        <dd>{academic}</dd>
                    </div>
                    <div>
                        <dt>데뷔</dt>
                        <dd>{debut}</dd>
                    </div>
                </dl>
            </div>
            <div className="rightBox">
                <div className="img" style={{ backgroundImage: `url(${imgUrl})` }}></div>
            </div>
            <div className="bottomBox">
                <a href={formSearchUrl(job, actor)} target='_blank' title='더 많은 프로필 정보 보기'>더보기</a>
            </div>
        </div>
    );
};

export default InfoProfile;