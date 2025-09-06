
import { GoogleGenAI } from "@google/genai";
import { HoroscopeType } from '../types';

console.log('🔍 Debug - API Key check:', {
    hasKey: !!process.env.GEMINI_API_KEY,
    keyLength: process.env.GEMINI_API_KEY?.length || 0,
    keyStart: process.env.GEMINI_API_KEY?.substring(0, 10) || 'NOT_FOUND'
});

if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateHoroscope = async (
    birthDate: string,
    birthTime: string | null,
    type: HoroscopeType
): Promise<string> => {
    
    const prompt = `
        Jesteś światowej klasy numerologiem z wieloletnim doświadczeniem. Twoim zadaniem jest stworzenie spersonalizowanego horoskopu numerologicznego w języku polskim.

        Dane wejściowe:
        - Data urodzenia: ${birthDate}
        - Godzina urodzenia: ${birthTime ? birthTime : 'nie podano'}
        - Rodzaj horoskopu: ${type}

        Instrukcje:
        1.  Przeanalizuj podaną datę urodzenia, aby obliczyć kluczowe liczby numerologiczne (np. Liczba Drogi Życia).
        2.  Jeśli podano godzinę urodzenia, uwzględnij jej wibrację w analizie.
        3.  Stwórz szczegółowy i wnikliwy horoskop typu "${type}".
        4.  Horoskop powinien być inspirujący, pozytywny i dostarczać praktycznych wskazówek dotyczących nadchodzącego okresu (rok, miesiąc, tydzień, dzień lub godzina).
        5.  Odpowiedź sformatuj w czytelny sposób, używając nagłówków i akapitów. Nie używaj formatowania markdown (np. #, **).
        6.  Zacznij bezpośrednio od horoskopu, bez wstępnych powitań czy wyjaśnień.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.8,
                topP: 0.95,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating horoscope with Gemini:", error);
        throw new Error("Failed to generate horoscope.");
    }
};
