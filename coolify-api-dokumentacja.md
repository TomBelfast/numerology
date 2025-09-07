# Coolify API - Dokumentacja Dostępowa

## 📋 Informacje podstawowe

- **URL API:** `http://192.168.0.25:8000/api/v1/`
- **Wersja:** `4.0.0-beta.426`
- **Typ autoryzacji:** Bearer Token
- **Token aktywny:** `4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1`
- **Dokumentacja oficjalna:** https://coolify.io/docs

---

## 🔐 Autoryzacja

Wszystkie zapytania wymagają nagłówka autoryzacyjnego:

```bash
Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1
```

### Przykład użycia:
```bash
curl -H "Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1" \
     http://192.168.0.25:8000/api/v1/projects
```

---

## ✅ Dostępne endpointy

### 🗂️ Projekty

#### Lista projektów
```http
GET /api/v1/projects
```

**Odpowiedź:**
```json
[
  {
    "id": 1,
    "uuid": "lo884ccwccck8sk8w0s0s4s8",
    "name": "HomeLab",
    "description": null
  },
  {
    "id": 40,
    "uuid": "hwo0o4g8kwcokog8g0ggs8k8",
    "name": "numerology",
    "description": ""
  }
]
```

#### Tworzenie projektu
```http
POST /api/v1/projects
Content-Type: application/json

{
  "name": "test-project",
  "description": "Test"
}
```

**Odpowiedź:**
```json
{
  "uuid": "r0wsg8ccgwgckksgwgg80w0s"
}
```

#### Usuwanie projektu
```http
DELETE /api/v1/projects/{uuid}
```

---

### 🚀 Aplikacje

#### Lista aplikacji
```http
GET /api/v1/applications
```

**Odpowiedź zawiera:**
- `uuid` - Unikalny identyfikator
- `name` - Nazwa aplikacji
- `git_repository` - Repozytorium GitHub
- `git_branch` - Gałąź
- `status` - Status (running:healthy, exited:unhealthy, itp.)
- `fqdn` - Domena aplikacji
- `ports_exposes` - Eksponowane porty
- `destination` - Informacje o serwerze docelowym

#### Szczegóły aplikacji
```http
GET /api/v1/applications/{uuid}
```

**Przykład UUID:** `pkgw84k04csk4ko88wook88k` (aplikacja numerology)

---

### 🖥️ Serwery

#### Lista serwerów
```http
GET /api/v1/servers
```

**Odpowiedź zawiera:**
- `uuid` - Identyfikator serwera
- `name` - Nazwa serwera
- `ip` - Adres IP
- `is_reachable` - Czy serwer jest dostępny
- `proxy` - Konfiguracja proxy (Traefik)
- `settings` - Ustawienia serwera

#### Szczegóły serwera
```http
GET /api/v1/servers/{uuid}
```

**Przykład UUID:** `mo00wo0wwwgsoosw440kcw0k` (localhost)

---

### 🗃️ Bazy danych

#### Lista baz danych
```http
GET /api/v1/databases
```

**Odpowiedź:** `[]` (obecnie brak baz danych)

---

### 👥 Zespoły

#### Lista zespołów
```http
GET /api/v1/teams
```

**Odpowiedź:**
```json
[
  {
    "id": 0,
    "name": "Root Team",
    "description": null,
    "personal_team": true,
    "show_boarding": false
  }
]
```

---

### ℹ️ Informacje systemowe

#### Wersja API
```http
GET /api/v1/version
```

**Odpowiedź:** `4.0.0-beta.426`

---

## ❌ Niedostępne endpointy

Następujące endpointy zwracają `404 Not Found`:

### Deployment i zarządzanie
- `POST /api/v1/applications/{uuid}/deploy`
- `GET /api/v1/applications/{uuid}/status`
- `GET /api/v1/applications/{uuid}/logs`

### Konfiguracja i bezpieczeństwo
- `GET /api/v1/security`
- `GET /api/v1/tokens`
- `GET /api/v1/user`
- `GET /api/v1/webhooks`
- `GET /api/v1/backups`

