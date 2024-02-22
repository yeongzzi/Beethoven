
const InfoProfile = ({ selChar, formSearchUrl }) => {
    const { actor } = selChar
    const { job, birth, physique, agency, academic, debut, imgUrl } = selChar.profInfo

    const isBlank = (value) => value.trim() === '' // value가 공백인지 확인하는 함수

    const searchUrl = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query='


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
                    {/* dd의 value===''가 참이면 클래스명이 'blank', 거짓이면 '' */}
                    <div className={isBlank(agency) ? 'blank' : ''}>
                        <dt>소속</dt>
                        <dd>{agency}</dd>
                    </div>
                    <div className={isBlank(academic) ? 'blank' : ''}>
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
                <a href={formSearchUrl(searchUrl, job, actor)} target='_blank' title='더 많은 프로필 정보 보기'>더보기</a>
            </div>



        </div>
    );
};

export default InfoProfile;