Perfeito. Abaixo está um **Documento de Requisitos Completo (DR / PRD)** em **Markdown**, estruturado para **engenharia, produto, design e stakeholders**.
Ele é **mais técnico e normativo** do que o spec anterior: aqui está *o que o sistema DEVE fazer*, *o que NÃO deve*, e *sob quais restrições*.

---

# 📄 Documento de Requisitos

## **pronCOVO** — Companion App de Caminhada Inteligente

---

## 1. Introdução

### 1.1 Objetivo do Documento

Este documento descreve **todos os requisitos funcionais, não funcionais, técnicos e de negócio** do aplicativo **pronCOVO**, servindo como referência única para desenvolvimento, validação e evolução do produto.

### 1.2 Visão do Produto

O **pronCOVO** é um aplicativo móvel que atua como um **companheiro de caminhada inteligente**, oferecendo explicações contextuais e sugestões de deslocamento com base em **localização geográfica e mapa**, utilizando **IA fornecida pelo próprio usuário**, com foco em **privacidade, simplicidade e invisibilidade**.

---

## 2. Escopo do Produto

### 2.1 Dentro do Escopo (MVP)

* Uso de mapa e GPS
* Interações sob demanda
* Áudio como canal principal
* Sugestões de locais próximos
* Uso de IA externa via conta do usuário
* Assinatura mensal/anual do app

### 2.2 Fora do Escopo (MVP)

* Chat contínuo
* Memória persistente
* Personalidade fixa da IA
* Marketplace de roteiros
* Conteúdo offline avançado
* Gamificação ou redes sociais

---

## 3. Definições Importantes

* **Usuário**: Pessoa que utiliza o app para explorar um local
* **IA do Usuário**: Provedor de IA conectado pelo próprio usuário
* **Briefing**: Explicação curta e contextual fornecida pela IA
* **Live Mode**: Modo ativado explicitamente pelo usuário para obter contexto imediato

---

## 4. Requisitos Funcionais (RF)

### RF-01 — Autenticação

* O sistema **DEVE** permitir login via provedores externos (ex: Google, Microsoft, OpenAI ou equivalentes).
* O sistema **NÃO DEVE** exigir criação de conta própria.
* O sistema **NÃO DEVE** armazenar credenciais do usuário.

---

### RF-02 — Uso de IA Externa

* O sistema **DEVE** utilizar exclusivamente a IA conectada pelo usuário.
* O sistema **NÃO DEVE** prover ou subsidiar tokens de IA.
* O sistema **DEVE** permitir alternar entre múltiplas subscriptions conectadas, quando disponíveis.

---

### RF-03 — Tela Principal

* O sistema **DEVE** exibir um mapa como elemento central da interface.
* O sistema **DEVE** mostrar a localização atual do usuário.
* O sistema **DEVE** disponibilizar dois botões principais:

  * “Explique onde estou”
  * “Para onde posso ir”

---

### RF-04 — Explicar Local Atual

* Ao acionar “Explique onde estou”, o sistema **DEVE**:

  * Capturar a localização atual
  * Identificar pontos relevantes próximos
  * Enviar contexto à IA
  * Receber um briefing curto
  * Reproduzir áudio automaticamente
* O sistema **DEVE** encerrar a interação após o briefing.

---

### RF-05 — Sugerir Próximos Destinos

* Ao acionar “Para onde posso ir”, o sistema **DEVE**:

  * Gerar entre 3 e 5 sugestões próximas
  * Exibir as sugestões no mapa
  * Permitir seleção de uma sugestão
* Após seleção, o sistema **DEVE**:

  * Destacar o destino
  * Fornecer contexto inicial em áudio

---

### RF-06 — Live Mode Controlado

* O sistema **DEVE** ativar o Live Mode apenas por ação explícita do usuário.
* O sistema **NÃO DEVE** iniciar falas automaticamente com base apenas em movimento.
* O sistema **DEVE** aguardar novo comando após cada briefing.

---

### RF-07 — Áudio

* O sistema **DEVE** utilizar áudio como principal meio de saída.
* O sistema **DEVE** funcionar com:

  * fones de ouvido
  * alto-falante do dispositivo
  * dispositivos externos de som
* O sistema **DEVE** oferecer texto como fallback.

---

### RF-08 — Integração com Mapas

* O sistema **DEVE** utilizar APIs de mapas nativas do dispositivo.
* O sistema **DEVE** permitir:

  * zoom
  * destaque de pontos
  * visualização de trajeto simples

---

## 5. Requisitos Não Funcionais (RNF)

### RNF-01 — Privacidade

* O sistema **NÃO DEVE** armazenar:

  * histórico de localização
  * conversas
  * preferências pessoais
* O sistema **DEVE** operar sem memória persistente.

---

### RNF-02 — Performance

* O tempo de resposta para iniciar um briefing **DEVE** ser inferior a 3 segundos (excluindo latência da IA).
* O sistema **DEVE** ser utilizável em mobilidade.

---

### RNF-03 — Usabilidade

* O sistema **DEVE** ser operável com uma mão.
* O sistema **DEVE** minimizar interações complexas.
* O sistema **NÃO DEVE** exigir leitura prolongada.

---

### RNF-04 — Disponibilidade

* O sistema **DEVE** funcionar enquanto houver:

  * GPS ativo
  * conexão com internet
  * IA conectada
* O sistema **NÃO GARANTE** funcionamento offline no MVP.

---

## 6. Requisitos de Segurança

### RS-01

* O sistema **DEVE** minimizar a superfície de dados sensíveis.
* O sistema **DEVE** transmitir dados apenas via canais seguros (HTTPS).
* O sistema **NÃO DEVE** atuar como custodiante de dados do usuário.

---

## 7. Requisitos de Negócio

### RN-01 — Monetização

* O sistema **DEVE** operar sob modelo de assinatura mensal ou anual.
* O sistema **NÃO DEVE** monetizar dados do usuário.
* O sistema **NÃO DEVE** exibir anúncios.

---

### RN-02 — Escalabilidade

* O sistema **DEVE** escalar sem aumento proporcional de custo de IA, pois o consumo é do usuário.
* O backend **DEVE** ser leve e principalmente orquestrador.

---

## 8. Restrições Técnicas

* O app **DEVE** rodar em iOS e Android.
* O app **NÃO DEVE** depender de um único provedor de IA.
* O backend **NÃO DEVE** manter estado do usuário.

---

## 9. Requisitos Futuramente Planejados (Fora do MVP)

* Marketplace de roteiros
* Vozes personalizadas
* Conteúdo multimídia
* Mapas offline
* Upload de imagens pelo usuário
* Briefings adaptativos por estilo

---

## 10. Critérios de Aceitação (MVP)

O MVP será considerado aceito quando:

* Um usuário conseguir caminhar, pedir contexto e receber áudio sem fricção
* Nenhum dado pessoal persistente for armazenado
* O mapa for o centro da experiência
* A IA só falar quando solicitada
* O app for utilizável sem tutorial

---

## 11. Considerações Finais

O **pronCOVO** é projetado para ser **mínimo, respeitoso e eficiente**, priorizando contexto imediato, autonomia do usuário e privacidade por design.

---

Se quiser, no próximo passo eu posso:

* converter isso em **backlog técnico (épicos e histórias)**
* criar **casos de uso UML**
* gerar **checklist de compliance**
* ou escrever a **documentação para investidores**

Esse documento já está em nível de entrega profissional.
