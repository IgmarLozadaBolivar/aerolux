import React from 'react';

interface CheckedButtonProps {
    type?: 'radio' | 'checkbox',
    name?: string,
    value?: string,
    checked?: boolean,
    className?: string,
    onChange?: (value: string) => void
}

export const CheckedButton = ({ type, name, value, checked, className, onChange }: CheckedButtonProps) => {
    return (
        <div className ={ 'flex items-center gap-2' } >
            <input
                className = { className }
                type = { type }
                name = { name }
                value = { value }
                checked = { checked }
                onChange = { () => onChange && onChange(value || '') }
            />
            <label className = "text-black" htmlFor = { value } >
                { value }
            </label>
        </div>
    );
};
