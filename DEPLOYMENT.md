# Deployment Guide für MichelClean

## Docker Deployment

### Voraussetzungen

- Docker und Docker Compose installiert
- Port 3005 ist verfügbar
- Traefik Reverse Proxy läuft (für Production)

### Schritt 1: Umgebungsvariablen konfigurieren

Erstelle `.env.local` Datei:

```bash
cp .env.example .env.local
```

Bearbeite `.env.local` und fülle die Werte aus:

```env
API_URL=http://portal.digitalssolutions.de
TENANT_API_KEY=dein_echter_tenant_key
API_EMAIL=info@michelclean.de
API_PASSWORD=michelclean##123
JWT_TOKEN=dein_jwt_token_oder_leer_lassen
```

### Schritt 2: Docker Build und Start

**Option A: Mit Docker Compose (Empfohlen)**

```bash
# Build und Start
docker compose up -d --build

# Logs ansehen
docker compose logs -f

# Status prüfen
docker compose ps

# Stoppen
docker compose down
```

**Option B: Nur Docker**

```bash
# Build
docker build -t michelclean:latest .

# Run
docker run -d \
  --name michelclean \
  -p 3005:3005 \
  --env-file .env.local \
  michelclean:latest

# Logs ansehen
docker logs -f michelclean

# Stoppen
docker stop michelclean
docker rm michelclean
```

### Schritt 3: Testen

Die Anwendung ist erreichbar unter:
- **Lokal:** http://localhost:3005
- **Production:** https://www.michelclean.de (via Traefik)

### Port-Konfiguration

Die Anwendung läuft auf **Port 3005**:
- **Container intern:** 3005
- **Host-Port:** 3005
- **Traefik Load Balancer Port:** 3005

Wenn du den Port ändern möchtest:
1. Ändere `EXPOSE` und `ENV PORT` in `Dockerfile`
2. Ändere Port-Mapping in `docker-compose.yml` (`ports` und `traefik.http.services.michelclean.loadbalancer.server.port`)

### Traefik-Konfiguration

Die `docker-compose.yml` enthält bereits Traefik-Labels für:

- **Domain-Routing:**
  - `michelclean.de` → Weiterleitung zu `www.michelclean.de`
  - `www.michelclean.de` → Hauptseite

- **SSL/TLS:** Automatisch via Traefik
- **HTTPS Force:** X-Forwarded-Proto Header

### Nützliche Befehle

```bash
# Container neu starten
docker compose restart

# Container neu bauen (nach Code-Änderungen)
docker compose up -d --build

# Logs in Echtzeit
docker compose logs -f

# Container Shell öffnen
docker compose exec michelclean sh

# Ressourcen aufräumen
docker compose down -v
docker system prune -a
```

### Fehlersuche

**Problem: Port bereits belegt**
```bash
# Prüfe welcher Prozess Port 3005 verwendet
sudo netstat -tulpn | grep 3005
# oder
sudo lsof -i :3005
```

**Problem: Container startet nicht**
```bash
# Logs prüfen
docker compose logs michelclean

# Container Status
docker compose ps
```

**Problem: Umgebungsvariablen fehlen**
```bash
# Prüfe ob .env.local existiert
ls -la .env.local

# Prüfe ENV im Container
docker compose exec michelclean env | grep API
```

**Problem: Traefik findet Service nicht**
```bash
# Prüfe Traefik Logs
docker logs traefik

# Prüfe ob Container im richtigen Netzwerk ist
docker network inspect traefik-net
```

## Ohne Docker (Development)

### Lokaler Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Anwendung läuft dann auf http://localhost:3000

### Production Build (ohne Docker)

```bash
# Build erstellen
npm run build

# Production Server starten
npm start
```

## Continuous Deployment

### GitHub Actions Beispiel

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Copy files to server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_KEY }}
          source: "."
          target: "/srv/michelclean"

      - name: Deploy with Docker Compose
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /srv/michelclean
            docker compose pull
            docker compose up -d --build
```

## Monitoring

### Health Check

```bash
# HTTP Health Check
curl http://localhost:3005

# Oder mit Docker
docker compose exec michelclean wget -O- http://localhost:3005
```

### Performance Monitoring

Die Next.js Anwendung bietet integriertes Monitoring:
- Web Vitals werden automatisch getracked
- Console Logs für API-Calls

## Backup

**Wichtige Dateien für Backup:**
- `.env.local` (Umgebungsvariablen - NICHT in Git!)
- `public/assets/` (Logo-Dateien)

```bash
# Backup erstellen
tar -czf michelclean-backup-$(date +%Y%m%d).tar.gz .env.local public/assets/
```

## Updates

Nach Code-Änderungen:

```bash
# Pull latest changes
git pull origin main

# Rebuild und restart
docker compose up -d --build

# Prüfe Logs
docker compose logs -f
```

## Support

Bei Problemen:
- Logs prüfen: `docker compose logs -f`
- Container Status: `docker compose ps`
- GitHub Issues: https://github.com/michelclean/website/issues
