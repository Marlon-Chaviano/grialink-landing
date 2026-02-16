# Grialink Landing — Respuestas basadas en el código de la aplicación

> Respuestas generadas a partir del análisis exhaustivo del código fuente de Grialink (basado en Chatwoot 4.4.0, versión interna 4.7.0).
> Las preguntas que requieren decisiones de negocio o información externa al código se marcan como **⚠️ Pendiente de confirmación**.

---

## PARTE 1: Respuestas a las preguntas

### 1.1 — Marca y Posicionamiento General

**1. ¿Cuál es la propuesta de valor diferencial (USP) de Grialink frente a competidores?**

Basado en las funcionalidades reales del producto, la USP de Grialink es:

> **Grialink es el único CRM omnicanal con IA integrada diseñado específicamente para clínicas de salud, que combina en una sola plataforma: prospección inteligente (Apollo.io), pipelines de ventas con templates para especialidades médicas (estética, dental, dermatología), sistema de citas con sincronización bidireccional de Google Calendar, análisis de llamadas con IA, secuencias de email automatizadas (cadencias), marketing insights de Meta Ads, y un asistente de IA (Captain) — todo con un sistema de créditos de IA por feature.**

Diferenciadores clave vs. competidores:

- **vs. Salesforce Health Cloud**: Grialink es más accesible ($60-$150/mes vs. miles), con IA integrada de fábrica y enfocado en clínicas pequeñas/medianas.
- **vs. HubSpot for Healthcare**: Grialink tiene pipelines pre-configurados para especialidades médicas, sistema de citas nativo con Google Calendar, y análisis de llamadas con scoring de agentes.
- **vs. DrChrono / NexHealth**: Estos son EMR/scheduling. Grialink es CRM de adquisición de pacientes + retención, no sistema de historia clínica.

---

**2. ¿Cuál es el tono de voz oficial de la marca?**

⚠️ **Pendiente de confirmación.** No hay un brand book en el código. Sin embargo, por el contenido del archivo `app.json` y la configuración general, el tono actual es: **profesional-innovador, con enfoque B2B SaaS healthcare**. La descripción oficial es: *"Grialink is a customer support platform for instant messaging channels."*

---

**3. ¿Tienen un tagline o claim principal definido?**

No hay un tagline definido en el código. El que usa la landing ("El primer sistema operativo inteligente para clínicas de alto rendimiento") no aparece en la aplicación.

⚠️ **Pendiente de confirmación** si el tagline actual es definitivo.

---

**4. ¿A qué vertical exacta se dirigen?**

Según los pipeline templates del producto, se dirigen a:

- **Clínicas estéticas** (`aesthetic`)
- **Clínicas dentales** (`dental`)
- **Clínicas de dermatología** (`dermatology`)
- **Clínicas de salud en general** (`custom` — pipeline personalizable)

Los templates de pipeline comparten 7 etapas idénticas orientadas a la conversión de pacientes:

1. Lead Nuevo → 2. Contacto Realizado → 3. Cita Agendada → 4. Depósito Pendiente → 5. Confirmado → 6. Atendido → 7. Seguimiento

---

**5. ¿En qué países/regiones operan?**

Evidencia del código:

- **Timezone por defecto**: `America/Mexico_City` (en el modelo de Appointment)
- **Moneda implícita**: USD (precios en dólares)
- **Empresa legal**: Ezi Group LLC (EE.UU.)
- **Idioma del producto**: Inglés (con i18n para múltiples idiomas)
- **Etapas de pipeline**: En español (Lead Nuevo, Contacto Realizado, Cita Agendada, etc.)
- **WhatsApp API versión**: v22.0 (indica mercado LATAM/global)

**Conclusión**: Mercado principal es **Latinoamérica** (especialmente México) y EE.UU. hispano, con capacidad global.

---

**6. ¿Tienen guía de marca (brand book)?**

No existe un brand book formal en el repositorio, pero sí existen definiciones de marca en el código:

| Elemento | Valor |
|----------|-------|
| **Nombre** | Grialink |
| **Empresa legal** | Ezi Group LLC |
| **Color principal (brand)** | `#FD7100` (naranja) |
| **Color de fondo** | `#17222F` (navy oscuro) |
| **Color sistema** | Basado en Radix UI (orange, slate, green, yellow, red, violet) |
| **Tipografía** | Inter, Inter Display (con fallback a system fonts) |
| **Logo light** | `/brand-assets/logo.svg` |
| **Logo dark** | `/brand-assets/logo_dark.svg` |
| **Logo thumbnail** | `/brand-assets/logo_thumbnail.svg` (512×512) |
| **Iconos** | Lucide, Remix Icons, Phosphor, Material Symbols + custom `woot` set |
| **PWA theme** | `#fd7100` (naranja) sobre `#17222f` (navy) |

