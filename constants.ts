import { StepData } from './types.ts';

export const STEPS: StepData[] = [
  {
    id: 1,
    title: "Definição de Requisitos (PRD)",
    description: "O primeiro passo é estruturar sua ideia de forma lógica e completa. Utilize este prompt para gerar um Documento de Requisitos do Produto (PRD) robusto, que servirá de base para todo o desenvolvimento.",
    type: 'code',
    codeSnippet: `Você é um especialista em Product Management. Quero sua ajuda para criar um Product Requirements Document.
Este PRD será entregue para um agente de IA especializado na criação de produtos digitais. Portanto, escreva apenas informações que importam para um agente de IA trabalhar. Você não precisa incluir métricas, histórias de usuário ou qualquer outra informação ampla que será ignorada.

Foque em definir as funcionalidades, dados de entrada e dados de saída, modelo de dados para cada entidade, fluxos principais e casos extremos.

## Objetivo
[DESCREVA O OBJETIVO]

## Tecnologia
O backend suportado pelo agente de IA é o Supabase.

## Design
Utilize shadcn para os componentes.

## Funcionalidades
[DESCREVA AS FUNCIONALIDADES]

## Considerações
O que você criar será utilizado como o prompt inicial do agente de IA.
Não foque em elementos como autenticação ou conexão com bancos de dados agora.`
  },
  {
    id: 2,
    title: "Validar e Exportar o PRD",
    description: "Revise o conteúdo gerado pela IA. Se estiver coerente, salve o conteúdo em um arquivo de texto simples (.txt). Isso evita alucinações de contexto em etapas futuras.",
    type: 'download',
    downloadFileName: 'meu-prd.txt',
    codeSnippet: `Conteúdo do PRD Simulado...` // This is hidden now, but required for the download file generation
  },
  {
    id: 3,
    title: "Estratégia de Prompting",
    description: "Agora transformamos o PRD validado em instruções técnicas para o Agente Criador (como Lovable, v0, etc). A clareza aqui define a qualidade do código final.",
    type: 'toggle',
    codeSnippet: '', // Ignorado para o tipo toggle, usamos toggleContent abaixo
    toggleContent: [
      {
        label: 'Prompt Único',
        // --- EDITE O CONTEÚDO DO PROMPT ÚNICO ABAIXO ---
        code: `Você é um agente de IA especializado em transformar Product Requirement Documents (PRDs) em protótipos funcionais completos utilizando ferramentas de criação de produtos digitais como Lovable, DeepSeek Coder, Bolt.new e V0 by Vercel. Seu objetivo é ler o PRD fornecido pelo usuário e gerar todo o produto em um único prompt, combinando fundamentos, UI inicial, funcionalidades, fluxos completos, modelo de dados, estados, casos extremos e refinamento final — tudo sem incluir integrações externas.
 INSTRUÇÕES
Leia e compreenda o PRD fornecido.
Resuma apenas o essencial para a construção do produto: — objetivo — propósito — público-alvo — funcionalidades — dados — requisitos visuais — fluxos principais
Com base nisso, gere um único prompt completo, seguindo a estrutura abaixo.
 O PROMPT ÚNICO DEVE GERAR O PRODUTO EM 3 BLOCOS INTERNOS
 1. Fundamentos + Primeira Interface Visual
Inclua:
Objetivo, propósito e público-alvo (resumo estratégico do PRD).
Definição das tecnologias principais: — frontend — backend local ou mock — design system — qualquer IA necessária
Solicite explicitamente que o agente gere:
Estrutura inicial do projeto (pastas, módulos, arquivos base)
Wireframe inicial da Home
Layout base (header, navegação, grid, cores, tipografia)
Componentes placeholder (botões, cards, inputs)
Primeira tela navegável ou mock interativo simples
Importante: Deve haver geração visual mínima já nesse bloco.
 2. Funcionalidades, Fluxos e Prototipação
Incluir:
Lista das principais funcionalidades descritas no PRD.
Definição clara dos comportamentos do sistema + ações esperadas do usuário.
Solicite:
Componentes UI funcionais
Sistema de rotas e navegação
Telas interativas
Estados mockados e dados fictícios
Instruir o agente a criar fluxos completos como:
cadastro
edição
visualização
filtros
listas/dashboards
Tom: operacional, direto e orientado à construção.
 3. Dados, Modelagem e Casos Extremos (sem integrações)
Inclua:
Modelo de dados do sistema: — entidades — campos — tipos
Regras e validações internas.
Estados extremos: — erro — vazio — loading — timeout (mock)
Detalhes de acessibilidade (WCAG) e boas práticas de UX.
Refinamento final da UI: — espaçamento — tokens — microinterações — padrões visuais
Produza o produto final pronto para handoff, sem incluir integrações externas.`
      },
      {
        label: '3 Prompts',
        // --- EDITE O CONTEÚDO DO PROMPT PASSO A PASSO ABAIXO ---
        code: `Você é um agente de IA especializado em transformar Product Requirement Documents (PRDs) em prompts otimizados para ferramentas de prototipação baseadas em IA, como Lovable, DeepSeek Coder, Bolt.new e V0 by Vercel.
Seu objetivo é transformar qualquer PRD em 3 prompts progressivos, complementares e operacionais, dividindo o escopo de maneira lógica para que o agente de criação gere o produto completo sem sobrecarga — e já entregando algo visual no Prompt 1.

### Instruções
Leia e compreenda o PRD fornecido.
Resuma apenas informações essenciais para a construção do produto:objetivo, funcionalidades, dados, design e fluxos.
Com base nisso, produza 3 prompts claros e consecutivos, cada um com uma função específica e crescendo em complexidade.

Prompt 1 — Fundamentos + Primeira Interface Visual
O que deve conter:
Objetivo, propósito e público-alvo do produto (resumo do PRD).
Definição das tecnologias principais (frontend, backend, design system, IA, etc.).
Solicitação explícita para que o agente gere uma estrutura inicial do projeto com pastas, módulos e arquivos básicos.
Pedir um layout visual inicial:
Wireframe da home
Layout base (header, navegação, grid, cores, tipografia)
Placeholder components (cards, buttons, inputs)
Primeira tela navegável ou mock interativo simples
Tom: visão ampla, estratégica e instrucional —mas sempre gerando UI visual mínima, não apenas teoria.
Objetivo: garantir que ao colar o Prompt 1 o agente já produza algo concreto para testar visualmente.

Prompt 2 — Funcionalidades, Fluxos e Prototipação
O que deve conter:
Listar as principais funcionalidades descritas no PRD (telas, interações, fluxos).
Definir comportamentos do sistema + ações do usuário.
Solicitar:
componentes UI funcionais,
rotas ou navegação,
protótipos interativos,
estados mockados (ex.: dados fictícios).
Orientar a criação de fluxos completos (ex.: cadastro, edição, visualização, listas, filtros, etc.).
Tom: funcional, operacional e direto para construção.

Prompt 3 — Dados, Integrações, Refinamento UI e Casos Extremos
O que deve conter:
Modelo de dados (entidades + campos).
Integrações com APIs, Supabase, Firebase ou backend definido.
Regras, validações e estados extremos (erro, vazio, loading, timeout).
Detalhes de acessibilidade, usabilidade e UI final.
Pedir versão final refinada e pronta para handoff.
Tom: técnico, preciso e orientado para finalização do produto.
📝 Diretrizes de Estilo
Tom instrucional e colaborativo, como um briefing de Product Design.
Prompt 1: menos técnico e mais estratégico + pedindo uma UI inicial.
Prompt 2 e 3: linguagem mais detalhada e precisa.
Cada prompt deve se conectar naturalmente ao anterior.
A saída final deve ser totalmente copiável e pronta para usar em ferramentas de geração de produtos.`
      }
    ]
  },
  {
    id: 4,
    title: "Execução no Agente Criador",
    description: "Realize o handoff. Copie o prompt estratégico junto com o PRD e insira na ferramenta de prototipação.",
    type: 'handoff',
    codeSnippet: `` // Removed example code as requested
  }
];