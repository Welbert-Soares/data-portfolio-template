# 5. Deu erro?

[← Voltar ao início](../../README.md)

Primeiro, a boa notícia: **um erro não tira o seu site do ar**. Se uma alteração tiver um
problema, a Vercel não publica essa versão, mantém a anterior no ar e avisa você por e-mail.

## Como saber se deu erro

Fez um commit e, alguns minutos depois, o site não mudou? Abra o seu projeto em
[vercel.com](https://vercel.com) e, no menu da esquerda, clique em **Deployments** (veja onde
fica no [painel do projeto](1-publicar.md#13-espere-o-primeiro-deploy)). Cada commit vira uma
linha, e a coluna de status mostra:

- **Ready** (verde): publicado com sucesso.
- **Building** (amarelo): ainda publicando. Espere um pouco.
- **Error** (vermelho): essa alteração tem um problema. Continue abaixo.

## Como achar o erro

Clique na linha com **Error** e abra **Build Logs**, o registro da publicação. Perto do fim, em
vermelho, aparece algo assim (aqui, alguém escreveu `d'água` no cargo):

```
Failed to compile.

./src/contents/personal.ts
Error:   x Expected ',', got 'água'
    ,-[/vercel/path0/src/contents/personal.ts:17:1]
 14 | export const personal = {
 15 |   // Seu nome e seu cargo (ou o cargo que você busca).
 16 |   name: 'Ana Exemplo',
 17 |   role: 'Analista d'água',
    :                     ^^^^
```

Como ler:

- `./src/contents/personal.ts` é o **arquivo** com problema.
- `personal.ts:17` é a **linha 17** desse arquivo.
- A linha `Error:` diz **o que** está errado (as mensagens mais comuns estão na tabela abaixo).
- A seta `^^^^` aponta **onde** o problema começa. Aqui, o apóstrofo de `d'água` fechou as aspas
  antes da hora.

Abra esse arquivo no GitHub, clique no lápis e vá até a linha indicada (o editor mostra o número
de cada linha à esquerda).

## Os erros mais comuns

| Erro | Errado | Certo |
|---|---|---|
| Faltou fechar as aspas | `name: 'Maria Silva,` | `name: 'Maria Silva',` |
| Faltou a vírgula no fim da linha | `role: 'Analista de Dados'` | `role: 'Analista de Dados',` |
| Apóstrofo dentro do texto | `'Projeto d'água'` | `'Projeto de água'` ou `'Projeto d’água'` |
| Apagou um colchete ou uma chave | `bullets: ['SQL', 'Python'` | `bullets: ['SQL', 'Python'],` |
| Cor que não existe | `color: 'amarelo',` | `color: 'laranja',` |

Algumas mensagens e o que significam:

| A mensagem diz… | Quer dizer |
|---|---|
| `Unterminated string constant` | Faltou fechar as aspas. |
| `Expected ',', got …` | Faltou uma vírgula, ou um apóstrofo fechou as aspas antes da hora. Atenção: quando falta a vírgula, a linha apontada é a **de baixo**. Confira o fim da linha anterior. |
| `Unexpected eof` | Faltou fechar uma chave `}` ou um colchete `]`, normalmente ao apagar um bloco pela metade. O erro aponta o fim do arquivo, então procure o bloco que você mexeu. |
| `Type '"amarelo"' is not assignable to type 'ColorName'` | Essa cor não existe. As opções estão no comentário logo acima da linha. |

## Publicou, mas algo aparece estranho

Nem todo engano impede a publicação. Estes passam, mas aparecem errados no site:

| Aparece no site | Causa | Como corrigir |
|---|---|---|
| `undefined 3/2025` na experiência | Data fora do formato | Use `'ANO-MÊS'`: `start: '2025-03',` |
| Foto ou print quebrado | O nome escrito não bate com o do arquivo | Compare letra por letra, inclusive a extensão (`.jpg` não é `.jpeg`) |
| A mudança não aparece | O navegador guardou a versão antiga | Atualize com Ctrl+Shift+R (no celular, feche e abra a aba) |
| A mudança não aparece, e nenhum deploy novo em **Deployments** está marcado como *Production* | No commit, foi escolhida a opção *Create a new branch* | No GitHub, abra a aba **Pull requests**, entre no pull request criado e clique em **Merge pull request** e depois em **Confirm merge** |

## Não achou? Volte para a versão que funcionava

No GitHub, abra o arquivo e clique em **History** (no canto superior direito). Ali estão todas as
versões, da mais nova para a mais antiga. Abra a última que funcionava, copie o conteúdo e cole
no arquivo atual.

## Dica: um editor que avisa enquanto você digita

Na página do seu repositório, aperte a tecla **.** (ponto). Abre um editor completo no navegador,
que **sublinha em vermelho** o erro antes de você salvar. Passe o mouse sobre o sublinhado para
ler a mensagem.

Nesse editor, para salvar, clique no ícone de ramificação na barra da esquerda (*Source
Control*), escreva uma mensagem curta e clique em **Commit & Push**.

[← Voltar ao início](../../README.md)
