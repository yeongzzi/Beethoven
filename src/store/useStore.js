import { create } from "zustand";
import dataList from '../assets/api/beethovenData'

const useStore = create((set) => ({
    data: dataList,
    selChar: dataList[0],
    selImg: dataList[0].imgList[0],
    selTab: 'char',
    updateSelChar: (id) => {
        const selectedChar = dataList.find(item => item.id === id);
        set({
            selChar: selectedChar,
            selImg: selectedChar.imgList[0],
            selTab: 'char'
        });
    },
    updateSelImg: (no) => {
        set((state) => ({ selImg: state.selChar.imgList[no - 1] })) // 이미지를 선택 시 preview에 전달
    },
    setSelTab: (tab) => {
        set({ selTab: tab })
    },
    isBlank: (value) => {
        return value.trim() === ''
    },
    updateSearchUrl: (url, job, actor) => {
        const mainJob = job.split(',')[0]; // 첫번째 직업만 추출
        const encoded = encodeURIComponent(`${mainJob} ${actor}`); // 정확한 검색결과를 위해 '직업 배우명'으로 검색
        return `${url}${encoded}`;
    },
}))

export default useStore;
