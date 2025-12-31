# pronCOVO - Companion App de Caminhada Inteligente

Aplicativo móvel que atua como um companheiro de caminhada inteligente, oferecendo explicações contextuais e sugestões de deslocamento com base em localização geográfica e mapa, utilizando IA fornecida pelo próprio usuário.

## 📋 Documentação

- **[SPEC.md](./SPEC.md)** - Documento de Requisitos Completo (DR/PRD)
- **[PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)** - Plano detalhado de implementação em 11 etapas
- **[agents.md](./agents.md)** - Instruções específicas para agentes de IA
- **[PROGRESS.md](./PROGRESS.md)** - Monitoramento de progresso das etapas

## 🏗️ Estrutura do Projeto

```
proncovo/
├── api/              # Backend NestJS
├── app/              # App React Native (iOS/Android)
├── SPEC.md           # Documento de requisitos
├── PLANO_IMPLEMENTACAO.md  # Plano de implementação
├── agents.md         # Guia para agentes de IA
└── PROGRESS.md       # Status das etapas
```

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 16+ e npm/yarn
- Para desenvolvimento iOS: Xcode e CocoaPods
- Para desenvolvimento Android: Android Studio e JDK
- Conta em provedor de IA (OpenAI, Anthropic, etc.)

### Instalação

```bash
# Backend
cd api
npm install
cp .env.example .env
# Editar .env com suas configurações
npm run start:dev

# App Móvel
cd app
npm install
# Para iOS
cd ios && pod install && cd ..
npm run ios
# Para Android
npm run android
```

## 🎯 Funcionalidades Principais (MVP)

- ✅ Autenticação via OAuth (Google, Microsoft, OpenAI)
- ✅ Integração com IA do usuário (sem tokens do sistema)
- ✅ Mapa com localização atual
- ✅ "Explique onde estou" - Briefing contextual em áudio
- ✅ "Para onde posso ir" - Sugestões de destinos próximos
- ✅ Live Mode controlado pelo usuário
- ✅ Privacidade por design (sem armazenamento persistente)

## 🔧 Tecnologias

### Backend
- NestJS (TypeScript)
- Express
- Integração com APIs de mapas (Google Places, Apple Maps)
- Proxy para provedores de IA

### App Móvel
- React Native
- TypeScript
- React Navigation
- react-native-maps
- TTS nativo

## 📝 Desenvolvimento

### Scripts Disponíveis

**Backend:**
```bash
npm run start:dev    # Desenvolvimento com watch
npm run build        # Build de produção
npm run test         # Testes unitários
npm run test:e2e     # Testes end-to-end
```

**App:**
```bash
npm start            # Metro bundler
npm run ios          # Executar no iOS
npm run android      # Executar no Android
npm test             # Testes
```

## 🔒 Segurança e Privacidade

- **Nenhum dado persistente**: Histórico, conversas e preferências não são armazenados
- **Tokens do usuário**: Todas as chamadas de IA usam tokens fornecidos pelo usuário
- **HTTPS obrigatório**: Toda comunicação é criptografada
- **Sem anúncios**: App monetizado apenas via assinatura

## 📊 Status do Projeto

Consulte [PROGRESS.md](./PROGRESS.md) para ver o status detalhado de cada etapa de implementação.

## 🤖 Para Agentes de IA

Se você é um agente de IA trabalhando neste projeto, consulte [agents.md](./agents.md) para instruções detalhadas sobre como implementar as funcionalidades.

## 📄 Licença

UNLICENSED - Proprietário

## 👥 Contribuindo

Este é um projeto privado. Para questões ou sugestões, entre em contato com o mantenedor.

