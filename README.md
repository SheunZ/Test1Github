# Neon Abyss — fonds d'écran animés

Bleu nuit profond, rubans de lumière néon (cyan → bleu électrique → violet), poussière d'étoiles scintillante et une fine ligne fluo qui balaie l'écran. Sobre, élégant, en boucle parfaite de 12 s.

| Fichier | Usage |
|---|---|
| `output/neon-abyss-accueil.mp4` | Fond d'écran d'accueil animé (1080×2340, 30 fps) |
| `output/neon-abyss-verrouillage.mp4` | Écran de verrouillage animé — haut dégagé et assombri pour l'horloge |
| `output/*.png` | Versions fixes |
| `wallpaper.html` | Version web interactive (`?mode=home`, `?mode=lock`, `?mode=lock&clock=1` pour l'aperçu avec horloge) |
| `render.cjs` | Regénère les vidéos : `node render.cjs [largeur] [hauteur] [fps]` (Playwright + ffmpeg) |

## Installation

- **Android** : Paramètres → Fond d'écran → choisir la vidéo (Samsung : « Fond d'écran vidéo » sur l'écran de verrouillage ; ailleurs une appli comme *Video Live Wallpaper* fonctionne pour l'accueil).
- **iPhone** : iOS n'accepte pas les vidéos en boucle directement ; convertir le MP4 en Live Photo (ex. *intoLive*), ou utiliser les PNG.

Autre résolution (ex. 1440×3200) : `node render.cjs 1440 3200 30`.
