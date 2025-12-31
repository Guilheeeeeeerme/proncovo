# pronCOVO API

Backend NestJS para o pronCOVO - Companion App de Caminhada Inteligente.

## Pré-requisitos

- Node.js >= 16
- npm ou yarn

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp env.example .env
# Edite o arquivo .env com suas configurações
```

## Executando o Backend

### Desenvolvimento

```bash
npm run start:dev
```

O servidor estará disponível em `http://localhost:3000` (ou a porta configurada em `.env`).

### Produção

```bash
npm run build
npm run start:prod
```

## Estrutura do Projeto

```
src/
├── auth/          # Autenticação OAuth
├── ai/            # Integração com IAs
├── location/      # Serviços de geolocalização
├── maps/          # Integração com APIs de mapas
├── audio/         # Geração de áudio (TTS)
├── subscription/  # Gerenciamento de assinaturas
├── config/        # Configuração
└── common/        # Utilitários compartilhados
```

## Configuração

As variáveis de ambiente são configuradas no arquivo `.env`. Veja `env.example` para referência.

### Variáveis Importantes

- `PORT`: Porta do servidor (padrão: 3000)
- `CORS_ORIGIN`: Origem permitida para CORS
- `NODE_ENV`: Ambiente (development, production)
- `LOG_LEVEL`: Nível de log (debug, info, warn, error)

## Desenvolvimento

Este projeto usa:
- NestJS 9.x
- TypeScript
- class-validator para validação
- class-transformer para transformação

## Testes

```bash
# Testes unitários
npm test

# Testes com cobertura
npm run test:cov

# Testes e2e
npm run test:e2e
```
