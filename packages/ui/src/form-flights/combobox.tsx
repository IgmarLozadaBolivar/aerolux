import React, { useState } from "react";

interface BaseOption {
    name: string;
    country: string;
}

interface SelectWithFlagsProps<T extends BaseOption> {
    items: T[];
    value: T | null;
    onSelect: (item: T) => void;
    placeholder?: string;
    icon?: React.ReactNode;
}

export default function SelectWithFlags<T extends BaseOption>({
    items,
    value,
    onSelect,
    placeholder = "Seleccionar",
    icon,
}: SelectWithFlagsProps<T>) {
    const [open, setOpen] = useState(false);

    const handleSelect = (item: T) => {
        onSelect(item);
        setOpen(false);
    };

    return (
        <div className="relative w-[180px] h-[40px] border-[#E0E4E7] border-[1px] rounded-md p-2">
            <div
                className="cursor-pointer flex items-center justify-start gap-2 ml-[8px]"
                onClick={() => setOpen((prev) => !prev)}
            >
                {icon}
                {value ? (
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700">{value.name}</span>
                    </div>
                ) : (
                    <span className="text-slate-700">{placeholder}</span>
                )}
            </div>

            {open && (
                <div
                    className="absolute z-10 bg-white border-[#E0E4E7] border-[1px] rounded-md ml-[-8px] mt-3 w-full max-h-64 overflow-y-auto">
                    {items.map((item) => (
                        <div
                            key={item.name + item.country}
                            className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                            onClick={() => handleSelect(item)}
                        >
                            <span className="text-gray-700">{item.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}