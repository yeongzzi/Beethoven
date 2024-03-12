import { useState } from 'react';
import BtvCast from './BtvCast';
import BtvGallery from './BtvGallery';
import BtvInfo from './BtvInfo.jsx';
import { BeethovenStyled } from './style.js'
import dataList from '../assets/api/beethovenData'

const Beethoven = () => {
    const [data, setData] = useState(dataList)
    const [selChar, setSelChar] = useState(data[0]) // 선택한 인물의 데이터
    const [selImg, setSelImg] = useState(selChar.imgList[0]) // 선택한 이미지
    const [selTab, setSelTab] = useState('char') // 선택한 프로필 탭

    const handleSelChar = (id) => { //원본에서 내가 누른 id랑 같은 id의 데이터만 추출한다
        const selectedChar = data.find(item => item.id === id)
        setSelChar(selectedChar)
        setSelImg(selectedChar.imgList[0])
        setSelTab('char')
    }

    const handleSelImg = (no) => { // 이미지를 선택하면 preview에 해당 이미지가 나타난다
        setSelImg(selChar.imgList[no - 1])
    }

    return (
        <BeethovenStyled>
            <div className='wrap'>
                <h1><a href="/">Beethoven</a></h1>
                <BtvCast data={data} handleSelChar={handleSelChar} />
                <div className='bottomWrap'>
                    <BtvGallery selChar={selChar} selImg={selImg} handleSelImg={handleSelImg} />
                    <BtvInfo selChar={selChar} selTab={selTab} setSelTab={setSelTab} />
                </div>
            </div>
        </BeethovenStyled>
    );
};

export default Beethoven;