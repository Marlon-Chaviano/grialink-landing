# Grialink Landing — Contenido, Imágenes y Mejoras

> Documento de trabajo para profundizar el contenido de la landing page, definir las imágenes necesarias y planificar mejoras estratégicas.

---

## PARTE 1: Preguntas para profundizar el contenido de cada página

### 1.1 — Marca y Posicionamiento General

1. ¿Cuál es la propuesta de valor diferencial (USP) de Grialink frente a competidores como Salesforce Health Cloud, HubSpot for Healthcare, DrChrono o NexHealth?
2. ¿Cuál es el tono de voz oficial de la marca? (Ej: profesional-cercano, técnico-autoritario, innovador-accesible)
3. ¿Tienen un tagline o claim principal definido que deba usarse siempre? (Actualmente: "El primer sistema operativo inteligente para clínicas de alto rendimiento")
4. ¿A qué vertical exacta se dirigen? (Clínicas médicas generales, estéticas, dentales, oftalmológicas, multiespecialidad, todas)
5. ¿En qué países/regiones operan o tienen presupuesto a corto plazo? (Esto afecta monedas, compliance, idiomas)
6. ¿Tienen guía de marca (brand book) con colores, tipografía, uso de logo e isotipo?

### 1.2 — Home Page

1. ¿Cuáles son las 3 métricas más impactantes que pueden mostrar? (Ej: "clínicas activas", "pacientes gestionados", "% reducción de no-shows")
2. ¿Tienen clientes reales que autoricen el uso de su logo en la landing? Si sí, ¿cuáles?
3. ¿Existe un video demo del producto? Si no, ¿está planeado producir uno?
4. La sección Hero tiene un botón "Ver Demo" que apunta a `#demo` y no existe destino. ¿A dónde debe redirigir? (Ej: video embebido, llamada de registro, Calendly)
5. ¿Cuáles son los pasos reales del onboarding? (Ej: 1. Agenda demo → 2. Configuración guiada → 3. Go-live). Esto es necesario para crear una sección "How it Works".
6. ¿Existen testimonios reales de clientes? Si sí, proporciona: nombre completo, cargo, nombre de clínica, cita textual y foto (o autorización para usar foto profesional).
7. ¿Hay datos de caso de éxito reales? El actual ("Clínica San José" con 40% reducción y 25% aumento en conversión) ¿es real o placeholder?

### 1.3 — Página de Producto (Products)

1. Los 4 productos (Prospector AI, Outreach Engine, Smart Pipeline, IA Analytics) actualmente tienen ~1 oración de descripción cada uno. Para cada producto necesito:
    - ¿Cuáles son las 4-6 features principales?
    - ¿Qué problema específico resuelve?
    - ¿Hay una métrica de impacto asociada? (Ej: "Reduce el tiempo de prospección en un 70%")
    - ¿Cómo se ve la interfaz? (screenshots reales o mockups de Figma)
2. La sección "El Cerebro de Grialink" menciona NLP y Modelos Predictivos. ¿Qué otros módulos de IA tiene? (Ej: segmentación automática, scoring de pacientes, análisis de sentimiento)
3. Las integraciones actuales son Google, Meta y Apollo.io. ¿Con qué otras herramientas se integra? (Ej: Mailchimp, WhatsApp Business API, Google Calendar, Zoom, sistemas de HCE/EMR, pasarelas de pago)
4. ¿Existe un roadmap público de funcionalidades futuras que pueda mencionarse?
5. ¿El producto tiene una API abierta? Si sí, ¿hay documentación?

### 1.4 — Página About Us

1. La historia de origen menciona "pasillos de clínicas reales". ¿Pueden dar una anécdota específica que humanice más el relato? (Ej: "El Dr. [nombre] perdía 3 horas diarias duplicando datos entre Excel y su agenda...")
2. Los 4 miembros del equipo (Dr. Carlos Méndez, Ana Lucía Reyes, Marco Torres, Valentina Cruz) ¿son personas reales? Si sí, necesito:
    - Fotos profesionales (headshots)
    - URLs reales de LinkedIn
    - ¿Quieren agregar más miembros? (advisory board, inversionistas)
