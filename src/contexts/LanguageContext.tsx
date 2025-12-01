"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translations
const translations = {
  pt: {
    // Navigation
    "nav.why-join": "Por que fazer parte",
    "nav.mission": "A Comunidade",
    "nav.founder": "Fundador",
    "nav.faq": "FAQ",
    "nav.join-community": "Junte-se à Comunidade",

    // Hero Section
    "hero.exclusive": "Comunidade Exclusiva",
    "hero.community": "Comunidade",
    "hero.title": "Terra Ventos",
    "hero.subtitle": "Onde investir é viver",
    "hero.bitupita": "Bitupitá:",
    "hero.refuge": "Seu Refúgio Particular.",
    "hero.best-investment": "Seu Melhor Investimento.",
    "hero.discover-paradise": "Descubra o paraíso intocado do litoral cearense e garanta seu lugar neste destino exclusivo.",
    "hero.description":
      "Junte-se a uma rede exclusiva de investidores, kitesurfistas e amantes do litoral nordestino. Acesso antecipado a oportunidades imobiliárias, curadoria jurídica e um lifestyle conectado ao vento e ao mar.",
    "hero.cta": "Junte-se à Comunidade",
    "hero.discover": "Conheça as Oportunidades",
    "hero.loading": "Carregando Vídeo",
    "hero.loading.subtitle": "Aguarde...",
    "hero.video.error": "Erro ao carregar vídeo",
    "hero.video.error.subtitle": "Verifique sua conexão e tente novamente",

    // Problem Section
    "problem.title": "O Problema",
    "problem.subtitle": "Oportunidades perdidas no litoral cearense",
    "problem.description":
      "O mercado imobiliário no litoral do Ceará está em expansão, mas muitas oportunidades são perdidas por falta de informação, conexões e curadoria especializada.",

    // Solution Section
    "solution.title": "A Solução",
    "solution.subtitle": "Terra Ventos: Sua ponte para o litoral nordestino",
    "solution.description":
      "Uma comunidade exclusiva que conecta investidores qualificados a oportunidades imobiliárias curadas no litoral cearense, com foco em lifestyle e sustentabilidade.",
    "solution.connections.title": "Conexões",
    "solution.connections.description":
      "Na Terra Ventos, o litoral do Ceará se torna um ponto de encontro sem fronteiras. Aqui, você se conecta com pessoas que buscam unir oportunidades com o lifestyle do litoral, criando relações autênticas que vão além dos negócios.",
    "solution.see.how": "Entre agora na comunidade",

    // Benefits Section
    "benefits.title": "O Equilíbrio Perfeito",
    "benefits.subtitle": "Por que fazer parte da Terra Ventos",

    // Stats Section
    "stats.investors": "Investidores Ativos",
    "stats.properties": "Propriedades Curadas",
    "stats.community": "Anos de Experiência",
    "stats.volume": "Volume Investido",
    "stats.value": "R$ 50M+",

    // FAQ Section
    "faq.title": "Dúvidas Frequentes",
    "faq.subtitle": "Tire suas dúvidas sobre a Terra Ventos",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Pronto para fazer parte da comunidade?",

    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.company": "Terra Ventos",
    "footer.description":
      "Comunidade exclusiva de investidores e amantes do litoral nordestino.",
    "footer.about": "Sobre",
    "footer.opportunities": "Oportunidades",
    "footer.lifestyle": "Lifestyle",
    "footer.privacy": "Política de Privacidade",
    "footer.accessibility": "Acessibilidade",
    "footer.address.preá":
      "Rua Antônio Chagas, nº 857 - Preá, Cruz - CE, 62595-000",
    "footer.address.fortaleza":
      "Rua Monsenhor Bruno, nº 1153, sala 608, Aldeota, Fortaleza - CE, 60115-191",
    "whatsapp.talk": "Fale com nossa equipe",

    // Signup Modal
    "signup.title": "Comunidade",
    "signup.title2": "Terra Ventos",
    "signup.subtitle":
      "Junte-se a uma rede exclusiva de investidores e atletas. E tenha acesso antecipado a oportunidades imobiliárias, curadoria jurídica e um lifestyle conectado ao vento e ao mar.",
    "signup.subtitle.line1":
      "Junte-se a uma rede exclusiva de investidores e atletas",
    "signup.subtitle.line2":
      "E tenha acesso antecipado a oportunidades imobiliárias",
    "signup.subtitle.line3":
      "curadoria jurídica e um lifestyle conectado ao vento e ao mar",
    "signup.name": "Nome completo",
    "signup.email": "E-mail",
    "signup.phone": "Telefone/WhatsApp",
    "signup.budget": "Faixa de investimento",
    "signup.interest": "Interesse principal",
    "signup.kitesurf": "Kitesurf",
    "signup.investment": "Investimento",
    "signup.lifestyle": "Lifestyle",
    "signup.other": "Outro",
    "signup.message": "Conte-nos sobre seus interesses",
    "signup.submit": "Enviar Cadastro",
    "signup.success": "Cadastro realizado com sucesso!",
    "signup.error": "Erro ao enviar cadastro. Tente novamente.",
    "signup.country": "País/Estado",
    "signup.accept":
      "Aceito receber comunicações da Terra Ventos sobre oportunidades",
    "signup.privacy": "Seus dados estão protegidos, conforme nossa",
    "signup.privacy.link": "Política de Privacidade",
    "signup.submitting": "Enviando...",
    "signup.join": "Quero fazer parte",
    "signup.select": "Selecione",
    "signup.option.investment": "Investimento",
    "signup.option.lifestyle": "Lifestyle",
    "signup.option.kitesurf": "Kitesurf",
    "signup.option.tourism": "Turismo",
    "signup.option.business": "Negócios",
    "signup.range.up100k": "Até R$ 100.000",
    "signup.range.100k500k": "R$ 100.000 - R$ 500.000",
    "signup.range.500k1m": "R$ 500.000 - R$ 1.000.000",
    "signup.range.1m5m": "R$ 1.000.000 - R$ 5.000.000",
    "signup.range.above5m": "Acima de R$ 5.000.000",

    // FAQ Section
    "faq.question1": "Como funciona a comunidade Terra Ventos?",
    "faq.answer1":
      "A Terra Ventos é uma comunidade exclusiva que conecta investidores qualificados a oportunidades imobiliárias curadas no litoral cearense, com foco em lifestyle e sustentabilidade.",
    "faq.question2": "Quais são os benefícios de fazer parte?",
    "faq.answer2":
      "Acesso antecipado a oportunidades, curadoria jurídica especializada, network exclusivo e lifestyle conectado ao vento e ao mar.",
    "faq.question3": "Qual o valor mínimo para investir?",
    "faq.answer3":
      "Trabalhamos com diferentes faixas de investimento. Entre em contato para conhecer as oportunidades disponíveis.",
    "faq.question4": "Como posso participar de eventos?",
    "faq.answer4":
      "Membros da comunidade recebem convites exclusivos para eventos, workshops e encontros relacionados ao lifestyle e investimentos.",

    // Benefits Section
    "benefits.exclusive": "Acesso Exclusivo",
    "benefits.exclusive.free": "100% Gratuito",
    "benefits.exclusive.area": "Área total de pura exclusividade no lufar disso",
    "benefits.exclusive.desc":
      "Receba as oportunidades do mercado de forma antecipada",
    "benefits.constructive.area": "Área construtiva para seu projeto",
    "benefits.green.area": "Área verde preservada",
    "benefits.network": "Networking Global",
    "benefits.network.desc":
      "Se conecte com investidores e atletas do Brasil e do mundo",
    "benefits.legal": "Segurança Jurídica",
    "benefits.legal.desc":
      "Terrenos e imóveis 100% regularizados e matriculas verificadas para investimento",
    "benefits.events": "Eventos e Experiências",
    "benefits.events.desc":
      "Participe de eventos onlines, presenciais e ativações da comunidade",
    "benefits.concierge": "Atendimento Consultivo",
    "benefits.concierge.desc": "Concierge de investimento e suporte bilingue.",

    // Technical Specifications
    "technical.ideal-space": "O espaço ideal para um projeto de vida, uma pousada de charme ou simplesmente para ver seu patrimônio crescer com frente mar livre.",
    "technical.specs": "Ficha Técnica",
    "technical.total-area": "Área Total",
    "technical.total-area.note": "(incluso marinha)",
    "technical.total-area.value": "4.300 m²",
    "technical.beach-front": "Frente Mar",
    "technical.beach-front.note": "(Pé na areia)",
    "technical.beach-front.value": "14,32 metros",
    "technical.street-front": "Frente Rua",
    "technical.street-front.value": "10,00 metros",
    "technical.depth": "Profundidade Aproximada",
    "technical.depth.value": "O terreno tem mais de 146 metros de extensão em suas laterais",

    // Investment Options
    "investment.title": "Opções Flexíveis de Investimento",
    "investment.lot-250": "Lote 250m²",
    "investment.lot-500": "Lote 500m²",
    "investment.label": "Investimento",
    "investment.lot-250.desc": "Perfeito para um bangalô ou chalé de praia.",
    "investment.lot-500.desc": "Ideal para casas maiores com área de lazer privativa.",
    "investment.site-plan": "01 PLANTA DE SITUAÇÃO - Escala 1:500",

    // Next Frontier
    "frontier.title": "A Próxima Fronteira de Valorização",
    "frontier.text1": "Bitupitá não é apenas um destino paradisíaco intocado; é a próxima fronteira de valorização no litoral do Ceará, a 10 minutos de Curimãs.",
    "frontier.text2": "Estamos oferecendo a chance de adquirir um terreno \"pé na areia\" em uma localização privilegiada, antes que os preços sigam a tendência de alta da região vizinha.",

    // Analyzing Opportunity
    "analyzing.title": "Analisando a oportunidade",
    "analyzing.item1": "Acesso direto a praia, e entrada segura pela rua",
    "analyzing.item2": "Documentação revisada",
    "analyzing.item3": "6 meses de vento constante para Kitesurf/Foil",
    "analyzing.item4": "Compra direta com o proprietário",
    "analyzing.item5": "Valor m² abaixo do mercado",
    "analyzing.item6": "Próximo a Curimãs",
    "analyzing.item7": "Alta valorização da região",
    "analyzing.item8": "Apenas 8 terrenos, projeto exclusivo",
    "analyzing.highlight": "A estimativa conservadora é de uma valorização muito positiva de pelo menos 20% anual, acompanhando o desenvolvimento turístico local, impulsionado por esportes como o Kitesurfe.",

    // Know Bitupitá
    "know.title": "Conheça Bitupitá",
    "know.location": "Localização",
    "know.location.link": "Ver no Google Maps",
    "know.location.desc": "Acesse o mapa e descubra a localização privilegiada deste paraíso.",
    "know.video": "Vídeo do Local",
    "know.video.link": "Assista no Instagram",
    "know.video.desc": "Veja imagens reais e apaixone-se por Bitupitá.",

    // Paradise Awaits
    "paradise.title": "Seu paraíso espera por você!",
    "paradise.cta": "Garanta seu lugar ao sol (e ao vento): Não espere a valorização acontecer para decidir. Antecipe-se!",
    "paradise.contact": "Fale conosco por Tel/Whatsapp ou Envie um email",
    "paradise.offering": "Oferecimento: Terra Ventos",
    "paradise.ceo": "CEO, Terra Ventos",

    // Language Selector
    "language.portuguese": "Português",
    "language.english": "We speak English",
    "language.spanish": "Hablamos Español",

    // Stats Section
    "stats.experience": "Anos de Experiência",
    "stats.properties.sold": "Propriedades Vendidas",
    "stats.satisfaction": "Taxa de Satisfação",

    // Founder Section
    "founder.name": "Bernardo Carvalho Wertheim",
    "founder.title": "Fundador e CEO",
    "founder.heading": "Idealizador do Projeto",
    "founder.description":
      "Empreendedor com carreira internacional (ex-Bloomberg e Accenture), fundou a Terra Ventos com a missão de remodelar o mercado imobiliário litorâneo unindo impacto social, lifestyle e segurança.",
    "founder.experience.title": "Nossa experiência",
    "founder.experience.description":
      "15+ anos em scouting e desenvolvimento no litoral cearense, com parcerias locais e curadoria rigorosa.",

    // Language Selector
    "language.pt": "Português",
    "language.en": "English",
    "language.es": "Español",
  },
  en: {
    // Navigation
    "nav.why-join": "Why Join",
    "nav.mission": "The Community",
    "nav.founder": "Founder",
    "nav.faq": "FAQ",
    "nav.join-community": "Join the Community",

    // Hero Section
    "hero.exclusive": "Exclusive Community",
    "hero.community": "Community",
    "hero.title": "Terra Ventos",
    "hero.subtitle": "Where investing is living",
    "hero.bitupita": "Bitupitá:",
    "hero.refuge": "Your Private Refuge.",
    "hero.best-investment": "Your Best Investment.",
    "hero.discover-paradise": "Discover the untouched paradise of the Ceará coast and secure your place in this exclusive destination.",
    "hero.description":
      "Join an exclusive network of investors, kitesurfers and lovers of the northeastern coast. Early access to real estate opportunities, legal curation and lifestyle connected to wind and sea.",
    "hero.cta": "Join the Community",
    "hero.discover": "Discover Opportunities",
    "hero.loading": "Loading Video",
    "hero.loading.subtitle": "Please wait...",
    "hero.video.error": "Error loading video",
    "hero.video.error.subtitle": "Check your connection and try again",

    // Problem Section
    "problem.title": "The Problem",
    "problem.subtitle": "Lost opportunities on the Ceará coast",
    "problem.description":
      "The real estate market on the Ceará coast is expanding, but many opportunities are lost due to lack of information, connections and specialized curation.",

    // Solution Section
    "solution.title": "The Solution",
    "solution.subtitle": "Terra Ventos: Your bridge to the northeastern coast",
    "solution.description":
      "An exclusive community that connects qualified investors to curated real estate opportunities on the Ceará coast, focusing on lifestyle and sustainability.",
    "solution.connections.title": "Connections",
    "solution.connections.description":
      "In Terra Ventos, the coast of Ceará becomes a borderless meeting point. Here, you connect with people who seek to unite opportunities with coastal lifestyle, creating authentic relationships that go beyond business.",
    "solution.see.how": "Join the community now",

    // Benefits Section
    "benefits.title": "The Perfect Balance",
    "benefits.subtitle": "Why join Terra Ventos",

    // Stats Section
    "stats.investors": "Active Investors",
    "stats.properties": "Curated Properties",
    "stats.community": "Years of Experience",
    "stats.volume": "Volume Invested",
    "stats.value": "$9M+",

    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Get your questions answered about Terra Ventos",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to join the community?",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.company": "Terra Ventos",
    "footer.description":
      "Exclusive community of investors and lovers of the northeastern coast.",
    "footer.about": "About",
    "footer.opportunities": "Opportunities",
    "footer.lifestyle": "Lifestyle",
    "footer.privacy": "Privacy Policy",
    "footer.accessibility": "Accessibility",
    "footer.address.preá":
      "Rua Antônio Chagas, nº 857 - Preá, Cruz - CE, 62595-000",
    "footer.address.fortaleza":
      "Rua Monsenhor Bruno, nº 1153, sala 608, Aldeota, Fortaleza - CE, 60115-191",
    "whatsapp.talk": "Talk to our team",

    // Signup Modal
    "signup.title": "Community",
    "signup.title2": "Terra Ventos",
    "signup.subtitle":
      "Join an exclusive network of investors, athletes and lovers of the northeastern coast. And get early access to real estate opportunities, legal curation and a lifestyle connected to wind and sea.",
    "signup.subtitle.line1":
      "Join an exclusive network of investors and athletes",
    "signup.subtitle.line2":
      "And get early access to real estate opportunities",
    "signup.subtitle.line3":
      "legal curation and a lifestyle connected to wind and sea",
    "signup.name": "Full name",
    "signup.email": "Email",
    "signup.phone": "Phone/WhatsApp",
    "signup.budget": "Investment range",
    "signup.interest": "Main interest",
    "signup.kitesurf": "Kitesurfing",
    "signup.investment": "Investment",
    "signup.lifestyle": "Lifestyle",
    "signup.other": "Other",
    "signup.message": "Tell us about your interests",
    "signup.submit": "Submit Registration",
    "signup.success": "Registration successful!",
    "signup.error": "Error submitting registration. Please try again.",
    "signup.country": "Country/State",
    "signup.accept":
      "I accept receiving communications from Terra Ventos about opportunities",
    "signup.privacy": "Your data is protected, according to our",
    "signup.privacy.link": "Privacy Policy",
    "signup.submitting": "Submitting...",
    "signup.join": "I want to join",
    "signup.select": "Select",
    "signup.option.investment": "Investment",
    "signup.option.lifestyle": "Lifestyle",
    "signup.option.kitesurf": "Kitesurfing",
    "signup.option.tourism": "Tourism",
    "signup.option.business": "Business",
    "signup.range.up100k": "Up to $18,000",
    "signup.range.100k500k": "$18,000 - $90,000",
    "signup.range.500k1m": "$90,000 - $180,000",
    "signup.range.1m5m": "$180,000 - $900,000",
    "signup.range.above5m": "Above $900,000",

    // FAQ Section
    "faq.question1": "How does the Terra Ventos community work?",
    "faq.answer1":
      "Terra Ventos is an exclusive community that connects qualified investors to curated real estate opportunities on the Ceará coast, focusing on lifestyle and sustainability.",
    "faq.question2": "What are the benefits of joining?",
    "faq.answer2":
      "Early access to opportunities, specialized legal curation, exclusive network and lifestyle connected to wind and sea.",
    "faq.question3": "What is the minimum investment amount?",
    "faq.answer3":
      "We work with different investment ranges. Contact us to learn about available opportunities.",
    "faq.question4": "How can I participate in events?",
    "faq.answer4":
      "Community members receive exclusive invitations to events, workshops and meetings related to lifestyle and investments.",

    // Benefits Section
    "benefits.exclusive": "Exclusive Access",
    "benefits.exclusive.free": "100% Free",
    "benefits.exclusive.area": "Total area of pure exclusivity",
    "benefits.exclusive.desc": "Receive market opportunities in advance",
    "benefits.constructive.area": "Constructive area for your project",
    "benefits.green.area": "Preserved green area",
    "benefits.network": "Global Networking",
    "benefits.network.desc":
      "Connect with investors and athletes from Brazil and around the world",
    "benefits.legal": "Legal Security",
    "benefits.legal.desc":
      "100% regularized lands and properties with verified registrations for investment",
    "benefits.events": "Events and Experiences",
    "benefits.events.desc":
      "Participate in online, in-person events and community activations",
    "benefits.concierge": "Consultive Service",
    "benefits.concierge.desc": "Investment concierge and bilingual support.",

    // Technical Specifications
    "technical.ideal-space": "The ideal space for a life project, a charming inn, or simply to watch your assets grow with free beachfront.",
    "technical.specs": "Technical Specifications",
    "technical.total-area": "Total Area",
    "technical.total-area.note": "(including marine)",
    "technical.total-area.value": "4,300 m²",
    "technical.beach-front": "Beach Front",
    "technical.beach-front.note": "(Feet in the sand)",
    "technical.beach-front.value": "14.32 meters",
    "technical.street-front": "Street Front",
    "technical.street-front.value": "10.00 meters",
    "technical.depth": "Approximate Depth",
    "technical.depth.value": "The land has more than 146 meters of extension on its sides",

    // Investment Options
    "investment.title": "Flexible Investment Options",
    "investment.lot-250": "Lot 250m²",
    "investment.lot-500": "Lot 500m²",
    "investment.label": "Investment",
    "investment.lot-250.desc": "Perfect for a bungalow or beach chalet.",
    "investment.lot-500.desc": "Ideal for larger houses with private leisure area.",
    "investment.site-plan": "01 SITE PLAN - Scale 1:500",

    // Next Frontier
    "frontier.title": "The Next Frontier of Appreciation",
    "frontier.text1": "Bitupitá is not just an untouched paradise destination; it is the next frontier of appreciation on the Ceará coast, 10 minutes from Curimãs.",
    "frontier.text2": "We are offering the chance to acquire a \"feet in the sand\" land in a privileged location, before prices follow the upward trend of the neighboring region.",

    // Analyzing Opportunity
    "analyzing.title": "Analyzing the opportunity",
    "analyzing.item1": "Direct access to the beach, and safe entrance from the street",
    "analyzing.item2": "Reviewed documentation",
    "analyzing.item3": "6 months of constant wind for Kitesurf/Foil",
    "analyzing.item4": "Direct purchase from the owner",
    "analyzing.item5": "Price per m² below market",
    "analyzing.item6": "Close to Curimãs",
    "analyzing.item7": "High appreciation of the region",
    "analyzing.item8": "Only 8 lots, exclusive project",
    "analyzing.highlight": "The conservative estimate is a very positive appreciation of at least 20% annually, following local tourist development, driven by sports such as Kitesurfing.",

    // Know Bitupitá
    "know.title": "Get to Know Bitupitá",
    "know.location": "Location",
    "know.location.link": "View on Google Maps",
    "know.location.desc": "Access the map and discover the privileged location of this paradise.",
    "know.video": "Location Video",
    "know.video.link": "Watch on Instagram",
    "know.video.desc": "See real images and fall in love with Bitupitá.",

    // Paradise Awaits
    "paradise.title": "Your paradise awaits you!",
    "paradise.cta": "Secure your place in the sun (and wind): Don't wait for appreciation to happen to decide. Get ahead!",
    "paradise.contact": "Contact us by Tel/WhatsApp or Send an email",
    "paradise.offering": "Offered by: Terra Ventos",
    "paradise.ceo": "CEO, Terra Ventos",

    // Language Selector
    "language.portuguese": "Português",
    "language.english": "We speak English",
    "language.spanish": "Hablamos Español",

    // Stats Section
    "stats.experience": "Years of Experience",
    "stats.properties.sold": "Properties Sold",
    "stats.satisfaction": "Satisfaction Rate",

    // Founder Section
    "founder.name": "Bernardo Carvalho Wertheim",
    "founder.title": "Founder and CEO",
    "founder.heading": "Project Idealizer",
    "founder.description":
      "Entrepreneur with international career (ex-Bloomberg and Accenture), founded Terra Ventos with the mission to reshape the coastal real estate market by combining social impact, lifestyle and security.",
    "founder.experience.title": "Our experience",
    "founder.experience.description":
      "15+ years in scouting and development on the Ceará coast, with local partnerships and rigorous curation.",

    // Language Selector
    "language.pt": "Português",
    "language.en": "English",
    "language.es": "Español",
  },
  es: {
    // Navigation
    "nav.why-join": "Por qué unirse",
    "nav.mission": "La Comunidad",
    "nav.founder": "Fundador",
    "nav.faq": "FAQ",
    "nav.join-community": "Únete a la Comunidad",

    // Hero Section
    "hero.exclusive": "Comunidad Exclusiva",
    "hero.community": "Comunidad",
    "hero.title": "Terra Ventos",
    "hero.subtitle": "Donde invertir es vivir",
    "hero.bitupita": "Bitupitá:",
    "hero.refuge": "Tu Refugio Privado.",
    "hero.best-investment": "Tu Mejor Inversión.",
    "hero.discover-paradise": "Descubre el paraíso intacto de la costa de Ceará y asegura tu lugar en este destino exclusivo.",
    "hero.description":
      "Únete a una red exclusiva de inversionistas, kitesurfistas y amantes de la costa noreste. Acceso anticipado a oportunidades inmobiliarias, curaduría legal y estilo de vida conectado al viento y al mar.",
    "hero.cta": "Únete a la Comunidad",
    "hero.discover": "Descubre las Oportunidades",
    "hero.loading": "Cargando Video",
    "hero.loading.subtitle": "Espera...",
    "hero.video.error": "Error al cargar video",
    "hero.video.error.subtitle": "Verifica tu conexión e intenta de nuevo",

    // Problem Section
    "problem.title": "El Problema",
    "problem.subtitle": "Oportunidades perdidas en la costa de Ceará",
    "problem.description":
      "El mercado inmobiliario en la costa de Ceará está en expansión, pero muchas oportunidades se pierden por falta de información, conexiones y curaduría especializada.",

    // Solution Section
    "solution.title": "La Solución",
    "solution.subtitle": "Terra Ventos: Tu puente hacia la costa noreste",
    "solution.description":
      "Una comunidad exclusiva que conecta inversionistas calificados con oportunidades inmobiliarias curadas en la costa de Ceará, enfocándose en estilo de vida y sostenibilidad.",
    "solution.connections.title": "Conexiones",
    "solution.connections.description":
      "En Terra Ventos, la costa de Ceará se convierte en un punto de encuentro sin fronteras. Aquí, te conectas con personas que buscan unir oportunidades con el estilo de vida costero, creando relaciones auténticas que van más allá de los negocios.",
    "solution.see.how": "Únete a la comunidad ahora",

    // Benefits Section
    "benefits.title": "El Equilibrio Perfecto",
    "benefits.subtitle": "Por qué unirse a Terra Ventos",

    // Stats Section
    "stats.investors": "Inversionistas Activos",
    "stats.properties": "Propiedades Curadas",
    "stats.community": "Años de Experiencia",
    "stats.volume": "Volumen Invertido",
    "stats.value": "$9M+",

    // FAQ Section
    "faq.title": "Dudas Frecuentes",
    "faq.subtitle": "Resuelve tus dudas sobre Terra Ventos",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "¿Listo para unirte a la comunidad?",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.company": "Terra Ventos",
    "footer.description":
      "Comunidad exclusiva de inversionistas y amantes de la costa noreste.",
    "footer.about": "Acerca de",
    "footer.opportunities": "Oportunidades",
    "footer.lifestyle": "Estilo de vida",
    "footer.privacy": "Política de Privacidad",
    "footer.accessibility": "Accesibilidad",
    "footer.address.preá":
      "Rua Antônio Chagas, nº 857 - Preá, Cruz - CE, 62595-000",
    "footer.address.fortaleza":
      "Rua Monsenhor Bruno, nº 1153, sala 608, Aldeota, Fortaleza - CE, 60115-191",
    "whatsapp.talk": "Habla con nuestro equipo",

    // Signup Modal
    "signup.title": "Comunidad",
    "signup.title2": "Terra Ventos",
    "signup.subtitle":
      "Únete a una red exclusiva de inversionistas, atletas y amantes de la costa noreste. Y ten acceso anticipado a oportunidades inmobiliarias, curaduría jurídica y un estilo de vida conectado al viento y al mar.",
    "signup.subtitle.line1":
      "Únete a una red exclusiva de inversionistas y atletas",
    "signup.subtitle.line2":
      "Y ten acceso anticipado a oportunidades inmobiliarias",
    "signup.subtitle.line3":
      "curaduría jurídica y un estilo de vida conectado al viento y al mar",
    "signup.name": "Nombre completo",
    "signup.email": "Correo electrónico",
    "signup.phone": "Teléfono/WhatsApp",
    "signup.budget": "Rango de inversión",
    "signup.interest": "Interés principal",
    "signup.kitesurf": "Kitesurf",
    "signup.investment": "Inversión",
    "signup.lifestyle": "Estilo de vida",
    "signup.other": "Otro",
    "signup.message": "Cuéntanos sobre tus intereses",
    "signup.submit": "Enviar Registro",
    "signup.success": "¡Registro exitoso!",
    "signup.error": "Error al enviar el registro. Inténtalo de nuevo.",
    "signup.country": "País/Estado",
    "signup.accept":
      "Acepto recibir comunicaciones de Terra Ventos sobre oportunidades",
    "signup.privacy": "Tus datos están protegidos, según nuestra",
    "signup.privacy.link": "Política de Privacidad",
    "signup.submitting": "Enviando...",
    "signup.join": "Quiero formar parte",
    "signup.select": "Selecciona",
    "signup.option.investment": "Inversión",
    "signup.option.lifestyle": "Estilo de vida",
    "signup.option.kitesurf": "Kitesurf",
    "signup.option.tourism": "Turismo",
    "signup.option.business": "Negocios",
    "signup.range.up100k": "Hasta $18,000",
    "signup.range.100k500k": "$18,000 - $90,000",
    "signup.range.500k1m": "$90,000 - $180,000",
    "signup.range.1m5m": "$180,000 - $900,000",
    "signup.range.above5m": "Más de $900,000",

    // FAQ Section
    "faq.question1": "¿Cómo funciona la comunidad Terra Ventos?",
    "faq.answer1":
      "Terra Ventos es una comunidad exclusiva que conecta inversionistas calificados con oportunidades inmobiliarias curadas en la costa de Ceará, enfocándose en estilo de vida y sostenibilidad.",
    "faq.question2": "¿Cuáles son los beneficios de unirse?",
    "faq.answer2":
      "Acceso anticipado a oportunidades, curaduría legal especializada, red exclusiva y estilo de vida conectado al viento y al mar.",
    "faq.question3": "¿Cuál es el monto mínimo para invertir?",
    "faq.answer3":
      "Trabajamos con diferentes rangos de inversión. Contáctanos para conocer las oportunidades disponibles.",
    "faq.question4": "¿Cómo puedo participar en eventos?",
    "faq.answer4":
      "Los miembros de la comunidad reciben invitaciones exclusivas a eventos, talleres y reuniones relacionados con el estilo de vida y las inversiones.",

    // Benefits Section
    "benefits.exclusive": "Acceso Exclusivo",
    "benefits.exclusive.free": "100% Gratuito",
    "benefits.exclusive.area": "Área total de pura exclusividad",
    "benefits.exclusive.desc":
      "Recibe las oportunidades del mercado de forma anticipada",
    "benefits.constructive.area": "Área constructiva para tu proyecto",
    "benefits.green.area": "Área verde preservada",
    "benefits.network": "Networking Global",
    "benefits.network.desc":
      "Conéctate con inversionistas y atletas de Brasil y del mundo",
    "benefits.legal": "Seguridad Jurídica",
    "benefits.legal.desc":
      "Terrenos e inmuebles 100% regularizados y matrículas verificadas para inversión",
    "benefits.events": "Eventos y Experiencias",
    "benefits.events.desc":
      "Participa en eventos en línea, presenciales y activaciones de la comunidad",
    "benefits.concierge": "Servicio Consultivo",
    "benefits.concierge.desc": "Concierge de inversión y soporte bilingüe.",

    // Technical Specifications
    "technical.ideal-space": "El espacio ideal para un proyecto de vida, una posada con encanto o simplemente para ver crecer su patrimonio con frente al mar libre.",
    "technical.specs": "Ficha Técnica",
    "technical.total-area": "Área Total",
    "technical.total-area.note": "(incluido marino)",
    "technical.total-area.value": "4.300 m²",
    "technical.beach-front": "Frente al Mar",
    "technical.beach-front.note": "(Pies en la arena)",
    "technical.beach-front.value": "14,32 metros",
    "technical.street-front": "Frente a la Calle",
    "technical.street-front.value": "10,00 metros",
    "technical.depth": "Profundidad Aproximada",
    "technical.depth.value": "El terreno tiene más de 146 metros de extensión en sus laterales",

    // Investment Options
    "investment.title": "Opciones Flexibles de Inversión",
    "investment.lot-250": "Lote 250m²",
    "investment.lot-500": "Lote 500m²",
    "investment.label": "Inversión",
    "investment.lot-250.desc": "Perfecto para un bungalow o chalet de playa.",
    "investment.lot-500.desc": "Ideal para casas más grandes con área de ocio privada.",
    "investment.site-plan": "01 PLANO DE SITUACIÓN - Escala 1:500",

    // Next Frontier
    "frontier.title": "La Próxima Frontera de Valorización",
    "frontier.text1": "Bitupitá no es solo un destino paradisíaco intacto; es la próxima frontera de valorización en la costa de Ceará, a 10 minutos de Curimãs.",
    "frontier.text2": "Estamos ofreciendo la oportunidad de adquirir un terreno \"pies en la arena\" en una ubicación privilegiada, antes de que los precios sigan la tendencia alcista de la región vecina.",

    // Analyzing Opportunity
    "analyzing.title": "Analizando la oportunidad",
    "analyzing.item1": "Acceso directo a la playa, y entrada segura por la calle",
    "analyzing.item2": "Documentación revisada",
    "analyzing.item3": "6 meses de viento constante para Kitesurf/Foil",
    "analyzing.item4": "Compra directa con el propietario",
    "analyzing.item5": "Valor m² por debajo del mercado",
    "analyzing.item6": "Cerca de Curimãs",
    "analyzing.item7": "Alta valorización de la región",
    "analyzing.item8": "Solo 8 lotes, proyecto exclusivo",
    "analyzing.highlight": "La estimación conservadora es una valorización muy positiva de al menos 20% anual, siguiendo el desarrollo turístico local, impulsado por deportes como el Kitesurf.",

    // Know Bitupitá
    "know.title": "Conoce Bitupitá",
    "know.location": "Ubicación",
    "know.location.link": "Ver en Google Maps",
    "know.location.desc": "Accede al mapa y descubre la ubicación privilegiada de este paraíso.",
    "know.video": "Vídeo del Lugar",
    "know.video.link": "Ver en Instagram",
    "know.video.desc": "Ve imágenes reales y enamórate de Bitupitá.",

    // Paradise Awaits
    "paradise.title": "¡Tu paraíso te espera!",
    "paradise.cta": "Asegura tu lugar al sol (y al viento): No esperes a que ocurra la valorización para decidir. ¡Anticípate!",
    "paradise.contact": "Contáctanos por Tel/WhatsApp o Envía un correo",
    "paradise.offering": "Ofrecido por: Terra Ventos",
    "paradise.ceo": "CEO, Terra Ventos",

    // Language Selector
    "language.portuguese": "Português",
    "language.english": "We speak English",
    "language.spanish": "Hablamos Español",

    // Stats Section
    "stats.experience": "Años de Experiencia",
    "stats.properties.sold": "Propiedades Vendidas",
    "stats.satisfaction": "Tasa de Satisfacción",

    // Founder Section
    "founder.name": "Bernardo Carvalho Wertheim",
    "founder.title": "Fundador y CEO",
    "founder.heading": "Idealizador del Proyecto",
    "founder.description":
      "Emprendedor con carrera internacional (ex-Bloomberg y Accenture), fundó Terra Ventos con la misión de remodelar el mercado inmobiliario costero uniendo impacto social, estilo de vida y seguridad.",
    "founder.experience.title": "Nuestra experiencia",
    "founder.experience.description":
      "15+ años en scouting y desarrollo en la costa de Ceará, con asociaciones locales y curaduría rigurosa.",

    // Language Selector
    "language.pt": "Português",
    "language.en": "English",
    "language.es": "Español",
  },
};

