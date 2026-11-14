
const supportedLanguages = ["es", "en", "it"];

const resources = [
  {
    id: "milano-welcome-center",
    category: "Documentación",
    name: "Milano Welcome Center",
    city: "Milano",
    url: "https://www.comune.milano.it/servizi/welfare/milano-welcome-center",
    description: "Servicio gratuito del Ayuntamiento de Milán para orientar a personas migrantes. Información sobre permisos de residencia, ciudadanía, reunificación familiar, protección internacional, formación, empleo y reconocimiento de títulos. Dirección: Via Sammartini 75, Milano. Horario: lunes, martes, jueves y viernes de 09:00 a 17:00; miércoles de 09:00 a 13:00. Teléfono: 02 0202, opción 4.1. Email: MilanoWelcomeCenter@comune.milano.it.",
    translations: {
      es: {
        name: "Milano Welcome Center",
        category: "Documentación",
        description: "Servicio gratuito del Ayuntamiento de Milán para orientar a personas migrantes. Información sobre permisos de residencia, ciudadanía, reunificación familiar, protección internacional, formación, empleo y reconocimiento de títulos. Dirección: Via Sammartini 75, Milano. Horario: lunes, martes, jueves y viernes de 09:00 a 17:00; miércoles de 09:00 a 13:00. Teléfono: 02 0202, opción 4.1. Email: MilanoWelcomeCenter@comune.milano.it."
      },
      en: {
        name: "Milan Welcome Center",
        category: "Documentation",
        description: "Free service provided by the Municipality of Milan to support migrants. Information about residence permits, citizenship, family reunification, international protection, training, employment and recognition of qualifications. Address: Via Sammartini 75, Milan. Opening hours: Monday, Tuesday, Thursday and Friday 09:00–17:00; Wednesday 09:00–13:00. Phone: 02 0202, option 4.1. Email: MilanoWelcomeCenter@comune.milano.it."
      },
      it: {
        name: "Milano Welcome Center",
        category: "Documentazione",
        description: "Servizio gratuito del Comune di Milano dedicato all'orientamento delle persone migranti. Informazioni su permessi di soggiorno, cittadinanza, ricongiungimento familiare, protezione internazionale, formazione, lavoro e riconoscimento dei titoli di studio. Indirizzo: Via Sammartini 75, Milano. Orari: lunedì, martedì, giovedì e venerdì 09:00–17:00; mercoledì 09:00–13:00. Telefono: 02 0202, opzione 4.1. Email: MilanoWelcomeCenter@comune.milano.it."
      }
    }
  },

  {
    id: "caritas-sai",
    category: "Asociaciones",
    name: "Caritas Ambrosiana - SAI",
    city: "Milano",
    url: "https://www.caritasambrosiana.it/aree-di-bisogno/stranieri/sai",
    description: "Servicio de escucha y orientación para personas extranjeras. Ofrece información, orientación legal y ayuda para localizar alojamiento temporal, servicios sociales y orientación laboral. Dirección: Via Galvani 16, 20124 Milano. Teléfono: 02 6738 0261. Email: sai@caritasambrosiana.it.",
    translations: {
      es: {
        name: "Caritas Ambrosiana - SAI",
        category: "Asociaciones",
        description: "Servicio de escucha y orientación para personas extranjeras. Ofrece información, orientación legal y ayuda para localizar alojamiento temporal, servicios sociales y orientación laboral. Dirección: Via Galvani 16, 20124 Milano. Teléfono: 02 6738 0261. Email: sai@caritasambrosiana.it."
      },
      en: {
        name: "Caritas Ambrosiana - SAI",
        category: "Associations",
        description: "Listening and guidance service for foreign nationals. Provides information, legal guidance and assistance in finding temporary accommodation, social services and employment support. Address: Via Galvani 16, 20124 Milan. Phone: 02 6738 0261. Email: sai@caritasambrosiana.it."
      },
      it: {
        name: "Caritas Ambrosiana - SAI",
        category: "Associazioni",
        description: "Servizio di ascolto e orientamento per cittadini stranieri. Offre informazioni, orientamento legale e supporto nella ricerca di alloggi temporanei, servizi sociali e orientamento al lavoro. Indirizzo: Via Galvani 16, 20124 Milano. Telefono: 02 6738 0261. Email: sai@caritasambrosiana.it."
      }
    }
  },

  {
    id: "opera-san-francesco",
    category: "Alimentos",
    name: "Opera San Francesco",
    city: "Milano",
    url: "https://operasanfrancesco.it/servizi/servizio-di-accoglienza/",
    description: "Organización que ofrece acogida y orientación a personas en situación de necesidad. Su servicio de acogida permite conocer los recursos disponibles y las condiciones de acceso a sus servicios básicos. Dirección: Via Kramer 1, 20129 Milano, y Via Antonello da Messina 4, 20146 Milano. Teléfono: 02 7712 2463. Consulta los horarios y condiciones de acceso en su página oficial.",
    translations: {
      es: {
        name: "Opera San Francesco",
        category: "Alimentos",
        description: "Organización que ofrece acogida y orientación a personas en situación de necesidad. Su servicio de acogida permite conocer los recursos disponibles y las condiciones de acceso a sus servicios básicos. Dirección: Via Kramer 1, 20129 Milano, y Via Antonello da Messina 4, 20146 Milano. Teléfono: 02 7712 2463. Consulta los horarios y condiciones de acceso en su página oficial."
      },
      en: {
        name: "Opera San Francesco",
        category: "Food assistance",
        description: "Organization providing reception and guidance for people in need. Its reception service explains the available resources and the conditions for accessing basic support services. Addresses: Via Kramer 1, 20129 Milan, and Via Antonello da Messina 4, 20146 Milan. Phone: 02 7712 2463. Check the official website for opening hours and access requirements."
      },
      it: {
        name: "Opera San Francesco",
        category: "Alimentazione",
        description: "Organizzazione che offre accoglienza e orientamento alle persone in difficoltà. Il servizio di accoglienza permette di conoscere le risorse disponibili e le modalità di accesso ai servizi di prima necessità. Indirizzi: Via Kramer 1, 20129 Milano, e Via Antonello da Messina 4, 20146 Milano. Telefono: 02 7712 2463. Consulta il sito ufficiale per orari e condizioni di accesso."
      }
    }
  },

  {
    id: "centro-sammartini",
    category: "Alojamiento",
    name: "Centro Sammartini",
    city: "Milano",
    url: "https://www.comune.milano.it/servizi/welfare/centro-sammartini",
    description: "Servicio del Ayuntamiento de Milán para adultos en situación de grave dificultad social. Orienta hacia comedores, alojamientos nocturnos, centros de escucha, servicios de ropa y otras necesidades básicas. Dirección: Via Sammartini 120, Milano. Teléfono: 02 8844 7647. Email: pss.ascasc@comune.milano.it.",
    translations: {
      es: {
        name: "Centro Sammartini",
        category: "Alojamiento",
        description: "Servicio del Ayuntamiento de Milán para adultos en situación de grave dificultad social. Orienta hacia comedores, alojamientos nocturnos, centros de escucha, servicios de ropa y otras necesidades básicas. Dirección: Via Sammartini 120, Milano. Teléfono: 02 8844 7647. Email: pss.ascasc@comune.milano.it."
      },
      en: {
        name: "Sammartini Center",
        category: "Accommodation",
        description: "Municipal service for adults experiencing severe social hardship. Provides guidance towards meal services, overnight shelters, listening centers, clothing services and other essential resources. Address: Via Sammartini 120, Milan. Phone: 02 8844 7647. Email: pss.ascasc@comune.milano.it."
      },
      it: {
        name: "Centro Sammartini",
        category: "Alloggio",
        description: "Servizio del Comune di Milano rivolto agli adulti in condizioni di grave marginalità sociale. Offre orientamento verso mense, dormitori, centri di ascolto, servizi di distribuzione di abiti e altri servizi essenziali. Indirizzo: Via Sammartini 120, Milano. Telefono: 02 8844 7647. Email: pss.ascasc@comune.milano.it."
      }
    }
  },

  {
    id: "celav",
    category: "Empleo",
    name: "CELAV - Centro di Mediazione al Lavoro",
    city: "Milano",
    url: "https://www.comune.milano.it/it/servizi/lavoro-e-formazione/centro-mediazione-al-lavoro-celav-",
    description: "Servicio municipal de información y orientación laboral. Ayuda a conocer recorridos de inserción laboral y oportunidades de formación. Dirección: Via Pusiano 22, Milano. Atención presencial: lunes a viernes de 10:00 a 14:00. Teléfono: 02 8846 8147. La atención especializada está sujeta a requisitos. No es una agencia de colocación.",
    translations: {
      es: {
        name: "CELAV - Centro di Mediazione al Lavoro",
        category: "Empleo",
        description: "Servicio municipal de información y orientación laboral. Ayuda a conocer recorridos de inserción laboral y oportunidades de formación. Dirección: Via Pusiano 22, Milano. Atención presencial: lunes a viernes de 10:00 a 14:00. Teléfono: 02 8846 8147. La atención especializada está sujeta a requisitos. No es una agencia de colocación."
      },
      en: {
        name: "CELAV - Employment Mediation Center",
        category: "Employment",
        description: "Municipal information and employment guidance service. Provides information about pathways into employment and training opportunities. Address: Via Pusiano 22, Milan. In-person information desk: Monday to Friday, 10:00–14:00. Phone: 02 8846 8147. Specialized assistance is subject to eligibility requirements. This is not a recruitment agency."
      },
      it: {
        name: "CELAV - Centro di Mediazione al Lavoro",
        category: "Lavoro",
        description: "Servizio comunale di informazione e orientamento al lavoro. Aiuta a conoscere percorsi di inserimento lavorativo e opportunità di formazione. Indirizzo: Via Pusiano 22, Milano. Sportello informativo: dal lunedì al venerdì, 10:00–14:00. Telefono: 02 8846 8147. I servizi di assistenza specialistica sono soggetti a requisiti. Non è un'agenzia per il lavoro."
      }
    }
  }
];