3. ¿Tienen inversionistas, aceleradoras o partners institucionales que puedan mencionarse? (Ej: "Backed by Y Combinator" o "Acelerados por 500 Startups")
4. ¿Cuántas personas tiene el equipo total? (Para texto tipo "Un equipo de +20 profesionales...")
5. ¿Tienen oficinas físicas? Si sí, ¿dónde? (Esto aplica para schema LocalBusiness y dirección en contacto)

### 1.5 — Página de Pricing

1. ¿Los precios actuales (Free, Starter $60, Growth $100, Scale $150) son definitivos o placeholder?
2. ¿Cuál es el plan más vendido? (Para usar como "Más Popular" con certeza)
3. ¿Ofrecen prueba gratuita? ¿De cuántos días? ¿Requiere tarjeta de crédito?
4. ¿Hay descuentos especiales? (Ej: ONG/clínicas sin fines de lucro, volumen, pago anual ya se muestra 20%)
5. ¿Hay una tabla de comparación de features por plan detallada más allá de lo que ya se muestra?
6. ¿Existen complementos (add-ons) adicionales a los ya listados? ¿Cuáles son sus precios reales?
7. ¿Cuáles son las preguntas frecuentes MÁS reales que hacen los prospectos? (Las FAQ actuales son genéricas — necesitamos las que surgen en llamadas de ventas)

### 1.6 — Página de Contacto

1. ¿El teléfono "+1-800-GRIALINK" es real o placeholder?
2. ¿El email "<hello@grialink.com>" está activo y monitoreado?
3. ¿El formulario de contacto debe enviar a un email, un SES (propio), o ambos?
4. ¿Necesitan integración con algún sistema de tickets? (Ej: Zendesk, Freshdesk, Intercom)
5. ¿Usan algún chat en vivo? Si sí, ¿cuál? (Para embeber widget)
6. ¿Quieren implementar Calendly o similar para agendar demos directamente?
7. ¿Cuál es el SLA de respuesta real? (Actualmente dice "menos de 24 horas")

### 1.7 — Legal y Compliance

1. ¿Tienen texto de Política de Privacidad redactado? (El footer enlaza a `/privacy` pero la página no existe)
2. ¿Tienen Términos de Servicio redactados? (El footer enlaza a `/terms` pero la página no existe)
3. ¿Requieren banner de cookies para GDPR? ¿Operan en Europa?
4. ¿Están certificados HIPAA? ¿Tienen SOC 2? ¿Alguna otra certificación de seguridad?
5. ¿Pueden compartir el texto exacto o necesitan que se redacte un draft?

### 1.8 — Social y Marketing

1. ¿Cuáles son las URLs reales de redes sociales? (El footer tiene iconos de Facebook, LinkedIn y X apuntando a `#`)
2. ¿Tienen blog o planean tener uno? (Para SEO y content marketing)
3. ¿Usan algún sistema de analytics? (Google Analytics 4, Plausible, Mixpanel)
4. ¿Necesitan tracking de conversiones? (Google Ads, Meta Pixel, etc.)

---

## PARTE 2: Contenido faltante para una landing de SES profesional

### Secciones que NO existen y SON necesarias

