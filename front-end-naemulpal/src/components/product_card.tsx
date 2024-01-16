import Image from "next/image";
import classNames from "classnames";

interface ProductCardProps {
    Link: string;
    ImageName: string;
    titleText: string;
}

export default function ProductCard({Link, ImageName, titleText}: ProductCardProps) {
    
    const className = classNames(
        "block group w-1/4 border-r-[2px] border-[#E1E1E1] hover:bg-[#5865F5] duration-300",
        'mobile:w-auto mobile:hover:bg-[#E1E1E1] mobile:border-r-0',
    );

    return (
        <a href={Link} className={className}>
            <div className="relative overflow-hidden">
                <Image className="mx-auto translate-x-[40%] group-hover:translate-x-0 duration-300 mobile:translate-x-0" src={"/img/"+ImageName} alt={"제품 이미지"} width={"300"} height={"300"}/>
            </div>
            <div className="px-4 pb-4">
                <p className="block text-xl font-extrabold mobile:text-base">{titleText}</p>
            </div>  
        </a>
    )
}
