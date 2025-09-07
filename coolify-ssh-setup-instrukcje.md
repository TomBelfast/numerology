# Włączanie dostępu root SSH w Coolify

## 1. Sprawdzenie aktualnego statusu SSH

Będąc zalogowanym w konsoli Proxmox do kontenera Coolify, wykonaj:

```bash
# Sprawdź status serwisu SSH
systemctl status ssh
# lub
systemctl status sshd

# Sprawdź czy SSH nasłuchuje
netstat -tlnp | grep :22
# lub
ss -tlnp | grep :22
```

## 2. Konfiguracja SSH dla dostępu root

### Edytuj konfigurację SSH:
```bash
nano /etc/ssh/sshd_config
```

### Znajdź i zmień/dodaj te linie:
```bash
# Włącz logowanie root
PermitRootLogin yes

# Włącz uwierzytelnianie kluczami publicznymi
PubkeyAuthentication yes

# Określ lokalizację authorized_keys
AuthorizedKeysFile .ssh/authorized_keys

# Opcjonalnie: wyłącz uwierzytelnianie hasłem (zalecane)
PasswordAuthentication no

# Restartuj SSH po zmianach
systemctl restart ssh
```

## 3. Dodanie klucza publicznego SSH

### Utwórz katalog .ssh dla root:
```bash
mkdir -p /root/.ssh
chmod 700 /root/.ssh
```

### Dodaj klucz publiczny:
```bash
# Utwórz plik authorized_keys
nano /root/.ssh/authorized_keys

# Wklej CAŁY klucz publiczny w jednej linii:
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMiulGfskPtyku3cG2Cq2kSuiwOleiFSNEoYxcwV3ixX coolify

# Ustaw odpowiednie uprawnienia
chmod 600 /root/.ssh/authorized_keys
chown root:root /root/.ssh/authorized_keys
```

## 4. Sprawdzenie konfiguracji sieci

### Sprawdź adres IP kontenera:
```bash
ip addr show
# lub
hostname -I
```

### Sprawdź czy SSH nasłuchuje:
```bash
ss -tlnp | grep :22
```

## 5. Test połączenia SSH

Z zewnętrznego komputera przetestuj:
```bash
ssh -i coolify_ssh_key root@192.168.0.25
```

## 6. Rozwiązywanie problemów

### Jeśli SSH nie działa:
```bash
# Sprawdź logi SSH
journalctl -u ssh -f
# lub
tail -f /var/log/auth.log

# Sprawdź konfigurację SSH
sshd -T | grep -E "(PermitRootLogin|PubkeyAuthentication)"

# Test konfiguracji SSH
sshd -t
```

### Jeśli klucz nie działa:
```bash
# Sprawdź uprawnienia
ls -la /root/.ssh/
ls -la /root/.ssh/authorized_keys

# Powinno być:
# drwx------ root root .ssh/
# -rw------- root root authorized_keys
```

## 7. Zaawansowane opcje

### Włączenie debugowania SSH:
```bash
# Tymczasowo włącz verbose logging
systemctl stop ssh
/usr/sbin/sshd -D -d
```

### Sprawdzenie, czy Coolify ma własną konfigurację SSH:
```bash
# Sprawdź czy Coolify zarządza SSH
find /opt/coolify -name "*ssh*" -type f
find /var/coolify -name "*ssh*" -type f 2>/dev/null

# Sprawdź procesy Coolify
docker ps | grep coolify
```

## 8. Alternatywne podejście - Docker exec

Jeśli SSH nie działa, możesz użyć docker exec:
```bash
# Znajdź kontener Coolify
docker ps | grep coolify

# Wykonaj komendę w kontenerze
docker exec -it CONTAINER_NAME bash

# Lub bezpośrednio z Proxmox
pct exec CONTAINER_ID -- bash
```

