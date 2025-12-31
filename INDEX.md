# Índice de Documentação - pronCOVO

Guia rápido para navegar na documentação do projeto.

## 📄 Documentos Principais

### Para Entender o Projeto
1. **[README.md](./README.md)** - Visão geral e início rápido
2. **[SPEC.md](./SPEC.md)** - Documento de Requisitos Completo (DR/PRD)
3. **[PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)** - Plano detalhado em 11 etapas

### Para Desenvolver
4. **[agents.md](./agents.md)** - Guia completo para agentes de IA
5. **[PROGRESS.md](./PROGRESS.md)** - Monitoramento de progresso (atualize sempre!)
6. **[TEMPLATES.md](./TEMPLATES.md)** - Templates de código para acelerar desenvolvimento
7. **[QUICK_START.md](./QUICK_START.md)** - Guia rápido de setup

### Para Contribuir
8. **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Diretrizes de contribuição

## 🗂️ Estrutura de Arquivos

```
proncovo/
├── 📄 README.md              # Visão geral do projeto
├── 📄 SPEC.md                # Documento de requisitos
├── 📄 PLANO_IMPLEMENTACAO.md # Plano de implementação
├── 📄 agents.md              # Guia para agentes de IA
├── 📄 PROGRESS.md            # Status das etapas ⚠️ ATUALIZAR SEMPRE
├── 📄 TEMPLATES.md           # Templates de código
├── 📄 QUICK_START.md         # Setup rápido
├── 📄 CONTRIBUTING.md        # Guia de contribuição
├── 📄 INDEX.md               # Este arquivo
├── 📄 .gitignore             # Arquivos ignorados pelo Git
├── 📄 .cursorrules           # Regras para Cursor IDE
│
├── 📁 api/                   # Backend NestJS
│   ├── env.example           # Exemplo de variáveis de ambiente
│   └── ...
│
└── 📁 app/                   # App React Native
    ├── env.example           # Exemplo de variáveis de ambiente
    └── ...
```

## 🎯 Fluxo de Trabalho Recomendado

### Para Novos Desenvolvedores/Agentes

1. **Comece aqui**: [README.md](./README.md)
2. **Entenda os requisitos**: [SPEC.md](./SPEC.md)
3. **Veja o plano**: [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)
4. **Configure o ambiente**: [QUICK_START.md](./QUICK_START.md)
5. **Escolha uma etapa**: [PROGRESS.md](./PROGRESS.md)
6. **Implemente**: Use [agents.md](./agents.md) e [TEMPLATES.md](./TEMPLATES.md)
7. **Atualize progresso**: [PROGRESS.md](./PROGRESS.md)

### Para Agentes de IA

1. Leia [agents.md](./agents.md) primeiro
2. Verifique [PROGRESS.md](./PROGRESS.md) para status atual
3. Escolha uma etapa pendente
4. Leia a seção correspondente em [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)
5. Use [TEMPLATES.md](./TEMPLATES.md) para acelerar
6. Atualize [PROGRESS.md](./PROGRESS.md) após completar

## 📋 Checklist por Tipo de Tarefa

### Implementar Nova Funcionalidade
- [ ] Ler etapa em [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)
- [ ] Verificar dependências em [PROGRESS.md](./PROGRESS.md)
- [ ] Consultar [agents.md](./agents.md) para padrões
- [ ] Usar [TEMPLATES.md](./TEMPLATES.md) se aplicável
- [ ] Implementar funcionalidade
- [ ] Adicionar testes
- [ ] Atualizar [PROGRESS.md](./PROGRESS.md)

### Configurar Ambiente
- [ ] Seguir [QUICK_START.md](./QUICK_START.md)
- [ ] Copiar `env.example` para `.env` em `api/` e `app/`
- [ ] Configurar variáveis de ambiente
- [ ] Instalar dependências
- [ ] Testar execução

### Entender Requisitos
- [ ] Ler [SPEC.md](./SPEC.md) completamente
- [ ] Verificar requisitos funcionais (RF-XX)
- [ ] Verificar requisitos não funcionais (RNF-XX)
- [ ] Verificar requisitos de segurança (RS-XX)
- [ ] Verificar requisitos de negócio (RN-XX)

## 🔍 Busca Rápida

### Por Tópico

**Autenticação**: [SPEC.md](./SPEC.md) RF-01, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 2  
**IA Externa**: [SPEC.md](./SPEC.md) RF-02, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 2  
**Mapas**: [SPEC.md](./SPEC.md) RF-03, RF-08, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 3  
**Explique onde estou**: [SPEC.md](./SPEC.md) RF-04, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 4  
**Sugestões**: [SPEC.md](./SPEC.md) RF-05, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 5  
**Live Mode**: [SPEC.md](./SPEC.md) RF-06, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 6  
**Áudio**: [SPEC.md](./SPEC.md) RF-07, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 4  
**Privacidade**: [SPEC.md](./SPEC.md) RNF-01, RS-01, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 7  
**Assinatura**: [SPEC.md](./SPEC.md) RN-01, [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) Etapa 8  

### Por Arquivo

**Backend**:
- Módulos: `api/src/{module}/{module}.module.ts`
- Controllers: `api/src/{module}/{module}.controller.ts`
- Services: `api/src/{module}/{module}.service.ts`
- DTOs: `api/src/{module}/dto/{module}.dto.ts`

**App**:
- Screens: `app/src/screens/{Screen}Screen.tsx`
- Components: `app/src/components/{Component}.tsx`
- Services: `app/src/services/{service}.service.ts`
- Hooks: `app/src/hooks/use{Feature}.ts`
- Types: `app/src/types/{type}.ts`

## ⚠️ Arquivos Críticos

Estes arquivos devem ser atualizados regularmente:

1. **[PROGRESS.md](./PROGRESS.md)** - Atualizar após cada mudança
2. **[agents.md](./agents.md)** - Atualizar se padrões mudarem
3. **`.env` files** - Nunca commitar, apenas `.env.example`

## 📞 Dúvidas?

1. Consulte este índice
2. Leia o documento relevante
3. Verifique exemplos em [TEMPLATES.md](./TEMPLATES.md)
4. Consulte código existente

## 🎯 Próximos Passos

1. Se você é novo: Comece por [README.md](./README.md)
2. Se você é agente de IA: Comece por [agents.md](./agents.md)
3. Se você quer contribuir: Leia [CONTRIBUTING.md](./CONTRIBUTING.md)
4. Se você quer implementar: Veja [PROGRESS.md](./PROGRESS.md) e escolha uma etapa

---

**Última atualização**: 2024-01-XX  
**Mantido por**: Equipe pronCOVO