| Prioridad | Sección | ¿Dónde va? | Justificación |
|-----------|---------|------------|---------------|
| **CRÍTICA** | **Testimonios / Social Proof real** | Home (después de Features) | Sin testimonios reales, la landing carece de credibilidad. Es el factor #1 de conversión en SaaS B2B healthcare. |
| **CRÍTICA** | **Screenshots reales del producto** | Products page + Home | Actualmente solo hay mockups CSS. Ningún prospecto confía en un SES sin ver la interfaz real. |
| **CRÍTICA** | **Página de Privacidad** | `/privacy` | Los links del footer están rotos. Es obligatorio legalmente. |
| **CRÍTICA** | **Página de Términos de Servicio** | `/terms` | Los links del footer están rotos. Es obligatorio legalmente. |
| **ALTA** | **"How it Works" (Cómo funciona)** | Home (después de Hero o Products) | Un flujo visual de 3-4 pasos que muestre el proceso de adopción reduce fricción y clarifica la propuesta. |
| **ALTA** | **Video demo embebido** | Home Hero o Products | Un video de 60-90 segundos aumenta el tiempo en página y la tasa de conversión entre 80-300% según Wyzowl. |
| **ALTA** | **Sección HIPAA / Compliance / Security** | Home o sección dedicada | Healthcare SaaS NECESITA una sección dedicada a seguridad. El badge pequeño en pricing no es suficiente. |
| **ALTA** | **Tabla comparativa de planes** | Pricing | Una matrix features × planes permite comparación visual rápida. Estándar en todos los SaaS. |
| **ALTA** | **Página 404 personalizada** | Global | Links rotos llevan a una 404 por defecto de Astro sin branding. |
| **MEDIA** | **ROI Calculator interactivo** | Pricing o Home | Input: # pacientes/mes + % no-shows → Output: ahorro estimado con Grialink. Muy efectivo para B2B healthcare. |
| **MEDIA** | **Blog / Recursos** | New page | Content marketing + SEO orgánico. Los competidores tienen 50-200 artículos. |
| **MEDIA** | **Casos de éxito detallados** | New page | El actual es fake. Un caso de éxito real de 500-800 palabras con métricas verificables vale más que toda la landing. |
| **MEDIA** | **Comparación con competidores** | New page o sección | "Grialink vs HubSpot", "Grialink vs Salesforce Health Cloud" — excelente para SEO y conversión. |
| **BAJA** | **Changelog / Novedades** | New page | Demuestra que el producto está activo y en evolución constante. |
| **BAJA** | **Status page** | Externo | Transparencia operativa para clientes enterprise. |

### Elementos de conversión faltantes

| Elemento | Estado actual | Lo que debería ser |
|----------|--------------|-------------------|
| **CTAs de registro** | Apuntan a `#` o `/register` (no existe) | Debe existir un flujo real: signup form, Calendly embed, o redirect a app |
| **Login** | Apunta a `/login` (no existe) | Redirect a la app real (ej: `app.grialink.com`) |
| **Lead magnet** | No existe | Ofrecer algo descargable: "Guía: Cómo reducir no-shows en tu clínica con IA" |
| **Exit intent popup** | No existe | Popup al intentar salir ofreciendo demo gratuita o descarga de recurso |
| **Cookie consent** | No existe | Necesario si operan en EU. Recomendado globalmente. |
| **Analytics** | No hay tracking | GA4 o Plausible como mínimo |
| **OG Images** | No existen | Cada página necesita imagen social para compartir en redes |
| **Números en tiempo real** | No existen | Contadores animados: "+500 clínicas", "+1M pacientes gestionados" |

---

## PARTE 3: Descripción argumentada de cada foto necesaria

### 📸 1. Hero About — `/about/hero-clinic.webp`

**Componente:** `AboutHero.astro` línea 62
**Especificación:** 1200×600px, formato WebP, aspect ratio 2:1

**Descripción de la foto ideal:**
Recepción de una clínica médica moderna y luminosa. Mostrador de check-in con acabados en madera clara y blanco. Una recepcionista joven sonríe con una tablet en la mano mientras un paciente firma en una pantalla digital. Iluminación natural entrando por ventanales amplios. Plantas decorativas integradas. Ambiente limpio, cálido y tecnológico sin ser frío. Tonos predominantes: blancos, beige, toques de madera natural y detalles sutiles naranja (silla, elemento decorativo). La imagen transmite: "Esta clínica es moderna, eficiente y centrada en el paciente".

**Por qué esta foto:** La página About establece confianza. La imagen de la recepción debe comunicar que Grialink entiende el entorno real de una clínica. No debe ser una foto "stock" genérica de consultorio, sino un espacio que parezca real, premium y bien gestionado — exactamente lo que promete el producto.

---

### 📸 2. History Image 1 — `/about/history-1.webp`

**Componente:** `HistorySection.astro` línea 52
**Especificación:** 600×500px, WebP, portrait-ish

**Descripción de la foto ideal:**
Un doctor de mediana edad (hombre latino, ~40 años) sentado en su escritorio mirando frustrado una pantalla de computadora con múltiples ventanas abiertas (Excel, email, agenda). Tiene una bata blanca con estetoscopio al cuello. Pilas de carpetas y papeles a un lado. Expresión concentrada pero visiblemente abrumada. Iluminación cálida de despacho. La imagen comunica "el antes" — el caos operativo.

