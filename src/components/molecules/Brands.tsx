import Image from "next/image";
import React from "react";

const MOCK_DATA = [
    "/amazon.png",
    "/aws.png",
    "/gcp.png",
    "/lv.png",
    "/ytube.png",
];

const Brands: React.FC = () => {
    return (
        <div className="h-[80vh] w-full flex flex-col gap-y-12 overflow-visible pt-10">
            <h3 className="text-center w-full font-semibold text 2xl">
                PARTNERS:
            </h3>
            <div className="grid grid-cols-2 xl:grid-cols-5 w-full">
                {MOCK_DATA.map((img, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                    >
                        <Image width={100} height={100} src={img} alt="brand" />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-5 w-full">
                {MOCK_DATA.reverse().map((img, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center"
                    >
                        <Image width={100} height={100} src={img} alt="brand" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;
