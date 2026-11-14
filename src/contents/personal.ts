// ============================================================================================
//  SEUS DADOS: este é o primeiro arquivo para editar.
//
//  Como editar sem errar:
//  • Troque só o texto que está ENTRE AS ASPAS. Ex.: name: 'Ana Exemplo' → name: 'Maria Silva'
//  • Não apague as aspas ' ' nem a vírgula do fim da linha.
//  • Não use apóstrofo ( ' ) dentro do texto: ele fecha as aspas antes da hora e o site para de
//    funcionar. Escreva "de água" em vez de "d'água", ou use o apóstrofo curvo ( ’ ).
//  • Linhas que começam com // são só explicações: o site ignora.
// ============================================================================================

import type { Personal } from '@/types'

export const personal = {
  // Seu nome e seu cargo (ou o cargo que você busca).
  name: 'Ana Exemplo',
  role: 'Analista de Dados',

  // Duas ou três frases sobre você. Aparece na página inicial, no Google e quando alguém
  // compartilha o link do seu site no LinkedIn ou no WhatsApp.
  summary:
    'Analista de dados que transforma planilhas soltas em pipelines com SQL e Python e em dashboards que respondem perguntas de negócio.',

  // Cor principal do site (botões, links e detalhes). Escolha uma, escrita igualzinho:
  // 'verde', 'azul', 'roxo', 'rosa', 'laranja' ou 'cinza'.
  color: 'laranja',

  // Sua foto, que fica na pasta public/. Enviou uma foto chamada minha-foto.jpg? Escreva
  // '/minha-foto.jpg' (com a barra no começo).
  photo: '/profile.svg',

  location: 'São Paulo, SP',
  email: 'ana@example.com',

  // Links completos dos seus perfis. Não tem um deles? Deixe as aspas vazias: '' (o ícone some).
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },

  // Ferramentas em destaque na página inicial, separadas por vírgula, cada uma entre aspas.
  highlightSkills: ['SQL', 'Python', 'dbt', 'Airflow', 'Power BI'],

  // Pode deixar vazio: na Vercel o site descobre o próprio endereço sozinho. Preencha só se
  // tiver um domínio próprio, como 'https://www.SEU-DOMINIO.com.br'.
  siteUrl: '',
} satisfies Personal
