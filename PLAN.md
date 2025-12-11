# Plan détaillé pour la migration vers React et l'ajout du multilingue

## 1. Initialisation du projet React (avec Vite)
- Créer un nouveau projet React nommé `geki_docs` en utilisant Vite.
- Installer les dépendances nécessaires (par exemple, pour la gestion de l'état si nécessaire, ou une bibliothèque d'internationalisation).

## 2. Structure des fichiers et des composants
- Organiser les fichiers du projet de manière logique (par exemple, `src/components`, `src/pages`, `src/assets`, `src/locales`).
- Créer un composant principal `App.jsx` qui gérera la mise en page générale, y compris la barre latérale pour la sélection de la langue et le contenu principal.
- Identifier les sections réutilisables de `index.html` pour les transformer en composants React (par exemple, `Header`, `ManualContent`).

## 3. Migration du style et des assets
- Intégrer les fichiers de polices (`montserrat_bold.ttf`, `montserrat_regular.ttf`, `open_sans_regular.ttf`) dans le projet React.
- Transférer les styles CSS inline et les règles `@font-face` dans des fichiers CSS séparés (par exemple, `App.css`, `index.css` ou des modules CSS pour chaque composant) pour une meilleure maintenabilité.
- Placer les images (`geki_title.png`, `title.png`) dans le dossier `src/assets` de React.

## 4. Internationalisation (i18n)
- Choisir une bibliothèque d'internationalisation (par exemple, `react-i18next`).
- Créer des fichiers de traduction (par exemple, `src/locales/fr.json`, `src/locales/en.json`) pour stocker tout le contenu textuel de la page.
- Le contenu du manuel d'utilisation sera extrait de `index.html` et placé dans `fr.json`.
- Traduire le contenu du manuel en anglais et le placer dans `en.json`.

## 5. Composant de sélection de langue
- Créer un composant `LanguageSwitcher.jsx` qui sera placé dans la marge gauche de l'écran.
- Ce composant affichera les options de langue (par exemple, "Français", "English").
- Au clic sur une langue, il mettra à jour l'état global de l'application pour changer la langue active.

## 6. Chargement dynamique du contenu
- Le composant `ManualContent` recevra la langue active via les props ou le contexte React.
- Il utilisera la bibliothèque d'i18n pour charger le contenu correspondant à la langue sélectionnée.

## 7. Développement des composants
- **`App.jsx`**:
    - Mettre en place la structure de la page avec une barre latérale (`LanguageSwitcher`) et une zone de contenu principale (`ManualContent`).
    - Gérer l'état de la langue sélectionnée.
- **`Header.jsx`**: Afficher le titre et l'image `geki_title.png`.
- **`ManualContent.jsx`**: Afficher le contenu du manuel d'utilisation en utilisant les traductions.

## 8. Traduction du manuel d'utilisation
- Traduire manuellement le contenu du `index.html` en anglais et le sauvegarder dans `src/locales/en.json`.

## Étapes suivantes
Après validation du plan, je commencerai par la mise en place du projet React et l'intégration des styles et des polices.
