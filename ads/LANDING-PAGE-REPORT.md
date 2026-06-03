# Landing Page Report — Correa & Laia Advocacia

**URL:** https://www.trabalhista.correaelaiaadvocacia.com/trabalhista  
**Data:** 2026-05-27  
**Tipo de campanha:** Google Ads Search + Meta Ads (serviço local, advocacia trabalhista BH)

---

## Painel de Saúde

```
Landing Page Health — Correa & Laia Advocacia

Message Match:    ███████░░░  72/100
Page Speed:       ███████░░░  74/100
Mobile:           ███████░░░  70/100
Trust Signals:    ██████░░░░  62/100
CTA / Conversão:  ██████░░░░  68/100

SCORE GERAL:      █████████░  69/100
```

---

## 1. Message Match — 72/100

### Pontos fortes

| Elemento          | Status   | Detalhe                                                                                |
| ----------------- | -------- | -------------------------------------------------------------------------------------- |
| H1                | ✅ EXATO | "ADVOGADA TRABALHISTA EM BELO HORIZONTE" — match perfeito para palavra-chave principal |
| Keyword no corpo  | ✅       | BH, advogada trabalhista, horas extras, FGTS, rescisão — todos presentes               |
| CTA do anúncio    | ✅       | "Fale com um advogado" → WhatsApp direto — ação clara                                  |
| Serviços listados | ✅       | 9 serviços cobrem o universo de buscas trabalhistas                                    |

### Problemas

| Problema                                    | Impacto  | Detalhe                                                                                                                                                                                       |
| ------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Consulta GRATUITA" invisível acima do fold | 🔴 ALTO  | Mencionado só no subtítulo em fonte pequena e no rodapé da página. Para quem clica num anúncio prometendo consulta gratuita, essa confirmação precisa estar no H1 ou num badge visual na hero |
| Sem DKI / mensagem dinâmica                 | 🟡 MÉDIO | A mesma página serve todos os anúncios (horas extras, demissão, pejotização). Visitante que clicou em "advogado para horas extras" vê uma hero genérica                                       |
| Oferta "sem custo adiantado" enterrada      | 🟡 MÉDIO | O modelo ad exitum (pago só no final) é um diferencial fortíssimo — aparece apenas no FAQ, não na hero                                                                                        |

---

## 2. Page Speed — 74/100

### Pontos fortes

- Next.js SSR com otimização de imagens automática ✅
- Todas imagens em WebP ✅
- `font-display: swap` em Cinzel + Montserrat ✅
- GTM carregado `afterInteractive` (não bloqueia render) ✅
- Hero image com `priority` + `fetchPriority="high"` ✅
- `sizes="100vw"` na hero image (corrigido) ✅

### Problemas

| Problema                                        | Impacto  | Detalhe                                                                                                                          |
| ----------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `'use client'` desnecessário em ServicesSection | 🟡 MÉDIO | Força o bundle JS do cliente sem nenhum hook ou interatividade. Aumenta JS bundle size                                           |
| Dois Google Fonts (Cinzel + Montserrat)         | 🟡 MÉDIO | Cada fonte = round-trip extra para fonts.googleapis.com mesmo com preload                                                        |
| GTM container overhead desconhecido             | 🟡 MÉDIO | Se o container GTM-NC2RRJVR tiver muitas tags (Meta Pixel, remarketing, heatmaps), pode adicionar 200-500ms                      |
| Google Maps iframe carregado no load            | 🟡 MÉDIO | O iframe do Maps em LocationSection carrega mesmo que o usuário nunca chegue lá. Usar `loading="lazy"` com Intersection Observer |
| Vercel Analytics + GTM = dois trackers          | 🟢 BAIXO | Pequena duplicação. Manter GTM como fonte principal                                                                              |

---

## 3. Mobile Experience — 70/100

### Pontos fortes

- Layout totalmente responsivo com Tailwind ✅
- Botões CTA empilhados em mobile (`flex-col sm:flex-row`) ✅
- FloatingWhatsApp visível e com tap target adequado (≥48px) ✅
- Texto hero redimensiona corretamente (`text-2xl sm:text-3xl md:text-5xl`) ✅
- Navbar com menu hamburger funcional ✅

