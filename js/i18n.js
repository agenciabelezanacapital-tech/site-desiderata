/* ============================================================
   i18n — Desiderata Hair Institute
   Traduções PT / EN / ES aplicadas via data-i18n.
   Idioma guardado no navegador (localStorage) e detectado
   automaticamente na primeira visita.
   ============================================================ */
(function () {
  'use strict';

  var WA_BASE = 'https://wa.me/5561996468282?text=';

  var I18N = {

    /* ---------------------------------------------------- PT */
    pt: {
      'meta.title': 'Desiderata Hair Institute | Salão de Beleza Premium – Lago Sul, Brasília',
      'meta.desc': 'Desiderata Hair Institute: o salão de beleza e cabeleireiro mais sofisticado do Lago Sul, Brasília. 5,0 ⭐ no Google. Corte, coloração, mechas, escova, manicure, maquiagem e muito mais. Agende pelo WhatsApp!',
      'html.lang': 'pt-BR',

      'nav.servicos': 'Serviços',
      'nav.sobre': 'Sobre',
      'nav.avaliacoes': 'Avaliações',
      'nav.localizacao': 'Localização',

      'cta.agendar': 'Agendar',
      'cta.agendarWhats': 'Agendar pelo WhatsApp',
      'cta.agendarAgora': 'Agendar agora',
      'cta.verServicos': 'Ver serviços',

      'hero.badge': '5,0 · 122 avaliações no Google',
      'hero.headline': 'O salão de beleza<br><em>referência no Lago Sul</em>',
      'hero.sub': 'Experimente cuidados capilares e estética de alto padrão em Brasília. Equipe especializada, ambiente sofisticado e resultados que transformam.',

      'rating.count': '122 avaliações no Google',
      'rating.link': 'Ver no Google',

      'reviews.title': 'O que nossas clientes dizem',
      'reviews.subtitle': 'Resultados reais de quem confia no Desiderata',
      'reviews.1': '"Melhor salão do Lago Sul sem dúvida! Fiz minhas mechas aqui e o resultado superou todas as expectativas. Ambiente incrível e atendimento impecável."',
      'reviews.2': '"Sou cliente há anos e nunca fui a outro salão. A equipe é extremamente profissional e o resultado do meu corte + coloração é sempre perfeito."',
      'reviews.3': '"Fiz meu dia da noiva aqui e foi simplesmente perfeito! Maquiagem, penteado, manicure – tudo impecável. Super indico para noivas!"',

      'services.title': 'Nossos serviços',
      'services.subtitle': 'Cuidado completo para cabelo, pele e beleza em um só lugar',

      'svc.corte.title': 'Corte de Cabelo',
      'svc.corte.desc': 'Cortes personalizados para valorizar seu tipo de rosto e estilo. Técnica e precisão em cada detalhe.',
      'svc.coloracao.title': 'Coloração & Pigmentação',
      'svc.coloracao.desc': 'Coloração profissional com produtos de alta performance. Tons vivos, duradouros e com máximo cuidado para os fios.',
      'svc.mechas.title': 'Mechas & Luzes',
      'svc.mechas.desc': 'Técnicas modernas de mechas e iluminação: balayage, babylights, ombré e muito mais. Resultados naturais e sofisticados.',
      'svc.escova.title': 'Escova & Progressiva',
      'svc.escova.desc': 'Escova modeladora, escova progressiva e tratamentos de alisamento. Fios lisos, sedosos e sem frizz por mais tempo.',
      'svc.penteado.title': 'Penteado',
      'svc.penteado.desc': 'Penteados para festas, formaturas, casamentos e eventos especiais. Do clássico ao contemporâneo, com elegância e durabilidade.',
      'svc.realinhamento.title': 'Realinhamento Capilar',
      'svc.realinhamento.desc': 'Tratamento que alinha, recupera e hidrata profundamente os fios. Resultado natural, com movimento e brilho intenso.',
      'svc.maquiagem.title': 'Maquiagem',
      'svc.maquiagem.desc': 'Maquiagem social e artística para eventos, festas e ocasiões especiais. Realçamos a sua beleza com produtos de alta qualidade.',
      'svc.sobrancelha.title': 'Design de Sobrancelha',
      'svc.sobrancelha.desc': 'Design personalizado que valoriza o olhar e harmoniza com o rosto. Henna, micropigmentação e modelagem profissional.',
      'svc.manicure.title': 'Manicure & Pedicure',
      'svc.manicure.desc': 'Cuidados completos para mãos e pés com esmaltação em gel, spa e técnicas premium. Acabamento impecável e duradouro.',

      'services.ctaText': 'Não encontrou o que procura? Fale diretamente com nossa equipe.',
      'services.ctaBtn': 'Fale com a gente pelo WhatsApp',

      'about.eyebrow': 'Por que escolher o Desiderata?',
      'about.title': 'Sofisticação e excelência<br>no coração do Lago Sul',
      'about.lead': 'O Desiderata Hair Institute é referência em beleza premium em Brasília. Localizado no exclusivo Lago Sul, oferecemos uma experiência completa de cuidados capilares e estética em um ambiente elegante e acolhedor.',
      'about.f1.title': 'Equipe altamente especializada',
      'about.f1.desc': 'Profissionais treinados nas melhores técnicas nacionais e internacionais, sempre em atualização constante.',
      'about.f2.title': 'Localização privilegiada no Lago Sul',
      'about.f2.desc': 'SHIS QI 11, Bloco G – ambiente planejado para seu conforto e praticidade, com estacionamento.',
      'about.f3.title': 'Produtos de alta performance',
      'about.f3.desc': 'Utilizamos apenas marcas premium, garantindo saúde, brilho e longevidade para seus cabelos.',
      'about.f4.title': '5,0 ⭐ no Google com 122 avaliações',
      'about.f4.desc': 'Uma das melhores avaliações de salões de beleza em Brasília, reconhecida pela excelência do serviço.',

      'location.title': 'Como nos encontrar',
      'location.subtitle': 'Estamos no coração do Lago Sul, aguardando por você',
      'location.enderecoLabel': 'Endereço',
      'location.enderecoText': 'SHIS QI 11, Bloco G, Loja 37 (Subsolo)<br>Lago Sul – Brasília, DF<br>CEP 71625-560',
      'location.telLabel': 'Telefone / WhatsApp',
      'location.horarioLabel': 'Horário de funcionamento',
      'location.segSex': 'Segunda a Sexta',
      'location.sab': 'Sábado',
      'location.dom': 'Domingo',
      'location.fechado': 'Fechado',

      'ctaFinal.title': 'Pronta para se transformar?',
      'ctaFinal.sub': 'Agende agora pelo WhatsApp e garanta seu horário no salão mais elegante do Lago Sul. Nossa equipe está pronta para te receber.',
      'ctaFinal.note': 'Aberto até as 19h · Lago Sul, Brasília',

      'footer.tagline': 'O salão de beleza premium do Lago Sul, Brasília.',
      'footer.contato': 'Contato & Endereço',
      'footer.endereco': 'SHIS QI 11, Bloco G, Loja 37 (Subsolo)<br>Lago Sul – Brasília, DF – CEP 71625-560',
      'footer.redes': 'Siga nas redes',
      'footer.copy': 'Todos os direitos reservados.',

      'wa.tpl': 'Olá! Vim pelo site e gostaria de agendar {s} no Desiderata.',
      'wa.info': 'Olá! Vim pelo site e gostaria de saber mais sobre os serviços do Desiderata.',
      'wa.s.geral': 'um horário',
      'wa.s.corte': 'um Corte de Cabelo',
      'wa.s.coloracao': 'Coloração',
      'wa.s.mechas': 'Mechas',
      'wa.s.escova': 'Escova',
      'wa.s.penteado': 'Penteado',
      'wa.s.realinhamento': 'Realinhamento',
      'wa.s.maquiagem': 'Maquiagem',
      'wa.s.sobrancelha': 'Design de Sobrancelha',
      'wa.s.manicure': 'Manicure',

      'lang.label': 'Idioma',
      'lang.pt': 'Português',
      'lang.en': 'Inglês',
      'lang.es': 'Espanhol'
    },

    /* ---------------------------------------------------- EN */
    en: {
      'meta.title': 'Desiderata Hair Institute | Premium Beauty Salon – Lago Sul, Brasília',
      'meta.desc': 'Desiderata Hair Institute: the most refined hair salon in Lago Sul, Brasília. 5.0 ⭐ on Google. Haircuts, color, highlights, blowouts, manicure, makeup and more. Book on WhatsApp!',
      'html.lang': 'en',

      'nav.servicos': 'Services',
      'nav.sobre': 'About',
      'nav.avaliacoes': 'Reviews',
      'nav.localizacao': 'Location',

      'cta.agendar': 'Book now',
      'cta.agendarWhats': 'Book on WhatsApp',
      'cta.agendarAgora': 'Book now',
      'cta.verServicos': 'See services',

      'hero.badge': '5.0 · 122 reviews on Google',
      'hero.headline': 'The beauty salon<br><em>Lago Sul trusts</em>',
      'hero.sub': 'Experience high-end hair care and beauty in Brasília. A specialised team, a refined space and results that truly transform.',

      'rating.count': '122 reviews on Google',
      'rating.link': 'View on Google',

      'reviews.title': 'What our clients say',
      'reviews.subtitle': 'Real results from people who trust Desiderata',
      'reviews.1': '"Best salon in Lago Sul, no doubt. I had my highlights done here and the result went beyond every expectation. Wonderful space and flawless service."',
      'reviews.2': '"I have been a client for years and never went anywhere else. The team is extremely professional and my cut and color always turn out perfect."',
      'reviews.3': '"I had my bridal day here and it was simply perfect. Makeup, hair, manicure, all flawless. I highly recommend it to brides!"',

      'services.title': 'Our services',
      'services.subtitle': 'Complete hair, skin and beauty care in one place',

      'svc.corte.title': 'Haircut',
      'svc.corte.desc': 'Personalised cuts that flatter your face shape and style. Technique and precision in every detail.',
      'svc.coloracao.title': 'Hair Colour',
      'svc.coloracao.desc': 'Professional colour with high-performance products. Vivid, long-lasting tones with maximum care for your hair.',
      'svc.mechas.title': 'Highlights & Balayage',
      'svc.mechas.desc': 'Modern lightening techniques: balayage, babylights, ombré and more. Natural, sophisticated results.',
      'svc.escova.title': 'Blowout & Straightening',
      'svc.escova.desc': 'Styling blowouts, keratin treatments and smoothing services. Sleek, silky, frizz-free hair for longer.',
      'svc.penteado.title': 'Updos & Styling',
      'svc.penteado.desc': 'Styling for parties, graduations, weddings and special occasions. From classic to contemporary, elegant and long-lasting.',
      'svc.realinhamento.title': 'Hair Realignment',
      'svc.realinhamento.desc': 'A treatment that realigns, repairs and deeply hydrates the hair. Natural result with movement and intense shine.',
      'svc.maquiagem.title': 'Makeup',
      'svc.maquiagem.desc': 'Social and artistic makeup for events, parties and special occasions. We enhance your beauty with high-quality products.',
      'svc.sobrancelha.title': 'Eyebrow Design',
      'svc.sobrancelha.desc': 'Personalised design that frames your eyes and harmonises with your face. Henna, micropigmentation and professional shaping.',
      'svc.manicure.title': 'Manicure & Pedicure',
      'svc.manicure.desc': 'Complete hand and foot care with gel polish, spa treatments and premium techniques. Flawless, long-lasting finish.',

      'services.ctaText': "Didn't find what you were looking for? Talk to our team directly.",
      'services.ctaBtn': 'Talk to us on WhatsApp',

      'about.eyebrow': 'Why choose Desiderata?',
      'about.title': 'Sophistication and excellence<br>in the heart of Lago Sul',
      'about.lead': 'Desiderata Hair Institute is a reference in premium beauty in Brasília. Located in exclusive Lago Sul, we offer a complete hair care and beauty experience in an elegant, welcoming space.',
      'about.f1.title': 'A highly specialised team',
      'about.f1.desc': 'Professionals trained in the best national and international techniques, always keeping their skills up to date.',
      'about.f2.title': 'Prime location in Lago Sul',
      'about.f2.desc': 'SHIS QI 11, Block G, a space designed for your comfort and convenience, with parking.',
      'about.f3.title': 'High-performance products',
      'about.f3.desc': 'We work only with premium brands, ensuring health, shine and longevity for your hair.',
      'about.f4.title': '5.0 ⭐ on Google with 122 reviews',
      'about.f4.desc': 'One of the highest-rated beauty salons in Brasília, recognised for the excellence of its service.',

      'location.title': 'How to find us',
      'location.subtitle': 'We are in the heart of Lago Sul, waiting for you',
      'location.enderecoLabel': 'Address',
      'location.enderecoText': 'SHIS QI 11, Block G, Shop 37 (Lower level)<br>Lago Sul – Brasília, DF<br>ZIP 71625-560',
      'location.telLabel': 'Phone / WhatsApp',
      'location.horarioLabel': 'Opening hours',
      'location.segSex': 'Monday to Friday',
      'location.sab': 'Saturday',
      'location.dom': 'Sunday',
      'location.fechado': 'Closed',

      'ctaFinal.title': 'Ready for a transformation?',
      'ctaFinal.sub': 'Book on WhatsApp now and secure your appointment at the most elegant salon in Lago Sul. Our team is ready to welcome you.',
      'ctaFinal.note': 'Open until 7pm · Lago Sul, Brasília',

      'footer.tagline': 'The premium beauty salon of Lago Sul, Brasília.',
      'footer.contato': 'Contact & Address',
      'footer.endereco': 'SHIS QI 11, Block G, Shop 37 (Lower level)<br>Lago Sul – Brasília, DF – ZIP 71625-560',
      'footer.redes': 'Follow us',
      'footer.copy': 'All rights reserved.',

      'wa.tpl': 'Hello! I came from your website and would like to book {s} at Desiderata.',
      'wa.info': 'Hello! I came from your website and would like to know more about the services at Desiderata.',
      'wa.s.geral': 'an appointment',
      'wa.s.corte': 'a Haircut',
      'wa.s.coloracao': 'Hair Colour',
      'wa.s.mechas': 'Highlights',
      'wa.s.escova': 'a Blowout',
      'wa.s.penteado': 'Styling',
      'wa.s.realinhamento': 'a Hair Realignment',
      'wa.s.maquiagem': 'Makeup',
      'wa.s.sobrancelha': 'Eyebrow Design',
      'wa.s.manicure': 'a Manicure',

      'lang.label': 'Language',
      'lang.pt': 'Portuguese',
      'lang.en': 'English',
      'lang.es': 'Spanish'
    },

    /* ---------------------------------------------------- ES */
    es: {
      'meta.title': 'Desiderata Hair Institute | Salón de Belleza Premium – Lago Sul, Brasilia',
      'meta.desc': 'Desiderata Hair Institute: el salón de belleza más sofisticado de Lago Sul, Brasilia. 5,0 ⭐ en Google. Corte, coloración, mechas, brushing, manicura, maquillaje y mucho más. ¡Reserve por WhatsApp!',
      'html.lang': 'es',

      'nav.servicos': 'Servicios',
      'nav.sobre': 'Nosotros',
      'nav.avaliacoes': 'Opiniones',
      'nav.localizacao': 'Ubicación',

      'cta.agendar': 'Reservar',
      'cta.agendarWhats': 'Reservar por WhatsApp',
      'cta.agendarAgora': 'Reservar ahora',
      'cta.verServicos': 'Ver servicios',

      'hero.badge': '5,0 · 122 reseñas en Google',
      'hero.headline': 'El salón de belleza<br><em>referencia en Lago Sul</em>',
      'hero.sub': 'Viva el cuidado capilar y la estética de alto nivel en Brasilia. Equipo especializado, ambiente sofisticado y resultados que transforman.',

      'rating.count': '122 reseñas en Google',
      'rating.link': 'Ver en Google',

      'reviews.title': 'Lo que dicen nuestras clientas',
      'reviews.subtitle': 'Resultados reales de quienes confían en Desiderata',
      'reviews.1': '"¡El mejor salón de Lago Sul, sin duda! Me hice las mechas aquí y el resultado superó todas mis expectativas. Ambiente increíble y atención impecable."',
      'reviews.2': '"Soy clienta desde hace años y nunca fui a otro salón. El equipo es muy profesional y el resultado de mi corte y color siempre es perfecto."',
      'reviews.3': '"Hice aquí mi día de novia y fue simplemente perfecto. Maquillaje, peinado, manicura, todo impecable. ¡Lo recomiendo muchísimo a las novias!"',

      'services.title': 'Nuestros servicios',
      'services.subtitle': 'Cuidado completo de cabello, piel y belleza en un solo lugar',

      'svc.corte.title': 'Corte de Cabello',
      'svc.corte.desc': 'Cortes personalizados que realzan su tipo de rostro y su estilo. Técnica y precisión en cada detalle.',
      'svc.coloracao.title': 'Coloración y Pigmentación',
      'svc.coloracao.desc': 'Coloración profesional con productos de alto rendimiento. Tonos vivos, duraderos y con el máximo cuidado del cabello.',
      'svc.mechas.title': 'Mechas y Luces',
      'svc.mechas.desc': 'Técnicas modernas de mechas e iluminación: balayage, babylights, ombré y mucho más. Resultados naturales y sofisticados.',
      'svc.escova.title': 'Brushing y Alisado',
      'svc.escova.desc': 'Brushing moldeador, alisado progresivo y tratamientos de alisado. Cabello liso, sedoso y sin frizz por más tiempo.',
      'svc.penteado.title': 'Peinado',
      'svc.penteado.desc': 'Peinados para fiestas, graduaciones, bodas y eventos especiales. Del clásico al contemporáneo, con elegancia y durabilidad.',
      'svc.realinhamento.title': 'Realineamiento Capilar',
      'svc.realinhamento.desc': 'Tratamiento que alinea, recupera e hidrata profundamente el cabello. Resultado natural, con movimiento y brillo intenso.',
      'svc.maquiagem.title': 'Maquillaje',
      'svc.maquiagem.desc': 'Maquillaje social y artístico para eventos, fiestas y ocasiones especiales. Realzamos su belleza con productos de alta calidad.',
      'svc.sobrancelha.title': 'Diseño de Cejas',
      'svc.sobrancelha.desc': 'Diseño personalizado que realza la mirada y armoniza con el rostro. Henna, micropigmentación y perfilado profesional.',
      'svc.manicure.title': 'Manicura y Pedicura',
      'svc.manicure.desc': 'Cuidado completo de manos y pies con esmaltado en gel, spa y técnicas premium. Acabado impecable y duradero.',

      'services.ctaText': '¿No encontró lo que buscaba? Hable directamente con nuestro equipo.',
      'services.ctaBtn': 'Hable con nosotros por WhatsApp',

      'about.eyebrow': '¿Por qué elegir Desiderata?',
      'about.title': 'Sofisticación y excelencia<br>en el corazón de Lago Sul',
      'about.lead': 'Desiderata Hair Institute es una referencia de belleza premium en Brasilia. Ubicado en el exclusivo Lago Sul, ofrecemos una experiencia completa de cuidado capilar y estética en un ambiente elegante y acogedor.',
      'about.f1.title': 'Equipo altamente especializado',
      'about.f1.desc': 'Profesionales formados en las mejores técnicas nacionales e internacionales, en actualización constante.',
      'about.f2.title': 'Ubicación privilegiada en Lago Sul',
      'about.f2.desc': 'SHIS QI 11, Bloque G, un espacio pensado para su comodidad y practicidad, con estacionamiento.',
      'about.f3.title': 'Productos de alto rendimiento',
      'about.f3.desc': 'Trabajamos solo con marcas premium, garantizando salud, brillo y longevidad para su cabello.',
      'about.f4.title': '5,0 ⭐ en Google con 122 reseñas',
      'about.f4.desc': 'Una de las mejores valoraciones entre los salones de belleza de Brasilia, reconocida por la excelencia del servicio.',

      'location.title': 'Cómo encontrarnos',
      'location.subtitle': 'Estamos en el corazón de Lago Sul, esperándola',
      'location.enderecoLabel': 'Dirección',
      'location.enderecoText': 'SHIS QI 11, Bloque G, Local 37 (Subsuelo)<br>Lago Sul – Brasilia, DF<br>CP 71625-560',
      'location.telLabel': 'Teléfono / WhatsApp',
      'location.horarioLabel': 'Horario de atención',
      'location.segSex': 'Lunes a Viernes',
      'location.sab': 'Sábado',
      'location.dom': 'Domingo',
      'location.fechado': 'Cerrado',

      'ctaFinal.title': '¿Lista para transformarse?',
      'ctaFinal.sub': 'Reserve ahora por WhatsApp y asegure su cita en el salón más elegante de Lago Sul. Nuestro equipo está listo para recibirla.',
      'ctaFinal.note': 'Abierto hasta las 19h · Lago Sul, Brasilia',

      'footer.tagline': 'El salón de belleza premium de Lago Sul, Brasilia.',
      'footer.contato': 'Contacto y Dirección',
      'footer.endereco': 'SHIS QI 11, Bloque G, Local 37 (Subsuelo)<br>Lago Sul – Brasilia, DF – CP 71625-560',
      'footer.redes': 'Síganos',
      'footer.copy': 'Todos los derechos reservados.',

      'wa.tpl': '¡Hola! Vi su sitio web y me gustaría reservar {s} en Desiderata.',
      'wa.info': '¡Hola! Vi su sitio web y me gustaría saber más sobre los servicios de Desiderata.',
      'wa.s.geral': 'una cita',
      'wa.s.corte': 'un Corte de Cabello',
      'wa.s.coloracao': 'Coloración',
      'wa.s.mechas': 'Mechas',
      'wa.s.escova': 'Brushing',
      'wa.s.penteado': 'Peinado',
      'wa.s.realinhamento': 'Realineamiento',
      'wa.s.maquiagem': 'Maquillaje',
      'wa.s.sobrancelha': 'Diseño de Cejas',
      'wa.s.manicure': 'Manicura',

      'lang.label': 'Idioma',
      'lang.pt': 'Portugués',
      'lang.en': 'Inglés',
      'lang.es': 'Español'
    }
  };

  var SUPPORTED = ['pt', 'en', 'es'];
  var STORAGE_KEY = 'desiderata_lang';

  function t(lang, key) {
    var dict = I18N[lang] || I18N.pt;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : I18N.pt[key];
  }

  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;

    var qs = null;
    try {
      qs = new URLSearchParams(window.location.search).get('lang');
    } catch (e) { qs = null; }
    if (qs && SUPPORTED.indexOf(qs) !== -1) return qs;

    var nav = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
    if (nav.indexOf('es') === 0) return 'es';
    if (nav.indexOf('en') === 0) return 'en';
    return 'pt';
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'pt';

    // Texto simples
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(lang, el.getAttribute('data-i18n'));
      if (typeof val === 'string') el.textContent = val;
    });

    // Texto com marcação (br, em)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = t(lang, el.getAttribute('data-i18n-html'));
      if (typeof val === 'string') el.innerHTML = val;
    });

    // Atributos (aria-label, title, alt)
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var val = t(lang, parts[1].trim());
        if (typeof val === 'string') el.setAttribute(parts[0].trim(), val);
      });
    });

    // Links de WhatsApp
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      var key = el.getAttribute('data-wa');
      var msg;
      if (key === 'info') {
        msg = t(lang, 'wa.info');
      } else {
        msg = t(lang, 'wa.tpl').replace('{s}', t(lang, 'wa.s.' + key));
      }
      el.setAttribute('href', WA_BASE + encodeURIComponent(msg));
    });

    // Cabeçalho do documento
    document.documentElement.setAttribute('lang', t(lang, 'html.lang'));
    document.title = t(lang, 'meta.title');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t(lang, 'meta.desc'));

    // Estado visual dos botões
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignora */ }
  }

  function init() {
    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
    applyLang(detectLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
