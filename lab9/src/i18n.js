import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            "To get started, edit <1>src/App.js</1> and save to reload.",
            "Home":"Home",
            "Store":"Store",
            "Your Video Game Hub!":"Your Video Game Hub!",
            "Get Access To All Your Favorite Games All From One Website":"Get Access To All Your Favorite Games All From One Website",
            "Start Browsing Some Games!":"Start Browsing Some Games!",
            "Company Address":"Company Address",
            "Email":"Email",
            "Company Info":"Company Info",
            "Phone Number":"Phone Number",
            "Video Game Selection":"Video Game Selection",
            "Buy Game Code":"Buy Game Code",
            "Release Date":"Release Date",
            "Price":"Price",
            "Customer Reviews":"Customer Reviews",
            "Write A Review About GameSeekers":"Write A Review About GameSeekers",
            "Write Your Comment Here":"Write Your Comment Here",
            "Website By":"Website By",
            "Write Your Name Here":"Write Your Name Here",
            "Submit Review":"Submit Review",
            odyssey:"Super Mario Odyssey is a platform game in which players control Mario as he travels across many different worlds, known as Kingdoms, on the hat-shaped ship Odyssey, to rescue Princess Peach from Bowser, who plans to forcibly marry her.",
            zelda:"Breath of the Wild is an action-adventure game set in an open world where players are tasked with exploring the kingdom of Hyrule while controlling Link. Link can procure items from the environment, including weapons, food, and other resources.",
            uncharted:"Uncharted 4: A Thief's End is an action-adventure game played from a third-person perspective, with platforming elements. Players traverse several environments, moving through locations including towns, buildings and wilderness to advance through the game's story.",
            overwatch:"Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Players on a team work together to secure and defend control points on a map or escort a payload across the map in a limited amount of time.",


          }
      },
      fr: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
          " Home":" Accueil",
          "Store":"Magasin",
          "Reviews":"Commentaires",
          "Your Video Game Hub!":"Votre hub de jeux vidéo!",
          "Get Access To All Your Favorite Games All From One Website":"Accédez à tous vos jeux préférés à partir d'un seul site Web",
          "Start Browsing Some Games!":"Commencez à parcourir certains jeux!",
          "Company Address":"Address de la compagnie",
          "Email":"Email",
          "Company Info":"Info De La Compagnie",
          "Phone Number":"Numéro de téléphone",
          "Video Game Selection":"Sélection de jeux vidéo",
          "Buy Game Code":"Acheter le code de jeu",
          "Release Date":"Date de sortie",
          "Price":"Prix",
          "Customer Reviews":"Commentaires Des Clients",
          "Write A Review About GameSeekers":"Écrivez Un Commentaire Sur GameSeekers",
          "Write Your Name Here":"Écrivez Votre Nom Ici",
          "Submit Review":"Poster Commentaire",
          "Write Your Comment Here":"Écrivez Votre Commentaire Ici",
          "Website By":"SiteWeb Par",
          odyssey:"Super Mario Odyssey est un jeu de plateforme dans lequel les joueurs contrôlent Mario alors qu'il voyage à travers de nombreux mondes différents, connus sous le nom de Kingdoms, sur le navire en forme de chapeau Odyssey, pour sauver la princesse.",
          zelda:"Breath of the Wild est un jeu d'action-aventure se déroulant dans un monde où les joueurs sont chargés d'explorer le royaume d'Hyrule tout en contrôlant Link. Link peut se procurer des articles de l'environnement, y compris les armes et la nourriture.",
          uncharted:"Uncharted 4: A Thief's End est une action-aventure jeu joué à la troisième personne, avec plateforme éléments. Les joueurs traversent plusieurs environnements, se déplaçant à travers des lieux comprenant des villes, des bâtiments et des zones sauvages.",
          overwatch:"Overwatch est un jeu de tir à la première personne multijoueur en équipe développé et publié par Blizzard Entertainment. Les joueurs d'une équipe travaillent ensemble pour sécuriser et défendre les points de contrôle sur une carte.",
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
