# pronCOVO App

Aplicativo móvel React Native para o pronCOVO - Companion App de Caminhada Inteligente.

## Pré-requisitos

- Node.js >= 16
- npm ou yarn
- Para iOS: macOS com Xcode
- Para Android: Android Studio

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Para iOS (apenas no macOS):
```bash
cd ios && pod install && cd ..
```

3. Configure as variáveis de ambiente:
```bash
cp env.example .env
# Edite o arquivo .env com suas configurações
```

## Executando o App

### Desenvolvimento

```bash
# Inicie o Metro bundler
npm start

# Em outro terminal, execute:
# Para iOS
npm run ios

# Para Android
npm run android
```

## Estrutura do Projeto

```
src/
├── screens/       # Telas do app
├── components/    # Componentes reutilizáveis
├── services/      # Serviços (API, GPS, Audio)
├── hooks/         # Custom hooks
├── types/         # TypeScript types
└── utils/         # Utilitários
```

## Configuração

As variáveis de ambiente são configuradas no arquivo `.env`. Veja `env.example` para referência.

## Desenvolvimento

Este projeto usa:
- React Native 0.72.4
- TypeScript
- React Navigation
- Metro bundler