### Problemas

| Problema                                             | Impacto  | Detalhe                                                                                                                                                 |
| ---------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Número de telefone NÃO é link `tel:`                 | 🔴 ALTO  | `(31) 99947-1983` em ContactBar e LocationSection é texto simples. No mobile, impossível clicar para ligar. Conversão perdida                           |
| CTA principal não é full-width no mobile             | 🟡 MÉDIO | Botão "FALE COM UM ADVOGADO" usa `inline-flex`, não `w-full`. Em telas pequenas fica centralizado mas não preenche a largura, reduzindo a área de toque |
| "Consulta gratuita" não aparece above-fold no mobile | 🟡 MÉDIO | A hero ocupa 80vh, mas o texto da oferta fica na metade inferior e pode ser cortado                                                                     |

---

## 4. Trust Signals — 62/100

### Pontos fortes

- Logo no navbar e footer ✅
- Stats section: +13 anos, +300 clientes, +700 ações, 5.0 Google ✅
- OAB/MG 212.802 visível na seção Sobre ✅
- 3 depoimentos com foto, nome e link do Google Maps ✅
- Schema.org completo: LegalService, Attorney, FAQPage, AggregateRating ✅
- Disclaimer legal no footer ("não fazemos fraude") ✅
- Endereço físico completo ✅

### Problemas

| Problema                                           | Impacto  | Detalhe                                                                                                                                                   |
| -------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ratingCount: '3'` no schema — muito baixo         | 🔴 ALTO  | Google exibe estrelas nos resultados orgânicos e pode considerar insuficiente. Aumentar para pelo menos 10+ avaliações reais                              |
| Nenhum badge Google "Avaliações" visível na página | 🔴 ALTO  | "5.0 no Google" aparece apenas no StatsSection como número. Sem link, sem logo do Google, sem contagem visível — parece inventado para o visitante cético |
| Sem certificação OAB visual/badge                  | 🟡 MÉDIO | O número OAB/MG aparece em texto pequeno. Um badge visual da OAB aumenta confiança                                                                        |
| Apenas 3 depoimentos                               | 🟡 MÉDIO | Para advogada trabalhista, 3 é insuficiente. Prospects querem ver volume de casos resolvidos                                                              |

---

## 5. CTA / Conversão — 68/100

### Pontos fortes

- 4 pontos de CTA na página (hero, HowItWorks, PricingSection, FloatingWhatsApp) ✅
- WhatsApp como CTA = alta CVR no Brasil (usuários preferem WhatsApp a formulário) ✅
- Mensagem pré-preenchida no WhatsApp ✅
- GTM instalado (GTM-NC2RRJVR) para tracking ✅
- Sem formulário = sem atrito de preenchimento ✅

### Problemas

| Problema                                       | Impacto  | Detalhe                                                                                                                                                                    |
| ---------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nenhuma captura de UTM / gclid / fbclid        | 🔴 ALTO  | Cliques de Google Ads têm `gclid` na URL. Sem captura, não há como importar conversões de WhatsApp de volta para o Google Ads. ROI invisível                               |
| Mensagem do WhatsApp genérica em todos os CTAs | 🔴 ALTO  | Todos os botões enviam `"Olá, gostaria de agendar uma consultoria."` — sem contexto do que o visitante quer. Taxa de resposta no WhatsApp cai quando a mensagem é genérica |
| Cliques no WhatsApp não disparam evento GTM    | 🔴 ALTO  | Não há `dataLayer.push` nas âncoras do WhatsApp. Sem evento de conversão → Google Ads e Meta não sabem quem converteu → Smart Bidding não aprende                          |
| Sem alternativa de captura offline             | 🟡 MÉDIO | Se o usuário não quiser falar pelo WhatsApp agora, não há opção (email, formulário, agendamento Calendly). Conversão perdida                                               |
| Tel não é clicável (sem tracking de ligação)   | 🟡 MÉDIO | Além de não ser link `tel:`, sem tracking de call via GTM                                                                                                                  |

---

## Quick Wins — Prioridade de Implementação

### 🔴 CRÍTICO (implementar esta semana)

**1. Tel: link nos números de telefone** _(5 min)_

```tsx
// ContactBar e LocationSection
<a href="tel:+5531999471983">(31) 99947-1983</a>
```

**2. Evento GTM nos cliques do WhatsApp** _(30 min)_

```tsx
// Adicionar onClick em todos os botões WhatsApp
onClick={() => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'whatsapp_click',
      event_category: 'CTA',
      event_label: location, // 'hero' | 'howitworks' | 'pricing' | 'floating'
    });
  }
}}
```

Depois configurar no GTM: trigger = `whatsapp_click` → conversão Google Ads + Meta.

**3. Mensagem WhatsApp específica por seção** _(15 min)_

```
Hero:         "Olá! Vi o anúncio e gostaria de uma consulta GRATUITA sobre meus direitos trabalhistas."
HowItWorks:   "Olá! Quero entender como funciona o processo. Gostaria de agendar uma consulta."
Pricing:      "Olá! Gostaria de agendar minha consulta gratuita."
```

**4. Badge "Consulta GRATUITA" na hero** _(20 min)_  
Adicionar um badge visual acima do H1 ou no botão:

```tsx
<span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
  Consulta Gratuita
