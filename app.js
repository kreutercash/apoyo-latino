
const grid = document.getElementById("categories");
const results = document.getElementById("results");
const search = document.getElementById("search");
const city = document.getElementById("city");
const languageSelect = document.getElementById("language-select");

let selected = "";

const translations = {
  es: {
    findHelp: "Encontrar ayuda",
    eyebrow: "LATINOS AYUDANDO A LATINOS",
    hero1: "No estás solo.",
    hero2: "Estamos para ayudarte.",
    heroCopy: "Un punto de encuentro para encontrar orientación, recursos y oportunidades para comenzar una nueva etapa.",
    explore: "Explorar recursos",
    findSupport: "ENCUENTRA APOYO",
    needToday: "¿Qué necesitas hoy?",
    sectionDescription: "Consulta las categorías disponibles. La información se irá ampliando y verificando con la comunidad.",
    search: "Buscar por palabra o necesidad…",
    allCities: "Todas las ciudades",
    how: "CÓMO FUNCIONA",
    community: "Una comunidad que se apoya",
    step1: "Busca",
    step1Text: "Encuentra información y recursos por categoría y ciudad.",
    step2: "Verifica",
    step2Text: "Comprueba siempre los datos y contacta directamente con cada entidad.",
    step3: "Comparte",
    step3Text: "Ayuda a otras personas enviando información útil para revisar.",
    contribute: "TU APORTE CUENTA",
    knowResource: "¿Conoces un recurso útil?",
    shareText: "Compártelo con Apoyo Latino. Revisaremos la información antes de publicarla.",
    sendInfo: "Enviar información",
    important: "Importante:",
    noticeText: "Apoyo Latino es una iniciativa comunitaria gratuita. No sustituye asesoría legal, migratoria ni profesional. Verifica siempre los requisitos, horarios y disponibilidad directamente con cada organización.",
    moreInfo: "Más información",
    empty: "No encontramos recursos con esos criterios.",
    categories: [
      ["Documentación", "Orientación sobre trámites y documentos"],
      ["Alimentos", "Comedores, bancos de alimentos y ayuda"],
      ["Ropa", "Ropa y artículos de primera necesidad"],
      ["Alojamiento", "Orientación y recursos de vivienda"],
      ["Empleo", "Trabajo, formación y oportunidades"],
      ["Asociaciones", "Organizaciones y redes de apoyo"]
    ]
  },
  it: {
    findHelp: "Trova aiuto",
    eyebrow: "LATINOAMERICANI CHE AIUTANO LATINOAMERICANI",
    hero1: "Non sei solo.",
    hero2: "Siamo qui per aiutarti.",
    heroCopy: "Un punto d'incontro per trovare orientamento, risorse e opportunità per iniziare una nuova fase.",
    explore: "Esplora le risorse",
    findSupport: "TROVA SUPPORTO",
    needToday: "Di cosa hai bisogno oggi?",
    sectionDescription: "Consulta le categorie disponibili. Le informazioni saranno ampliate e verificate insieme alla comunità.",
    search: "Cerca per parola o necessità…",
    allCities: "Tutte le città",
    how: "COME FUNZIONA",
    community: "Una comunità che si sostiene",
    step1: "Cerca",
    step1Text: "Trova informazioni e risorse per categoria e città.",
    step2: "Verifica",
    step2Text: "Controlla sempre i dati e contatta direttamente ogni organizzazione.",
    step3: "Condividi",
    step3Text: "Aiuta altre persone inviando informazioni utili da verificare.",
    contribute: "IL TUO CONTRIBUTO CONTA",
    knowResource: "Conosci una risorsa utile?",
    shareText: "Condividila con Apoyo Latino. Verificheremo le informazioni prima di pubblicarle.",
    sendInfo: "Invia informazioni",
    important: "Importante:",
    noticeText: "Apoyo Latino è un'iniziativa comunitaria gratuita. Non sostituisce la consulenza legale, migratoria o professionale. Verifica sempre requisiti, orari e disponibilità direttamente con ogni organizzazione.",
    moreInfo: "Maggiori informazioni",
    empty: "Non abbiamo trovato risorse con questi criteri.",
    categories: [
      ["Documenti", "Orientamento su pratiche e documenti"],
      ["Alimentazione", "Mense, banchi alimentari e aiuti"],
      ["Abbigliamento", "Vestiti e beni di prima necessità"],
      ["Alloggio", "Orientamento e risorse abitative"],
      ["Lavoro", "Lavoro, formazione e opportunità"],
      ["Associazioni", "Organizzazioni e reti di supporto"]
    ]
  },
  en: {
    findHelp: "Find help",
    eyebrow: "LATINOS HELPING LATINOS",
    hero1: "You are not alone.",
    hero2: "We are here to help.",
    heroCopy: "A meeting point to find guidance, resources and opportunities to start a new chapter.",
    explore: "Explore resources",
    findSupport: "FIND SUPPORT",
    needToday: "What do you need today?",
    sectionDescription: "Browse the available categories. Information will be expanded and verified with the community.",
    search: "Search by keyword or need…",
    allCities: "All cities",
    how: "HOW IT WORKS",
    community: "A community that supports each other",
    step1: "Search",
    step1Text: "Find information and resources by category and city.",
    step2: "Verify",
    step2Text: "Always check the details and contact each organization directly.",
    step3: "Share",
    step3Text: "Help others by sending useful information for review.",
    contribute: "YOUR CONTRIBUTION MATTERS",
    knowResource: "Do you know a useful resource?",
    shareText: "Share it with Apoyo Latino. We will review the information before publishing it.",
    sendInfo: "Send information",
    important: "Important:",
    noticeText: "Apoyo Latino is a free community initiative. It does not replace legal, immigration or professional advice. Always verify requirements, opening hours and availability directly with each organization.",
    moreInfo: "More information",
    empty: "No resources were found matching your criteria.",
    categories: [
      ["Documentation", "Guidance on procedures and documents"],
      ["Food", "Community kitchens, food banks and assistance"],
      ["Clothing", "Clothing and essential items"],
      ["Accommodation", "Housing guidance and resources"],
      ["Employment", "Jobs, training and opportunities"],
      ["Associations", "Organizations and support networks"]
    ]
  }
};

