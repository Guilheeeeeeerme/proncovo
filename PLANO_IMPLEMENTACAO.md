# Plano de Implementação Completo - pronCOVO

## Visão Geral da Arquitetura

O sistema será composto por:
- **Backend (NestJS)**: API leve que orquestra chamadas de IA e serviços de geolocalização
- **App Móvel (React Native)**: Aplicativo iOS/Android com mapa, GPS e interface de áudio
- **Integrações**: APIs de mapas nativas, provedores de IA (OpenAI, Anthropic, etc.)

## Etapa 1: Configuração Inicial e Infraestrutura Base

### 1.1 Setup do App Móvel
- Migrar de React web para React Native
- Configurar projeto React Native com TypeScript
- Configurar iOS (Xcode) e Android (Gradle)
- Setup de navegação (React Navigation)
- Configurar variáveis de ambiente

**Arquivos a criar/modificar:**
- `app/package.json` - Atualizar para React Native
- `app/tsconfig.json` - Configuração TypeScript
- `app/babel.config.js` - Configuração Babel
- `app/metro.config.js` - Configuração Metro bundler
- `app/android/` e `app/ios/` - Configurações nativas

### 1.2 Configuração do Backend
- Configurar CORS para aceitar requisições do app móvel
- Setup de variáveis de ambiente (.env)
- Configurar logging estruturado
- Setup de validação (class-validator, class-transformer)

**Arquivos a criar/modificar:**
- `api/.env.example` - Template de variáveis
- `api/src/config/` - Módulo de configuração
- `api/src/common/` - Utilitários compartilhados

### 1.3 Estrutura de Pastas
```
api/src/
  ├── auth/          # Autenticação OAuth
  ├── ai/            # Integração com IAs
  ├── location/      # Serviços de geolocalização
  ├── maps/          # Integração com APIs de mapas
  ├── audio/         # Geração de áudio (TTS)
  └── subscription/  # Gerenciamento de assinaturas

app/src/
  ├── screens/       # Telas do app
  ├── components/    # Componentes reutilizáveis
  ├── services/      # Serviços (API, GPS, Audio)
  ├── hooks/         # Custom hooks
  ├── types/         # TypeScript types
  └── utils/         # Utilitários
```

## Etapa 2: Autenticação e Gerenciamento de IA (RF-01, RF-02)

### 2.1 Autenticação OAuth
- Implementar login via Google, Microsoft, OpenAI
- Armazenar tokens de forma segura (Keychain/Keystore)
- Não armazenar credenciais no backend

**Backend:**
- `api/src/auth/auth.module.ts`
- `api/src/auth/auth.controller.ts` - Endpoints de autenticação
- `api/src/auth/auth.service.ts` - Lógica de OAuth

**App:**
- `app/src/services/auth.service.ts`
- `app/src/screens/LoginScreen.tsx`
- `app/src/hooks/useAuth.ts`

### 2.2 Gerenciamento de Provedores de IA
- Permitir conectar múltiplas contas de IA
- Alternar entre provedores
- Validar tokens de IA

**Backend:**
- `api/src/ai/ai.module.ts`
- `api/src/ai/ai.service.ts` - Proxy para chamadas de IA
- `api/src/ai/providers/` - Implementações por provedor (OpenAI, Anthropic, etc.)

**App:**
- `app/src/services/ai.service.ts`
- `app/src/screens/SettingsScreen.tsx` - Gerenciar IAs conectadas

## Etapa 3: Geolocalização e Mapas (RF-03, RF-08)

### 3.1 Permissões e GPS
- Solicitar permissões de localização
- Obter localização atual do usuário
- Monitorar mudanças de localização

**App:**
- `app/src/services/location.service.ts`
- `app/src/hooks/useLocation.ts`
- Configurar permissões em `app/android/AndroidManifest.xml` e `app/ios/Info.plist`

### 3.2 Integração com Mapas
- Integrar MapView (react-native-maps)
- Exibir localização atual no mapa
- Suporte a zoom e navegação básica

**App:**
- `app/src/components/MapView.tsx`
- `app/src/screens/HomeScreen.tsx` - Tela principal com mapa
- Instalar `react-native-maps`

### 3.3 Busca de Pontos de Interesse
- Integrar com APIs de mapas (Google Places, Apple Maps)
- Buscar POIs próximos à localização atual
- Filtrar e classificar resultados