**Por qué esta foto:** La sección de historia narra que Grialink nació de observar el problema real. Esta imagen ancla visualmente el "dolor" del cliente ideal. El contraste con la segunda imagen crea una narrativa visual antes/después.

---

### 📸 3. History Image 2 — `/about/history-2.webp`

**Componente:** `HistorySection.astro` línea 59
**Especificación:** 600×500px, WebP, portrait-ish

**Descripción de la foto ideal:**
Equipo de 4-5 personas jóvenes y diversas reunidas alrededor de una mesa en una oficina moderna tipo startup. Laptops abiertas, pantalla grande al fondo mostrando un dashboard con gráficas (similar al UI de Grialink). Post-its en la pared. Ambiente colaborativo y energético. Sonrisas naturales, gesticulación que indica discusión activa. Ropa casual-profesional. Tonos cálidos. Transmite: innovación, trabajo en equipo, energía.

**Por qué esta foto:** Representa el "momento fundacional" de Grialink. Debe comunicar que detrás del producto hay personas reales, apasionadas y capaces. El contraste entre la foto 1 (problema) y foto 2 (solución en construcción) refuerza la narrativa de origen.

---

### 📸 4-7. Team Members — `/team/*.webp`

**Componente:** `TeamSection.astro` línea 62
**Especificación:** 400×400px cada una, WebP, cuadradas (se renderizan como círculos)

**4. Dr. Carlos Méndez — CEO & Co-Fundador** (`/team/carlos-mendez.webp`)
Headshot profesional de un hombre latino de ~40-45 años. Barba corta bien cuidada. Camisa azul oscuro, sin corbata. Fondo neutro difuminado (gris/beige). Expresión seria pero amable, mirada directa a cámara. Transmite: liderazgo, experiencia médica, confianza.

**5. Ana Lucía Reyes — CTO & Co-Fundadora** (`/team/ana-reyes.webp`)
Headshot profesional de una mujer latina de ~30-35 años. Cabello oscuro suelto o recogido. Blazer oscuro sobre blusa clara. Fondo neutro. Expresión segura, media sonrisa. Transmite: competencia técnica, modernidad, liderazgo.

**6. Marco Torres — Head of Product** (`/team/marco-torres.webp`)
Headshot profesional de un hombre joven de ~28-32 años. Estilo casual-creativo (cuello redondo, no camisa formal). Lentes modernos opcionales. Fondo neutro. Sonrisa abierta y relajada. Transmite: creatividad, accesibilidad, diseño.

**7. Valentina Cruz — Head of Customer Success** (`/team/valentina-cruz.webp`)
Headshot profesional de una mujer joven de ~28-32 años. Cabello claro o castaño. Blusa o suéter en tono cálido. Fondo neutro. Sonrisa amplia y genuina. Transmite: empatía, cercanía, servicio al cliente excepcional.

**Por qué estas fotos:** El equipo construye confianza. En healthcare B2B, los compradores quieren saber quién está detrás del producto. Los headshots profesionales pero asequibles (no corporativos fríos) comunican que es un equipo real, competente y humano. Si no hay fotos reales, se recomienda AI-generated headshots de alta calidad o ilustraciones estilizadas coherentes.

---

### 📸 8. Case Study / Caso de éxito — Products.astro línea 128 (Home page)

**Componente:** `Products.astro` línea 128
**Especificación:** 800×600px, WebP
**Actualmente:** URL de Unsplash externa (`photo-1576091160399-112ba8d25d1d`)

**Descripción de la foto ideal:**
Interior de una clínica dental o estética moderna. Un profesional de la salud (mujer con bata blanca) utilizando una tablet mientras conversa con una paciente sonriente sentada en un sillón de consulta. Ambiente premium pero acogedor. Equipamiento moderno visible pero no protagonista. Iluminación cuidada. Transmite: resultado tangible, tecnología integrada en la atención real, clínica exitosa.

**Por qué esta foto:** Esta imagen acompaña el testimonial del caso de éxito. Debe evocar "éxito clínico real" — no solo tecnología, sino resultados humanos. La presencia de doctor+paciente+tablet refuerza que Grialink se integra naturalmente en la atención.

---

### 📸 9. Product Dashboard Screenshot — ProductsHero.astro (Products page)