// Meta tags translations
export const metaTranslations = {
  pt: {
    title: "Terra Ventos - Investimento Imobiliário no Litoral do Ceará",
    description:
      "Comunidade exclusiva de investidores, kitesurfistas e amantes do litoral nordestino. Acesso antecipado a oportunidades imobiliárias, curadoria jurídica e lifestyle conectado ao vento e ao mar.",
    keywords:
      "investimento imobiliário, litoral cearense, kitesurf, praia, terreno, casa, Ceará, Preá, Jericoacoara, investimento, lifestyle, mar, vento",
    locale: "pt_BR",
  },
  en: {
    title: "Terra Ventos - Real Estate Investment on the Ceará Coast",
    description:
      "Exclusive community of investors, kitesurfers and lovers of the northeastern coast. Early access to real estate opportunities, legal curation and lifestyle connected to wind and sea.",
    keywords:
      "real estate investment, Ceará coast, kitesurf, beach, land, house, Ceará, Preá, Jericoacoara, investment, lifestyle, sea, wind",
    locale: "en_US",
  },
  es: {
    title: "Terra Ventos - Inversión Inmobiliaria en la Costa de Ceará",
    description:
      "Comunidad exclusiva de inversionistas, kitesurfistas y amantes de la costa noreste. Acceso anticipado a oportunidades inmobiliarias, curaduría legal y estilo de vida conectado al viento y al mar.",
    keywords:
      "inversión inmobiliaria, costa de Ceará, kitesurf, playa, terreno, casa, Ceará, Preá, Jericoacoara, inversión, estilo de vida, mar, viento",
    locale: "es_ES",
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("pt");

  // Function to detect language based on user's location
  const detectLanguageFromLocation = async (): Promise<Language> => {
    try {
      // Try to get user's location using a free geolocation API with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const response = await fetch("https://ipapi.co/json/", {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      const data = await response.json();

      const countryCode = data.country_code?.toLowerCase();

      // Spanish-speaking countries
      const spanishCountries = [
        "es",
        "mx",
        "ar",
        "co",
        "pe",
        "ve",
        "cl",
        "ec",
        "gt",
        "cu",
        "bo",
        "do",
        "hn",
        "py",
        "sv",
        "ni",
        "cr",
        "pa",
        "uy",
        "pr",
        "gq",
        "py",
        "uy",
      ];

      // Portuguese-speaking countries
      const portugueseCountries = [
        "br",
        "pt",
        "ao",
        "mz",
        "cv",
        "gw",
        "st",
        "tl",
      ];

      if (spanishCountries.includes(countryCode)) {
        return "es";
      } else if (portugueseCountries.includes(countryCode)) {
        return "pt";
      } else {
        return "en"; // Default to English for rest of the world
      }
    } catch (error) {
      console.log(
        "Could not detect location, using fallback language detection:",
        error
      );

      // Fallback to browser language detection
      try {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("pt")) return "pt";
        if (browserLang.startsWith("es")) return "es";
        return "en";
      } catch (browserError) {
        console.log(
          "Browser language detection failed, using Portuguese default:",
          browserError
        );
        return "pt"; // Default to Portuguese as requested
      }
    }
  };

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // Check localStorage for saved language preference first
        const savedLanguage = localStorage.getItem("language") as Language;

        if (savedLanguage && ["pt", "en", "es"].includes(savedLanguage)) {
          setLanguageState(savedLanguage);
          document.documentElement.lang =
            savedLanguage === "pt"
              ? "pt-BR"
              : savedLanguage === "en"
              ? "en-US"
              : "es-ES";
          return;
        }

        // For now, default to Portuguese to avoid API issues
        setLanguageState("pt");
        document.documentElement.lang = "pt-BR";
      } catch (error) {
        console.error("LanguageContext - Error initializing language:", error);
        setLanguageState("pt");
        document.documentElement.lang = "pt-BR";
      }
    };

    initializeLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);

    // Update document language attribute
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en-US" : "es-ES";
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