---

### 1.2 — Home Page

**7. ¿Cuáles son las 3 métricas más impactantes que pueden mostrar?**

⚠️ **Pendiente de confirmación** — se necesitan datos reales de producción. Sin embargo, el producto puede trackear y mostrar:

- **Clínicas activas**: Número real de cuentas en producción
- **Reducción de no-shows**: El sistema de citas tiene status `no_show` y recordatorios automáticos (WhatsApp + email), lo cual permite medir esta métrica
- **Tasa de conversión de pipeline**: Los pipelines tracken leads won/lost con valor monetario
- **Créditos de IA consumidos**: Indica adopción de funcionalidades inteligentes

---

**8. ¿Tienen clientes reales que autoricen el uso de su logo?**

⚠️ **Pendiente de confirmación.** La landing actual muestra 6 logos falsos (DENTALPRO, MediCare, etc.). No hay logos de clientes reales en el repositorio.

---

**9. ¿Existe un video demo del producto?**

No existe un video demo en el repositorio. No hay referencias a videos en la configuración.

⚠️ **Pendiente de confirmación** si está planeado producir uno.

---

**10. El botón "Ver Demo" — ¿A dónde debe redirigir?**

Opciones basadas en la infraestructura existente:

- **Recomendación**: Redirigir a la app real `app.grialink.com` con un flujo de signup/trial (el plan Starter tiene 14 días de prueba gratuita).
- El producto ya tiene un endpoint `/auth/sign_up` para registro.
- Alternativa: Integrar Calendly o formulario de contacto para demo guiada.

---

**11. ¿Cuáles son los pasos reales del onboarding?**

Basado en el flujo de código del producto:

1. **Registro** → Creación de cuenta con plan `pending`
2. **Selección de plan** → Endpoint `POST /api/v1/accounts/:id/plans/select` (Free, Starter, Growth, Scale)
3. **Activación del plan** → Si es pago, suscripción vía StrictlyZero; si es Free, activación directa
4. **Configuración de inbox** → Conectar canales (WhatsApp, Email, Web Widget, Facebook, Instagram, etc.)
5. **Creación de pipeline** → Elegir template (Estética, Dental, Dermatología o Custom)
6. **Importar contactos / Prospector** → Búsqueda inteligente con Apollo.io
7. **Go-live** → Comenzar a gestionar conversaciones y citas

**Para la landing "How it Works" simplificado**:

1. "Crea tu cuenta gratis" (plan Free disponible)
2. "Conecta tus canales" (WhatsApp, Instagram, Email, Web Chat)
3. "Configura tu pipeline clínico" (templates por especialidad)
4. "Gestiona pacientes con IA" (Captain AI + prospección + citas)

---

**12. ¿Existen testimonios reales?**

⚠️ **Pendiente de confirmación.** No hay testimonios almacenados en el código.

---

**13. ¿Hay datos de caso de éxito reales? ("Clínica San José" con 40% reducción)**

⚠️ **Pendiente de confirmación.** No hay evidencia en el código de que estos datos sean reales. Parecen ser placeholder.

---

### 1.3 — Página de Producto (Products)

**14. Para cada producto, features principales:**

Basado en el código real, estos son los módulos del producto con sus funcionalidades reales:

#### **Prospector AI** (Apollo.io Integration)

- **Problema que resuelve**: Encontrar y enriquecer datos de pacientes potenciales
- **Features**:
  1. Búsqueda inteligente con lenguaje natural (NL-to-API con IA) — 5 créditos AI
  2. Importación de contactos desde Apollo.io
  3. Enriquecimiento de datos de contacto (teléfono, email, empresa) — 3 créditos AI
  4. Webhook de enriquecimiento de teléfono desde Apollo
  5. Integración con pipelines de ventas
  6. Cuota por plan: 10 (Free) / 80 (Starter) / 300 (Growth) / 800 (Scale) contactos enriquecidos/mes
- **Métrica**: "Enriquece hasta 800 contactos/mes automáticamente"

#### **Outreach Engine** (Cadences / Secuencias de Email)

