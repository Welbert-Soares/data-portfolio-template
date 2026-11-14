import type { Project } from '@/types'

// ============================================================================================
//  SEUS PROJETOS: aparecem na página Projetos, na ordem desta lista.
//
//  Como editar sem errar:
//  • Troque só o texto que está ENTRE AS ASPAS e mantenha as vírgulas do fim das linhas.
//  • Não use apóstrofo ( ' ) dentro do texto (veja a explicação em personal.ts).
//  • Para adicionar um projeto, copie um bloco inteiro, do { até o }, cole logo abaixo e troque
//    os textos. Para remover, apague o bloco inteiro.
//
//  Cada projeto tem:
//  • title e description: o nome e o que ele faz. Dica: diga o problema, o que você fez e o
//    resultado. "Reduzi o relatório de 2 dias para 10 minutos" conta mais que "fiz um dashboard".
//  • technologies: as ferramentas usadas.
//  • image: a capa. Envie um print para a pasta public/projects/ e escreva o caminho, como
//    '/projects/meu-dashboard.png'. Enquanto não tiver print, use uma das animações de exemplo
//    ('/animations/projeto-1.json', '/animations/projeto-2.json' ou '/animations/projeto-3.json').
//  • githubUrl: link do código (opcional; sem ele, o botão "Código" some).
//  • demoUrl: link do projeto publicado (opcional; sem ele, o botão "Ver projeto" some).
//  • featured: true também mostra o projeto na página inicial (opcional).
// ============================================================================================

export const projects: Project[] = [
  {
    title: 'Pipeline de vendas com dbt',
    description:
      'Dados de vendas de um e-commerce fictício carregados num PostgreSQL e modelados com dbt em camadas (staging, intermediate, marts), com testes de qualidade em cada tabela.',
    technologies: ['SQL', 'dbt', 'PostgreSQL', 'GitHub Actions'],
    image: '/animations/projeto-1.json',
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    title: 'Dashboard de indicadores financeiros',
    description:
      'Dashboard em Power BI com receita, margem e inadimplência por região, a partir de dados públicos. Mostra onde a margem cai e quais clientes concentram o atraso.',
    technologies: ['Power BI', 'DAX', 'Power Query'],
    image: '/animations/projeto-2.json',
    demoUrl: 'https://app.powerbi.com/',
    featured: true,
  },
  {
    title: 'Orquestração de ETL com Airflow',
    description:
      'DAG diária que busca dados de uma API pública, trata com pandas e grava no banco, com alertas quando uma carga falha ou chega vazia.',
    technologies: ['Python', 'Apache Airflow', 'pandas', 'Docker'],
    image: '/animations/projeto-3.json',
    githubUrl: 'https://github.com/',
  },
]
