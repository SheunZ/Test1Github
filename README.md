# Neon Abyss — fonds d'écran animés

Bleu nuit profond, rubans de lumière néon (cyan → bleu électrique → violet), poussière d'étoiles scintillante et une fine ligne fluo qui balaie l'écran. Sobre, élégant, en boucle parfaite de 12 s.

| Fichier | Usage |
|---|---|
| `output/<résolution>/neon-abyss-accueil.mp4` | Fond d'écran d'accueil animé (30 fps) |
| `output/<résolution>/neon-abyss-verrouillage.mp4` | Écran de verrouillage animé — haut dégagé et assombri pour l'horloge |
| `output/<résolution>/*.png` | Versions fixes |

Résolutions disponibles : `1440x3200` (QHD+), `1080x2340` (FHD+), `1856x2160` (Galaxy Z Fold6 déplié, écran intérieur) et `968x2376` (Galaxy Z Fold6 plié, écran externe).
| `wallpaper.html` | Version web interactive (`?mode=home`, `?mode=lock`, `?mode=lock&clock=1` pour l'aperçu avec horloge) |
| `render.cjs` | Regénère les vidéos : `node render.cjs [largeur] [hauteur] [fps]` (Playwright + ffmpeg) |

## Installation

- **Android** : Paramètres → Fond d'écran → choisir la vidéo (Samsung : « Fond d'écran vidéo » sur l'écran de verrouillage ; ailleurs une appli comme *Video Live Wallpaper* fonctionne pour l'accueil).
- **iPhone** : iOS n'accepte pas les vidéos en boucle directement ; convertir le MP4 en Live Photo (ex. *intoLive*), ou utiliser les PNG.

Autre résolution : `node render.cjs <largeur> <hauteur> 30` → `output/<largeur>x<hauteur>/`.
