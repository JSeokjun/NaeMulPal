import Image from "next/image";

export default function Header() {
    return (
        <header className="flex max-w-full h-20 bg-black">
            <h1 className="w-1/5 leading-80 pl-7 tracking-wider mobile:w-1/2"><a href="/">NAEMULPAL</a></h1>
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
            <div className="flex w-1/5 leading-80 mobile:w-1/2">
                <div className="w-1/4 mobile:w-2/4"></div>
                <button className="relative w-1/4 ml-4 mobile:invisible mobile:w-0 mobile:ml-0"><Image className="m-auto" src="/img/search-svgrepo-com.svg" alt={"검색창 열기"} width={"24"} height={"24"}></Image></button>
                <button className="relative w-1/4 ml-4 mobile:invisible mobile:w-0 mobile:ml-0"><Image className="m-auto" src="/img/user-svgrepo-com.svg" alt={"검색창 열기"} width={"25"} height={"25"}></Image></button>
                <button className="relative w-1/4 ml-4 mobile:w-1/4 mobile:mr-4"><Image className="m-auto" src="/img/bag-svgrepo-com.svg" alt={"검색창 열기"} width={"26"} height={"26"}></Image></button>
                <button className="relative w-0 ml-4 invisible mobile:visible mobile:w-1/4 mobile:visible mobile:mr-4"><Image className="m-auto mobile:w-" src="/img/detail-2-svgrepo-com.svg" alt={"메뉴 열기"} width={"26"} height={"26"}></Image></button>
            </div>
        </header>
    )
}