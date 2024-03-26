import styled from 'styled-components'

export const BeethovenStyled = styled.div`
    .wrap{
        position: relative;
        width: 100%;
        height: 2000px;
        background: #000;
        color: #fff;
        .bottomWrap{
            width: 1200px;
            margin: auto;
            display: flex;
            justify-content: space-between;
        }
        h1 {
            a {
                position: absolute; top: 260px; left: 50%; transform: translateX(-50%);
                display: block;
                width: 280px; height: 100px;
                font-size: 0;
            }
        }
    }
`
// 캐스팅보드 섹션
export const BtvCastStyled = styled.div`
    .cast{
        width: 1200px;
        margin: auto auto 70px;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100%;
        background-image: url(/images/bg.png);
        ul{
            display: flex; justify-content: space-between;
            padding-top: 460px;
            box-sizing: border-box;
            li{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 160px;
                padding: 15px 0;
                cursor: pointer;
                img{
                    width: 150px;
                    border-radius: 50%;
                }
                strong{
                    margin: 20px 0 0;
                    font-size: 18px;
                    color: #fff
                }
                p{ font-size: 16px; color: lightgray; }
                span{
                    position: absolute;
                    top: -10px; left: -10px;
                    width: 30px; height: 30px;
                    background: #000; 
                    border: 2px solid #daa520; border-radius: 50%;
                    font-size: 18px; color: #ededed;
                    text-align: center; line-height: 30px; 
                }
            }
        }
    }
`

// 갤러리 섹션
export const BtvGalleryStyled = styled.div`

        .btvGallery{
            width: 600px;
            .bigImg{
                display: flex; 
                justify-content: center;
                width: 100%; height: 530px;
                img{
                    display: block;
                    max-width: 450px;
                    max-height: 530px;
                    margin: auto;
                }
            }
            .imgList{ 
                display: flex;
                flex-wrap: wrap;
                justify-content: left;
                width: 100%;
                padding: 0 60px;
                box-sizing: border-box;
                li{
                    width: 100px; height: 100px;
                    margin: 25px 25px 0 0;  
                    &:nth-child(4), 
                    &:nth-child(8){ margin-right: 0; } // 이미지 4개씩 정렬
                    img{
                        width: 100%; height: 100%;
                        object-fit: cover;   
                    }
                }
            }
        }
`