**Backend:**
- `api/src/maps/maps.module.ts`
- `api/src/maps/maps.service.ts` - Busca de POIs
- `api/src/maps/maps.controller.ts`

**App:**
- `app/src/services/maps.service.ts`

## Etapa 4: Funcionalidade "Explique onde estou" (RF-04)

### 4.1 Captura de Contexto
- Obter localização atual
- Buscar POIs próximos
- Preparar contexto para IA

**Backend:**
- `api/src/location/location.module.ts`
- `api/src/location/location.service.ts` - Agregar contexto geográfico
- `api/src/location/location.controller.ts` - Endpoint `/location/explain`

### 4.2 Integração com IA
- Enviar contexto para IA do usuário
- Receber briefing curto
- Tratar erros e timeouts

**Backend:**
- `api/src/ai/ai.service.ts` - Método `generateBriefing(context)`
- Prompts otimizados para contexto geográfico

### 4.3 Reprodução de Áudio (RF-07)
- Text-to-Speech (TTS) nativo ou serviço
- Reproduzir briefing automaticamente
- Fallback para texto

**App:**
- `app/src/services/audio.service.ts`
- `app/src/components/AudioPlayer.tsx`
- Integrar TTS nativo (expo-speech ou react-native-tts)

**Backend (opcional):**
- `api/src/audio/audio.module.ts` - Se usar TTS via API

### 4.4 UI da Funcionalidade
- Botão "Explique onde estou" na tela principal
- Loading state durante processamento
- Exibição de texto como fallback

**App:**
- `app/src/components/ExplainButton.tsx`
- Atualizar `app/src/screens/HomeScreen.tsx`

## Etapa 5: Funcionalidade "Para onde posso ir" (RF-05)

### 5.1 Geração de Sugestões
- Buscar 3-5 destinos próximos interessantes
- Filtrar por relevância e distância
- Preparar contexto para cada sugestão

**Backend:**
- `api/src/location/location.service.ts` - Método `getSuggestions(location)`
- Endpoint `/location/suggestions`

### 5.2 Exibição no Mapa
- Marcar sugestões no mapa
- Permitir seleção de destino
- Destacar destino selecionado

**App:**
- `app/src/components/SuggestionMarker.tsx`
- `app/src/components/SuggestionsList.tsx`
- Atualizar `app/src/components/MapView.tsx`

### 5.3 Contexto Inicial do Destino
- Ao selecionar, gerar briefing sobre o destino
- Reproduzir áudio automaticamente
- Exibir informações básicas

**App:**
- `app/src/components/DestinationCard.tsx`
- Integrar com serviço de IA para briefing do destino

## Etapa 6: Live Mode Controlado (RF-06)

### 6.1 Controle Explícito
- Botão para ativar/desativar Live Mode
- Indicador visual de status
- Não iniciar automaticamente

**App:**
- `app/src/components/LiveModeToggle.tsx`
- `app/src/hooks/useLiveMode.ts`
- Estado global para Live Mode

### 6.2 Lógica de Ativação
- Aguardar comando explícito após cada briefing
- Não monitorar movimento automaticamente
- Resetar após cada interação

**App:**
- `app/src/services/liveMode.service.ts`

## Etapa 7: Privacidade e Segurança (RNF-01, RS-01)

### 7.1 Sem Armazenamento Persistente
- Não salvar histórico de localização
- Não salvar conversas
- Não salvar preferências pessoais
- Limpar dados após cada sessão

**Backend:**
- Validar que nenhum dado é persistido
- Usar apenas memória volátil
- Logs sem dados pessoais

**App:**
- Não usar AsyncStorage para dados sensíveis
- Limpar cache após uso

### 7.2 Segurança de Comunicação
- HTTPS obrigatório
- Validação de certificados
- Criptografia de tokens em trânsito

**Backend:**
- Configurar HTTPS
- Validação de requests
- Rate limiting básico

## Etapa 8: Assinatura e Monetização (RN-01)

### 8.1 Sistema de Assinatura
- Integração com App Store / Play Store
- Verificação de assinatura ativa
- Bloqueio de funcionalidades sem assinatura

