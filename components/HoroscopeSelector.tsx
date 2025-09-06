
import React from 'react';
import { HoroscopeType } from '../types';

interface HoroscopeSelectorProps {
    onSelect: (type: HoroscopeType) => void;
    isDisabled: boolean;
    selectedType: HoroscopeType | null;
    isLoading: boolean;
}

const HoroscopeSelector: React.FC<HoroscopeSelectorProps> = ({ onSelect, isDisabled, selectedType, isLoading }) => {
    const types = Object.values(HoroscopeType);

    const getButtonClass = (type: HoroscopeType) => {
        const baseClass = "w-full sm:w-auto flex-grow text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
        const disabledClass = "disabled:opacity-50 disabled:cursor-not-allowed";
        
        if (isLoading && selectedType === type) {
            return `${baseClass} ${disabledClass} bg-indigo-500 text-white ring-2 ring-indigo-400 animate-pulse`;
        }
        
        if (selectedType === type && !isLoading) {
             return `${baseClass} ${disabledClass} bg-indigo-600 text-white shadow-lg shadow-indigo-500/30`;
        }

        return `${baseClass} ${disabledClass} bg-slate-700 hover:bg-indigo-500/80 text-slate-200 hover:text-white focus:ring-indigo-500`;
    };

    return (
        <div className="mt-6">
            <p className="text-center text-sm font-medium text-indigo-300 mb-3">Wybierz rodzaj horoskopu:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => onSelect(type)}
                        disabled={isDisabled}
                        className={getButtonClass(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HoroscopeSelector;
