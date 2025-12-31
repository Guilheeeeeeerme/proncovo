# Guia para Agentes de IA - pronCOVO

Este documento fornece instruções específicas para agentes de IA que estão implementando o projeto pronCOVO.

## 📚 Documentos de Referência

Antes de começar, leia:
1. **[SPEC.md](./SPEC.md)** - Todos os requisitos funcionais e não funcionais
2. **[PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)** - Plano detalhado em 11 etapas
3. **[PROGRESS.md](./PROGRESS.md)** - Status atual das etapas (atualize após cada mudança)

## 🎯 Princípios Fundamentais

### 1. Privacidade por Design
- **NUNCA** armazene histórico de localização
- **NUNCA** armazene conversas ou interações
- **NUNCA** armazene preferências pessoais
- Use apenas memória volátil (variáveis em runtime)
- Limpe dados após cada sessão

### 2. Backend Leve e Orquestrador
- O backend **NÃO mantém estado** do usuário
- O backend **NÃO fornece tokens de IA** - apenas orquestra chamadas
- Todas as chamadas de IA usam tokens do **usuário**
- Backend é principalmente um proxy/orquestrador

### 3. Simplicidade
- Interface operável com uma mão
- Botões grandes e acessíveis
- Mínimo de interações necessárias
- App utilizável sem tutorial

## 🏗️ Estrutura de Arquivos

### Backend (api/)

```
api/src/
├── auth/              # RF-01: Autenticação OAuth
│   ├── auth.module.ts
│   ├── auth.controller.ts
│   └── auth.service.ts
├── ai/                # RF-02: Integração com IAs
│   ├── ai.module.ts
│   ├── ai.service.ts
│   └── providers/     # OpenAI, Anthropic, etc.
├── location/          # RF-04, RF-05: Serviços de localização
│   ├── location.module.ts
│   ├── location.service.ts
│   └── location.controller.ts
├── maps/              # RF-08: Integração com APIs de mapas
│   ├── maps.module.ts
│   ├── maps.service.ts
│   └── maps.controller.ts
├── audio/             # RF-07: Geração de áudio (opcional)
│   └── audio.module.ts
├── subscription/      # RN-01: Assinaturas
│   ├── subscription.module.ts
│   └── subscription.service.ts
├── config/            # Configuração
│   └── config.module.ts
└── common/            # Utilitários compartilhados
    ├── guards/
    └── interceptors/
```

### App Móvel (app/)

```
app/src/
├── screens/
│   ├── LoginScreen.tsx        # RF-01: Autenticação
│   ├── HomeScreen.tsx         # RF-03: Tela principal com mapa
│   ├── SettingsScreen.tsx     # RF-02: Gerenciar IAs
│   └── SubscriptionScreen.tsx # RN-01: Assinaturas
├── components/
│   ├── MapView.tsx            # RF-03, RF-08: Mapa
│   ├── ExplainButton.tsx      # RF-04: Botão "Explique onde estou"
│   ├── SuggestionsList.tsx   # RF-05: Lista de sugestões
│   ├── SuggestionMarker.tsx   # RF-05: Marcadores no mapa
│   ├── DestinationCard.tsx    # RF-05: Card de destino
│   ├── LiveModeToggle.tsx    # RF-06: Toggle Live Mode
│   ├── AudioPlayer.tsx        # RF-07: Player de áudio
│   └── ErrorBoundary.tsx      # Tratamento de erros
├── services/
│   ├── auth.service.ts        # Autenticação
│   ├── ai.service.ts          # Integração com IA
│   ├── location.service.ts    # GPS e localização
│   ├── maps.service.ts        # APIs de mapas
│   ├── audio.service.ts       # TTS e áudio
│   ├── subscription.service.ts # Assinaturas
│   └── api.service.ts         # Cliente HTTP
├── hooks/
│   ├── useAuth.ts
│   ├── useLocation.ts
│   └── useLiveMode.ts
├── types/
│   └── index.ts               # TypeScript types
└── utils/
    └── errorHandler.ts
```

## 🔄 Fluxo de Trabalho Recomendado

### 1. Antes de Começar uma Etapa

1. Leia a etapa completa em [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)
2. Verifique o status em [PROGRESS.md](./PROGRESS.md)
3. Leia os requisitos relacionados no [SPEC.md](./SPEC.md)
4. Verifique dependências da etapa

### 2. Durante a Implementação

1. Crie/modifique arquivos conforme especificado no plano
2. Siga os padrões de código existentes
3. Implemente testes unitários quando apropriado
4. Documente decisões importantes em comentários

### 3. Após Completar uma Etapa

1. Atualize [PROGRESS.md](./PROGRESS.md) marcando a etapa como completa
2. Execute testes relevantes
3. Verifique que não quebrou funcionalidades anteriores
4. Commit com mensagem descritiva

## 📋 Checklist por Etapa

### Etapa 1: Configuração Inicial
- [ ] Migrar app para React Native
- [ ] Configurar TypeScript no app
- [ ] Configurar CORS no backend
- [ ] Criar estrutura de pastas
- [ ] Configurar variáveis de ambiente

