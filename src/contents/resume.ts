// ============================================================================================
//  SEU CURRÍCULO: aparece na página Sobre.
//
//  Como editar sem errar:
//  • Troque só o texto que está ENTRE AS ASPAS e mantenha as vírgulas do fim das linhas.
//  • Não use apóstrofo ( ' ) dentro do texto (veja a explicação em personal.ts).
//  • Datas no formato 'ANO-MÊS', com dois dígitos no mês: março de 2025 = '2025-03'.
//  • Trabalho atual? Escreva end: null (sem aspas). Aparece como "atual".
//  • Para adicionar uma experiência, copie um bloco inteiro, do { até o }, cole logo abaixo e
//    troque os textos. Cada bloco termina com }, (chave e vírgula).
// ============================================================================================

export interface Experience {
  company: string
  title: string
  start: string
  end: string | null
  bullets: string[]
}

export const resume = {
  // Quer o botão "Baixar currículo"? Envie o PDF para a pasta public/ com o nome curriculo.pdf
  // e escreva '/curriculo.pdf' aqui. Deixe '' para esconder o botão.
  pdf: '',

  // Do trabalho mais recente para o mais antigo.
  experience: [
    {
      company: 'Empresa Exemplo',
      title: 'Analista de Dados Júnior',
      start: '2025-03',
      end: null,
      bullets: [
        'Pipelines diários em Python e SQL que alimentam os relatórios de vendas',
        'Modelagem com dbt e testes de qualidade nos dados mais usados',
        'Dashboards em Power BI para as áreas comercial e financeira',
      ],
    },
    {
      company: 'Outra Empresa',
      title: 'Estagiária de Dados',
      start: '2024-01',
      end: '2025-02',
      bullets: [
        'Limpeza e organização de planilhas com Python (pandas)',
        'Consultas SQL para responder pedidos das áreas de negócio',
      ],
    },
  ] satisfies Experience[],

  // Suas ferramentas, em grupos. Troque os nomes dos grupos como quiser.
  skills: [
    { name: 'Linguagens', items: ['SQL', 'Python'] },
    { name: 'Dados', items: ['dbt', 'Apache Airflow', 'PostgreSQL'] },
    { name: 'Visualização', items: ['Power BI', 'Excel'] },
    { name: 'No dia a dia', items: ['Git', 'GitHub', 'Linux'] },
  ],

  // Ainda estudando? Coloque a data prevista de conclusão em end.
  education: [
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      school: 'Faculdade Exemplo',
      start: '2022-02',
      end: '2025-12',
    },
  ],

  // Sem certificações ou idiomas para mostrar? Deixe só os colchetes: [] (a seção some).
  certifications: ['Fundamentos de SQL', 'Python para Análise de Dados'],

  languages: ['Português nativo', 'Inglês intermediário'],
}

// --------------------------------------------------------------------------------------------
//  Daqui para baixo é código do site: não precisa mexer.
// --------------------------------------------------------------------------------------------

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

/** '2025-03' → 'mar 2025'. */
export function formatMonth(month: string) {
  const [year, m] = month.split('-')
  return `${MONTHS[Number(m) - 1]} ${year}`
}

/** 'mar 2025 – atual' */
export function formatPeriod({ start, end }: { start: string; end: string | null }) {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'atual'}`
}
