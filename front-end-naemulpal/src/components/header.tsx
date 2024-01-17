"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);

    const openSearchModal = () => {
        setSearchModalOpen(true);
    };

    const closeSearchModal = () => {
        setSearchModalOpen(false);
    };

    return (
        <header className="flex max-w-full h-20 bg-black">
            <h1 className="w-1/5 leading-80 pl-7 tracking-wider mobile:w-auto"><a href="/">NAEMULPAL</a></h1>
            <nav className="flex w-3/5 text-center max:text-blue-800 mobile:invisible mobile:w-0">
                <div className="relative flex-25 group h-full">
                    <a className="block h-full leading-80 text-lg font-bold group-hover:text-blue-600 group-hover:border-b-2 group-hover:border-blue-600" href="#none">스토어 추천 상품</a>
                    <div className="absolute w-full text-center bg-black invisible group-hover:visible z-10">
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">베스트 상품</a>
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">MD 추천 상품</a>
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">할인 상품</a>
                    </div>
                </div>
                <div className="relative flex-25 group h-full">
                    <a className="block h-full leading-80 text-lg font-bold group-hover:text-blue-600 group-hover:border-b-2 group-hover:border-blue-600" href="#none">상품</a>
                    <div className="absolute w-full text-center bg-black invisible group-hover:visible z-10">
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">의류</a>
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">악세서리</a>
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">도서</a>
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">전자제품</a>
                    </div>
                </div>
                <div className="relative flex-25 group h-full">
                    <a className="block h-full leading-80 text-lg font-bold group-hover:text-blue-600 group-hover:border-b-2 group-hover:border-blue-600" href="#none">이벤트</a>
                    <div className="absolute w-full text-center bg-black invisible group-hover:visible z-10">
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">내물팔 단독</a>
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">콜라보</a>
                    </div>
                </div>
                <div className="relative flex-25 group h-full">
                    <a className="block h-full leading-80 text-lg font-bold group-hover:text-blue-600 group-hover:border-b-2 group-hover:border-blue-600" href="#none">고객 서비스</a>
                    <div className="absolute w-full text-center bg-black invisible group-hover:visible z-10">
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">FAQ</a>
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">공지사항</a>
                        <a className="block my-4 py-4 text-gray-300 font-bold hover:text-blue-600" href="#none">동영상 안내</a>
                    </div>
                </div>
            </nav>
            <div className="flex w-1/5 leading-80 mobile:w-auto mobile:ml-auto">
                <div className="w-1/4 mobile:w-0"></div>
                <button onClick={openSearchModal} className="relative w-1/4 ml-4 mobile:invisible mobile:w-0 mobile:ml-0"><Image className="m-auto" src="/img/search-svgrepo-com.svg" alt={"검색창 열기"} width={"24"} height={"24"}></Image></button>
                <button className="relative w-1/4 ml-4 mobile:invisible mobile:w-0 mobile:ml-0"><Image className="m-auto" src="/img/user-svgrepo-com.svg" alt={"내 정보 열기"} width={"25"} height={"25"}></Image></button>
                <button onClick={()=>router.push('/cart')} className="relative w-1/4 ml-4 mobile:w-auto mobile:ml-0 mobile:mr-3 mobile:px-2 mobile:my-4"><Image className="m-auto" src="/img/bag-svgrepo-com.svg" alt={"장바구니 열기"} width={"26"} height={"26"}></Image></button>
                <button className="relative w-0 ml-4 invisible mobile:visible mobile:w-auto mobile:visible mobile:ml-0 mobile:px-2 mobile:mr-5 mobile:my-4"><Image className="m-auto mobile:w-" src="/img/detail-2-svgrepo-com.svg" alt={"메뉴 열기"} width={"26"} height={"26"}></Image></button>
            </div>
            {isSearchModalOpen && (
                <>
                <div className="fixed top-0 left-0 w-full h-full bg-black text-white overflow-hidden">
                    <div className="flex h-20">
                        <h1 className="leading-80 pl-7 tracking-wider"><a href="/">NAEMULPAL</a></h1>
                        <button onClick={closeSearchModal} className="mr-7 my-4 ml-auto"><Image src="/img/cancel-svgrepo-com.svg" alt={"내 정보 열기"} width={"40"} height={"40"}></Image></button>
                    </div>
                    <div className="text-center">
                        <input
                            type="text"
                            placeholder="검색어를 입력해 주세요."
                            className="w-96 p-2 border border-gray-300 text-black"
                        />
                    </div>
                </div>
                </>
            )}
        </header>
    )
}