</span>
```

---

### 🟡 IMPORTANTE (implementar este mês)

**5. Captura de UTM/gclid e passagem para WhatsApp**

```tsx
// Hook useUTMCapture — salva params em sessionStorage
// Append aos links WhatsApp: ?utm_source=...&gclid=...
// Permite atribuição de campanhas por conversa no WhatsApp
```

**6. Remover `'use client'` de ServicesSection**  
Não há nenhum hook — é um componente puramente estático. Remover reduz o bundle JS do cliente.

**7. Lazy load do Maps iframe**  
O iframe do Google Maps já tem `loading="lazy"`, mas o browser pode carregá-lo mesmo assim. Usar Intersection Observer para inserir o src apenas quando o usuário chegar à seção.

**8. Link para reviews do Google com contagem real**

```tsx
// Em StatsSection, transformar "5.0 no Google" em link para o perfil Google Maps
<a href="https://maps.app.goo.gl/..." target="_blank" rel="noopener">
  ⭐ 5.0 · Ver avaliações no Google
</a>
```

---

### 🟢 ESTRATÉGICO (próximo trimestre)

**9. Landing pages dedicadas por tipo de caso**

- `/horas-extras` — headline: "Não recebeu horas extras? Recupere agora"
- `/demissao` — headline: "Foi demitido sem receber tudo? Saiba seus direitos"
- `/pejotizacao` — headline: "Trabalha como PJ mas tem chefe? Você pode ter vínculo"

Cada landing page com DKI (Dynamic Keyword Insertion) e mensagem pré-preenchida do WhatsApp específica.

**10. Pixel do Meta direto no código** (além do GTM)  
Para campanhas Meta Ads, considerar implementar o Meta Pixel diretamente no layout além do GTM para garantir disparo mesmo se GTM for bloqueado por ad blocker.

**11. Aumentar volume de depoimentos para ≥10**  
Pedir avaliações reais no Google Meu Negócio e exibir mais na página (slider ou grid expandido).

---

## Rastreamento de Conversões — Status Atual

| Plataforma       | Tag                 | Status            | Problema                                               |
| ---------------- | ------------------- | ----------------- | ------------------------------------------------------ |
| Google Ads       | Via GTM-NC2RRJVR    | ⚠️ Não verificado | Sem evento `whatsapp_click` → conversão não registrada |
| Meta Ads         | Via GTM (presumido) | ⚠️ Não verificado | Sem evento de conversão por clique no WhatsApp         |
| Google Analytics | Vercel Analytics    | ⚠️ Parcial        | Só page views — sem conversões                         |
| Ligações         | Sem implementação   | ❌ Ausente        | Tel sem link, sem tracking                             |

> **Ação mais urgente:** Configurar `whatsapp_click` como evento de conversão no GTM → importar para Google Ads e Meta Ads para ativar Smart Bidding com dados reais.

---

_Gerado por Orion / AIOX ads-landing skill — 2026-05-27_
