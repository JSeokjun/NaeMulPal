import Search from '@/assets/img/search-svgrepo-com.svg'
import User from '@/assets/img/user-svgrepo-com.svg'
import Bag from '@/assets/img/bag-svgrepo-com.svg'

export default function Header() {
    return (
        <header className="flex h-20 bg-black">
            <h1 className="w-1/5 leading-80 pl-7 "><a href="/">NAEMULPAL</a></h1>
            <nav className="flex w-3/5 text-center">
                <div className="relative flex-25 group h-full">
                    <a className="block h-full leading-80 text-lg" href="#none">스토어 추천 상품</a>
                    <div className="absolute w-full text-center invisible group-hover:visible bg-black duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
                        <a className="block my-8" href="#none">베스트 상품</a>
                        <a className="block my-8" href="#none">MD 추천 상품</a>
                        <a className="block my-8" href="#none">할인 상품</a>
                    </div>
                </div>
                <div className="relative flex-25 group h-full">
                    <a className="block h-full leading-80 text-lg" href="#none">상품</a>
                    <div className="absolute w-full text-center invisible group-hover:visible bg-black duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
                        <a className="block my-8" href="#none">의류</a>
                        <a className="block my-8" href="#none">악세서리</a>
                        <a className="block my-8" href="#none">도서</a>
                        <a className="block my-8" href="#none">전자제품</a>
                    </div>
                </div>
                <div className="relative flex-25 group h-full">
                    <a className="block h-full leading-80 text-lg" href="#none">이벤트</a>
                    <div className="absolute w-full text-center invisible group-hover:visible bg-black duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
                        <a className="block my-8" href="#none">내물팔 단독</a>
                        <a className="block my-8" href="#none">콜라보</a>
                    </div>
                </div>
                <div className="relative flex-25 group h-full">
                    <a className="block h-full leading-80 text-lg" href="#none">고객 서비스</a>
                    <div className="absolute w-full text-center invisible group-hover:visible bg-black duration-500 ease-in-out -translate-y-full group-hover:translate-y-0">
                        <a className="block my-8" href="#none">FAQ</a>
                        <a className="block my-8" href="#none">공지사항</a>
                        <a className="block my-8" href="#none">동영상 안내</a>
                    </div>
                </div>
            </nav>
            <div className="flex w-1/5 leading-80">
                <div className="w-1/4"></div>
                <button className="w-1/4 mx-7 my-6"><Search/></button>
                <button className="w-1/4 mx-7 my-6"><User/></button>
                <button className="w-1/4 mx-7 my-6"><Bag/></button>
            </div>
        </header>
    )
}