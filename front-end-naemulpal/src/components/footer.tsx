"use client";
import Image from "next/image";

export default function Footer() {
    const handleOpenNewTab = (url: string | URL | undefined) => {
        window.open(url, "_blank", "noopener, noreferrer");
      };

    return (
        <footer className="flex h-52 bg-black text-white text-xs mobile:h-80 mobile:block">
            <div className="w-1/2 pt-14 pl-10 mobile:w-full mobile:h-1/2 mobile:px-10">
                <ul className="list-disc pl-3">
                    <li>본 사이트의 컨텐츠는 소니 스토어를 참고하여 개인 학습용으로 제작되었으며, 상업적 목적이 없습니다.</li>
                    <li>포인트 및 상품은 가상이며, 경제적 효력이 없습니다.</li>
                </ul>
                <div className="pt-10">
                    <p>제작자 : 장석준</p>
                    <p>E-MAIL : jsjun0319@hanyang.ac.kr</p>
                </div>
            </div>
            <div className="flex w-1/2 mobile:w-full mobile:h-1/2">
                <div className="w-1/2 mobile:w-0"></div>
                <div className="flex w-4/6 mobile:w-auto mobile:m-auto">
                    <button onClick={() => handleOpenNewTab("https://github.com/JSeokjun/NaeMulPal")} className="relative w-1/4 mx-4 my-20 mobile:my-8 mobile:w-auto mobile:w-auto mobile:px-2 mobile:py-2">
                        <Image className="m-auto" src="/img/github-mark-white.svg" alt={"깃허브 열기"} width={"28"} height={"28"}></Image>
                    </button>
                    <button onClick={() => handleOpenNewTab("https://seokjunjang.notion.site/")} className="relative w-1/4 mx-4 my-20 mobile:my-8 mobile:w-auto mobile:px-2 mobile:py-2">
                        <Image className="m-auto" src="/img/notion-logo-svgrepo-com.svg" alt={"노션 열기"} width={"28"} height={"28"}></Image>
                    </button>
                    <button onClick={() => handleOpenNewTab("https://www.instagram.com/sj_jjang00")} className="relative w-1/4 mx-4 my-20 mobile:my-8 mobile:w-auto mobile:px-2 mobile:py-2">
                        <Image className="m-auto" src="/img/icons8-instagram.svg" alt={"인스타그램 열기"} width={"30"} height={"30"}></Image>
                    </button>
                    <button onClick={() => handleOpenNewTab("https://velog.io/@sjjjang00/posts")} className="relative w-1/4 mx-4 my-20 mobile:my-8 mobile:w-auto mobile:px-2 mobile:py-2">
                        <Image className="m-auto" src="/img/blogger-color-svgrepo-com.svg" alt={"블로그 열기"} width={"25"} height={"25"}></Image>
                    </button>
                    <div className="w-1/5 mobile:w-0"></div>
                </div>
            </div>
        </footer>
    )
}