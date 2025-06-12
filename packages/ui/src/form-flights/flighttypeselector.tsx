import React, { useState } from 'react';
import { CheckedButton } from './radiobutton';

interface Props {
    className?: string,
}

export const FlightTypeSelector = ( { className }: Props ) => {
    const [selected, setSelected] = useState('Ida y vuelta');

    return (
        <div className = { className }>
            {['Ida y vuelta', 'Solo ida'].map((option) => (
                <CheckedButton
                    key={option}
                    type="radio"
                    name="tipo_vuelo"
                    value={option}
                    checked={selected === option}
                    onChange={setSelected}
                    className="radio bg-[#FFFFFF] border-[#667085] checked:bg-[#FFFFFF] checked:text-[#037980] checked:border-[#037980]"
                />
            ))}
        </div>
    );
};