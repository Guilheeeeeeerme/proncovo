# Guia de Contribuição - pronCOVO

Este documento fornece diretrizes para contribuir com o projeto pronCOVO.

## 📋 Antes de Começar

1. Leia o [SPEC.md](./SPEC.md) para entender os requisitos
2. Consulte o [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) para ver o plano de implementação
3. Verifique o [PROGRESS.md](./PROGRESS.md) para ver o status atual
4. Se você é um agente de IA, leia o [agents.md](./agents.md)

## 🔄 Fluxo de Trabalho

### 1. Escolher uma Etapa

- Consulte [PROGRESS.md](./PROGRESS.md) para ver etapas pendentes
- Verifique dependências - não comece uma etapa se suas dependências não estiverem completas
- Leia a seção completa da etapa em [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md)

### 2. Implementar

- Siga os padrões de código definidos em [agents.md](./agents.md)
- Implemente os arquivos conforme especificado no plano
- Adicione testes quando apropriado
- Documente decisões importantes

### 3. Validar

- Execute testes relevantes
- Verifique que não quebrou funcionalidades anteriores
- Valide requisitos funcionais e não funcionais
- Teste em dispositivos reais quando possível

### 4. Atualizar Progresso

- Atualize [PROGRESS.md](./PROGRESS.md) marcando itens completos
- Adicione notas sobre decisões importantes
- Atualize o status da etapa

### 5. Commit

- Use mensagens descritivas
- Formato: `feat(etapa-X): descrição` ou `fix(etapa-X): descrição`
- Referencie requisitos quando relevante: `feat(etapa-4): implementa RF-04`

## ✅ Checklist Antes de Considerar Completo

- [ ] Todos os itens do checklist da etapa estão marcados
- [ ] Testes passando
- [ ] Código segue padrões do projeto
- [ ] Requisitos funcionais atendidos
- [ ] Requisitos não funcionais atendidos
- [ ] PROGRESS.md atualizado
- [ ] Nenhuma funcionalidade anterior quebrada

## 🚫 O Que NÃO Fazer

- ❌ Armazenar dados pessoais persistentes
- ❌ Usar tokens de IA do sistema
- ❌ Iniciar Live Mode automaticamente
- ❌ Criar conta própria (só OAuth externo)
- ❌ Exibir anúncios
- ❌ Armazenar credenciais no backend
- ❌ Pular etapas sem completar dependências

## 🧪 Testes

### Backend
```bash
cd api
npm test              # Testes unitários
npm run test:e2e      # Testes end-to-end
npm run test:cov      # Cobertura
```

### App
```bash
cd app
npm test              # Testes unitários
```

## 📝 Padrões de Código

Consulte [agents.md](./agents.md) para padrões detalhados de:
- Nomenclatura
- Estrutura de arquivos
- Tratamento de erros
- TypeScript

## 🐛 Reportar Problemas

Ao encontrar problemas:
1. Verifique se não é uma dependência faltante
2. Consulte a documentação relevante
3. Adicione uma nota em PROGRESS.md se for um bloqueio
4. Documente a solução quando resolver

## 💡 Sugestões

Sugestões são bem-vindas, mas devem:
- Alinhar com os princípios do projeto (privacidade, simplicidade)
- Não violar requisitos do SPEC.md
- Ser implementáveis dentro do escopo do MVP

## 📞 Dúvidas?

Consulte na ordem:
1. [SPEC.md](./SPEC.md) - Requisitos
2. [PLANO_IMPLEMENTACAO.md](./PLANO_IMPLEMENTACAO.md) - Plano
3. [agents.md](./agents.md) - Guia técnico
4. Código existente - Exemplos

