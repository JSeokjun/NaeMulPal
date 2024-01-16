import Image from "next/image";

export default function EventCard() {
    return (
        <a href="#none" className="flex block bg-[#D7D7D7] mb-5 h-[400px] mobile:h-auto">
            <div className="w-1/2 mobile:w-full">
                <div className="pt-[180px] pl-[200px] mobile:pt-10 mobile:px-3 mobile:text-center">
                    <p className="text-3xl font-extrabold mobile:text-xl">2024년 새해 다짐은 노캔으로 집중!</p>
                    <p className="text-sm mt-2 mobile:text-xs">올해 가장 이루고 싶은 것은 무엇인가요?</p>
                </div>
                <div className="">
                    <Image 
                        className="m-auto w-0 h-0 max-w-[280px] max-h-[280px] invisible mobile:visible mobile:w-auto mobile:h-auto" 
                        src="/img/airpod.png" alt={"이벤트 이미지"} width={"400"} height={"400"} 
                    />
                </div>
            </div>
            <div className="w-1/2 mobile:w-0 mobile:h-0">
                <Image className="m-auto max-w-[500px] max-h-[400px] mobile:w-0 mobile:h-0 mobile:invisible" src="/img/airpod.png" alt={"이벤트 이미지"} width={"400"} height={"400"} />
            </div>
        </a>
    )
}