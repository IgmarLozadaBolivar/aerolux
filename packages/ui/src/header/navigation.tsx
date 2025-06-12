import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Navigation = ({ className, children }: Props) => {
    return (
        <ul className = { className } >
            { children }
        </ul>
    );
}