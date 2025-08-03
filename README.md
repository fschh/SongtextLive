# SongtextLive

## Voraussetzungen

### Installationen
Folgende Software muss installiert sein:<br>
``python``<br>
``node``<br>
``just``, um Befehle schnell ausführen zu können (nicht zwingend)

Wenn Just nicht installiert ist, kann man die jeweiligen Befehle auch manuell ausführen.<br>
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

## Node Module installieren

```bash
just install
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