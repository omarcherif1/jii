import galerieEquipement from "../assets/galerie/image.png";
import galerieBjjIstanbul from "../assets/galerie/image1.jpeg";
import galerieChampionsBoxe from "../assets/galerie/image2.jpeg";
import galerieEquipeBjj from "../assets/galerie/image3.png";
import galerieEquipeGrappling from "../assets/galerie/image4.png";
import galerieCoursBjj from "../assets/galerie/image5.png";
import galerieNogi from "../assets/galerie/image6.png";
import galerieEquipeBoxe from "../assets/galerie/image7.png";
import galerieSalle from "../assets/galerie/image8.png";

export const disciplines = [
  {
    id: "mma",
    name: "MMA",
    icon: "M",
    desc: "Combat mixte : frappe, lutte et soumissions dans un même système.",
  },
  {
    id: "grappling",
    name: "Grappling / BJJ",
    icon: "G",
    desc: "Contrôle au sol, clés et étranglements. Technique pure, sans frappe.",
  },
  {
    id: "wrestling",
    name: "Wrestling",
    icon: "W",
    desc: "Projections, contrôle et explosivité. La base de tout combattant complet.",
  },
  {
    id: "boxing",
    name: "Boxing",
    icon: "B",
    desc: "Jeu de jambes, poings et cardio. La discipline reine de la frappe.",
  },
  {
    id: "weightlifting",
    name: "Weightlifting",
    icon: "L",
    desc: "Arraché et épaulé-jeté. Force explosive et technique olympique.",
  },
];