**Componente:** `ProductsHero.astro` líneas 63-72
**Especificación:** 1920×1080px (16:9), WebP/PNG
**Actualmente:** Placeholder CSS con icono de gráfica y texto "Grialink Dashboard"

**Descripción de la imagen ideal:**
Screenshot REAL del dashboard principal de Grialink. Debe mostrar:

- Sidebar de navegación con los 4 módulos (Prospector, Outreach, Pipeline, Analytics)
- Panel principal con KPIs: pacientes activos, citas del día, tasa de conversión, ingresos del mes
- Gráfica de tendencia semanal/mensual
- Lista o tabla con últimas actividades
- Aspecto visual limpio, profesional, moderno (dark mode preferiblemente para coincidir con la landing)

Si no hay producto real aún, crear un **mockup en Figma** de alta fidelidad que represente lo que será. Este es el elemento visual MÁS importante de toda la landing — es lo primero que ve un prospecto en /products.

**Por qué este screenshot:** "Show, don't tell". Toda la copia habla de lo que hace Grialink pero ningún prospecto se suscribirá sin ver la interfaz. Los competidores muestran screenshots en la primera pantalla. Sin esto, la landing pierde credibilidad inmediata.

---

### 📸 10. AI Brain Visualization — ProductBrain.astro (Products page)

**Componente:** `ProductBrain.astro` líneas 66-99
**Especificación:** 800×600px, WebP/PNG (puede ser ilustración)
**Actualmente:** Visualización CSS decorativa con dots animados

