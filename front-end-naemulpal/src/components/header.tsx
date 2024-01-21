"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GoodsCard from "@/components/goods_card";

export default function Header() {
    // Link
    const router = useRouter();

    // Search Modal ON/OFF
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);

    const openSearchModal = () => {
        setSearchModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeSearchModal = () => {
        setSearchModalOpen(false);
        document.body.style.overflow = '';
    };

    // Search Function
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        console.log('검색어:', searchQuery); // temporary
    };
  
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };

    // Info Modal ON/OFF
    const [isMyInfoModalOpen, setMyInfoModalOpen] = useState(false);

    const closeMyInfoModal = () => {
        setMyInfoModalOpen(false);
    };
    
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const modal = document.getElementById("myInfoModal");
        
            if (modal && !modal.contains(event.target as Node)) {
                closeMyInfoModal();
            }
        };
    
        if (isMyInfoModalOpen) {
            document.addEventListener("click", handleOutsideClick);
        }
    
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isMyInfoModalOpen]);

    useEffect(() => {
        const handleScroll = () => {
            closeMyInfoModal();
        };

        if (isMyInfoModalOpen) {
            document.addEventListener("scroll", handleScroll);
        }

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [isMyInfoModalOpen]);

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
                <button onClick={()=>setMyInfoModalOpen(!isMyInfoModalOpen)} className="relative w-1/4 ml-4 mobile:invisible mobile:w-0 mobile:ml-0"><Image className="m-auto" src="/img/user-svgrepo-com.svg" alt={"내 정보 열기"} width={"25"} height={"25"}></Image></button>
                {isMyInfoModalOpen && (
                    <div id="myInfoModal" className="fixed mt-20 ml-32">
                        <div className="w-[110px] bg-white border-2 border-black p-3 text-center leading-normal">
                            <p className="text-black">장석준님</p>
                            <p className="text-black">안녕하세요!</p>
                            <div className="absolute w-4 h-4 bg-white border-t-2 border-l-2 border-black rotate-45 top-[-8px] left-1/2 -translate-x-1/2"></div>
                        </div>
                    </div>
                )}
                <button onClick={()=>router.push('/cart')} className="relative w-1/4 ml-4 mobile:w-auto mobile:ml-0 mobile:mr-3 mobile:px-2 mobile:my-4"><Image className="m-auto" src="/img/bag-svgrepo-com.svg" alt={"장바구니 열기"} width={"26"} height={"26"}></Image></button>
                <button onClick={openSearchModal} className="relative w-0 ml-4 invisible mobile:visible mobile:w-auto mobile:visible mobile:ml-0 mobile:px-2 mobile:mr-5 mobile:my-4"><Image className="m-auto mobile:w-" src="/img/detail-2-svgrepo-com.svg" alt={"메뉴 열기"} width={"26"} height={"26"}></Image></button>
            </div>
            {isSearchModalOpen && (
                <>
                <div className="fixed top-0 max-w-[1536px] w-full h-full bg-black text-white overflow-y-auto overflow-x-hidden z-10">
                    <div className="flex h-20">
                        <h1 className="leading-80 pl-7 tracking-wider"><a href="/">NAEMULPAL</a></h1>
                        <button onClick={closeSearchModal} className="mr-3 my-4 ml-auto"><Image src="/img/cancel-svgrepo-com.svg" alt={"검색창 닫기"} width={"40"} height={"40"}></Image></button>
                    </div>
                    <div className="w-11/12 mx-auto">
                        <div className="flex text-center text-xl h-11 w-[500px] max-w-full mt-9 mb-16 mx-auto border-b-2">
                            <input
                                type="text"
                                placeholder="검색어를 입력해 주세요."
                                className="w-11/12 p-2 bg-black text-white outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <button onClick={handleSearch} className="relative ml-auto px-3"><Image className="m-auto" src="/img/search-svgrepo-com.svg" alt={"검색창 열기"} width={"24"} height={"24"}></Image></button>
                        </div>
                        <div className="w-[800px] mx-auto">
                            <p className="text-xl mb-5 font-bold">인기 검색어</p>
                            <div className="flex flex-wrap mb-5 mobile:max-w-[400px]">
                                <div className="mr-8 mb-8 mobile:mr-24"># 인기 검색어</div>
                                <div className="mr-8 mb-8 mobile:mr-24"># 인기 검색어</div>
                                <div className="mr-8 mb-8 mobile:mr-24"># 인기 검색어</div>
                                <div className="mr-8 mb-8 mobile:mr-24"># 인기 검색어</div>
                                <div className="mr-8 mb-8 mobile:mr-24"># 인기 검색어</div>
                                <div className="mr-8 mb-8 mobile:mr-24"># 인기 검색어</div>
                            </div>
                            <p className="text-xl mt-8 mb-5 font-bold">추천 상품</p>
                            <div className="flex flex-wrap mobile:flex-none mobile:max-w-[300px]">
                                <GoodsCard Link={"#none"} BackColor={"bg-white"} ImageName={"airpod.png"} TitleText={"추천 제품명"} SubText={"설명설명블라블라"}></GoodsCard>
                                <GoodsCard Link={"#none"} BackColor={"bg-white"} ImageName={"airpod.png"} TitleText={"추천 제품명"} SubText={"설명설명블라블라"}></GoodsCard>
                                <GoodsCard Link={"#none"} BackColor={"bg-white"} ImageName={"airpod.png"} TitleText={"추천 제품명"} SubText={"설명설명블라블라"}></GoodsCard>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
        </header>
    )
}