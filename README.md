# JII Athletics

Site vitrine de la salle JII Athletics (Tunis) — React + Vite + Tailwind CSS.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- Aucune dépendance UI externe : composants et styles maison

## Démarrer

```bash
npm install
npm run dev
```

Autres commandes :

```bash
npm run build     # build de production dans dist/
npm run preview   # sert le build de production en local
npm run lint       # oxlint
```

## Structure

```
src/
  components/   composants de chaque section (Hero, Planning, Coaches, Gallery, Contact, ...)
  data/         contenu du site (disciplines, plannings, coachs, tarifs, galerie...) — content.js
  hooks/        hooks partagés (reveal au scroll, compteurs animés)
  assets/       logo, photo hero, galerie, photos des coachs
```

La quasi-totalité du contenu (plannings par discipline, coachs, tarifs, galerie, témoignages) est centralisée dans [`src/data/content.js`](src/data/content.js) — c'est le premier endroit à modifier pour mettre à jour le site.

### Planning

Chaque discipline a son propre tableau hebdomadaire dans `disciplineSchedules` (clé = `id` de la discipline). Une discipline sans entrée affiche automatiquement "Planning bientôt disponible" dans la section Planning.

## Assets

- `src/assets/logo.png`, `src/assets/hero.jpg` — logo et photo du hero
- `src/assets/galerie/` — photos de la section Galerie
- `src/assets/coachs/` — photos des coachs (optionnelles : sans photo, un placeholder s'affiche)
