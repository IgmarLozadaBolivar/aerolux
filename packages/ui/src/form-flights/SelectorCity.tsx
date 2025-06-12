import React, { useState } from "react";
import { PlaneTakeoff, PlaneLanding } from "lucide-react";
import SelectWithFlags from "./combobox";

type City = {
    name: string;
    country: string;
};

const cities: City[] = [
    { name: "New York", country: "Estados Unidos" },
    { name: "Barcelona", country: "España" },
    { name: "Orlando", country: "Estados Unidos" },
];

export default function SearchForm() {
    const [origin, setOrigin] = useState<City | null>(null);
    const [destination, setDestination] = useState<City | null>(null);

    return (
        <div className="flex gap-4">
            <SelectWithFlags
                items={cities}
                value={origin}
                onSelect={setOrigin}
                placeholder="Origen"
                icon={<PlaneTakeoff color="#00A896" size={20} />}
            />

            <SelectWithFlags
                items={cities}
                value={destination}
                onSelect={setDestination}
                placeholder="Destino"
                icon={<PlaneLanding color="#FF595E" size={20} />}
            />
        </div>
    );
}