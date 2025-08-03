# SongtextLive

## Voraussetzungen

### Installationen
Folgende Software muss installiert sein:<br>
``python``<br>
``node``<br>
``just``, um Befehle schnell ausführen zu können (nicht zwingend)

Wenn Just nicht installiert ist, kann man die Befehle aus der Justfile auch manuell ausführen.<br>
Fehlende Software wie folgt installieren:

### Windows

#### Python

Auf [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/) einen Python 3.x Installer herunterladen und Python installieren

#### Node

Auf [https://nodejs.org](https://nodejs.org) Installer herunterladen und Node installieren

#### Just

Steht vielleicht hier: [https://github.com/casey/just](https://github.com/casey/just)


### Repository klonen

```bash
git clone https://github.com/fschh/SongtextLive.git
```

### In erstellten Ordner navigieren

```bash
cd SongtextLive
```

### Node Module installieren

```bash
just install
```

### Lokale IP-Adresse hinterlegen

Erstelle eine ``frontend/.ENV`` Datei und füge deine lokale IP-Adresse hinzu, um die Anwendung im lokalen Netzwerk erreichbar zu machen.

```bash
VITE_NODE_SERVER_IP = "deine.lokale.IP.Adresse"
```

## Anwendung starten

### Anwendung nur lokal auf eigenem Rechner erreichbar machen
```bash
just
```

### Anwendung im ganzen lokalen Netz erreichbar machen
```bash
just network
```