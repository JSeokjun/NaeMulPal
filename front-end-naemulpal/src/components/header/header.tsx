export default function Header() {
    return (
        <header className="flex h-20 bg-black">
            <h1 className="flex-auto pt-6 pl-7 "><a href="/">NAEMULPAL</a></h1>
            <nav className="flex-auto">
                <div className="flex w-4/6 ml-28 h-full text-center">
                    <div className="relative flex-25 group h-full">
                        <a className="relative block h-full leading-80" href="#none">스토어 추천 상품</a>
                        <div className="absolute w-full text-center invisible group-hover:visible bg-black duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
                            <a className="block my-8" href="#none">베스트 상품</a>
                            <a className="block my-8" href="#none">MD 추천 상품</a>
                            <a className="block my-8" href="#none">할인 상품</a>
                        </div>
                    </div>
                    <div className="relative flex-25 group h-full">
                        <a className="block h-full leading-80" href="#none">상품</a>
                        <div className="absolute w-full text-center invisible group-hover:visible bg-black duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
                            <a className="block my-8" href="#none">의류</a>
                            <a className="block my-8" href="#none">악세서리</a>
                            <a className="block my-8" href="#none">도서</a>
                            <a className="block my-8" href="#none">전자제품</a>
                        </div>
                    </div>
                    <div className="relative flex-25 group h-full">
                        <a className="block h-full leading-80" href="#none">기획전</a>
                        <div className="absolute w-full text-center invisible group-hover:visible bg-black duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
                            <a className="block my-8" href="#none">내물팔 단독</a>
                            <a className="block my-8" href="#none">콜라보</a>
                        </div>
                    </div>
                    <div className="relative flex-25 group h-full">
                        <a className="block h-full leading-80" href="#none">고객 서비스</a>
                        <div className="absolute w-full text-center invisible group-hover:visible bg-black duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
                            <a className="block my-8" href="#none">FAQ</a>
                            <a className="block my-8" href="#none">공지사항</a>
                            <a className="block my-8" href="#none">동영상 안내</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-auto"></div>
        </header>
    )
}