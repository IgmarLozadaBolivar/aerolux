import { useState } from "react";
import DatePickerWithIcon from "./DateBox";

export default function SearchDates() {
    const [departureDate, setDepartureDate] = useState<Date>();
    const [returnDate, setReturnDate] = useState<Date>();

    return (
        <div className="flex gap-4 items-center justify-center">
            <DatePickerWithIcon
                label="Fecha de partida"
                value={departureDate}
                onChange={setDepartureDate}
            />

            <hr className="mt-2 w-[20px] rotate-90 bg-gray-500" />

            <DatePickerWithIcon
                label="Fecha de regreso"
                value={returnDate}
                onChange={setReturnDate}
            />
        </div>
    );
}