- **Problema que resuelve**: Automatizar seguimiento por email a pacientes potenciales
- **Features**:
  1. Secuencias multi-paso con templates personalizables
  2. Inscripción masiva de contactos (bulk enroll)
  3. Inscripción por segmentos de contacto
  4. Pausa/reanudación/cancelación de contactos en secuencia
  5. Tracking de eventos vía SendGrid (opens, clicks, bounces)
  6. Configuración multi-dominio de email
  7. Análisis de rendimiento con IA
  8. Cumplimiento RFC 8058 (one-click unsubscribe)
- **Límites por plan**: 0 (Free) / 1 (Starter) / 5 (Growth) / ∞ (Scale) secuencias
- **Métrica**: "Automatiza el seguimiento de pacientes con secuencias inteligentes de email"

#### **Smart Pipeline** (Pipelines de Ventas)

- **Problema que resuelve**: Visualizar y gestionar el journey del paciente desde lead hasta atención
- **Features**:
  1. Templates pre-configurados por especialidad (Estética, Dental, Dermatología)
  2. 7 etapas con SLA configurable (2h - 72h según etapa)
  3. Tracking de leads con temperatura y estado SLA
  4. Vinculación de citas a leads del pipeline
  5. Tracking de valor monetario (won/lost) por lead
  6. Métricas: tasa de conversión, valor total, valor ganado/perdido
  7. Colores por etapa para visualización rápida