// Planning par discipline : chaque discipline a son propre tableau hebdomadaire.
// Ajoute une entrée ici (clé = discipline.id) au fur et à mesure que les horaires arrivent.
export const disciplineSchedules = {
  boxing: {
    days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    closedDays: ["SAT", "SUN"],
    timeSlots: ["07:00", "07:30", "17:30", "18:30", "19:30", "20:30", "21:30"],
    openGym: {
      label: "OPEN GYM ACCESS BY STAFF PERMISSION",
      lines: [
        { hours: "07:00 - 22:00", days: "MONDAY - FRIDAY" },
        { hours: "09:00 - 16:00", days: "SATURDAY" },
        { hours: "09:00 - 12:00", days: "SUNDAY" },
      ],
    },
    sessions: [
      { day: "TUE", slot: "17:30", range: "17:30 - 18:30", category: "KIDS", age: "Ages 6-11", instructor: "MARIEM ZAYANI" },
      { day: "WED", slot: "17:30", range: "17:30 - 18:30", category: "KIDS", age: "Ages 6-11", instructor: "MARIEM ZAYANI" },
      { day: "THU", slot: "17:30", range: "17:30 - 18:30", category: "KIDS", age: "Ages 6-11", instructor: "MAHDI B.MOHAMED" },
      { day: "FRI", slot: "17:30", range: "17:30 - 18:30", category: "KIDS", age: "Ages 6-11", instructor: "MAHDI B.MOHAMED" },

      { day: "MON", slot: "18:30", range: "18:30 - 19:30", category: "RX ADVANCED", age: "Ages 17-20", instructor: "IMED ZAYANI" },
      { day: "TUE", slot: "18:30", range: "18:30 - 19:30", category: "RX ADVANCED", age: "Ages 17-20", instructor: "IMED ZAYANI" },
      { day: "THU", slot: "18:30", range: "18:30 - 19:30", category: "RX ADVANCED", age: "Ages 17-20", instructor: "IMED ZAYANI" },
      { day: "FRI", slot: "18:30", range: "18:30 - 19:30", category: "RX ADVANCED", age: "Ages 17-20", instructor: "IMED ZAYANI" },

      { day: "MON", slot: "19:30", range: "19:30 - 20:30", category: "ADULTS", instructor: "OUSSAMA CHIHI" },
      { day: "TUE", slot: "19:30", range: "19:30 - 20:30", category: "ADULTS", instructor: "HAMZA GHAZOUANI" },
      { day: "TUE", slot: "19:30", range: "19:30 - 20:30", category: "TEENS", age: "Ages 12-16", instructor: "IMED ZAYANI" },
      { day: "WED", slot: "19:30", range: "19:30 - 20:30", category: "ADULTS", instructor: "OUSSAMA CHIHI" },
      { day: "THU", slot: "19:30", range: "19:30 - 20:30", category: "ADULTS", instructor: "HAMZA GHAZOUANI" },
      { day: "THU", slot: "19:30", range: "19:30 - 20:30", category: "TEENS", age: "Ages 12-16", instructor: "IMED ZAYANI" },
      { day: "FRI", slot: "19:30", range: "19:30 - 20:30", category: "ADULTS", instructor: "OUSSAMA CHIHI" },
      { day: "FRI", slot: "19:30", range: "19:00 - 20:00", category: "TEENS", age: "Ages 12-16", instructor: "MAHDI B.MOHAMED" },

      { day: "MON", slot: "20:30", range: "20:30 - 21:30", category: "ADULTS", instructor: "OUSSAMA CHIHI" },
      { day: "TUE", slot: "20:30", range: "20:30 - 21:30", category: "ADULTS", instructor: "HAMZA GHAZOUANI" },
      { day: "WED", slot: "20:30", range: "20:30 - 21:30", category: "ADULTS", instructor: "OUSSAMA CHIHI" },
      { day: "THU", slot: "20:30", range: "20:30 - 21:30", category: "ADULTS", instructor: "HAMZA GHAZOUANI" },
      { day: "FRI", slot: "20:30", range: "20:30 - 21:30", category: "ADULTS", instructor: "OUSSAMA CHIHI" },
    ],
  },
  grappling: {
    days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    closedDays: ["SUN"],
    timeSlots: ["10:00", "11:00", "12:00", "13:00", "13:30", "18:30", "20:00", "20:30"],
    openGym: {
      label: "OPEN GYM ACCESS BY STAFF PERMISSION",
      lines: [
        { hours: "07:00 - 22:00", days: "MONDAY - FRIDAY" },
        { hours: "09:00 - 16:00", days: "SATURDAY" },
        { hours: "09:00 - 12:00", days: "SUNDAY" },
      ],
    },
    sessions: [
      { day: "SAT", slot: "11:00", range: "11:00 - 13:00", category: "BJJ OPEN MAT", rowSpan: 3 },

      { day: "TUE", slot: "12:00", range: "12:30 - 14:00", category: "BJJ COMP CLASS", instructor: "RIDHA" },
      { day: "THU", slot: "12:00", range: "12:30 - 14:00", category: "BJJ COMP CLASS", instructor: "RIDHA" },

      { day: "WED", slot: "18:30", range: "18:00 - 19:00", category: "BJJ NOGI", instructor: "FAROUK" },

      { day: "MON", slot: "18:30", range: "19:00 - 20:30", category: "BJJ NOGI", instructor: "FAROUK" },
      { day: "TUE", slot: "18:30", range: "19:00 - 20:30", category: "BJJ GI", instructor: "RIDHA" },
      { day: "WED", slot: "18:30", range: "19:00 - 20:30", category: "BJJ GI", instructor: "RIDHA" },
      { day: "THU", slot: "18:30", range: "19:00 - 20:30", category: "BJJ GI", instructor: "RIDHA" },
      { day: "FRI", slot: "18:30", range: "19:00 - 20:30", category: "BJJ NOGI", instructor: "FAROUK" },
    ],
  },
  mma: {
    days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    closedDays: ["SAT", "SUN"],
    timeSlots: ["07:30", "09:00", "20:00", "21:00", "22:00"],
    openGym: {
      label: "OPEN GYM ACCESS BY STAFF PERMISSION",
      lines: [
        { hours: "07:00 - 22:00", days: "MONDAY - FRIDAY" },
        { hours: "09:00 - 16:00", days: "SATURDAY" },
        { hours: "09:00 - 12:00", days: "SUNDAY" },
      ],
    },
    sessions: [
      { day: "MON", slot: "07:30", range: "07:30 - 09:00", category: "FIGHT TEAM", note: "INVITE ONLY", instructor: "MOEZ MAATOUG" },
      { day: "TUE", slot: "07:30", range: "07:30 - 09:00", category: "FIGHT TEAM", note: "INVITE ONLY", instructor: "MOEZ MAATOUG" },
      { day: "THU", slot: "07:30", range: "07:30 - 09:00", category: "FIGHT TEAM", note: "INVITE ONLY", instructor: "MOEZ MAATOUG" },
      { day: "FRI", slot: "07:30", range: "07:30 - 09:00", category: "FIGHT TEAM", note: "INVITE ONLY", instructor: "MOEZ MAATOUG" },

      { day: "MON", slot: "20:00", range: "20:00 - 21:00", category: "MMA BEGINNER", instructor: "MOEZ MAATOUG" },
      { day: "TUE", slot: "20:00", range: "20:00 - 21:00", category: "MMA BEGINNER", instructor: "MOEZ MAATOUG" },
      { day: "WED", slot: "20:00", range: "20:00 - 21:00", category: "MMA BEGINNER", instructor: "MOEZ MAATOUG" },
      { day: "THU", slot: "20:00", range: "20:00 - 21:00", category: "MMA BEGINNER", instructor: "MOEZ MAATOUG" },
      { day: "FRI", slot: "20:00", range: "20:00 - 21:00", category: "MMA BEGINNER", instructor: "MOEZ MAATOUG" },
    ],
  },
  wrestling: {
    days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    closedDays: ["SAT", "SUN"],
    timeSlots: ["09:30", "10:00", "11:00", "17:30", "18:00", "18:30", "19:30", "20:00", "21:00", "21:30"],
    openGym: {
      label: "OPEN GYM ACCESS BY STAFF PERMISSION",
      lines: [
        { hours: "07:00 - 22:00", days: "MONDAY - FRIDAY" },
        { hours: "09:00 - 16:00", days: "SATURDAY" },
        { hours: "09:00 - 12:00", days: "SUNDAY" },
      ],
    },
    sessions: [
      { day: "TUE", slot: "18:30", range: "18:30 - 19:30", category: "WRESTLING", note: "ALL LEVELS", instructor: "MAHDI B.MOHAMED" },
      { day: "THU", slot: "18:30", range: "18:30 - 19:30", category: "WRESTLING", note: "ALL LEVELS", instructor: "MAHDI B.MOHAMED" },
      { day: "FRI", slot: "20:00", range: "20:00 - 21:00", category: "WRESTLING", note: "ALL LEVELS", instructor: "MAHDI B.MOHAMED" },
    ],
  },
  weightlifting: {
    days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    closedDays: ["SAT", "SUN"],
    timeSlots: ["09:00", "13:00", "16:00", "20:00", "20:30"],
    openGym: {
      label: "OPEN GYM ACCESS BY STAFF PERMISSION",
      lines: [
        { hours: "07:00 - 22:00", days: "MONDAY - FRIDAY" },
        { hours: "09:00 - 16:00", days: "SATURDAY" },
        { hours: "09:00 - 12:00", days: "SUNDAY" },
      ],
    },
    sessions: [
      { day: "MON", slot: "16:00", range: "16:00 - 20:00", category: "BARBELL CLUB", instructor: "MAHMOUD ZOUARI",rowSpan: 2 },
      { day: "TUE", slot: "16:00", range: "16:00 - 20:00", category: "BARBELL CLUB", instructor: "MAHMOUD ZOUARI",rowSpan: 2 },
      { day: "WED", slot: "16:00", range: "16:00 - 20:00", category: "BARBELL CLUB", instructor: "MAHMOUD ZOUARI" ,rowSpan: 2},
      { day: "THU", slot: "16:00", range: "16:00 - 20:00", category: "BARBELL CLUB", instructor: "MAHMOUD ZOUARI",rowSpan: 2 },
      { day: "FRI", slot: "16:00", range: "16:00 - 20:00", category: "BARBELL CLUB", instructor: "MAHMOUD ZOUARI",rowSpan: 2 },
    ],
  },
};

