import Image from "next/image";
import classNames from "classnames";

interface EventSmallCardProps {
    Link: string;
    lastCard?: boolean;
    BackColor: string;
    ImageName: string;
    TitleText: string;
    SubText: string;
}

export default function EventSmallCard({Link, lastCard, BackColor, ImageName, TitleText, SubText }: EventSmallCardProps) {
    
    const className = classNames(
        "block group w-1/3 mb-5",
        { 'mr-5': !lastCard },
        BackColor,
        'mobile:w-auto'
    );

    return (
        <a href={Link} className={className}>
            <div className="">
                <Image className="w-9/12 h-9/12 mx-auto my-5 group-hover:scale-110 duration-150 mobile:group-hover:scale-100" src={"/img/"+ImageName} alt={"이벤트 이미지"} width={"300"} height={"300"} />
            </div>
            <div className="px-4 pb-4">
                <p className="block text-2xl font-extrabold mobile:text-xl mobile:whitespace-normal">{TitleText}</p>
                <p className="block text-sm mt-2 mobile:text-xs">{SubText}</p>
            </div>  
        </a>
    )
}