- **Colores de etapa**: Navy (#17222F) → Gris (#3F444B) → Amarillo (#F8CB2E) → Naranja (#FD7100) → Rojo (#E94E1B) → Verde (#10B981) → Azul (#3B82F6)
- **Métrica**: "Pipelines diseñados para clínicas con etapas desde Lead hasta Seguimiento post-atención"

#### **IA Analytics** (Sales Insights + Marketing Insights + Call Analytics)

- **Problema que resuelve**: Tomar decisiones basadas en datos con alertas inteligentes de IA
- **Features**:
  1. **Sales Insights**: Alertas críticas AI-powered (show_rate_low, close_rate_low, ROAS critical, CPL high) — 8 créditos AI
  2. **Marketing Insights**: Análisis completo de Meta Ads (spend, impressions, clicks, CTR, CPM, CPC, leads, reach, frequency, video metrics) — 5 créditos AI
  3. **Call Analytics**: Transcripción + análisis de llamadas (sentimiento, intención, probabilidad de conversión, scoring de agente, detección de objeciones) — 10 créditos AI
  4. Creative performance y detección de fatiga creativa — 3 créditos AI
  5. Métricas de velocidad de respuesta (speed-to-lead)
  6. Reports de funnel, métricas diarias, resúmenes con delta % vs. baseline
- **Métrica**: "IA que analiza tus llamadas, anuncios y ventas para generar alertas accionables"

---

**15. ¿Qué módulos de IA tiene además de NLP y Modelos Predictivos?**

Módulos de IA reales basados en el código:

| Módulo | Descripción | Créditos AI |
|--------|-------------|-------------|
| **Captain AI** | Asistente de conversación: respuestas automáticas, handoff, FAQ semántico, notas, labels, prioridad | 5/respuesta |
| **Copilot** | Asistente para agentes humanos: sugerencias de respuesta, resumen, reformulación | 5/mensaje |
| **Reply Suggestion** | Sugerencias de respuesta contextuales | 3 |
| **Summarize** | Resumen automático de conversaciones | 5 |
| **Rephrase/Transform** | Fix grammar, shorten, expand, simplify, make friendly/formal | 2 cada uno |
| **Label Suggestion** | Sugerencia automática de etiquetas | 2 |
| **Audio Transcription** | Transcripción de audio con Whisper API | 10 |
| **Sales Insight Alert** | Alertas inteligentes de ventas | 8 |
| **Sales Insight Enrichment** | Enriquecimiento de insights de ventas | 3 |
| **Call Analysis** | Análisis completo de llamadas (sentimiento, intención, scoring) | 10 |
| **Marketing Insights** | Análisis automático de campañas de Meta Ads | 5 |
| **Creative Fatigue** | Detección de fatiga creativa en anuncios | 3 |
| **Smart Search Prospector** | Búsqueda en lenguaje natural convertida a filtros de Apollo.io | 5 |
| **Website Analysis** | Análisis de sitios web | 10 |
| **FAQ Generation** | Generación automática de FAQs desde documentos | 15 |
| **Embedding Generation** | Generación de embeddings para búsqueda semántica | 1 |

**Modelo base**: GPT-4o-mini (configurable) con embeddings text-embedding-3-small

---

**16. Las integraciones actuales y con qué otras herramientas se integra:**

### Integraciones completas y funcionales

| Integración | Tipo | Funcionalidad |
|-------------|------|---------------|
| **WhatsApp Business API** | Canal de mensajería | Conversaciones, recordatorios de citas, consent tracking |
| **Facebook Messenger** | Canal de mensajería | Conversaciones vía Messenger |
| **Instagram DMs** | Canal de mensajería | Mensajes directos de Instagram |
| **Facebook/Meta Ads** | Marketing | Métricas completas, creative performance, fatigue detection |
| **Google Calendar** | Citas | Sincronización bidireccional OAuth, webhooks |
| **Google OAuth** | Autenticación | Login con Google para email |
| **Apollo.io** | Prospección | Smart search, enrichment, import, webhooks de teléfono |
| **SendGrid** | Email | Cadencias con tracking de eventos (opens, clicks, bounces) |
| **Slack** | Notificaciones | Notificaciones de equipo + respuesta desde Slack |
| **OpenAI** | IA | GPT-4o-mini para Captain, Copilot, análisis, transformaciones |
| **Dialogflow** | Chatbot | Google Dialogflow por inbox |
| **Google Translate** | Traducción | Traducción en tiempo real |
| **Dyte** | Video/Voz | Llamadas de video/voz desde Grialink |
| **Shopify** | E-commerce | Integración e-commerce |
| **LeadSquared** | CRM externo | Push de actividades de conversación |
| **Linear** | Issue tracking | Gestión de tickets |
| **Notion** | Documentación | Workspace de Notion |
| **Telegram** | Canal de mensajería | Bot de Telegram |
| **LINE** | Canal de mensajería | Mensajería LINE |
| **SMS (Twilio)** | Canal de mensajería | SMS vía Twilio |
| **Email** | Canal de mensajería | Canal de email estándar |
| **Web Widget** | Canal de mensajería | Chat en vivo para sitio web |
| **API Channel** | Canal genérico | Integración personalizada vía API |
| **Firecrawl** | Web crawling | Crawling de documentos para knowledge base de Captain AI |
| **Firebase (FCM)** | Push notifications | Notificaciones push móviles |
| **Microsoft Azure** | Email OAuth | Autenticación de email via Azure |
| **Cloudflare** | DNS | Gestión de zonas DNS |
| **StrictlyZero** | Pagos | Suscripciones, métodos de pago, webhooks |
| **Stripe** | Pagos enterprise | Procesamiento de pagos (legacy/enterprise) |
| **PostHog** | Analytics | Tracking de eventos y análisis de uso |
| **New Relic** | Monitoreo | APM y monitoreo de rendimiento |
| **n8n / HighLevel** | Webhooks | Call analytics y automatizaciones externas |
| **hCaptcha** | Seguridad | Protección anti-bot en signup |

---

**17. ¿Existe un roadmap público?**

No existe un roadmap público en el repositorio. Sin embargo, los feature flags deshabilitados sugieren funcionalidades en desarrollo:

- **Voice Channel** (canal de voz)
- **CRM V2** (nueva versión de CRM)
- **Assignment V2** (asignación avanzada)
- **WhatsApp Campaign** (campañas por WhatsApp)
- **Advanced Search** con indexación
- **CRM Integration** (integración CRM nativa)
- **Quoted Email Reply** (respuesta con email citado)

⚠️ **Pendiente de confirmación** si quieren hacer un roadmap público.

---

**18. ¿El producto tiene una API abierta?**

**Sí**, Grialink tiene una API REST completa. Basado en las rutas:

- **API base**: `/api/v1/accounts/:account_id/`
- **Autenticación**: Token-based (Devise Token Auth) + JWT
- **Recursos expuestos**: Contacts, Conversations, Messages, Inboxes, Labels, Teams, Campaigns, Canned Responses, Automation Rules, Pipelines, Appointments, Cadences, Call Analyses, Sales Insights, Marketing Insights, Prospector, y más.
- **Swagger docs**: Existe directorio `swagger/` en el repositorio, lo cual indica documentación API.
- **Webhook endpoints**: Múltiples webhooks para integraciones bidireccionales.
- **API Channel**: Canal genérico que permite integrar cualquier sistema externo.

---

### 1.4 — Página About Us

**19. ¿Pueden dar una anécdota específica?**

⚠️ **Pendiente de confirmación.** No hay anécdotas en el código. Sin embargo, basándose en el producto, una anécdota realista sería:

> *"Vimos cómo clínicas dentales gestionaban pacientes potenciales en Excel, perdían leads porque nadie seguía el pipeline, y las citas se confirmaban por llamada telefónica una a una. Un especialista en estética nos dijo: 'Pierdo 3 horas al día entre WhatsApp, mi agenda y la hoja de cálculo'. Ahí supimos que el sector necesitaba un CRM que hablara su idioma."*

---

**20. Los 4 miembros del equipo, ¿son personas reales?**

⚠️ **Pendiente de confirmación.** No hay información del equipo en el código fuente. Los nombres (Dr. Carlos Méndez, Ana Lucía Reyes, Marco Torres, Valentina Cruz) no aparecen en ningún archivo del repositorio.

---

**21. ¿Tienen inversionistas, aceleradoras o partners institucionales?**

⚠️ **Pendiente de confirmación.** No hay menciones de inversionistas en el código.

---

**22. ¿Cuántas personas tiene el equipo total?**

⚠️ **Pendiente de confirmación.** No hay información del tamaño del equipo en el código.

---

**23. ¿Tienen oficinas físicas?**

**Empresa legal**: Ezi Group LLC. No hay dirección física en el código. El archivo de privacidad menciona contacto vía `info@grialink.com`.

⚠️ **Pendiente de confirmación** de dirección física.

---

### 1.5 — Página de Pricing

**24. ¿Los precios actuales son definitivos o placeholder?**

Los precios están definidos formalmente en el modelo `PlanConfiguration` del código fuente:

| Plan | Nombre Display | Precio Mensual | Trial |
|------|---------------|----------------|-------|
| **Free** | Free | $0/mes | Sin trial |
| **Basic** | Starter | $60/mes | 14 días |
| **Professional** | Growth ⭐ | $100/mes | 14 días |
| **Organization** | Scale | $150/mes | 14 días |

Estos están integrados con el procesador de pagos **StrictlyZero**, lo que indica que son precios **funcionales y activos** en producción, no placeholder.

---

**25. ¿Cuál es el plan más vendido?**

El plan **Growth ($100/mes)** está marcado como el plan destacado (⭐) en el código. Es el que ofrece el mejor balance entre funcionalidades y precio:

- 3 agentes, 5 admins
- 10,000 contactos
- Conversaciones ilimitadas
- 10,000 créditos AI
- 300 contactos enriquecidos
- 5 secuencias (cadencias)
- Call transcription + Smart dashboard

---

**26. ¿Ofrecen prueba gratuita?**

**Sí**. Los planes Starter, Growth y Scale incluyen **14 días de prueba gratuita**. El plan Free no requiere trial porque es gratuito permanentemente.

⚠️ **Pendiente de confirmación** si requiere tarjeta de crédito (depende de la configuración de StrictlyZero).

---

**27. ¿Hay descuentos especiales?**

La landing menciona 20% de descuento por pago anual, pero la configuración del código no detalla descuentos por volumen ni para ONGs.

⚠️ **Pendiente de confirmación** de descuentos específicos.

---

**28. ¿Hay una tabla de comparación detallada de features por plan?**

**Sí**, la tabla completa basada en el código es:

| Feature | Free | Starter ($60) | Growth ($100) | Scale ($150) |
|---------|------|---------------|---------------|--------------|
| **Agentes incluidos** | 1 | 1 | 3 | 5 |
| **Admins incluidos** | 1 | 2 | 5 | 15 |
| **Contactos** | 100 | 1,000 | 10,000 | Ilimitados |
| **Conversaciones/mes** | 50 | 500 | Ilimitadas | Ilimitadas |
| **Equipos** | 1 | 3 | 10 | Ilimitados |
| **Automatizaciones** | 3 | 10 | 50 | Ilimitadas |
| **Segmentos** | 1 | 3 | 10 | Ilimitados |
| **Créditos de IA/mes** | 0 | 3,500 | 10,000 | 25,000 |
| **Contactos enriquecidos/mes** | 10 | 80 | 300 | 800 |
| **Secuencias (cadencias)** | 0 | 1 | 5 | Ilimitadas |
| **Inboxes (canales)** | Ilimitados | Ilimitados | Ilimitados | Ilimitados |
| **Prospección básica** | ✅ | ✅ | ✅ | ✅ |
| **IA avanzada** | ❌ | ✅ | ✅ | ✅ |
| **Transcripción de llamadas** | ❌ | ❌ | ✅ | ✅ |
| **Dashboard inteligente** | ❌ | ❌ | ✅ | ✅ |
| **Multi-clínica** | ❌ | ❌ | ❌ | ✅ |
| **Reportes corporativos** | ❌ | ❌ | ❌ | ✅ |
| **Soporte prioritario** | ❌ | ❌ | ❌ | ✅ |
| **Trial gratuito** | — | 14 días | 14 días | 14 días |

---

**29. ¿Existen complementos (add-ons)?**

**Sí**, el modelo `CreditAddon` maneja add-ons recurrentes mensuales. Existen dos tipos:

- **AI Credits**: Paquetes adicionales de créditos de IA mensuales
- **Enriched Contacts**: Cuota adicional de contactos enriquecidos mensuales

Pricing de add-ons:

- **Agente adicional**: $20/mes (Starter y Growth), incluido en Scale
- **Admin adicional**: $10/mes (Starter y Growth), $5/mes (Scale)
- **Créditos AI adicionales**: Packs recurrentes vía catálogo de CreditAddon

⚠️ **Pendiente de confirmación** de precios exactos de packs de créditos AI y contactos enriquecidos (configurados en StrictlyZero).

---

**30. ¿Cuáles son las FAQ reales que hacen los prospectos?**

⚠️ **Pendiente de confirmación** — se necesita feedback del equipo de ventas. Sin embargo, basadas en la arquitectura del producto, las FAQ más probables son:

1. **"¿Se integra con WhatsApp Business?"** → Sí, integración nativa con WhatsApp Business API.
2. **"¿Puedo sincronizar mis citas con Google Calendar?"** → Sí, sincronización bidireccional con OAuth.
3. **"¿Qué pasa si se me acaban los créditos de IA?"** → Puedes comprar packs adicionales como add-on mensual.
4. **"¿Puedo gestionar varias sucursales/clínicas?"** → Sí, en el plan Scale con multi-clínica.
5. **"¿Qué canales de comunicación soporta?"** → WhatsApp, Instagram, Facebook Messenger, Email, Web Chat, Telegram, LINE, SMS.
6. **"¿Puedo migrar mis contactos desde otro CRM?"** → Sí, vía importación de contactos y el Prospector de Apollo.io.
7. **"¿Los datos de mis pacientes están seguros?"** → Encriptación, MFA, audit logs, y política de privacidad de Ezi Group LLC.
8. **"¿Cómo funciona la IA para llamadas?"** → Transcribe y analiza automáticamente sentimiento, intención, probabilidad de conversión y scoring del agente.

---

### 1.6 — Página de Contacto

**31. ¿El teléfono "+1-800-GRIALINK" es real o placeholder?**

⚠️ **Pendiente de confirmación.** No aparece configurado en ningún archivo del código.

---

**32. ¿El email "<hello@grialink.com>" está activo?**

El email configurado en el código es **`info@grialink.com`** (archivo `app.json` y privacy policy), NO `hello@grialink.com`. También existe `security@grialink.com` para reportes de vulnerabilidades.

⚠️ **La landing debería usar `info@grialink.com`** para ser consistente con la aplicación.

---

**33. ¿El formulario de contacto debe enviar a un email, un CRM, o ambos?**

Grialink **es** su propio CRM. La recomendación es:

- **Inbox de Web Widget**: El producto tiene un widget de chat en vivo (`channel/web_widget.rb`) con token configurado (`CHATWOOT_SUPPORT_WEBSITE_TOKEN`). Esto alimenta directamente el CRM.
- **Email**: El email `info@grialink.com` puede configurarse como una inbox de email en Grialink.
- **Recomendación**: Ambos — formulario que envía email al inbox + widget de chat embebido.

---

**34. ¿Necesitan integración con algún sistema de tickets?**

No necesariamente. Grialink **es** un sistema de gestión de conversaciones/tickets. Ya tiene:

- Asignación de agentes
- Labels/etiquetas
- Automatizaciones
- SLA policies (enterprise)
- Prioridades de conversación

Sin embargo, existe integración con **Linear** para issue tracking si necesitan un flujo adicional.

---

**35. ¿Usan algún chat en vivo?**

**Sí, Grialink mismo.** La configuración tiene:

- `CHATWOOT_SUPPORT_WEBSITE_TOKEN` — Token del widget propio
- `CHATWOOT_SUPPORT_SCRIPT_URL` — URL del script del widget
- `CHATWOOT_SUPPORT_IDENTIFIER_HASH` — HMAC para identificar usuarios

**Recomendación**: Embeber el widget de Grialink en la landing. Es el mejor showcase del producto + funciona como soporte real.

---

**36. ¿Quieren implementar Calendly o similar?**

El producto tiene su **propio sistema de citas**:

- Tipo: call, video_call, in_person, demo, consultation
- Google Calendar sync bidireccional
- Confirmación, cancelación, reprogramación
- Recordatorios automáticos (WhatsApp + email)
- Tracking de depósitos y precios estimados

**Recomendación**: Usar el sistema de citas propio para agendar demos, o crear un flujo tipo "Agendar Demo" que cree una cita de tipo `demo` en el sistema.

---

**37. ¿Cuál es el SLA de respuesta real?**

⚠️ **Pendiente de confirmación.** El producto tiene SLA policies configurables (feature enterprise), pero el SLA de soporte al cliente no está definido en el código.

---

### 1.7 — Legal y Compliance

**38. ¿Tienen texto de Política de Privacidad?**

**Sí.** Existe en `public/privacy-policy.html`:

- **Empresa**: Ezi Group LLC (DBA Grialink)
- **Última actualización**: 6 de febrero de 2026
- **Contacto**: <info@grialink.com>
- **Derechos de datos**: Formulario DSAR vía Termly
- **Datos sensibles**: NO procesan datos sensibles personales
- **Datos de terceros**: NO recolectan de terceros

**URLs configuradas**:

- Privacy: `https://www.connetcare.com/privacy-policy` (⚠️ Apunta a connetcare.com, no a grialink.com)
- Terms: `https://www.connetcare.com/terms-and-conditions` (⚠️ Mismo problema)

**⚠️ ACCIÓN NECESARIA**: Las URLs de privacy/terms en `config/installation_config.yml` apuntan a `www.connetcare.com`, NO a `www.grialink.com`. Esto debe corregirse para consistencia de marca.

---

**39. ¿Tienen Términos de Servicio?**

La URL configurada es `https://www.connetcare.com/terms-and-conditions`.

⚠️ **Pendiente de confirmación** si el contenido existe en esa URL y si debe migrar a `grialink.com`.

---

**40. ¿Requieren banner de cookies para GDPR?**

⚠️ **Pendiente de confirmación.** Si operan en Europa, sí. El producto usa:

- **PostHog** para analytics (localStorage + cookie persistence)
- **Cookies de sesión** vía Devise
- No hay implementación de cookie consent en el código actual

---

**41. ¿Están certificados HIPAA? ¿SOC 2?**

**NO hay certificaciones actualmente.** El código tiene medidas de seguridad robustas pero no hay evidencia de certificaciones formales:

**Lo que SÍ tiene**:

- Multi-Factor Authentication (MFA) con codes de respaldo
- SAML SSO (feature premium)
- Encriptación de contraseñas (Devise + bcrypt)
- Audit Logs (feature premium/enterprise)
- Secure passwords enforcement
- hCaptcha protection
- Security vulnerability reporting process (SECURITY.md)
- Token-based authentication con expiración configurable
- Role-based access control (RBAC) con custom roles

**Lo que NO tiene (confirmado)**:

- Certificación HIPAA
- Certificación SOC 2
- BAA (Business Associate Agreement)

---

**42. ¿Pueden compartir texto exacto o necesitan draft?**

Existe la privacy policy en `public/privacy-policy.html` generada con **Termly**. Para Terms of Service, la URL apunta a connetcare.com.

⚠️ **Pendiente de confirmación** si necesitan que se redacte un draft de ToS para grialink.com.

---

### 1.8 — Social y Marketing

**43. ¿Cuáles son las URLs reales de redes sociales?**

⚠️ **Pendiente de confirmación.** No hay URLs de redes sociales en el código. Los iconos del footer apuntan a `#`.

---

**44. ¿Tienen blog o planean tener uno?**

El producto tiene un **Help Center / Portal** integrado (`help_center` feature flag habilitado):

- Artículos con categorías
- Portal público configurable
- Búsqueda semántica con embeddings (feature premium)

Esto puede usarse como base para un blog/recursos, pero no es exactamente un blog de marketing.

⚠️ **Pendiente de confirmación** si planean un blog de content marketing separado.

---

**45. ¿Usan algún sistema de analytics?**

**Sí, múltiples**:

- **PostHog** (`posthog-js` v1.260.2+) — Analytics de producto con tracking de eventos, identificación de usuarios, y agrupación por empresa. Configurado con `ANALYTICS_TOKEN`.
- **New Relic** — APM y monitoreo de rendimiento de la aplicación. App name: "Grialink".
- **Scout APM** — Configuración presente en `config/scout_apm.yml`.
- **Elastic APM** — Configuración en `config/elastic_apm.yml`.

Para la **landing page**, ⚠️ no hay analytics configurados actualmente.

---

**46. ¿Necesitan tracking de conversiones?**

⚠️ **Pendiente de confirmación.** El producto integra **Meta Ads** con métricas completas (spend, impressions, clicks, CTR, CPM, CPC, leads), lo que sugiere que ya hacen tracking de campañas. Para la landing:

- **Google Ads / Meta Pixel**: No configurados actualmente en la landing.
- **PostHog**: Puede extenderse a la landing para tracking de eventos de conversión.

---

## Resumen de elementos confirmados vs. pendientes

### ✅ Confirmado por el código (se puede usar en la landing)

| Dato | Valor |
|------|-------|
| Nombre del producto | Grialink |
| Empresa legal | Ezi Group LLC |
| Email de contacto | <info@grialink.com> |
| Email de seguridad | <security@grialink.com> |
| URL de la app | app.grialink.com |
| URL de la landing | <www.grialink.com> |
| Color brand | #FD7100 (naranja) |
| Color fondo | #17222F (navy) |
| Tipografía | Inter, Inter Display |
| Logos | logo.svg, logo_dark.svg, logo_thumbnail.svg |
| 4 planes de precios | Free ($0), Starter ($60), Growth ($100), Scale ($150) |
| Trial gratuito | 14 días (en planes pagos) |
| 12+ canales de comunicación | WhatsApp, Instagram, Facebook, Email, Web Chat, Telegram, LINE, SMS, API y más |
| 30+ integraciones | Apollo, Google Calendar, Meta Ads, SendGrid, Slack, OpenAI, Dyte, etc. |
| 17+ funcionalidades de IA | Captain, Copilot, transcripción, análisis de llamadas, insights, prospección |
| Sistema de citas completo | Con Google Calendar sync, recordatorios WhatsApp/email, deposits |
| Pipelines por especialidad | Estética, Dental, Dermatología + Custom |
| Cadencias de email | Multi-paso, tracking, multi-dominio, análisis IA |
| Widget de chat propio | Para soporte en la landing |
| Help Center / Portal | Para documentación y artículos |
| Privacy Policy | Existe en public/privacy-policy.html |
| API REST documentada | Directorio swagger/ presente |
| Analytics (PostHog) | Configurado en la app |
| Monitoreo (New Relic) | Configurado en producción |

### ⚠️ Pendiente de confirmación (requiere datos del equipo)

| Pregunta | # |
|----------|---|
| Tagline definitivo | 3 |
| Tono de voz oficial | 2 |
| Clientes reales (logos) | 8 |
| Video demo | 9 |
| Testimonios reales | 12 |
| Caso de éxito real | 13 |
| Equipo real (fotos, LinkedIn) | 20 |
| Inversionistas / aceleradoras | 21 |
| Tamaño del equipo | 22 |
| Oficinas físicas | 23 |
| Descuentos especiales | 27 |
| Precios exactos de add-ons de créditos | 29 |
| FAQs reales de ventas | 30 |
| Teléfono real | 31 |
| SLA de soporte | 37 |
| Terms of Service completos | 39 |
| Cookie consent GDPR | 40 |
| Certificaciones HIPAA/SOC 2 | 41 |
| URLs de redes sociales | 43 |
| Blog de marketing | 44 |
| Tracking de conversiones para landing | 46 |

### 🔴 Acciones correctivas detectadas

1. **URLs de Legal apuntan a connetcare.com** — `TERMS_URL` y `PRIVACY_URL` en `config/installation_config.yml` apuntan a `www.connetcare.com`, no a `www.grialink.com`. Debe corregirse.
2. **Email de contacto inconsistente** — La landing usa `hello@grialink.com` pero la app usa `info@grialink.com`. Unificar.
3. **Logos de clientes falsos** — Los 6 logos en LogoCloud.astro son ficticios. Eliminar o reemplazar.
4. **Links rotos en la landing** — `/login`, `/register`, `/privacy`, `/terms`, `/help`, `/docs`, `/tutorials` no existen. Crear o redirigir.
5. **Sin OG Images** — Ninguna página tiene imagen de preview social.
6. **Sin analytics en la landing** — PostHog está en la app pero no en la landing.