import coachReda from "../assets/coachs/reda.png";
import coachFarouk from "../assets/coachs/farouk.png";

export const coaches = [
  {
    name: "Reda Hamzaoui",
    specialty: "Grappling / BJJ",
    bio: "Coach BJJ Gi & Comp Class, encadre les compétiteurs vers le haut niveau.",
    photo: coachReda,
  },
  {
    name: "Farouk Noomene",
    specialty: "Grappling / BJJ",
    bio: "Spécialiste NoGi, technique de contrôle et transitions au sol.",
    photo: coachFarouk,
  },
  {
    name: "Mariem Zayani",
    specialty: "Boxing",
    bio: "Coach boxe enfants, pédagogie et fondamentaux dès le plus jeune âge.",
  },
  {
    name: "Imed Zayani",
    specialty: "Boxing",
    bio: "Coach boxe RX Advanced & Teens, prépare les combattants confirmés.",
  },
  {
    name: "Mahdi Ben Mohamed",
    specialty: "Wrestling",
    bio: "Coach wrestling tous niveaux, projections et contrôle au sol.",
  },
  {
    name: "Moez Maatoug",
    specialty: "MMA",
    bio: "Coach MMA Fight Team & Beginner, prépare les combattants à la compétition.",
  },
  {
    name: "Mahmoud Zouari",
    specialty: "Weightlifting",
    bio: "Coach Barbell Club, technique olympique et force explosive.",
  },
];

