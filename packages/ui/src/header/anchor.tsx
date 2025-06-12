import React from "react";

interface Props {
    className?: string;
    href: string;
    text: string;
}

export const Anchor = ({ className, href, text }: Props) => {
    return (
        <a className = { className } href = { href } >
            { text }
        </a>
    )
}