# Quick Start Guide - pronCOVO

Guia rápido para começar a trabalhar no projeto.

## 🚀 Setup Inicial

### 1. Clone e Instale Dependências

```bash
# Backend
cd api
npm install
cp .env.example .env
# Editar .env com suas configurações

# App
cd ../app
npm install
cp .env.example .env
# Editar .env com suas configurações
```

### 2. Configurar Variáveis de Ambiente

**Backend (`api/.env`):**
```env
NODE_ENV=development
PORT=3000
CORS_ORIGIN=http://localhost:3000
GOOGLE_MAPS_API_KEY=your_key_here
```

**App (`app/.env`):**
```env
API_BASE_URL=http://localhost:3000
GOOGLE_MAPS_API_KEY=your_key_here
```

### 3. Executar em Desenvolvimento

```bash
# Terminal 1 - Backend
cd api
npm run start:dev

# Terminal 2 - App (React Native)
cd app
npm start
# Em outro terminal: npm run ios ou npm run android
```

## 📋 Checklist Rápido para Nova Funcionalidade

1. [ ] Ler etapa no [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)
2. [ ] Verificar dependências em [PROGRESS.md](./PROGRESS.md)
3. [ ] Criar arquivos conforme especificado
4. [ ] Implementar funcionalidade
5. [ ] Adicionar testes
6. [ ] Atualizar [PROGRESS.md](./PROGRESS.md)
7. [ ] Testar em dispositivo real

## 🔍 Comandos Úteis

### Backend
```bash
npm run start:dev    # Desenvolvimento
npm run build        # Build
npm test             # Testes
npm run lint         # Linter
```

### App
```bash
npm start            # Metro bundler
npm run ios          # iOS
npm run android      # Android
npm test             # Testes
```

## 📚 Documentação Essencial

- **[SPEC.md](./SPEC.md)** - Requisitos completos
- **[PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)** - Plano de implementação
- **[agents.md](./agents.md)** - Guia para agentes
- **[PROGRESS.md](./PROGRESS.md)** - Status atual
- **[TEMPLATES.md](./TEMPLATES.md)** - Templates de código

## ⚠️ Lembre-se

- **Privacidade primeiro**: Nunca armazenar dados pessoais
- **Tokens do usuário**: Sempre usar tokens fornecidos pelo usuário
- **Simplicidade**: Interface operável com uma mão
- **Atualizar PROGRESS.md**: Sempre após completar trabalho

## 🐛 Problemas Comuns

### Backend não inicia
- Verificar se porta 3000 está livre
- Verificar variáveis de ambiente
- Verificar dependências instaladas

### App não compila
- Limpar cache: `npm start -- --reset-cache`
- Reinstalar dependências: `rm -rf node_modules && npm install`
- Para iOS: `cd ios && pod install && cd ..`
- Para Android: Limpar build: `cd android && ./gradlew clean && cd ..`

### Erros de permissão
- Verificar `AndroidManifest.xml` (Android)
- Verificar `Info.plist` (iOS)
- Verificar permissões no dispositivo

## 📞 Próximos Passos

1. Escolha uma etapa em [PROGRESS.md](./PROGRESS.md)
2. Leia a seção correspondente em [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)
3. Consulte [agents.md](./agents.md) para detalhes técnicos
4. Use [TEMPLATES.md](./TEMPLATES.md) para acelerar desenvolvimento
5. Implemente e atualize o progresso!

