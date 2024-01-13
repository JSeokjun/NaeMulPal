import Image from "next/image";

export default function EventSmallCard() {
    return (
        <a href="#none" className="block w-1/3 bg-cyan-100 mb-5 mr-5 mobile:w-[300px]">
            <Image className="mx-auto" src="/img/camera.png" alt={"이벤트 이미지"} width={"400"} height={"400"} />
            <div className="px-4 pb-4">
                <p className="block text-2xl font-extrabold mobile:text-xl mobile:whitespace-normal">2024년 새해 다짐은 노캔으로 집중!</p>
                <p className="block text-sm mt-2 mobile:text-xs">올해 가장 이루고 싶은 것은 무엇인가요?</p>
            </div>
        </a>
    )
}