export const pricing = [
  {
    name: "Une classe",
    price: "150 DT / mois",
    studentLine: "Étudiant : 100 DT",
    features: ["Accès à une discipline de votre choix", "Idéal pour découvrir sans s'engager sur tout"],
    highlight: false,
    ctaLabel: "CHOISIR",
  },
  {
    name: "ILLIMITÉ",
    price: "220 DT / mois",
    studentLine: "Étudiant : 150 DT",
    features: ["Accès all-access à toutes les disciplines", "Tous les créneaux de la semaine"],
    highlight: true,
    ctaLabel: "CHOISIR",
  },
  {
    name: "Coaching privé",
    price: "Sur devis",
    studentLine: "",
    features: ["All-access, suivi individuel", "et préparation aux compétitions"],
    highlight: false,
    ctaLabel: "NOUS CONTACTER",
  },
];

export const galleryItems = [
  { img: galerieBjjIstanbul, label: "COMPÉTITION BJJ — ISTANBUL", colSpan: 2, rowSpan: 2 },
  { img: galerieEquipeBoxe, label: "ÉQUIPE BOXE", colSpan: 2, rowSpan: 2 },
  { img: galerieEquipeGrappling, label: "ÉQUIPE GRAPPLING", colSpan: 2, rowSpan: 1 },
  { img: galerieCoursBjj, label: "COURS BJJ", colSpan: 1, rowSpan: 1 },
  { img: galerieChampionsBoxe, label: "CHAMPIONS DE BOXE", colSpan: 1, rowSpan: 1 },
  { img: galerieEquipeBjj, label: "ÉQUIPE BJJ", colSpan: 1, rowSpan: 1 },
  { img: galerieNogi, label: "ENTRAÎNEMENT NOGI", colSpan: 1, rowSpan: 1 },
  { img: galerieEquipement, label: "SALLE DE MUSCULATION", colSpan: 1, rowSpan: 1 },
  { img: galerieSalle, label: "ESPACE CARDIO & FORCE", colSpan: 1, rowSpan: 1 },
];

export const testimonials = [
  {
    name: "AHMED K.",
    quote: "J'ai commencé en Découverte, je suis maintenant en Compétiteur. L'ambiance ici pousse à progresser.",
  },
  {
    name: "SANA B.",
    quote: "Le seul endroit à Tunis où le grappling est pris aussi sérieusement que la boxe.",
  },
  {
    name: "MEHDI R.",
    quote: "Coachs exigeants, groupe soudé. Unity in Struggle, ce n'est pas qu'un slogan.",
  },
];

export const counterTargets = { members: 450, coaches: 7, disciplines: 5, years: 8 };

export const navLinks = [
  { href: "#disciplines", label: "Disciplines" },
  { href: "#planning", label: "Planning" },
  { href: "#coachs", label: "Coachs" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];
