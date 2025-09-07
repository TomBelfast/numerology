# Prosty Dockerfile dla aplikacji React/Vite
FROM node:18-alpine

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj kod źródłowy
COPY . .

# Ujawnij port
EXPOSE 5173

# Uruchom aplikację w trybie deweloperskim
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]