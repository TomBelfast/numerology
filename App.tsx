import React, { useState, useCallback } from 'react';
import { HoroscopeType } from './types';
import { generateHoroscope } from './services/geminiService';
import DateInput from './components/DateInput';
import HoroscopeSelector from './components/HoroscopeSelector';
import HoroscopeDisplay from './components/HoroscopeDisplay';
import Loader from './components/Loader';
import Header from './components/Header';

const App: React.FC = () => {
    const [birthDate, setBirthDate] = useState<string>('');
    const [birthTime, setBirthTime] = useState<string>('');
    const [horoscope, setHoroscope] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<HoroscopeType | null>(null);

    const handleGenerateHoroscope = useCallback(async (type: HoroscopeType) => {
        if (!birthDate) {
            setError('Proszę podać datę urodzenia.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setHoroscope(null);
        setSelectedType(type);

        try {
            const result = await generateHoroscope(birthDate, birthTime || null, type);
            setHoroscope(result);
        } catch (e) {
            console.error(e);
            setError('Wystąpił błąd podczas generowania horoskopu. Spróbuj ponownie.');
        } finally {
            setIsLoading(false);
        }
    }, [birthDate, birthTime]);

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-slate-900 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0"></div>
            
            <main className="w-full max-w-4xl mx-auto z-10 flex flex-col items-center">
                <Header />
                
                <div className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl shadow-indigo-500/10 p-6 md:p-8 mt-8">
                    <DateInput
                        birthDate={birthDate}
                        setBirthDate={setBirthDate}
                        birthTime={birthTime}
                        setBirthTime={setBirthTime}
                    />

                    <HoroscopeSelector
                        onSelect={handleGenerateHoroscope}
                        isDisabled={!birthDate || isLoading}
                        selectedType={selectedType}
                        isLoading={isLoading}
                    />

                    {error && <p className="text-center text-red-400 mt-6 animate-pulse">{error}</p>}
                </div>

                <div className="w-full mt-8">
                    {isLoading ? (
                        <Loader type={selectedType} />
                    ) : (
                        <HoroscopeDisplay horoscope={horoscope} selectedType={selectedType} />
                    )}
                </div>
            </main>
             <footer className="w-full text-center text-slate-500 text-xs mt-8 pb-4 z-10">
                Powered by AI. For entertainment purposes only.
            </footer>
        </div>
    );
};

export default App;
