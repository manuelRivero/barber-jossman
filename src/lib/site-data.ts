export const WHATSAPP_NUMBER = "5493410000000";
export const WHATSAPP_MESSAGE = "Hola! Quiero reservar un turno";

export function waLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
}

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#estudio", label: "El Estudio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#precios", label: "Precios" },
  { href: "#barberos", label: "Barberos" },
  { href: "#ubicacion", label: "Ubicación" },
];

export const services = [
  {
    icon: "Scissors",
    title: "Corte & Fade",
    desc: "Taper, skin fade y corte a tijera. Degradados limpios trabajados a mano y a máquina.",
    from: "$12.000",
  },
  {
    icon: "Droplets",
    title: "Ritual de Barba",
    desc: "Toalla caliente, navaja y perfilado. Aceites y bálsamo para cerrar el ritual.",
    from: "$9.000",
  },
  {
    icon: "Sparkles",
    title: "Esculpido & Textura",
    desc: "Styling con pomadas mate o brillo. Te enseñamos a replicarlo en casa.",
    from: "$5.000",
  },
  {
    icon: "Crown",
    title: "Servicio Imperial",
    desc: "Combo completo: corte, barba y limpieza facial. La experiencia entera del estudio.",
    from: "$22.000",
  },
] as const;

export const gallery = [
  { id: "gal-1", label: "Detalle de degradado", image: "/service-barber-1.png" },
  { id: "gal-2", label: "Navaja clásica", image: "/service-barber-2.png" },
  { id: "gal-3", label: "Brocha de afeitar", image: "/service-barber-3.png" },
  { id: "gal-4", label: "Ambiente del estudio", image: "/service-barber-4.png" },
];

export const prices = [
  {
    name: "Corte Clásico",
    price: "$12.000",
    desc: "Tijera y máquina, lavado y peinado final.",
    featured: false,
  },
  {
    name: "Taper / Mid Fade",
    price: "$14.000",
    desc: "Degradado a medida con terminación a navaja.",
    featured: true,
  },
  {
    name: "Perfilado de Barba",
    price: "$9.000",
    desc: "Toalla caliente, navaja y bálsamo.",
    featured: false,
  },
  {
    name: "Corte + Barba Imperial",
    price: "$22.000",
    desc: "Servicio completo con limpieza facial y trago.",
    featured: true,
  },
  {
    name: "Camuflaje de Canas",
    price: "$10.000",
    desc: "Tono natural que se integra sin efecto teñido.",
    featured: false,
  },
  {
    name: "Diseño / Freestyles",
    price: "$4.000",
    desc: "Líneas y diseños a mano alzada, sobre cualquier corte.",
    featured: false,
  },
];

export const brands = [
  { name: "Reuzel", className: "font-serif font-extrabold tracking-[0.08em]" },
  { name: "Uppercut", className: "font-sans font-bold tracking-[0.02em]" },
  { name: "Wahl", className: "font-serif font-bold tracking-[0.2em]" },
  {
    name: "BabylissPro",
    className: "font-sans font-medium tracking-[0.12em]",
  },
  { name: "Suavecito", className: "font-serif font-medium tracking-[0.06em]" },
];

export const team = [
  {
    id: "team-1",
    name: "Bruno Vidal",
    role: "Especialista en Scissor Cut & Taper",
    ig: "@bruno.cuts",
  },
  {
    id: "team-2",
    name: "Nico Ferrero",
    role: "Skin Fade & Diseños",
    ig: "@nico.fades",
  },
  {
    id: "team-3",
    name: "Joaquín Paz",
    role: "Barba clásica & Navaja",
    ig: "@joaco.razor",
  },
  {
    id: "team-4",
    name: "Dante Rossi",
    role: "Texturas & Crop moderno",
    ig: "@dante.texture",
  },
];

export const promos = [
  {
    id: "promo-1",
    title: "Cuidado Clásico de Barba",
    desc: "Martes y miércoles, el ritual de barba con toalla caliente incluye aceite de regalo.",
    badge: "MAR · MIÉ",
    accent: "#c5a880",
    img: "Barba con toalla caliente",
  },
  {
    id: "promo-2",
    title: "Texturas & Fades de Vanguardia",
    desc: "Crop texturizado, burst fade y mullet moderno. Traé tu referencia y lo diseñamos juntos.",
    badge: "NUEVO",
    accent: "#06b6d4",
    img: "Fade texturizado",
  },
];

export const quotes = [
  {
    text: "Salí con el mejor fade que me hicieron en mi vida, y con la sensación de haber pasado una hora en otro lugar.",
    author: "Martín G.",
    detail: "Cliente desde 2024",
  },
  {
    text: "La toalla caliente, la navaja, el whisky. Es un ritual. No vuelvo a cortarme en otro lado.",
    author: "Lucas R.",
    detail: "Ritual de Barba",
  },
  {
    text: "Te escuchan, te miran la forma de la cabeza y recién ahí agarran la máquina. Se nota la diferencia.",
    author: "Tomás F.",
    detail: "Servicio Imperial",
  },
];

export const stats = [
  { value: "+4.800", label: "Cortes realizados" },
  { value: "4,9", label: "Calificación en Google" },
  { value: "6 años", label: "De oficio" },
];