### Etapa 2: Autenticação
- [ ] Implementar OAuth no backend
- [ ] Implementar OAuth no app
- [ ] Armazenar tokens de forma segura
- [ ] Gerenciar múltiplos provedores de IA
- [ ] Validar tokens de IA

### Etapa 3: Geolocalização e Mapas
- [ ] Solicitar permissões de localização
- [ ] Obter localização atual
- [ ] Integrar MapView
- [ ] Buscar POIs próximos
- [ ] Exibir localização no mapa

### Etapa 4: "Explique onde estou"
- [ ] Capturar contexto geográfico
- [ ] Enviar para IA
- [ ] Receber briefing
- [ ] Reproduzir áudio
- [ ] UI do botão

### Etapa 5: "Para onde posso ir"
- [ ] Gerar 3-5 sugestões
- [ ] Exibir no mapa
- [ ] Permitir seleção
- [ ] Contexto inicial do destino

### Etapa 6: Live Mode
- [ ] Botão de controle
- [ ] Lógica de ativação explícita
- [ ] Não iniciar automaticamente

### Etapa 7: Privacidade
- [ ] Remover armazenamento persistente
- [ ] Limpar dados após sessão
- [ ] Configurar HTTPS
- [ ] Validar que nenhum dado é salvo

### Etapa 8: Assinatura
- [ ] Integrar com stores
- [ ] Verificar assinatura
- [ ] Bloquear funcionalidades sem assinatura

### Etapa 9: Otimização
- [ ] Performance < 3s
- [ ] Cache apropriado
- [ ] UX otimizada
- [ ] Tratamento de erros

### Etapa 10: Testes
- [ ] Testes unitários (70% cobertura)
- [ ] Testes de integração
- [ ] Validar critérios de aceitação

### Etapa 11: Deploy
- [ ] Deploy backend
- [ ] Build iOS
- [ ] Build Android
- [ ] Configurar stores

## ⚠️ Regras Importantes

### NUNCA Faça:
- ❌ Armazenar histórico de localização
- ❌ Armazenar conversas ou interações
- ❌ Usar tokens de IA do sistema (sempre do usuário)
- ❌ Iniciar Live Mode automaticamente
- ❌ Criar conta própria (só OAuth externo)
- ❌ Exibir anúncios
- ❌ Armazenar credenciais no backend

### SEMPRE Faça:
- ✅ Validar entrada de dados
- ✅ Tratar erros graciosamente
- ✅ Usar HTTPS
- ✅ Limpar dados após sessão
- ✅ Testar em dispositivos reais
- ✅ Seguir padrões de código existentes
- ✅ Atualizar PROGRESS.md após mudanças

## 🔍 Validação de Requisitos

Antes de considerar uma etapa completa, verifique:

1. **Requisitos Funcionais**: Todos os RFs da etapa estão implementados?
2. **Requisitos Não Funcionais**: Performance, usabilidade, privacidade atendidos?
3. **Critérios de Aceitação**: O MVP funciona conforme especificado?
4. **Testes**: Há cobertura de testes adequada?

## 🐛 Tratamento de Erros

### Padrão de Erro no Backend
```typescript
// Sempre retorne erros estruturados
throw new HttpException(
  { message: 'Descrição amigável', code: 'ERROR_CODE' },
  HttpStatus.BAD_REQUEST
);
```

### Padrão de Erro no App
```typescript
// Sempre exiba mensagens amigáveis ao usuário
try {
  // operação
} catch (error) {
  showError('Mensagem amigável para o usuário');
  // Log técnico apenas em desenvolvimento
  if (__DEV__) console.error(error);
}
```

## 📝 Convenções de Código

### Nomenclatura
- **Arquivos**: camelCase para serviços, PascalCase para componentes
- **Componentes**: PascalCase (ex: `MapView.tsx`)
- **Hooks**: camelCase com prefixo `use` (ex: `useLocation.ts`)
- **Serviços**: camelCase (ex: `auth.service.ts`)

### TypeScript
- Sempre use tipos explícitos
- Evite `any` - use `unknown` se necessário
- Defina interfaces para objetos complexos

### Commits
- Use mensagens descritivas
- Formato: `feat: descrição` ou `fix: descrição`
- Referencie a etapa quando relevante: `feat(etapa-4): implementa explicação de localização`

## 🧪 Testes

### Backend
- Testes unitários para todos os serviços
- Testes de integração para endpoints críticos
- Mock de APIs externas

### App
- Testes de componentes críticos
- Testes de hooks customizados
- Testes de integração de fluxos principais

## 📞 Dúvidas?

Se encontrar ambiguidades:
1. Consulte primeiro o [SPEC.md](./SPEC.md)
2. Verifique exemplos similares no código existente
3. Siga o princípio: **privacidade e simplicidade primeiro**

## 🎯 Prioridades

1. **Privacidade** - Sempre a prioridade máxima
2. **Simplicidade** - Menos é mais
3. **Performance** - < 3s de resposta
4. **Usabilidade** - Operável com uma mão

