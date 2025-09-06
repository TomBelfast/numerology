
import React from 'react';
import { HoroscopeType } from '../types';

interface HoroscopeDisplayProps {
    horoscope: string | null;
    selectedType: HoroscopeType | null;
}

const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ horoscope, selectedType }) => {
    if (!horoscope) {
        return (
            <div className="text-center text-slate-400 p-8 bg-slate-800/30 border border-dashed border-slate-700 rounded-2xl">
                 <h2 className="text-2xl font-bold text-indigo-300 mb-2">Twoje Numerologiczne Przesłanie</h2>
                <p>Wprowadź swoją datę urodzenia i wybierz rodzaj horoskopu, aby odkryć, co mówią o Tobie liczby.</p>
            </div>
        );
    }

    // Split by newline and filter out empty lines to create paragraphs
    const paragraphs = horoscope.split('\n').filter(p => p.trim() !== '');

    return (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg p-6 md:p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">
                Horoskop {selectedType}
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
                {paragraphs.map((p, index) => (
                    <p key={index}>{p}</p>
                ))}
            </div>
        </div>
    );
};

// Add fade-in animation to tailwind config (or use style tag for simplicity in this context)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }
`;
document.head.appendChild(style);


export default HoroscopeDisplay;