// 인포 섹션
export const BtvInfoStyled = styled.div`
    .btvInfo{
        width: 600px;
        font-family: 'Pretendard-Regular';
        padding: 0 0 0 30px;
        box-sizing: border-box;
        // 탭 영역
        .infoTab{ 
            ul{
                display: flex; justify-content: space-between;
                width: 100%; height: 55px;
                line-height: 55px;
                text-align: center;
                li {
                    position: relative;
                    width: 172px;
                    font-family: 'Cafe24ClassicType-Regular';
                    font-size: 20px;
                    border-top: 2px solid #999;
                    cursor: pointer;        
                    &:hover { color: goldenrod; }                    
                    &::before { // bd-bottom 효과
                        content: '';
                        position: absolute; left: 0; bottom: 0;
                        width: 0; height: 2px;
                        background: #b68a1b; 
                    }
                    &.active {
                        color: goldenrod;
                        &::before { 
                            width: 100%;                             
                            transition: width 0.3s;
                        }
                    }
                }                    
            }
        }

        /////////////////////////////
        // 콘텐츠 영역
        .infoContent{ 
            padding: 0 10px;
            box-sizing: border-box;                

            // 등장인물
            .infoChar{ 
                margin-top: 80px;
                text-align: center;
                .title {
                    font-family: 'DNFForgedBlade';
                    font-size: 35px;    
                    font-weight: 500;
                    color: #f3000c;
                }
                .subTitle {
                    margin: 0px 0 30px;
                    font-family: "SCoreDream";
                    font-size: 16px;
                    letter-spacing: 3px;
                    color: #999;
                }
                .des {
                    font-family: 'Pretendard-Regular';
                    font-size: 17px;
                    line-height: 1.7;                        
                    letter-spacing: 0.2px;
                }
            }

            // 프로필
            .infoProf{
                position: relative; 
                display: flex; justify-content: space-between;
                margin: 75px 20px;
                font-family: 'Pretendard-Regular';
                font-size: 16px;
                .bottomBox {
                    position: absolute;
                    bottom: -150px; left: 50%; transform: translateX(-50%);
                    display: flex;
                    a {
                        display: block;
                        width: 180px; height: 25px; font-size: 0;
                        background-repeat: no-repeat;
                        background-position: 0 0;
                        background-size: contain;
                        background-image: url(/images/btnMore1.png);
                        &:hover { background-image: url(/images/btnMore2.png); }
                    }
                }
                .leftBox{
                    strong {
                        display: block;
                        margin-bottom: 3px;
                        font-size: 23px;
                    }
                    span { font-size: 15px; color: #e0e0e0; }
                    dl { margin-top: 25px;
                        div {
                            display: flex;
                            &.blank { display: none; }
                            dd { margin: 0 0 10px 15px; }                               
                        }
                    }
                }
                .rightBox {
                    width: 160px; height: 210px;
                    margin-top: 12px;
                    .img {
                        width: 100%; height: 100%;
                        background-repeat: no-repeat;
                        background-position: 0 0;
                        background-size: cover;
                    }
                    img { width: 100%; height: 100%; }
                }
            }

            // 작품활동
            .infoActv {
                .groupTab {
                    margin: 55px 0 30px;
                    ul {
                        display: flex; justify-content: center;
                        li {
                            position: relative;
                            padding: 0 15px;
                            font-size: 20px;
                            color: #999;
                            box-sizing: border-box;
                            cursor: pointer;
                            &:hover::before {
                                    position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
                                    display: block;
                                    content: '';
                                    width: 8px; height: 8px;
                                    background: #DAA520;
                                    border-radius: 50%;
                            }
                            &.active { 
                                font-weight: 700; 
                                color: #DAA520; 
                                &::before {
                                    position: absolute;
                                    top: -12px; left: 50%; transform: translateX(-50%);
                                    display: block;
                                    content: '';
                                    width: 8px; height: 8px;
                                    background: #DAA520;
                                    border-radius: 50%;
                                }
                            }
                            &:last-child { margin-right: 0; }
                        }
                    }
                } 
                .cardList {
                    display: flex; flex-wrap: wrap; justify-content: space-between;
                    width: 100%;
                    padding: 0 15px;
                    box-sizing: border-box;
                    .cardItem {
                        width: 48%;
                        margin-bottom: 30px;
                        padding: 13px 20px;
                        box-sizing: border-box;
                        &:hover {
                            background: rgba(255, 255, 255, 0.1);
                            border-radius: 15px;   
                        }
                        strong {
                            display: block;
                            width: 200px;
                            margin-bottom: 10px;
                            font-size: 18px;  text-shadow: 0 0 1px rgba(255, 255, 255, 3.0);                                
                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
                        }
                    }
                }   
                .pagination {
                    display: flex; align-items: center; justify-content: center;
                    margin: 20px 0;
                    button {
                        width: 30px; height: 30px; 
                        margin: 0 8px;
                        background: transparent;
                        border: none;
                        border-radius: 50%;
                        font-size: 16px; 
                        line-height: 30px;
                        color: #fff;
                        &:hover {
                            background: rgba(255, 255, 255, 0.3);
                            color: #fff;
                        }
                    }
                    span {
                        margin: 0 5px;
                        font-size: 16px;
                    }
                }
            }

            // 뉴스
            .infoNews {
                position: relative;
                width: 100%;
                .contentContainer {
                    // 정렬옵션
                    .sortOption {
                        display: flex; justify-content: end;
                        margin: 50px 0 20px;
                        button {
                            position: relative;
                            margin-left: 15px;
                            background: none; border: none;
                            font-size: 18px; color: #999;
                            &::before {
                                content: "";
                                position: absolute;
                                left: -5px; top: 50%; transform: translateY(-50%);
                                display: block;
                                width: 5px; height: 5px;
                                background: #999;
                                border-radius: 50%;
                            }
                        }
                        .active { 
                            color: #fff;
                            &::before { background: #fff; }                        
                        }
                    }
                    //뉴스리스트
                    .newsList {
                        width: 100%;
                        height: 650px;
                        overflow-y: auto;
                        &::-webkit-scrollbar { width: 7px; }
                        &::-webkit-scrollbar-track { background-color: transparent; }
                        &::-webkit-scrollbar-thumb {
                            background-color: #999;
                            border-radius: 3px;
                            &:hover { background-color: #ccc; }
                        }


                        .newsItem {
                            padding: 20px 0;
                            
                            /* border-bottom: 1px solid #363535; */
                            border-bottom: 1px solid #444;
                            &:first-child { border-top: 1px solid #444; }

                            a {
                                color: #fff;

                                &:hover strong{ text-decoration: underline; }


                                strong { font-size: 18px; color: #4D86F6; }
                                p {
                                    margin: 5px 0 3px;
                                    font-size: 15px;
                                } 
                                span { font-size: 13px; color: #999; }

                            }
                        }
                        .newsMore {
                            a {
                                display: block;
                                width: 180px; height: 25px; font-size: 0;
                                margin: 20px auto;
                                background-repeat: no-repeat;
                                background-position: 0 0;
                                background-size: contain;
                                background-image: url(/images/btnMore1.png);
                                &:hover { background-image: url(/images/btnMore2.png); }
                            } 
                        }
                        .hidden {
                            display: none;
                        }
                    }
                }

                // 로딩 중
                .loadingContainer {                    
                    position: absolute; top: 0; left: 50%; transform: translateX(-50%);
                    width: 100%; height: 1000px;
                    background-color: #000;
                    z-index: 1;
                    img {
                        display: block;
                        width: 140px;
                        margin: 90px auto;
                    }
                }
                .errorContainer {
                    position: absolute; 
                    top: 0; left: 0;
                    width: 100%; height: 700px;
                    padding-top: 30px;
                    background: #000;
                    text-align: center;
                
                    .icon {
                        width: 45px; height: 45px;
                        margin: 0 auto 25px;
                        border: 2px solid #fff;
                        border-radius: 50%;
                        &::before {
                            content: "!";
                            display: block;
                            font-size: 25px;
                            line-height: 45px;
                        }
                    }   
                    strong { font-size: 20px; line-height: 1.8; } 
                    p { font-size: 18px; color: #aaa; }                                       
                }
                

                
                    
                
            }
        }
    }
`
