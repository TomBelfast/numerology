<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Numerology Horoscope AI

Aplikacja do generowania spersonalizowanych horoskopów numerologicznych w języku polskim, wykorzystująca sztuczną inteligencję Gemini.

## 🚀 Funkcje

- **Spersonalizowane horoskopy** - różne typy (roczny, miesięczny, tygodniowy, dzienny, godzinowy)
- **Analiza numerologiczna** - obliczanie liczb życia na podstawie daty urodzenia
- **Interfejs w języku polskim** - intuicyjny i piękny design
- **Wsparcie Docker** - łatwe wdrożenie i uruchomienie

## 🛠️ Instalacja i uruchomienie

### Lokalnie

1. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

2. **Skonfiguruj klucz API:**
   - Utwórz plik `.env.local`
   - Dodaj: `GEMINI_API_KEY=twój_klucz_api`
   - Klucz API możesz uzyskać na: https://aistudio.google.com/app/apikey

3. **Uruchom aplikację:**
   ```bash
   npm run dev
   ```

### Docker

1. **Uruchom z docker-compose:**
   ```bash
   docker-compose up -d
   ```

2. **Aplikacja będzie dostępna na:** `http://localhost:3000`

## 📁 Struktura projektu

```
├── components/          # Komponenty React
│   ├── DateInput.tsx    # Pola daty i czasu
│   ├── Header.tsx       # Nagłówek aplikacji
│   ├── HoroscopeDisplay.tsx  # Wyświetlanie horoskopu
│   ├── HoroscopeSelector.tsx # Wybór typu horoskopu
│   └── Loader.tsx       # Animacja ładowania
├── services/            # Usługi
│   └── geminiService.ts # Integracja z Gemini AI
├── Dockerfile          # Konfiguracja Docker
├── docker-compose.yml  # Orchestracja Docker
└── README.md           # Dokumentacja
```

## 🎨 Technologie

- **React 19** - Framework frontend
- **TypeScript** - Typowanie statyczne
- **Vite** - Build tool
- **Tailwind CSS** - Stylowanie
- **Google Gemini AI** - Generowanie horoskopów
- **Docker** - Konteneryzacja

## 📝 Licencja

Projekt jest dostępny na licencji MIT. Zobacz plik LICENSE dla szczegółów.

## 🤝 Wkład

Wszelkie wkłady są mile widziane! Proszę otwórz issue lub pull request.

---

**Uwaga:** Aplikacja jest przeznaczona wyłącznie do celów rozrywkowych.
