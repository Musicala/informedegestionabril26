/**
 * INFORME MENSUAL - MUSICALA / GMMMC
 * Archivo de datos editable
 */

const INFORME_DATA = {
  mes: "Abril",
  anio: "2026",
  periodo: "1 al 30 de abril de 2026",
  institucion: "Fundacion San Antonio - GMMMC",
  proyecto: "Clases extracurriculares de danza y porras",
  areas: ["Porras", "Danzas"],
  responsable: "MUSICALA",
  coordinador: "",
  fase: "Diagnostico pedagogico inicial y caracterizacion de grupos",

  indicadores: {
    sesionesProgramadas: 15,
    sesionesRealizadas: 15,
    cumplimiento: "100%",
    puntualidadDocentes: "100%",
    cambiosDocente: 1,
    nnaAtendidos: 48,
    horasProgramadas: 30,
    horasRealizadas: 30,
    observacionGeneral: "Cumplimiento mensual del 100%. Se mantuvo la continuidad del proceso en todas las sesiones programadas."
  },

  resumenEjecutivo: "Durante abril de 2026 se desarrollaron 15 sesiones extracurriculares en el GMMMC, orientadas al diagnostico inicial de los grupos, la observacion de habilidades corporales y la identificacion de necesidades pedagogicas. El proceso tuvo alta acogida, especialmente en porras. Desde el 21 de abril se abrio un segundo grupo de porras por edades para mejorar el acompanamiento, la seguridad y la atencion diferenciada. Adicionalmente, se implemento una nueva aplicacion para docentes y lideres que fortalece el registro y seguimiento en tiempo real.",

  avances: [
    "Se ejecuto el 100% de las sesiones programadas del mes.",
    "Diagnostico inicial completo en porras y danzas: habilidades, intereses, niveles de atencion y disposicion al aprendizaje.",
    "Apertura de segundo grupo de porras por edades desde el 21 de abril para mejorar la atencion pedagogica.",
    "Alta participacion y buena disposicion de los NNA frente al proceso artistico.",
    "Implementacion de aplicacion de registro para docentes y lideres con trazabilidad en tiempo real."
  ],

  retos: [
    "No se registran retrocesos criticos en el mes; abril se interpreta como linea base diagnostica.",
    "Se requiere seguir fortaleciendo concentracion sostenida, memoria corporal, coordinacion y precision tecnica en ambos procesos.",
    "Se continuara ajustando la intensidad metodologica segun niveles de energia posteriores a jornada escolar."
  ],

  novedades: [
    "Desde el 21 de abril se organizo el grupo de porras en dos subgrupos por edades.",
    "Se activo una nueva aplicacion para consolidar evidencias, observaciones y seguimiento pedagogico.",
    "Se presento una contingencia puntual de docente lider en porras; se cubrio con docente de apoyo y asistente, manteniendo la clase sin cancelacion."
  ],

  procesosPorArea: [
    {
      area: "Porras",
      icono: "🎀",
      color: "#D43B8A",
      descripcion: "Trabajo diagnostico inicial en movilidad, fuerza, flexibilidad, agilidad, posiciones basicas y patrones tecnicos.",
      sesionesProgramadas: 8,
      sesionesRealizadas: 8,
      participantes: 24,
      avances: [
        "Reconocimiento de niveles corporales y tecnicos de entrada.",
        "Ejecucion de ejercicios de movilidad articular, resistencia, rollos, medialunas e invertidas.",
        "Mejor organizacion pedagogica con division por edades para atencion diferenciada."
      ],
      retos: [
        "Continuar fortaleciendo fuerza, flexibilidad y precision postural.",
        "Consolidar bases tecnicas segun edad y nivel del grupo."
      ],
      proyeccion: "Avanzar hacia montajes coreograficos basicos con progresion tecnica diferenciada por subgrupos.",
      cumplimiento: "100%"
    },
    {
      area: "Danzas",
      icono: "💃",
      color: "#6B3FA0",
      descripcion: "Diagnostico de coordinacion, lateralidad, memoria corporal, ritmo y respuesta a secuencias iniciales.",
      sesionesProgramadas: 7,
      sesionesRealizadas: 7,
      participantes: 24,
      avances: [
        "Exploracion de ritmos latinos y secuencias iniciales de movimiento.",
        "Identificacion de fortalezas en respuesta ritmica, participacion y disposicion.",
        "Base diagnostica consolidada para planeacion metodologica de los siguientes meses."
      ],
      retos: [
        "Fortalecer continuidad en secuencias, control corporal y concentracion sostenida.",
        "Profundizar trabajo progresivo de lateralidad y memoria motriz."
      ],
      proyeccion: "Iniciar construccion progresiva de coreografias, manteniendo enfoque tecnico y pedagogico por nivel.",
      cumplimiento: "100%"
    }
  ],

  cumplimientoHorarios: {
    descripcion: "Durante abril, el personal de MUSICALA asistio con puntualidad y normalidad a las sesiones programadas, garantizando la continuidad del proceso extracurricular en el GMMMC.",
    porcentajeAsistenciaDocentes: "100%",
    observaciones: "Indicador de cobertura de clase: 100% (15 de 15 sesiones con docente a cargo). Se presento una contingencia puntual en porras que fue atendida con reemplazo y apoyo en aula, manteniendo la clase activa."
  },

  tablerourl: "https://musicala.github.io/lideresfsahub/",
  tableroTitulo: "Tablero de seguimiento GMMMC 2026",

  evidencias: [
    {
      nombre: "Registro fotografico - Porras",
      descripcion: "Evidencias de sesiones, trabajo de movilidad, resistencia y tecnica basica.",
      url: "https://musicala.github.io/lideresfsahub/",
      estado: "Disponible",
      tipo: "galeria"
    },
    {
      nombre: "Registro fotografico - Danzas",
      descripcion: "Evidencias de secuencias ritmicas, coordinacion y exploracion corporal.",
      url: "https://musicala.github.io/lideresfsahub/",
      estado: "Disponible",
      tipo: "galeria"
    },
    {
      nombre: "Planillas de asistencia",
      descripcion: "Control de asistencia por sesion y por area.",
      url: "https://musicala.github.io/lideresfsahub/",
      estado: "Disponible",
      tipo: "asistencia"
    },
    {
      nombre: "Registro diagnostico inicial",
      descripcion: "Hallazgos pedagogicos iniciales de habilidades, necesidades e intereses.",
      url: "https://musicala.github.io/lideresfsahub/",
      estado: "Disponible",
      tipo: "registro"
    },
    {
      nombre: "Carpeta general del mes",
      descripcion: "Repositorio consolidado de evidencias del periodo de abril.",
      url: "https://musicala.github.io/lideresfsahub/",
      estado: "Disponible",
      tipo: "carpeta"
    }
  ],

  recomendaciones: [
    "Mantener el esquema de grupos por edades en porras para fortalecer seguridad y acompanamiento.",
    "Profundizar en fuerza, flexibilidad, postura, coordinacion y memoria corporal de manera progresiva.",
    "Sostener el uso de la aplicacion de seguimiento para trazabilidad pedagogica y toma de decisiones.",
    "Ajustar cargas e intensidad de clase segun energia posterior a jornada escolar.",
    "Avanzar hacia secuencias y montajes basicos diferenciados por nivel en ambas areas."
  ],

  comentariosFinales: "Abril constituyo una etapa clave de diagnostico inicial para el proceso artistico extracurricular. Se logro una base favorable de participacion, motivacion e interes de los NNA, con cumplimiento total de sesiones y continuidad docente. La informacion levantada permite orientar con mayor precision la planeacion de los siguientes meses y consolidar avances tecnicos en danza y porras.",

  firmas: [
    {
      cargo: "Coordinacion Musicala",
      nombre: "Jimmy Alexander Caballero Moreno",
      fecha: "Bogota, abril de 2026"
    },
    {
      cargo: "Docente - Porras",
      nombre: "Natalia Moreno",
      fecha: "Bogota, abril de 2026"
    },
    {
      cargo: "Docente - Danzas",
      nombre: "",
      fecha: "Bogota, abril de 2026"
    },
    {
      cargo: "Enlace GMMMC / Vo.Bo. Institucion",
      nombre: "",
      fecha: "Bogota, abril de 2026"
    }
  ]
};
