# 4. Projetos que chamam atenção

⏱️ Leitura de 5 minutos · [← Voltar ao início](../../README.md)

Quem recruta para dados lê muitos portfólios iguais. O que faz o seu ser lembrado não é a lista
de ferramentas, e sim mostrar que você **resolve problemas com dados**.

## A fórmula: problema → o que você fez → resultado

Para cada projeto, responda três perguntas na `description`:

1. **Qual problema existia?** Quem sofria com ele?
2. **O que você fez?** Com quais dados e quais ferramentas?
3. **Qual foi o resultado?** De preferência com um número.

### Antes e depois

| ❌ Genérico | ✅ Com problema e resultado |
|---|---|
| Dashboard de vendas no Power BI. | A equipe comercial montava o relatório de vendas à mão toda segunda. Fiz um dashboard em Power BI ligado direto ao banco, que atualiza sozinho: o relatório que levava 4 horas passou a estar pronto às 8h. |
| Projeto de ETL com Python e Airflow. | Dados de uma API pública de clima chegavam com falhas e duplicados. Montei uma DAG no Airflow que baixa, limpa com pandas e grava no PostgreSQL todo dia, com alerta quando a carga chega vazia. |
| Análise exploratória de dados de RH. | Investiguei por que a rotatividade era maior em uma das áreas, usando dados públicos de RH. Encontrei três fatores ligados à saída e mostrei em quais equipes o risco era maior. |

Não tem um número real? Diga o que mudou: "passou a atualizar sozinho", "encontrei três fatores".
Nunca invente números.

## Quais projetos colocar

- **Três bem explicados valem mais que dez.** Comece pelo que você melhor sabe explicar.
- **Dados reais ou públicos** contam mais que o dataset do tutorial que todo mundo fez. Boas
  fontes: [dados.gov.br](https://dados.gov.br), IBGE, [Kaggle](https://www.kaggle.com/datasets)
  e APIs públicas.
- **Mostre a área que você quer.** Busca vaga de engenharia? Mostre pipelines. De análise?
  Dashboards e conclusões.
- **Projetos da empresa** podem entrar se você não expuser dados sigilosos: descreva o problema
  e o resultado, sem nomes de clientes nem valores reais.

## Links que fazem diferença

- **`githubUrl`:** o código, com um README que explique como rodar. Repositório organizado é um
  dos primeiros lugares que um recrutador técnico abre.
- **`demoUrl`:** o resultado publicado (um relatório do Power BI publicado na web, um notebook no
  Kaggle, um app no Streamlit). Quem não programa entende o projeto em segundos.
- **`featured: true`:** nos dois ou três melhores, para aparecerem na página inicial.

## Resumo e cargo

O `summary` do `personal.ts` aparece no Google e na prévia do link no LinkedIn. Use duas frases:

- **O que você faz e com o quê:** "Analista de dados que transforma planilhas em dashboards com
  SQL e Power BI."
- **Para quem ou por quê:** "Gosto de projetos em que o dado vira decisão."

**Próximo passo →** [5. Deu erro?](5-deu-erro.md) (só se algo der errado) ou
[6. Extras](6-extras.md)