const categories = [
  {
    name: "Documentación",
    icon: "📄",
    description: "Orientación sobre trámites y documentos",
    translations: {
      es: { name: "Documentación", description: "Orientación sobre trámites y documentos" },
      en: { name: "Documentation", description: "Guidance on procedures and documents" },
      it: { name: "Documentazione", description: "Orientamento su pratiche e documenti" }
    }
  },
  {
    name: "Alimentos",
    icon: "🥫",
    description: "Comedores, bancos de alimentos y ayuda",
    translations: {
      es: { name: "Alimentos", description: "Comedores, bancos de alimentos y ayuda" },
      en: { name: "Food assistance", description: "Meal services, food banks and assistance" },
      it: { name: "Alimentazione", description: "Mense, banche alimentari e aiuti" }
    }
  },
  {
    name: "Ropa",
    icon: "👕",
    description: "Ropa y artículos de primera necesidad",
    translations: {
      es: { name: "Ropa", description: "Ropa y artículos de primera necesidad" },
      en: { name: "Clothing", description: "Clothing and essential items" },
      it: { name: "Abbigliamento", description: "Abiti e beni di prima necessità" }
    }
  },
  {
    name: "Alojamiento",
    icon: "🏠",
    description: "Orientación y recursos de vivienda",
    translations: {
      es: { name: "Alojamiento", description: "Orientación y recursos de vivienda" },
      en: { name: "Accommodation", description: "Housing guidance and resources" },
      it: { name: "Alloggio", description: "Orientamento e risorse abitative" }
    }
  },
  {
    name: "Empleo",
    icon: "💼",
    description: "Trabajo, formación y oportunidades",
    translations: {
      es: { name: "Empleo", description: "Trabajo, formación y oportunidades" },
      en: { name: "Employment", description: "Jobs, training and opportunities" },
      it: { name: "Lavoro", description: "Lavoro, formazione e opportunità" }
    }
  },
  {
    name: "Asociaciones",
    icon: "🤝",
    description: "Organizaciones y redes de apoyo",
    translations: {
      es: { name: "Asociaciones", description: "Organizaciones y redes de apoyo" },
      en: { name: "Associations", description: "Organizations and support networks" },
      it: { name: "Associazioni", description: "Organizzazioni e reti di supporto" }
    }
  }
];
