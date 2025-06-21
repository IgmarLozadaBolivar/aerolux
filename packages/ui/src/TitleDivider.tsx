import React from 'react';

interface Props {
    title: string;
    className?: string;
}

export const TitleDivider = ({ title, className }: Props) => {
    return (
        <div className={`inline-block ${className ?? ""}`}>
            <h2 className="text-5xl font-reaktifNews tracking-wide w-fit pb-2">
                {title}
            </h2>
            <hr className={`border-t-[3px] border-[#00A896] w-full ${className ?? ""}`} />
        </div>
    );
}