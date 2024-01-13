import Image from "next/image";

export default function EventCard() {
    return (
        <a href="#none" className="flex block bg-zinc-300 mb-5">
            <div className="w-1/2 mobile:w-full">
                <div className="pt-[180px] pl-[200px] mobile:pt-10 mobile:pl-0 mobile:text-center">
                    <p className="text-3xl font-extrabold mobile:text-xl">2024년 새해 다짐은 노캔으로 집중!</p>
                    <p className="text-sm mt-2 mobile:text-xs">올해 가장 이루고 싶은 것은 무엇인가요?</p>
                </div>
                <Image className="m-auto w-0 h-0 invisible mobile:visible mobile:w-auto mobile:h-auto" src="/img/camera.png" alt={""} width={"500"} height={"500"} />
            </div>
            <div className="w-1/2 mobile:w-0">
                <Image className="m-auto" src="/img/camera.png" alt={"이벤트 이미지"} width={"500"} height={"500"} />
            </div>
        </a>
    )
}