import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CalendarClock } from "lucide-react";

interface DatePickerWithIconProps {
    label: string;
    value: Date | undefined;
    onChange: (date: Date) => void;
}

export default function DatePickerWithIcon({
                                               label,
                                               value,
                                               onChange,
                                           }: DatePickerWithIconProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-[170px]">
            <div
                className="flex items-center gap-2 cursor-pointer border-b border-[#E0E4E7] py-2"
                onClick={() => setOpen((prev) => !prev)}
            >
                <CalendarClock color={"#344054"} size={20} />
                <span className="text-slate-700">
          {value ? format(value, "PPP") : label}
        </span>
            </div>

            {open && (
                <div className="absolute z-10 bg-white mt-2 shadow-md rounded-md text-slate-700 p-4">
                    <DayPicker
                        mode="single"
                        selected={value}
                        onSelect={(date) => {
                            if (date) {
                                onChange(date);
                                setOpen(false);
                            }
                        }}
                    />
                </div>
            )}
        </div>
    );
}