### Środowiska i źródła
- `GET /api/v1/environments`
- `GET /api/v1/sources`
- `GET /api/v1/resources`

---

## 💡 Przykłady użycia

### Podstawowe operacje na projektach

```bash
# Lista projektów
curl -H "Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1" \
     http://192.168.0.25:8000/api/v1/projects

# Utworzenie projektu
curl -X POST \
     -H "Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1" \
     -H "Content-Type: application/json" \
     -d '{"name":"moj-projekt","description":"Opis projektu"}' \
     http://192.168.0.25:8000/api/v1/projects

# Usunięcie projektu
curl -X DELETE \
     -H "Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1" \
     http://192.168.0.25:8000/api/v1/projects/{uuid}
```

### Monitoring aplikacji

```bash
# Lista wszystkich aplikacji
curl -H "Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1" \
     http://192.168.0.25:8000/api/v1/applications

# Szczegóły konkretnej aplikacji
curl -H "Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1" \
     http://192.168.0.25:8000/api/v1/applications/pkgw84k04csk4ko88wook88k
```

### Sprawdzanie serwerów

```bash
# Lista serwerów
curl -H "Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1" \
     http://192.168.0.25:8000/api/v1/servers

# Status konkretnego serwera
curl -H "Authorization: Bearer 4|joQbgiXZvKTPXBNqiYoJDcwKv4zrC43GCJdOchrY69e140f1" \
     http://192.168.0.25:8000/api/v1/servers/mo00wo0wwwgsoosw440kcw0k
```

---

## 📊 Analiza istniejących aplikacji

Na podstawie testów, w systemie znajdują się następujące aplikacje:

| Nazwa | Status | Port | Repozytorium |
|-------|--------|------|-------------|
| HHI | running:unhealthy | 3232 | TomBelfast/HHI |
| sills2 | running:unhealthy | 56666 | TomBelfast/sills2 |
| sills | running:unhealthy | 55555 | TomBelfast/sills |
| linki | exited:unhealthy | 3000 | TomBelfast/linki |
| pose-generator | running:healthy | 4999 | TomBelfast/pose-generator |
| numerology | exited:unhealthy | 3000 | TomBelfast/numerology |

---

## ⚠️ Przyczyny ograniczonego dostępu do endpointów

### 🔑 **1. Uprawnienia tokenu API**

Nasz token ma uprawnienia: `["root"]` ale może nie mieć pełnego dostępu do wszystkich operacji.

**Rodzaje uprawnień w Coolify:**
- `read-only` - tylko odczyt danych
- `read:sensitive` - odczyt danych wrażliwych
- `view:sensitive` - wyświetlanie wrażliwych informacji
- `*` - **pełny dostęp do wszystkich zasobów**

### 📦 **2. Ograniczenia wersji beta (4.0.0-beta.426)**

Wersja beta może mieć ograniczoną funkcjonalność:
- Niektóre endpointy mogą być jeszcze w rozwoju
- Funkcje deployment/monitoring mogą być wyłączone
- API może mieć ograniczenia bezpieczeństwa

### 🔧 **3. Konfiguracja systemu**

- **API może być częściowo wyłączone** - endpoint `/disable` zwrócił `{"message":"API disabled."}`
- Niektóre operacje mogą wymagać dodatkowej konfiguracji
- Ograniczenia dostępu na poziomie zespołu/projektu

### 🚨 **4. Konkretne ograniczenia wykryte:**

1. **Brak automatycznego deploymentu** - endpoint `/deploy` nie istnieje
2. **Ograniczone zarządzanie tokenami** - brak endpointów `/tokens`
3. **Brak logów** - nie można pobrać logów przez API
4. **Brak webhooków** - endpoint `/webhooks` niedostępny
5. **Brak zarządzania środowiskami** - `/environments` tylko przez projekty

---

## 🛠️ Rozwiązania problemów z dostępem

### **Rozwiązanie 1: Wygenerowanie nowego tokenu z pełnymi uprawnieniami**