let currentLanguage = localStorage.getItem("apoyoIdioma") || "es";

if (!translations[currentLanguage]) currentLanguage = "es";

function translatePage() {
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (t[key]) element.textContent = t[key];
  });

  if (search) search.placeholder = t.search;
  if (languageSelect) languageSelect.value = currentLanguage;

  renderCategories();
  renderResults();
}

function getCategoryName(category, index) {
  return translations[currentLanguage].categories[index]?.[0] || category.name;
}

function getCategoryDescription(category, index) {
  return translations[currentLanguage].categories[index]?.[1] || category.description;
}

// Desplazamiento automático hacia la información
function goToResults() {
  const target = document.getElementById("results");

  if (!target) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const top = target.getBoundingClientRect().top + window.scrollY - 20;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth"
      });
    });
  });
}

function renderCategories() {
  if (!grid || typeof categories === "undefined") return;

  grid.innerHTML = categories.map((category, index) => `
    <button
      class="category-card ${selected === category.name ? "active" : ""}"
      data-category="${index}"
      type="button">
      <span class="category-icon">${category.icon}</span>
      <strong>${getCategoryName(category, index)}</strong>
      <small>${getCategoryDescription(category, index)}</small>
    </button>
  `).join("");

  grid.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.category);

      selected = selected === categories[index].name
        ? ""
        : categories[index].name;

      renderCategories();
      renderResults();
      goToResults();
    });
  });
}

function renderResults() {
  if (!results || typeof resources === "undefined") return;

  const term = search ? search.value.toLowerCase().trim() : "";
  const selectedCity = city ? city.value : "";

  const filtered = resources.filter(resource => {
    const matchesCategory = !selected || resource.category === selected;
    const matchesCity = !selectedCity || resource.city === selectedCity;

    const translated = resource.translations?.[currentLanguage] || {};
    const name = translated.name || resource.name || "";
    const description = translated.description || resource.description || "";

    const matchesSearch =
      !term ||
      name.toLowerCase().includes(term) ||
      description.toLowerCase().includes(term) ||
      resource.category.toLowerCase().includes(term) ||
      resource.city.toLowerCase().includes(term);

    return matchesCategory && matchesCity && matchesSearch;
  });

  if (filtered.length === 0) {
    results.innerHTML = `<p class="empty-state">${translations[currentLanguage].empty}</p>`;
    return;
  }

  results.innerHTML = filtered.map(resource => {
    const translated = resource.translations?.[currentLanguage] || {};
    const name = translated.name || resource.name;
    const description = translated.description || resource.description;

    return `
      <article class="resource-card">
        <span class="resource-category">${resource.category}</span>
        <h3>${name}</h3>
        <p>${description}</p>
        <small>📍 ${resource.city}</small>
        <a href="${resource.url}" target="_blank" rel="noopener">
          ${translations[currentLanguage].moreInfo}
        </a>
      </article>
    `;
  }).join("");
}

if (languageSelect) {
  languageSelect.addEventListener("change", event => {
    currentLanguage = event.target.value;
    localStorage.setItem("apoyoIdioma", currentLanguage);
    translatePage();
  });
}

if (search) search.addEventListener("input", renderResults);
if (city) city.addEventListener("change", renderResults);

translatePage();