**Descripción de la imagen ideal:**
Ilustración abstracta tipo "network/neural" en tonos azul oscuro (#17222F), naranja (#FD7100) y cyan. Nodos conectados por líneas finas que simulan una red neuronal. El centro tiene un nodo más grande brillante (el "cerebro"). Estilo: flat/semi-3D futurista pero limpio, no recargado. Similar al estilo visual de OpenAI o DeepMind en sus pages. Fondo oscuro para que se integre con la sección dark.

**Por qué esta imagen:** La sección "Cerebro de Grialink" vende la capacidad de IA. Una ilustración abstracta de alta calidad comunica sofisticación tecnológica sin necesidad de explicar detalles técnicos. El estilo debe ser coherente con la marca.

---

### 📸 11. Integration Logos — ProductIntegrations.astro (Products page)

**Componente:** `ProductIntegrations.astro` líneas 28-51
**Especificación:** SVG o PNG con fondo transparente, ~200×60px cada uno

**Logos necesarios (alta resolución, monocromo o color):**

- Google Workspace (Calendar, Gmail)
- Meta (Facebook Ads, Instagram)
- Apollo.io
- WhatsApp Business API
- Mailchimp / SendGrid (si aplica)
- Zoom / Google Meet (si aplica)
- Strictly / sistema de pagos (si aplica)
- Cualquier EMR/HCE con el que se integren

**Por qué:** Los logos de integración comunican ecosistema. "Ya se conecta con las herramientas que usas" elimina objeción de adopción.

---

### 📸 12. Logo Cloud (Clientes) — LogoCloud.astro (Home page)

**Componente:** `LogoCloud.astro` líneas 23-64
**Especificación:** SVG o PNG transparente, ~200×60px
**Actualmente:** 6 nombres FALSOS renderizados como texto (DENTALPRO, MediCare, etc.)

**Lo necesario:**
Logos reales de clínicas/empresas clientes. Si no hay clientes aún, hay 3 opciones:

1. **Eliminar la sección** temporalmente (preferible a mostrar logos falsos)
2. **Reemplazar con "Featured in" / "As seen in"** si han aparecido en medios
3. **Usar logos de partners/integraciones** en su lugar

---

### 📸 13. OG Image — Social sharing (Todas las páginas)

**Ubicación:** Meta tags en cada página
**Especificación:** 1200×630px, PNG/JPG
**Actualmente:** No existe

**Descripción de la imagen ideal:**
Imagen con fondo degradado navy→naranja. Logo de Grialink centrado-izquierda. Texto titular de la página a la derecha. Diseño limpio, legible en miniatura (como se ve en previews de WhatsApp, LinkedIn, Twitter). Variantes:

- `og-home.png`: "El SES inteligente para clínicas"
- `og-products.png`: "Ecosistema tecnológico de vanguardia"
- `og-pricing.png`: "Planes flexibles para cada clínica"
- `og-about.png`: "Conoce al equipo detrás de Grialink"
- `og-contact.png`: "Hablemos sobre el futuro de tu clínica"

---

## PARTE 4: Mejoras para hacer la landing más profesional

### 🔴 TIER 1 — Impacto inmediato (hacer primero)

#### 1. Screenshots reales del producto

**Problema:** No hay ni un solo screenshot real. Toda la UI es mockup CSS.
**Cómo resolverlo:** Crear mockups en Figma de alta fidelidad o usar screenshots de staging. Mínimo 3: dashboard general, pipeline de pacientes, analytics. Colocarlos en ProductsHero, AIImpact y como respaldo del Hero principal del Home.

#### 2. Testimonios reales con foto y nombre

**Problema:** Cero social proof verificable.
**Cómo resolverlo:** Crear una sección `Testimonials.astro` con carousel o grid de 3-6 testimonios. Cada uno con: cita, nombre completo, cargo, clínica, foto de la persona. Colocar en Home entre Products y CTA. Si no hay clientes reales aún, usar beta testers o advisors.

#### 3. Sección "How it Works" (3-4 pasos)

**Problema:** No hay claridad sobre el proceso de adopción.
**Cómo resolverlo:** Crear `HowItWorks.astro` con 3-4 pasos numerados:

  1. "Agenda una demo personalizada" (icono: calendar)
  2. "Configuración guiada en 48h" (icono: settings)
  3. "Migración de datos segura" (icono: shield+data)
  4. "Tu clínica operando con IA" (icono: rocket)
Cada paso con icono, título, 1-2 oraciones. Conectarlos con una línea visual.

#### 4. Video demo embed

**Problema:** Hay CTA de "Ver Demo" que no lleva a nada.
**Cómo resolverlo:** Grabar/producir un video de 60-90 segundos mostrando el producto. Embeber con lazy-load iframe (YouTube/Vimeo). Alternativa: Loom walkthrough. Colocar en el Hero del Home como modal o en Products page.

#### 5. Arreglar todos los links rotos

**Problema:** `/login`, `/register`, `/privacy`, `/terms`, `/help`, `/docs`, `/tutorials` — ninguno existe.
**Cómo resolverlo:**

- `/login` y `/register`: Redirect a la app real o a un waitlist form
- `/privacy` y `/terms`: Crear páginas con contenido legal
- `/help`, `/docs`, `/tutorials`: Crear stubs o eliminar los links

---

### 🟡 TIER 2 — Alto impacto (hacer segundo)

#### 6. Sección de seguridad/compliance dedicada

**Problema:** Solo hay un badge pequeño en pricing. Healthcare SaaS demanda transparencia en seguridad.
**Cómo resolverlo:** Crear `SecuritySection.astro` con:

- Certificaciones: HIPAA, SOC 2, encriptación AES-256
- "Tus datos nunca se comparten con terceros"
- Uptime SLA (99.9%)
- Auditorías regulares
- Iconos de shields/locks/check-marks
Colocar en Home + mención en todas las páginas.

#### 7. Tabla comparativa de planes

**Problema:** Los planes se ven en cards individuales pero no hay comparación directa.
**Cómo resolverlo:** Crear `PricingComparison.tsx` (React para sticky header). Tabla con columnas = planes, filas = features agrupadas por categoría. Checkmarks, X, valores numéricos. Destacar el plan recomendado. Muy estándar en SaaS, aumenta claridad.

#### 8. Números con impacto (stats animados)

**Problema:** No hay cifras concretas que generen impresión.
**Cómo resolverlo:** Crear `StatsCounter.astro` con animación de conteo (IntersectionObserver + CSS counter o React):

- "+500 clínicas activas" (o el número real)
- "1M+ pacientes gestionados"
- "99.9% uptime"
- "24h soporte promedio"
Colocar entre Hero y Logo Cloud en Home.

#### 9. Real social media links + Open Graph images

**Problema:** Icons de redes en footer apuntan a `#`. No hay OG images.
**Cómo resolverlo:** Configurar las URLs reales. Diseñar 5 OG images (una por página) de 1200×630px. Agregarlas al componente SEO.

#### 10. Página 404 personalizada

**Problema:** No existe. Links rotos muestran la 404 default.
**Cómo resolverlo:** Crear `src/pages/404.astro` con diseño de marca, mensaje amigable, links al Home, Products y Contact. Ilustración acorde.

---

### 🟢 TIER 3 — Pulido profesional (hacer tercero)

#### 11. Microinteracciones y animaciones mejoradas

**Problema:** Las animaciones actuales son fade-in básico.
**Cómo resolverlo:**

- Stagger en grids (cards aparecen una tras otra con 100ms delay)
- Hover en cards con sombra elevada + borde sutil
- Scroll-triggered parallax sutil en Hero
- Números que cuentan desde 0 al entrar en viewport
- Transición suave entre estados del formulario de contacto
- Navbar glass effect que se intensifica al scrollear

#### 12. Dark/Light mode con pulido fino

**Problema:** Existe pero puede mejorarse.
**Cómo resolverlo:**

- Asegurar que los screenshots del producto tengan variantes dark/light
- Ajustar los product card colors (bg-blue-100 se ve lavado en dark mode)
- Revisar todos los contrastes WCAG en ambos modos
- Transición suave al cambiar (ya existe pero verificar en todos los components)

#### 13. Optimización de imágenes con Astro Image

**Problema:** Todas las imágenes usan `<img>` nativo, no `<Image>` de Astro.
**Cómo resolverlo:** Migrar a `<Image>` de `astro:assets`:

- Genera automáticamente WebP/AVIF
- Crea `srcset` responsivo
- Previene CLS con `width`/`height` automáticos
- Lazy loading nativo

#### 14. Lead capture mejorado

**Problema:** Solo hay un formulario de contacto. No hay lead magnets.
**Cómo resolverlo:**

- Crear inline newsletter signup en footer
- Ofrecer recurso descargable ("Guía: 5 formas de reducir no-shows con IA")
- Exit-intent popup (detectable con mouseleave en React)
- Sticky bottom bar en móvil con CTA "Agenda tu demo"

#### 15. Rich snippets y SEO avanzado

**Problema:** JSON-LD básico. No hay FAQ schema, Organization schema en home, BreadcrumbList.
**Cómo resolverlo:**

- Agregar `Organization` schema en Home
- Agregar `FAQPage` schema en Pricing (ya tiene FAQ content)
- Agregar `BreadcrumbList` en todas las sub-páginas
- Agregar `WebSite` schema con `SearchAction` (si aplica)
- Verificar sitemap.xml (ya está configurado con @astrojs/sitemap)
- Agregar `robots.txt` optimizado

#### 16. Performance audit

**Problema:** No se ha medido formalmente.
**Cómo resolverlo:**

- Correr Lighthouse en cada página
- Optimizar LCP (probablemente el hero image)
- Prefetch de rutas internas
- Preload de fuente Inter (ya se hace con preconnect, verificar preload del subset)
- Verificar que React solo se hidrata donde es estrictamente necesario

---

## Checklist de entregables priorizados

```
INMEDIATO (Tier 1):
☐ Responder las 46 preguntas de este documento
☐ Proveer screenshots reales o mockups de Figma del producto
☐ Proveer testimonios reales (mínimo 3)
☐ Proveer fotos del equipo (o decidir usar AI-generated)
☐ Proveer logos de clientes reales (o decidir eliminar la sección)
☐ Definir a dónde apuntan los CTAs de registro y login
☐ Tener textos legales (privacy + terms)

CORTO PLAZO (Tier 2):
☐ Grabar/producir video demo
☐ Definir integraciones reales completas
☐ Configurar redes sociales reales
☐ Proveer métricas reales (clínicas, pacientes, uptime)

MEDIO PLAZO (Tier 3):
☐ Implementar blog/recursos
☐ Crear casos de éxito detallados
☐ Configurar analytics
☐ Integrar formulario con backend real
```

Legal pages — Create /privacy and /terms pages (footer links exist but pages don't)
404 page — Branded 404 at src/pages/404.astro
Team section — Replace placeholder team member data with real team info
Real testimonials — Add social proof section when customer testimonials are available
Image optimization — Add real team/product screenshots to replace placeholder alt texts
