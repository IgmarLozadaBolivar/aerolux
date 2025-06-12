import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const MenuItems = ({ className, children }: Props) => {
    return (
        <ul className = { className } >
            { children }
        </ul>
    );
}