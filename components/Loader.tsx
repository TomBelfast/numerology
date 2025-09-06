
import React from 'react';
import { HoroscopeType } from '../types';

interface LoaderProps {
    type: HoroscopeType | null;
}

const messages: Record<HoroscopeType, string[]> = {
    [HoroscopeType.Yearly]: [
        "Analizowanie wibracji rocznych...",
        "Obliczanie Twojej liczby roku osobistego...",
        "Sprawdzanie kosmicznych cykli na nadchodzące 12 miesięcy...",
    ],
    [HoroscopeType.Monthly]: [
        "Zagłębianie się w energię tego miesiąca...",
        "Interpretowanie wpływu Twojej liczby miesięcznej...",
        "Układanie numerologicznej mapy na najbliższe tygodnie...",
    ],
    [HoroscopeType.Weekly]: [
        "Dostrajanie do rytmu nadchodzącego tygodnia...",
        "Odczytywanie tygodniowych wzorców numerologicznych...",
        "Przygotowywanie wskazówek na najbliższe 7 dni...",
    ],
    [HoroscopeType.Daily]: [
        "Obliczanie Twojej liczby dnia osobistego...",
        "Skupianie się na dzisiejszych energiach...",
        "Odszyfrowywanie przesłania liczb na dziś...",
    ],
    [HoroscopeType.Hourly]: [
        "Przechwytywanie wibracji obecnej chwili...",
        "Analizowanie natychmiastowych wpływów numerologicznych...",
        "Interpretowanie kosmicznego pulsu tej godziny...",
    ],
};

const Loader: React.FC<LoaderProps> = ({ type }) => {
    const [messageIndex, setMessageIndex] = React.useState(0);

    const currentMessages = type ? messages[type] : messages[HoroscopeType.Daily];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % currentMessages.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [currentMessages]);


    return (
        <div className="flex flex-col items-center justify-center p-8 bg-slate-800/30 border border-dashed border-slate-700 rounded-2xl">
            <svg className="animate-spin h-12 w-12 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-slate-200 mt-6">Generowanie horoskopu...</h3>
            <p className="text-slate-400 mt-2 text-center transition-opacity duration-500">
                {currentMessages[messageIndex]}
            </p>
        </div>
    );
};

export default Loader;