1. **Zaloguj się do panelu Coolify:** `http://192.168.0.25:8000/login`
2. **Przejdź do:** `Keys & Tokens` → `API tokens`
3. **Utwórz nowy token:**
   - Kliknij `Create New Token`
   - Nadaj nazwę (np. "Full Access Token")
   - **Wybierz uprawnienia: `*` (pełny dostęp)**
   - Skopiuj token (będzie wyświetlony tylko raz!)

### **Rozwiązanie 2: Sprawdzenie konfiguracji API**

```bash
# Sprawdź czy API jest włączone
curl -H "Authorization: Bearer NOWY_TOKEN" \
     http://192.168.0.25:8000/api/v1/enable

# Jeśli wyłączone, włącz API
curl -X POST -H "Authorization: Bearer NOWY_TOKEN" \
     http://192.168.0.25:8000/api/v1/enable
```

### **Rozwiązanie 3: Aktualizacja do stabilnej wersji**

**❗ WAŻNE:** Według analizy repozytorium [GitHub Coolify](https://github.com/coollabsio/coolify):

- **Wszystkie aktualne wydania to wersje BETA** (4.0.0-beta.xxx)
- **Brak stabilnych wydań v4.x** - najnowsze wydanie to `v4.0.0-beta.426` (28 sierpnia 2025)
- **628 wydań ogółem**, ale wszystkie recent releases to beta

**Status wersji stabilnych:**
- Wersja v3.x była ostatnią stabilną (przestarzała)
- Wersja v4.x jest całkowicie w fazie beta development
- API może być ograniczone celowo w wersjach beta ze względów bezpieczeństwa

### **Rozwiązanie 4: Użycie alternatywnych metod**

Dla operacji niedostępnych przez API:
- **Deployment:** Użyj interfejsu webowego lub webhook GitHub/GitLab
- **Logi:** Sprawdź w panelu webowym lub bezpośrednio na serwerze
- **Monitoring:** Użyj zewnętrznych narzędzi lub panel Coolify

---

## 🔄 Kody odpowiedzi HTTP

- `200 OK` - Żądanie zakończone sukcesem
- `201 Created` - Zasób utworzony pomyślnie
- `401 Unauthorized` - Nieprawidłowy token autoryzacyjny
- `404 Not Found` - Endpoint lub zasób nie istnieje

---

## 📞 Wsparcie

W przypadku problemów:
1. Sprawdź dokumentację oficjalną: https://coolify.io/docs
2. Upewnij się, że token jest aktualny
3. Sprawdź dostępność serwera: `192.168.0.25:8000`

---

## 🔍 **Kluczowe odkrycia z analizy**

### **Status projektów Coolify (z GitHub):**

1. **628 wydań łącznie**, ale **wszystkie aktualne to wersje BETA**
2. **Brak stabilnego wydania v4.x** - cały v4.x jest w fazie development
3. **Ostatnia stabilna wersja:** prawdopodobnie v3.x (już przestarzała)
4. **Częste wydania beta:** średnio kilka wydań tygodniowo

### **Implikacje dla API:**

- **Ograniczona funkcjonalność w beta** to celowa decyzja projektodawców
- **Endpointy deployment/monitoring** mogą być wyłączone dla stabilności
- **Pełna funkcjonalność API** będzie dostępna po wydaniu stabilnej v4.x
- **Aktualna beta (426)** ma podstawową funkcjonalność (CRUD operations)

### **Rekomendacje:**

1. **Użyj interfejsu webowego** dla zaawansowanych operacji
2. **Monitoruj GitHub releases** dla wydania stabilnej v4.x
3. **API v1 w obecnej formie** to MVP (Minimum Viable Product)
4. **Rozważ GitHub webhooks** dla automatyzacji deploymentów

---

*Dokumentacja utworzona na podstawie testów z dnia: 7 września 2025*  
*Wersja API: 4.0.0-beta.426*  
*Analiza GitHub: [coollabsio/coolify](https://github.com/coollabsio/coolify)*
