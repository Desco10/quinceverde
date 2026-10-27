const EVENTO = {
  quinceanera: "Anny Valentina",
  edad: 15,
 
    personalizacionInvitados: {
    habilitada: true,
    archivo: "invitados.json"
  },

  // ==========================================
  // PANTALLA DE APERTURA
  // ==========================================
  apertura: {

    // Imagen de fondo opcional (true / false)
    fondo: {
      habilitado: true,
      imagen: "assets/images/valentinaport.png",
      posicion: "center center",
      opacidad: 1,       // 0 a 1
      desenfoque: 0,     // en px
      oscurecer: 0.25    // 0 a 1 · capa oscura para leer el texto
    },

    // Sello de cera para abrir la invitación
    sello: {
      color: null,                 // null = usa colores.principal · o un hex: "#8c1c2b"
      emblema: "mono",             // "mono" (moño) o "inicial"
      inicial: null,               // null = primera letra de la quinceañera
      texto: "Abrir invitación",
      listones: true               // true / false
    }

  },

  fecha: "15 de Noviembre de 2026",
hora: "7:00 PM",
fechaEvento: "2026-11-15T19:00:00",

  whatsapp: {
  numero: "573106724550"
},
 
padres: {
  padre: "John Prado",
  madre: "Diana Escobar"
},
 
// ==========================================================
// CAMBIOS PARA config.js  ·  tema "Bayou encantado"
// Reemplaza estos 3 bloques por los que ya tienes.
// ==========================================================


  // ---- 1) COLORES (verde esmeralda, oro y crema) ----

  colores: {
    principal: "#2f7a4d",     // verde esmeralda
    secundario: "#cfe5b4",    // verde claro
    acento: "#c9a24a",        // oro
    fondo: "transparent",
    texto: "#efe8d0"          // crema (el texto es CLARO sobre el bosque)
  },


  // ---- 2) FONDO: imagen + video (true / false) ----

  fondo: {

    // Imagen de fondo (respaldo mientras carga el video)
    habilitado: false,
    imagen: "/assets/images/fondovalen.jpeg",
    opacidad: 0.85,
    posicion: "center center",
    tamaño: "cover",
    fijo: true,
    desenfoque: 0,

    // Video de fondo (true / false)
    video: {
      habilitado: true,                     // true = video | false = solo imagen
      archivo: "assets/video/princesa.mov",   // video del bosque y el castillo
      archivoWebm: "",                      // opcional (más liviano)
      poster: "",                           // opcional: imagen mientras carga
      opacidad: 0.9,                        // 0 a 1
      desenfoque: 0,                        // en px
      ajuste: "cover",                      // "cover" llena | "contain" no recorta
      posicion: "center center",
      velocidad: 1,                         // 0.5 lento · 1 normal
      bucle: false,                         // false = se queda en el último cuadro (castillo)
      capa: "rgba(3, 18, 9, 0.30)",         // velo oscuro para leer el texto ("" = sin velo)
      movil: true,                          // usar video en celulares
      escritorio: true,                     // usar video en computador
      respetarAhorroDatos: true,            // sin video si el usuario ahorra datos
      respetarMovimientoReducido: true,     // sin video si pidió menos movimiento
      cargarAlAbrir: true                   // true = empieza al abrir la invitación
    }

  },


  // ---- 3) EFECTOS (luciérnagas y mariposas) ----

  efectos: {
    petalos: true,            // aquí son LUCIÉRNAGAS
    particulas: true,
    brillo: true,
    vestido: true,
    mariposas: true,

    intensidadPetalos: 22,    // cantidad de luciérnagas
    intensidadMariposas: 6
  },

cristal: {
  opacidad: 0.30,        // antes 0.68 — tarjetas más transparentes
  opacidadFuerte: 0.40,  // antes 0.80 — igual, la del hero/foto principal
  desenfoque: 20,        // un poco más de blur en el cristal mismo, para que siga siendo legible el texto
  saturacion: 140,       // un poco más de "pop" de color al fondo visto a través
  borde: 0.45            // borde un poco más marcado, típico del efecto glass
},

/* rosado 
  colores: {
    principal: "#d98b9b00",
    secundario: "#f7dde200",
    acento: "#c9a55c09",
    fondo: "#fff9fa00",
    texto: "#34282C"
  },
 */
  portada: {
    titulo: "Mis XV Años",
    subtitulo: "Una noche para recordar",
    imagen: "assets/images/valeprincipal.jpeg"
  },

  ubicacion: {
    nombre: "Salón Panorama",
    direccion: "Dirección del evento",
    maps: "https://maps.app.goo.gl/DH9SW5scVVow4JLB7"
  },

  vestimenta: "Formal",

  regalo: {
    titulo: "Tu presencia es mi mejor regalo",
    descripcion: ""
  },

  musica: {
  archivo: "assets/music/evangeline.mp3",
  autoplayAlAbrir: true,
  volumenInicial: 0.25
},

efectos: {
  petalos: true,
  particulas: true,
  brillo: true,
  vestido: true,
  mariposas: true,   

  intensidadPetalos: 10,
  intensidadMariposas: 8  
},

itinerarioHabilitado: true,


itinerario: [
  {
    hora: "",
    titulo: "Ingreso y bienvenida",
    descripcion: "Recepción y bienvenida a los invitados."
  },
  {
    hora: "",
    titulo: "Photo Booth",
    descripcion: "Sesión de fotos y recuerdos con los invitados."
  },
  {
    hora: "",
    titulo: "Apertura",
    descripcion: "Inicio de la celebración."
  },
  {
    hora: "",
    titulo: "Proyección de video",
    descripcion: "Proyección de un video especial."
  },
  {
    hora: "",
    titulo: "Iniciación oficial",
    descripcion: "Inicio oficial del protocolo de los XV años."
  },
  {
    hora: "",
    titulo: "Ingreso de la corte de honor",
    descripcion: "Entrada de la corte de honor."
  },
  {
    hora: "",
    titulo: "Entrada de la quinceañera",
    descripcion: "Entrada especial de la quinceañera."
  },
  {
    hora: "",
    titulo: "Presentación",
    descripcion: "Presentación de la quinceañera ante sus invitados."
  },
  {
    hora: "",
    titulo: "Entrega de la muñeca",
    descripcion: "Momento especial de entrega de la muñeca."
  },
  {
    hora: "",
    titulo: "Protocolo tradicional",
    descripcion: "Ceremonia y momentos tradicionales de los XV años."
  },
  {
    hora: "",
    titulo: "Vals principal",
    descripcion: "Vals principal de la quinceañera."
  },
  {
    hora: "",
    titulo: "Vals con familiares",
    descripcion: "Vals especial junto a familiares."
  },
  {
    hora: "",
    titulo: "Brindis y palabras de agradecimiento",
    descripcion: "Brindis y palabras especiales para los invitados."
  },
  {
    hora: "",
    titulo: "Canto de cumpleaños",
    descripcion: "Celebración y canto de cumpleaños."
  },
  {
    hora: "",
    titulo: "Sesión de fotos y recuerdos",
    descripcion: "Sesión de fotos para conservar momentos especiales."
  },
  {
    hora: "",
    titulo: "Cena",
    descripcion: "Momento para compartir y disfrutar de la cena."
  },
  {
    hora: "",
    titulo: "Baile sorpresa y apertura de pista",
    descripcion: "Baile sorpresa y apertura de la pista de baile."
  },
  {
    hora: "",
    titulo: "Finalización del evento",
    descripcion: "Cierre de esta celebración tan especial."
  }
],



dressCode: {
  habilitado: true,

  estilo: "Formal",

  coloresReservadosHabilitado: true,

  coloresReservados: [
    {
      nombre: "Verde Manzana ",
      color: "#a0e8b4"
    },
    
    
  ],

  mensajeColores:
    "Este color estará reservado especialmente para la quinceañera. Gracias por ayudarnos a mantener este detalle especial de su celebración. ♡"
},
};