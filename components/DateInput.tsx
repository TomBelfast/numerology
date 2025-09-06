
import React from 'react';

interface DateInputProps {
    birthDate: string;
    setBirthDate: (date: string) => void;
    birthTime: string;
    setBirthTime: (time: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ birthDate, setBirthDate, birthTime, setBirthTime }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
                <label htmlFor="birthDate" className="block text-sm font-medium text-indigo-300 mb-2">
                    Data urodzenia
                </label>
                <input
                    type="date"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                    required
                />
            </div>
            <div>
                <label htmlFor="birthTime" className="block text-sm font-medium text-indigo-300 mb-2">
                    Godzina urodzenia (opcjonalnie)
                </label>
                <input
                    type="time"
                    id="birthTime"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-3 text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                />
            </div>
        </div>
    );
};

export default DateInput;
