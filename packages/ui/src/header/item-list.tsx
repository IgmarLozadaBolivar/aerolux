import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const ItemList = ({ children, className }: Props) => {
    return (
        <li className = { className } >
            { children }
        </li>
    )
}