**Backend:**
- `api/src/subscription/subscription.module.ts`
- `api/src/subscription/subscription.service.ts` - Verificar assinatura
- `api/src/subscription/subscription.controller.ts`

**App:**
- `app/src/services/subscription.service.ts`
- `app/src/screens/SubscriptionScreen.tsx`
- Integrar com react-native-purchases ou similar

### 8.2 Middleware de Verificação
- Middleware para verificar assinatura em endpoints protegidos
- Retornar erro apropriado se não assinante

**Backend:**
- `api/src/common/guards/subscription.guard.ts`

## Etapa 9: Polimento e Otimização (RNF-02, RNF-03)

### 9.1 Performance
- Otimizar tempo de resposta (< 3s excluindo IA)
- Cache de POIs quando apropriado
- Lazy loading de componentes

**Backend:**
- Otimizar queries de POIs
- Cache de resultados de mapas
- Compressão de respostas

**App:**
- Otimizar renderização do mapa
- Debounce de requisições de localização
- Memoização de componentes

### 9.2 Usabilidade
- Interface operável com uma mão
- Botões grandes e acessíveis
- Feedback visual claro
- Minimizar interações complexas

**App:**
- `app/src/components/` - Componentes otimizados
- Design system básico
- Animações suaves

### 9.3 Tratamento de Erros
- Mensagens de erro amigáveis
- Fallbacks apropriados
- Retry automático quando possível

**App:**
- `app/src/components/ErrorBoundary.tsx`
- `app/src/utils/errorHandler.ts`

## Etapa 10: Testes e Validação

### 10.1 Testes Unitários
- Testes de serviços críticos
- Testes de hooks customizados
- Cobertura mínima de 70%

**Backend:**
- `api/src/**/*.spec.ts`

**App:**
- `app/src/**/*.test.ts`

### 10.2 Testes de Integração
- Fluxo completo de "Explique onde estou"
- Fluxo completo de "Para onde posso ir"
- Testes de autenticação

### 10.3 Validação de Critérios de Aceitação
- [ ] Usuário consegue caminhar, pedir contexto e receber áudio sem fricção
- [ ] Nenhum dado pessoal persistente é armazenado
- [ ] Mapa é o centro da experiência
- [ ] IA só fala quando solicitada
- [ ] App utilizável sem tutorial

## Etapa 11: Deploy e Distribuição

### 11.1 Backend
- Setup de ambiente de produção
- Deploy em cloud (AWS, GCP, Azure)
- Configurar CI/CD
- Monitoramento básico

### 11.2 App Móvel
- Build de produção iOS
- Build de produção Android
- Configurar App Store Connect
- Configurar Google Play Console
- Testes em dispositivos reais

## Dependências Principais

### Backend
- `@nestjs/common`, `@nestjs/core`
- `@nestjs/config` - Configuração
- `@nestjs/jwt` - JWT (se necessário)
- `axios` - HTTP client para APIs externas
- `class-validator`, `class-transformer` - Validação

### App
- `react-native` - Framework base
- `react-native-maps` - Mapas
- `@react-navigation/native` - Navegação
- `react-native-geolocation-service` - GPS
- `expo-speech` ou `react-native-tts` - TTS
- `react-native-purchases` - Assinaturas
- `@react-native-async-storage/async-storage` - Storage (apenas para tokens)

## Ordem de Implementação Recomendada

1. **Etapa 1** - Base (sem isso, nada funciona)
2. **Etapa 2** - Autenticação (necessário para tudo)
3. **Etapa 3** - Mapas (fundação da UX)
4. **Etapa 4** - Primeira funcionalidade core
5. **Etapa 5** - Segunda funcionalidade core
6. **Etapa 6** - Live Mode (refinamento)
7. **Etapa 7** - Segurança (crítico antes de produção)
8. **Etapa 8** - Monetização (necessário para lançamento)
9. **Etapa 9** - Polimento (UX/Performance)
10. **Etapa 10** - Testes (validação)
11. **Etapa 11** - Deploy (lançamento)

## Notas Importantes

- O backend é **leve e orquestrador** - não mantém estado
- Todas as chamadas de IA usam tokens do **usuário**, não do sistema
- **Privacidade por design** - nenhum dado persistente
- App deve funcionar **offline mínimo** (apenas mapa básico, sem IA)
- Foco em **simplicidade** - menos é mais

