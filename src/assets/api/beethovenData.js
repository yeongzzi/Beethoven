export default [
    {
        id: 1,
        actor: '박효신',
        character: '루드비히 반 베토벤',
        imgUrl: {
            webp: './images/cast1.webp',
            jpeg: './images/cast1.jpeg'
        },
        imgList: [
            { no: 1, webp: './images/char1-1.webp', jpeg: './images/char1-1.jpeg' },
            { no: 2, webp: './images/char1-2.webp', jpeg: './images/char1-2.jpeg' },
            { no: 3, webp: './images/char1-3.webp', jpeg: './images/char1-3.jpeg' },
            { no: 4, webp: './images/char1-4.webp', jpeg: './images/char1-4.jpeg' },
            { no: 5, webp: './images/char1-5.webp', jpeg: './images/char1-5.jpeg' },
            { no: 6, webp: './images/char1-6.webp', jpeg: './images/char1-6.jpeg' },
            { no: 7, webp: './images/char1-7.webp', jpeg: './images/char1-7.jpeg' },
            { no: 8, webp: './images/char1-8.webp', jpeg: './images/char1-8.jpeg' }
        ],
        profChar: {
            subTitle: 'LUDWIG VAN BEETHOVEN',
            des: '당대 최고의 피아니스트이자 유명한 독립 예술가\n엄격한 도덕성을 갖고 있으며, 자신의 명예를 중요시하여 관습에 강요당하는 것을 용납하지 않는다. 누군가에게 사랑받는다는 것을 상상조차 못했기에, 까칠하고 냉정한 모습을 앞세워 자신의 부족한 자신감을 숨기고 오직 자신의 예술성만 의지하며 내세울 뿐이다. 청각을 점점 상실해가며 두려움에 휩싸이고 그의 삶은 위기에 빠지게 된다.'
        },
        profInfo: {
            job: '가수', birth: '1981년 12월 1일', physique: '178cm, 65kg', agency: '허비그하로', academic: '경희대학교 포스트모던음악학 학사', debut: '1999년 1집 앨범 [해줄수 없는일]', imgUrl: './images/profImg1.jpeg'
        },
        profActv: [
            { no: 1, group: '앨범', title: '戀人 (연인)', des: '박효신', date: '2019.06.29' },
            { no: 2, group: '앨범', title: 'Goodbye', des: '박효신', date: '2019.05.06' },
            { no: 3, group: '앨범', title: '바람이 부네요', des: '박효신, 박성연', date: '2019.03.10' },
            { no: 4, group: '앨범', title: '미스터 션샤인 OST Part 1', des: '박효신', date: '2018.07.08' },
            { no: 5, group: '앨범', title: '별 시 (別 時)', des: '박효신', date: '2018.04.30' },
            { no: 6, group: '앨범', title: '겨울소리', des: '박효신', date: '2018.01.01' },
            { no: 7, group: '앨범', title: 'Shine Your Light', des: '박효신', date: '2015.04.06' },
            { no: 8, group: '앨범', title: '야생화', des: '박효신', date: '2014.03.28' },
            { no: 9, group: '앨범', title: 'Jelly Christmas 2013', des: '성시경, 박효신, 서인국, VIXX(빅스), 여동생', date: '2013.12.10' },
            { no: 10, group: '앨범', title: 'Jelly Christmas 2012 HEART PROJECT', des: '성시경, 박효신, 이석훈, 서인국, VIXX(빅스)', date: '2012.12.06' },
            { no: 11, group: '앨범', title: '널 사랑한다 (아테나 - 전쟁의 여신 OST)', des: '박효신', date: '2010.08.23' },
            { no: 12, group: '앨범', title: '경희를 내 품에', des: '김태우, 노유민, 린, 박효신, 비, 이기찬, 이혜선, 천명훈', date: '2010.04.01' },
            { no: 13, group: '앨범', title: 'Gift', des: '박효신', date: '2009.09.15' },
            { no: 14, group: '앨범', title: 'Soul Tree', des: '박효신', date: '2004.04.19' },
            { no: 15, group: '앨범', title: 'Second Story', des: '박효신', date: '2001.01.18' },
            { no: 16, group: '앨범', title: '해줄 수 없는 일', des: '박효신', date: '1999.12.01' },
            { no: 17, group: '공연', title: '박효신 STPD 2023 GOING HOME', des: '올림픽공원88잔디마당', date: '2023.09.09.~2023.09.10.' },
            { no: 18, group: '공연', title: '베토벤 Beethoven Secret SEASON 2', des: '예술의전당오페라하우스', date: '2023.01.12.~2023.04.14.' },
            { no: 19, group: '공연', title: '베토벤; Beethoven Secret SEASON 1', des: '세종문화회관 대극장', date: '2022.06.10.~2022.08.22.' },
            { no: 20, group: '공연', title: '박효신 LIVE 2019 LOVERS : where is your love?', des: '올림픽체조경기장', date: '2019.06.29.~2019.07.13.' },
            { no: 21, group: '공연', title: '웃는 남자', des: '블루스퀘어 인터파크홀', date: '2018.08.26.~2018.09.05.' },
            { no: 22, group: '공연', title: '팬텀', des: '블루스퀘어 삼성전자홀', date: '2016.11.26.~2017.04.08.' },
            { no: 23, group: '공연', title: '모차르트!', des: '부산문화회관 대극장', date: '2013.09.14.~2014.09.19.' },
            { no: 24, group: '공연', title: '엘리자벳', des: '예술의전당 오페라극장', date: '2013.07.26.~2013.09.07.' },
            { no: 25, group: '영화', title: '기생충', des: '음악지원', date: '2019.05.30.' },
            { no: 26, group: '영화', title: '뷰티풀 투모로우', des: '주연', date: '2017.10.26.' },
            { no: 27, group: '방송', title: '너의 노래는', des: '출연', date: '2019.01.17.~2019.02.14.' },
        ]
    },
    {
        id: 2,
        actor: '조정은',
        character: '안토니 브렌타노',
        imgUrl: {
            webp: './images/cast2.webp',
            jpeg: './images/cast2.jpeg'
        },
        imgList: [
            { no: 1, webp: './images/char2-1.webp', jpeg: './images/char2-1.jpeg' },
            { no: 2, webp: './images/char2-2.webp', jpeg: './images/char2-2.jpeg' },
            { no: 3, webp: './images/char2-3.webp', jpeg: './images/char2-3.jpeg' },
            { no: 4, webp: './images/char2-4.webp', jpeg: './images/char2-4.jpeg' },
            { no: 5, webp: './images/char2-5.webp', jpeg: './images/char2-5.jpeg' },
            { no: 6, webp: './images/char2-6.webp', jpeg: './images/char2-6.jpeg' },
            { no: 7, webp: './images/char2-7.webp', jpeg: './images/char2-7.jpeg' },
        ],

        profChar: {
            subTitle: 'ANTONIE BRENTANO',
            des: '우아하고 매력 넘치는 예술을 사랑하는 여인\n멀리 떨어진 프랑크푸르트에 거주하는 연상의 은행가 프란츠와 16세에 정략 결혼했다. 귀족이었던 아버지의 유산을 정리하기 위해 비엔나에 머물던 중, 우연히 베토벤을 만나 행복을 모른 채 살아온 위태로운 마음이 치유됨을 느낀다. 위대한 예술가가 아닌 인간 베토벤의 내면의 상처와 외로움에 깊이 교감하며 그를 통해 그동안 그리워했던 것이 무엇인지 깨닫게 된다.'
        },
        profInfo: {
            job: '뮤지컬배우', birth: '1979년 7월 17일', physique: '167cm', agency: 'PL엔터테인먼트', academic: '왕립스코트음악연극대학교대학원 석사', debut: '2002년 뮤지컬 <로미오와 줄리엣>', imgUrl: './images/profImg2.jpeg'
        },
        profActv: [
            { no: 1, group: '공연', title: '레미제라블', des: '블루스퀘어 신한카드홀', date: '2023.11.30.~2024.03.10.' },
            { no: 2, group: '공연', title: '베토벤; Beethoven Secret SEASON 2', des: '세종문화회관 대극장', date: '2023.04.14.~2023.05.15.' },
            { no: 3, group: '공연', title: '베토벤; Beethoven Secret', des: '예술의전당오페라하우스', date: '2023.01.12.~2023.03.26.' },
            { no: 4, group: '공연', title: '어차피 혼자', des: '홍익대학교대학로아트센터 대극장', date: '2022.09.06.~2022.11.20.' },
            { no: 5, group: '공연', title: '지킬 앤 하이드', des: '샤롯데씨어터', date: '2021.10.19.~2022.05.08.' },
            { no: 6, group: '공연', title: '드라큘라', des: '블루스퀘어 신한카드홀', date: '2021.05.20.~2021.08.01.' },
            { no: 7, group: '공연', title: '조정은 콘서트', des: '블루스퀘어 아이마켓홀', date: '2019.11.19.~2019.11.20.' },
            { no: 8, group: '공연', title: '닥터지바고', des: '샤롯데씨어터', date: '2018.02.27.~2018.05.07.' },
            { no: 9, group: '공연', title: '모래시계', des: '충무아트센터 대극장', date: '2017.12.05.~2018.02.11.' },
            { no: 10, group: '공연', title: '몬테크리스토', des: '충무아트센터 대극장', date: '2016.11.19.~2017.02.12.' },
            { no: 11, group: '공연', title: '레미제라블', des: '블루스퀘어 삼성전자홀', date: '2015.11.28.~2016.03.06.' },
            { no: 12, group: '공연', title: '엘리자벳', des: '블루스퀘어 삼성전자홀', date: '2015.06.13.~2015.09.06.' },
            { no: 13, group: '공연', title: '지킬 앤 하이드', des: '블루스퀘어 삼성전자홀', date: '2014.11.21.~2015.04.05.' },
            { no: 14, group: '공연', title: '히즈 피아노 온 브로드웨이', des: '충무아트홀 중극장 블랙', date: '2014.10.17.~2014.10.19.' },
            { no: 15, group: '공연', title: '드라큘라', des: '예술의전당 오페라극장', date: '2014.07.15.~2014.09.05.' },
            { no: 16, group: '공연', title: '소서노', des: '예술의전당 오페라극장', date: '2014.03.24.~2014.03.29.' },
            { no: 17, group: '공연', title: '레미제라블', des: '블루스퀘어 삼성전자홀', date: '2013.04.06.~2013.09.01.' },
            { no: 18, group: '공연', title: '조로', des: '세종문화회관 대극장', date: '2011.08.23.~2011.09.10.' },
            { no: 19, group: '공연', title: '지킬 앤 하이드', des: '샤롯데씨어터', date: '2010.11.30.~2011.08.28.' },
            { no: 20, group: '앨범', title: '뮤지컬 몬테크리스토 (2016)', des: '카이(Kai), 조정은', date: '2016.12.1' },
            { no: 21, group: '앨범', title: '뮤지컬 엘리자벳', des: '조정은', date: '2015.06.10' },
        ]
    },
    {
        id: 3,
        actor: '김진욱',
        character: '카스파 반 베토벤',
        imgUrl: {
            webp: './images/cast3.webp',
            jpeg: './images/cast3.jpeg'
        },
        imgList: [
            { no: 1, webp: './images/char3-1.webp', jpeg: './images/char3-1.jpeg' },
            { no: 2, webp: './images/char3-2.webp', jpeg: './images/char3-2.jpeg' },
            { no: 3, webp: './images/char3-3.webp', jpeg: './images/char3-3.jpeg' },
            { no: 4, webp: './images/char3-4.webp', jpeg: './images/char3-4.jpeg' },
        ],
        profChar: {
            subTitle: 'KASPAR VAN BEETHOVEN',
            des: '예술가인 형을 헌신적으로 돕는 베토벤의 동생\n천성적으로 정직하고 순진한 성격을 가진 소유자로 여러모로 자신보다 뛰어난 형의 천재성을 동경하며 사랑한다. 요한나와 사랑에 빠지게 되자, 베토벤은 그녀의 평판이 나쁘다며 그들의 사랑을 반대한다. 베토벤보다 일찍이 사랑의 힘에 대해 깨달은 카스파는 여전히 형에 대한 애정을 갖고 있지만 이에 맞서기로 결심하고, 형제는 각자의 길로 흩어지게 된다.'
        },
        profInfo: {
            job: '뮤지컬배우, 가수', birth: '1994년 2월 3일', physique: '188cm, 70kg', agency: '더블케이엔터테인먼트', academic: '서울예술대학교 공연학부 연기전공', debut: '2014년 하트비 싱글 앨범 <선택해줘>', imgUrl: './images/profImg3.png'
        },
        profActv: [
            { no: 1, group: '공연', title: '문스토리', des: '드림아트센터 4관', date: '2023.09.26.~2023.12.10.' },
            { no: 2, group: '공연', title: '레미제라블', des: '블루스퀘어 신한카드홀', date: '2023.11.30.~2024.03.10..' },
            { no: 3, group: '공연', title: '광주', des: '빛고을 시민문화관', date: '2023.05.16.~2023.05.21.' },
            { no: 4, group: '공연', title: '베토벤; Beethoven Secret SEASON 2', des: '세종문화회관 대극장', date: '2023.04.14.~2023.05.15.' },
            { no: 5, group: '공연', title: '베토벤; Beethoven Secret', des: '예술의전당오페라하우스', date: '2023.01.12.~2023.03.26.' },
            { no: 6, group: '공연', title: '팬레터', des: 'STAGE X 온라인 뮤지컬', date: '2022.11.14.' },
            { no: 7, group: '공연', title: '쓰릴 미', des: '충무아트센터 중극장블랙', date: '2022.07.12.~2022.10.09.' },
            { no: 8, group: '공연', title: '킹아더', des: '홍익대학교 대학로 아트센터', date: '2022.03.22.~2022.06.06.' },
            { no: 9, group: '공연', title: '팬레터', des: '코엑스아티움', date: '2021.12.10.~2022.03.20.' },
            { no: 10, group: '공연', title: '고스트', des: '디큐브아트센터', date: '2020.10.06.~2021.03.14.' },
            { no: 11, group: '공연', title: '베어 더 뮤지컬', des: '두산아트센터 연강홀', date: '2020.05.29.~2020.08.23.' },
            { no: 12, group: '공연', title: 'One More', des: '동양예술극장 2관', date: '2019.09.07.~2019.10.27.' },
            { no: 13, group: '공연', title: '엑스칼리버', des: '세종문화회관 대극장', date: '2019.06.15.~2019.08.04.' },
            { no: 14, group: '앨범', title: '하트비 The 4th Digital Single #너로만든노래', des: '하트비', date: '2015.11.09' },
            { no: 15, group: '앨범', title: '하트비 The Second Mini Album 美STORY', des: '하트비', date: '2015.09.15' },
            { no: 16, group: '앨범', title: '가만히 눈을 감고', des: '하트비', date: '2015.08.05' },
            { no: 17, group: '앨범', title: '하트비 1st MINI ALBUM REMEMBER', des: '하트비', date: '2015.05.06' },
            { no: 18, group: '앨범', title: '혼잣말', des: '지아, 하트비', date: '2015.01.07' },
            { no: 19, group: '앨범', title: '선택해줘', des: '하트비', date: '2014.12.03' },
        ]
    },
    {
        id: 4,
        actor: '박시원',
        character: '프란츠 브렌타노',
        imgUrl: {
            webp: './images/cast4.webp',
            jpeg: './images/cast4.jpeg'
        },
        imgList: [
            { no: 1, webp: './images/char4-1.webp', jpeg: './images/char4-1.jpeg' },
            { no: 2, webp: './images/char4-2.webp', jpeg: './images/char4-2.jpeg' },
            { no: 3, webp: './images/char4-3.webp', jpeg: './images/char4-3.jpeg' },
            { no: 4, webp: './images/char4-4.webp', jpeg: './images/char4-4.jpeg' },
            { no: 5, webp: './images/char4-5.webp', jpeg: './images/char4-5.jpeg' },
        ],
        profChar: {
            subTitle: 'FRANZ BRENTANO',
            des: '토니의 남편이자 성공한 은행가\n너그럽고 다정한 가장이지만, 삶의 우선순위가 은행인만큼 가족과 많은 시간을 보내지 못한다. 자신의 평판을 유지하는 것에 몹시 신경 쓰며, 자신과 가족 누구도 부르주아적 관습에서 벗어나는 것과 깊은 감정에 대해 허용하지 않는다. 올바르고 존경받는 사람으로서 자신의 아내를 예술가에게 빼앗기는 것을 감히 상상하지 못한다.'
        },
        profInfo: {
            job: '뮤지컬배우, 탤런트', birth: '1978년 5월 27일', physique: '183cm, 76kg', agency: '', academic: '명지전문대학 연극영상학 학사', debut: '2003년 뮤지컬 <파우스트>', imgUrl: './images/profImg4.png'
        },
        profActv: [
            { no: 1, group: '공연', title: '스웨그에이지 외쳐,조선!', des: '홍익대학교 대학로 아트센터 대극장', date: '2023.06.09.~2023.08.20.' },
            { no: 2, group: '공연', title: '광주', des: '빛고을 시민문화관', date: '2023.05.16.~2023.05.21.' },
            { no: 3, group: '공연', title: '베토벤; Beethoven Secret SEASON 2', des: '세종문화회관 대극장', date: '2023.04.14.~2023.05.15.' },
            { no: 4, group: '공연', title: '베토벤; Beethoven Secret', des: '예술의전당오페라하우스', date: '2023.01.12.~2023.03.26.' },
            { no: 5, group: '공연', title: '범옹', des: '드림아트센터 3관', date: '2022.10.25.~2023.01.08.' },
            { no: 6, group: '공연', title: '카이X김소향X박시원 〈스토리 오브 더 뮤직(Story of the music)>', des: '동구문화체육센터', date: '2022.10.22.' },
            { no: 7, group: '공연', title: '싯다르타', des: '우리금융아트홀', date: '2022.03.08.~2022.04.03.' },
            { no: 8, group: '공연', title: '클림트', des: '한화갤러리아포레 G층', date: '2021.10.12.~2022.03.01.' },
            { no: 9, group: '공연', title: '블루레인', des: '드림아트센터', date: '2021.03.16.~2021.06.06.' },
            { no: 10, group: '공연', title: '더 모먼트', des: '대학로 유니플렉스 2관', date: '2020.07.08.~2020.08.31.' },
            { no: 11, group: '공연', title: '안나 카레니나', des: '블루스퀘어 인터파크홀', date: '2019.05.17.~2019.07.14.' },
            { no: 12, group: '공연', title: '팬텀', des: '충무아트센터 대극장', date: '2018.12.01.~2019.02.17.' },
            { no: 13, group: '공연', title: '나폴레옹', des: '샤롯데씨어터', date: '2017.07.13.~2017.10.22.' },
            { no: 14, group: '공연', title: '노트르담 드 파리', des: '블루스퀘어 삼성전자홀', date: '2016.06.17.~2016.08.21.' },
            { no: 15, group: '공연', title: '바람과 함께 사라지다', des: '샤롯데씨어터', date: '2015.11.17.~2016.01.31.' },
            { no: 16, group: '공연', title: '만추', des: '아트원씨어터 1관', date: '2015.10.10.~2015.11.08.' },
            { no: 17, group: '공연', title: '명성황후', des: '예술의전당 오페라극장', date: '2015.07.28.~2015.09.10.' },
            { no: 18, group: '공연', title: '영웅', des: '블루스퀘어 삼성전자홀', date: '2015.04.14.~2015.05.31.' },
            { no: 19, group: '공연', title: '바람과 함께 사라지다', des: '예술의전당 오페라극장', date: '2015.01.08.~2015.02.15.' },
            { no: 20, group: '공연', title: '내사랑 내곁에', des: '한전아트센터', date: '2012.12.11.~2013.01.20.' },
            { no: 21, group: '공연', title: '브로드웨이 라이선스 뮤지컬 오즈의 마법사', des: '유니버설아트센터', date: '2011.05.01.~2011.05.29.' },
            { no: 22, group: '방송', title: '상어', des: '드라마', date: '2013.05.27.~2013.07.30.' },
            { no: 23, group: '방송', title: '신의', des: '드라마', date: '2012.08.13.~2012.10.30.' },
            { no: 24, group: '방송', title: '발효가족', des: '드라마', date: '2011.12.07.~2012.02.23.' },
            { no: 25, group: '방송', title: '사랑을 믿어요', des: '드라마', date: '2011.01.01.~2011.07.31.' },
        ]
    },
    {
        id: 5,
        actor: '최지혜',
        character: '베티나 브렌타노',
        imgUrl: {
            webp: './images/cast5.webp',
            jpeg: './images/cast5.jpeg'
        },
        imgList: [
            { no: 1, webp: './images/char5-1.webp', jpeg: './images/char5-1.jpeg' },
            { no: 2, webp: './images/char5-2.webp', jpeg: './images/char5-2.jpeg' },
            { no: 3, webp: './images/char5-3.webp', jpeg: './images/char5-3.jpeg' },
            { no: 4, webp: './images/char5-4.webp', jpeg: './images/char5-4.jpeg' },
        ],
        profChar: {
            subTitle: 'BETTINA BRENTANO',
            des: '자연과 사랑에 대해 시 쓰기를 좋아하는 여성\n어린 시절 독일의 가장 위대한 시인인 괴테에게 보낸 편지로 유명해진 그녀는 로맨틱한 시인들과 성장하며 낭만주의 시인의 꿈을 갖고 있다.토니와 함께 비엔나에서 지내는 동안 그녀가 베토벤과 사랑에 빠지는 것을 지켜보게 되고 토니의 마음을 이해하는 동시에 친오빠 프란츠의 결혼생활이 망가질 것을 우려해 토니를 배신하고 오빠에게 모든 것을 털어놓게 된다.'
        },
        profInfo: {
            job: '뮤지컬배우', birth: '1997년 6월 2일', physique: '167cm', agency: '더블케이엔터테인먼트', academic: '동국대학교 연극학부 연기전공', debut: '2020년 뮤지컬 <광주>', imgUrl: './images/profImg5.jpg'
        },
        profActv: [
            { no: 1, group: '공연', title: '벤허', des: 'LG아트센터 서울', date: '2023.09.02.~2023.11.19.' },
            { no: 2, group: '공연', title: '마리 퀴리', des: '홍익대학교대학로아트센터 대극장', date: '2023.11.24.~2024.02.18.' },
            { no: 3, group: '공연', title: '광주', des: '빛고을 시민문화관', date: '2023.05.16.~2023.05.21.' },
            { no: 4, group: '공연', title: '베토벤; Beethoven Secret SEASON 2', des: '세종문화회관 대극장', date: '2023.04.14.~2023.05.15.' },
            { no: 5, group: '공연', title: '베토벤; Beethoven Secret', des: '예술의전당오페라하우스', date: '2023.01.12.~2023.03.26.' },
            { no: 6, group: '공연', title: '라흐헤스트', des: '드림아트센터 2관', date: '2022.09.06.~2022.11.13.' },
            { no: 7, group: '공연', title: '박열', des: '온라인', date: '2022.09.05' },
            { no: 8, group: '공연', title: '웨스턴 스토리', des: '유니플렉스 1관', date: '2022.03.04.~2022.05.22.' },
            { no: 9, group: '공연', title: '뱀파이어 아더', des: '충무아트센터 중극장블랙', date: '2021.11.09.~2022.02.06.' },
            { no: 10, group: '공연', title: '인사이드', des: '드림아트센터', date: '2021.09.30.~2021.11.21.' },
            { no: 11, group: '공연', title: '박열', des: '드림아트센터 4관', date: '2021.07.14.~2021.09.18.' },
            { no: 12, group: '공연', title: '문스토리', des: '드림아트센터 4관', date: '2021.04.08.~2021.06.20.' },
            { no: 13, group: '공연', title: '광주', des: '빛고을 시민문화관', date: '2021.05.15.~2021.05.16.' },
            { no: 14, group: '공연', title: '뮤지컬 <몬테크리스토> 10주년 기념 공연', des: 'LG아트센터', date: '2020.11.17.~2021.03.28.' },
            { no: 15, group: '영화', title: '몬테크리스토: 더 뮤지컬 라이브', des: '주연 - 발렌타인 역', date: '2021.03.19.' },
        ]


    },
    {
        id: 6,
        actor: '이정수',
        character: '밥티스트 피초크',
        imgUrl: {
            webp: './images/cast6.webp',
            jpeg: './images/cast6.jpeg'
        },
        imgList: [
            { no: 1, webp: './images/char6-1.webp', jpeg: './images/char6-1.jpeg' },
            { no: 2, webp: './images/char6-2.webp', jpeg: './images/char6-2.jpeg' },
            { no: 3, webp: './images/char6-3.webp', jpeg: './images/char6-3.jpeg' },
        ],
        profChar: {
            subTitle: 'BAPTIST FITZOK',
            des: '인간의 약점과 욕망에 대해 꿰뚫고 있는 변호사\n어떤 대가를 치르더라도 최고의 자리에 오르는 것을 목표로 한다. 양심의 가책을 느끼지 못하여 자신의 재능을 사용하여 강자는 설득하고 유혹하는 반면, 약자에게는 오만과 냉담함으로 위협한다.'
        },
        profInfo: {
            job: '연극배우, 뮤지컬배우', birth: '1983년 8월 22일', physique: '181cm', agency: '', academic: '', debut: '2013년 영화 <촌능력전쟁>', imgUrl: './images/profImg6.jpg'
        },
        profActv: [
            { no: 1, group: '공연', title: '컴프롬어웨이', des: '광림아트센터 BBCH홀', date: '2023.11.28.~2024.02.18.' },
            { no: 2, group: '공연', title: '베토벤; Beethoven Secret SEASON 2', des: '세종문화회관 대극장', date: '2023.04.14.~2023.05.15.' },
            { no: 3, group: '공연', title: '베토벤; Beethoven Secret SEASON 1', des: '예술의전당오페라하우스', date: '2023.01.12.~2023.03.26.' },
            { no: 4, group: '공연', title: '더 헬멧', des: '홍익대학교대학로아트센터 소극장', date: '2022.05.17.~2022.08.07.' },
            { no: 5, group: '공연', title: '프랑켄슈타인', des: '블루스퀘어 신한카드홀', date: '2021.11.24.~2022.02.20.' },
            { no: 6, group: '공연', title: '영웅본색', des: '한전아트센터', date: '2019.12.17.~2020.03.22.' },
            { no: 7, group: '공연', title: '벤허', des: '블루스퀘어 인터파크홀', date: '2019.07.30.~2019.10.13.' },
            { no: 8, group: '공연', title: '프랑켄슈타인', des: '소향씨어터 신한카드홀', date: '2018.11.24.~2018.12.09.' },
            { no: 9, group: '공연', title: '2018 팬텀싱어 페스티벌', des: '올림픽공원 88 잔디마당', date: '2018.06.09.~2018.06.10.' },
            { no: 10, group: '공연', title: '삼총사', des: '한전아트센터', date: '2018.03.16.~2018.05.27.' },
            { no: 11, group: '공연', title: '카라마조프', des: '아르코예술극장 대극장', date: '2018.01.03.~2018.01.14.' },
            { no: 12, group: '공연', title: '원스', des: '예술의전당 CJ 토월극장', date: '2014.12.03.~2015.03.29.' },
            { no: 13, group: '공연', title: '인간 파우스트', des: '대학로 선돌극장', date: '2013.06.14.~2013.06.30.' },
            { no: 14, group: '공연', title: '완득이', des: '홍익대 대학로 아트센터 대극장', date: '2012.12.14.~2013.03.23.' },
            { no: 15, group: '공연', title: '킬유 킬미', des: '대학로 PMC 소극장', date: '2010.12.03.~2011.01.16.' },
            { no: 16, group: '영화', title: '밀수', des: '달건이 역', date: '2023.07.26.' },
            { no: 17, group: '영화', title: '봄날', des: '만구 역', date: '2022.04.27.' },
            { no: 18, group: '영화', title: '극한직업', des: '광주분점 조직원1 역', date: '2019.01.23.' },
            { no: 19, group: '영화', title: '청년경찰', des: '귀파방 실장 역', date: '2017.08.09.' },
            { no: 20, group: '영화', title: '리얼', des: '스패너 렉카기사 역', date: '2017.06.28.' },
            { no: 21, group: '앨범', title: '살인자', des: '이정수', date: '2019.10.11' },
        ]
    }
]