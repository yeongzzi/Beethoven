import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InfoNews = ({ selChar, formSearchUrl }) => {
    const { actor } = selChar
    const { job } = selChar.profInfo
    const mainJob = job.split(',')[0]

    const [isLoading, setIsLoading] = useState(true) // 데이터불러오는중-true 
    const [isError, setIsError] = useState(false) // 에러있을때-true 
    const [news, setNews] = useState([]) //데이터
    const [value, setValue] = useState(`${mainJob} ${actor}}`) //검색어
    const [sort, setSort] = useState('date') //정렬방식

    const searchUrl = 'https://search.naver.com/search.naver?where=news&sm=tab_jum&query='

    useEffect(() => {
        const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
        const fetchData = async () => {
            try {
                setIsLoading(true) // 상태변수는 초기상태일 뿐, 사용자에게 데이터가 요청되었음을 더 빠르게 전달하기 위해서 데이터 요청이 시작될 때인 try블록 내에서 호출
                const response = await axios.get(`${PROXY}/v1/search/news.json`, { // axios.get은 Promise를 반환하므로 await로 비동기적으로 기다린다.
                    params: {
                        query: value, // 검색 키워드
                        display: 10,
                        sort: sort
                    },
                    headers: {
                        'X-Naver-Client-Id': 'oasiYo1SwHbyRA8HoZbZ',
                        'X-Naver-Client-Secret': 'q9bZTlJByS',
                    },
                });
                const fetchNewsData = response.data.items; // 비동기 작업이 완료되었기 때문에 .then을 안써도 response를 사용할 수 있다.
                setNews(fetchNewsData);
            } catch (error) {
                console.error('뉴스 데이터를 불러오는 중 오류가 발생했습니다.', error);
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        };
        fetchData();
    }, [sort]) // 정렬방식이 바뀔 때 실행


    // 날짜형식변환 함수
    const formatDate = (target) => {
        const option = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }
        return new Date(target).toLocaleString('ko-KR', option)
        // 2023. 11. 19. 오전 10:38:00
    }

    // 정렬 핸들링 함수
    const handleSort = (curSort) => setSort(curSort)



    return (
        <div className='infoNews'>
            <div className='contentContainer'>
                <div className='sortOption'>
                    <button className={sort === 'date' ? 'active' : ''} onClick={() => handleSort('date')}>최신순</button>
                    <button className={sort === 'sim' ? 'active' : ''} onClick={() => handleSort('sim')}>관련도순</button>
                </div>
                <ul className='newsList'>
                    {
                        news.map((item, idx) =>
                            <li key={idx} className='newsItem'>
                                <a href={item.originallink} target='_blank'>
                                    <strong dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                                    <span>{formatDate(item.pubDate)}</span>
                                </a>
                            </li>
                        )
                    }
                    <li className={`newsMore ${isLoading ? 'hidden' : ''}`}>
                        <a href={formSearchUrl(searchUrl, job, actor)} target='_blank' title='더 많은 기사 보러가기'>더 많은 기사 보러가기</a>
                    </li>
                </ul>
            </div>


            {
                isLoading && (
                    <div className="loadingContainer">
                        <img src="images/loadingSpinner.gif" alt="로딩 중" />
                    </div>
                )
            }
            {
                isError && (
                    <div className="errorContainer">
                        <div className="icon"></div>
                        <strong>페이지 로딩 중 오류가 발생했습니다.</strong>
                        <p>잠시 후 다시 시도해주세요.</p>
                    </div>
                )
            }





        </div>

    );
};

export default InfoNews;