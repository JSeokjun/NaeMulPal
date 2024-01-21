import Image from "next/image";
import classNames from "classnames";

interface GoodsCardProps {
    Link: string;
    lastCard?: boolean;
    BackColor: string;
    ImageName: string;
    TitleText: string;
    SubText: string;
}

export default function GoodsCard({Link, lastCard, BackColor, ImageName, TitleText, SubText }: GoodsCardProps) {
    
    const className = classNames(
        "block group w-[30%] mb-6",
        { 'mr-5': !lastCard },
        BackColor,
        'mobile:w-auto mobile:flex'
    );

    return (
        <a href={Link} className={className}>
            <div className="mobile:w-1/2">
                <Image className="w-9/12 h-9/12 my-3 mx-auto" src={"/img/"+ImageName} alt={"이벤트 이미지"} width={"300"} height={"300"} />
            </div>
            <div className="pt-6 bg-black mobile:w-1/2 mobile:pl-4 mobile:pt-10">
                <p className="block text-xl text-white font-bold mobile:text-lg">{TitleText}</p>
                <p className="block text-[#757575] mt-2 mobile:text-sm">{SubText}</p>
            </div>  
        </a>
    )
}
