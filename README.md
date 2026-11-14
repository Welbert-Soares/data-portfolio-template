# Data Portfolio Template

Um portfólio pronto para quem trabalha (ou quer trabalhar) com dados: analistas, engenheiros e
cientistas de dados. **Você não precisa saber programar**: o site vai ao ar com um clique, e você
troca os textos e as fotos pelo próprio navegador.

O site tem página inicial, Sobre (seu currículo), Projetos e Contato, com tema claro e escuro,
animações suaves e tudo o que o Google e o LinkedIn precisam para mostrar bem o seu link.

## Em 3 passos

1. **Coloque o site no ar**: clique no botão abaixo.
2. **Troque os textos** de `src/contents/personal.ts` pelos seus.
3. **Troque a foto** e o currículo, e adicione seus projetos.

Pronto. Cada alteração que você salva vai para o site sozinha, em cerca de um minuto.

[![Deploy na Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWelbert-Soares%2Fdata-portfolio-template)

---

## Passo 1: coloque o site no ar

Você vai precisar de uma conta no [GitHub](https://github.com/signup), que é onde os arquivos do
seu site ficam guardados. É grátis.

1. Clique no botão **Deploy na Vercel** acima.
2. Entre com a sua conta do GitHub (**Continue with GitHub**).
3. Escolha um nome para o repositório e clique em **Create**. Use o seu nome, como
   `maria-silva-portfolio`: o endereço do site sai dele.
4. Espere um ou dois minutos. A Vercel mostra uma tela de parabéns com o endereço do seu site,
   no formato `https://SEU-NOME.vercel.app`.

Se outra pessoa já usa esse nome na Vercel, ela acrescenta letras e números no fim do endereço.
Para escolher outro, abra o projeto na Vercel → **Settings → Domains** e edite o endereço
`.vercel.app` (qualquer um livre serve).

Nesse momento o site ainda mostra a "Ana Exemplo". Vamos trocar pelos seus dados.

## Passo 2: troque os textos

Tudo o que aparece no site está em três arquivos, dentro da pasta `src/contents/`. Você edita
pelo GitHub mesmo:

1. Abra o seu repositório no GitHub (`github.com/SEU-USUARIO/SEU-REPOSITORIO`).
2. Entre em `src` → `contents` → `personal.ts`.
3. Clique no **lápis** (✏️, "Edit this file") no canto direito.
4. Troque os textos. Cada arquivo começa com instruções, e o mais importante é: **troque só o
   que está entre as aspas** e não apague as vírgulas.
5. Clique em **Commit changes…** e de novo em **Commit changes**.

Em cerca de um minuto, a Vercel publica o site de novo com a mudança.

| Arquivo | O que tem |
|---|---|
| `personal.ts` | Nome, cargo, resumo, **cor do site**, e-mail, cidade, links do GitHub e do LinkedIn |
| `resume.ts` | Experiências, ferramentas, formação, certificações e idiomas (página Sobre) |
| `projects.ts` | Seus projetos (página Projetos; os marcados com `featured: true` também na inicial) |

## Passo 3: troque a foto, o currículo e as capas

Os arquivos de imagem ficam na pasta `public/`. Para enviar um arquivo:

1. No GitHub, entre na pasta `public`.
2. Clique em **Add file → Upload files**, arraste o arquivo e clique em **Commit changes**.
3. Volte ao arquivo de conteúdo e escreva o nome dele com uma barra no começo.

| O quê | Envie para | E escreva |
|---|---|---|
| Sua foto (quadrada, pelo menos 400×400) | `public/` | `photo: '/minha-foto.jpg'` em `personal.ts` |
| Currículo em PDF | `public/` | `pdf: '/curriculo.pdf'` em `resume.ts` |
| Print de um projeto (de preferência 1600×900) | `public/projects/` | `image: '/projects/meu-dashboard.png'` em `projects.ts` |

Dica: use nomes de arquivo sem espaços nem acentos, como `minha-foto.jpg`.

## Deu erro?

Se uma alteração tiver um erro, o site **não sai do ar**: a versão anterior continua no ar e a
Vercel avisa por e-mail. Para achar o problema:

1. Abra o seu projeto em [vercel.com](https://vercel.com) → aba **Deployments**.
2. Clique na publicação marcada com **Error** e procure, no texto, o nome do arquivo e o número
   da linha, como `src/contents/personal.ts:15`.
3. Abra esse arquivo no GitHub, vá até a linha e confira os erros mais comuns:

| Erro | Errado | Certo |
|---|---|---|
| Faltou fechar as aspas | `name: 'Maria Silva,` | `name: 'Maria Silva',` |
| Faltou a vírgula no fim da linha | `role: 'Analista de Dados'` | `role: 'Analista de Dados',` |
| Apóstrofo dentro do texto | `'Projeto d'água'` | `'Projeto de água'` ou `'Projeto d’água'` |
| Apagou um colchete ou uma chave | `bullets: ['SQL', 'Python'` | `bullets: ['SQL', 'Python'],` |
| Cor que não existe | `color: 'amarelo',` | `color: 'laranja',` (veja as opções no arquivo) |

Não achou? No GitHub, abra o arquivo, clique em **History** e compare com a versão anterior, que
funcionava.

Dica: aperte a tecla **.** (ponto) na página do seu repositório no GitHub. Abre um editor
completo no navegador, que sublinha em vermelho os erros enquanto você digita.

## Opcional

Nada abaixo é obrigatório: sem configurar, o site funciona do mesmo jeito. Cada item é uma
variável que você adiciona na Vercel em **seu projeto → Settings → Environment Variables**.
Depois, em **Deployments**, clique nos três pontinhos da última publicação → **Redeploy**.

### Formulário de contato (EmailJS)

Sem configurar, a página de contato mostra o seu e-mail. Para ter um formulário que chega na sua
caixa de entrada:

1. Crie uma conta grátis no [EmailJS](https://www.emailjs.com/).
2. Em **Email Services**, conecte o seu e-mail (Gmail, Outlook…) e copie o **Service ID**.
3. Em **Email Templates**, crie um template usando `{{name}}`, `{{email}}` e `{{message}}` e
   copie o **Template ID**.
4. Em **Account → General**, copie a **Public Key**.
5. Na Vercel, crie `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` e
   `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` com esses valores.

### Google Analytics

Crie uma propriedade no [Google Analytics](https://analytics.google.com/), copie o ID de medição
(`G-XXXXXXXXXX`) e crie a variável `NEXT_PUBLIC_GA_ID` na Vercel, só no ambiente
**Production** (assim as suas próprias visitas de teste não contam).

### Domínio próprio

Comprou um domínio próprio, como `SEU-DOMINIO.com.br`? Adicione em **Vercel → Settings → Domains** e
escreva o endereço em `siteUrl` no `personal.ts`. Sem domínio próprio, deixe `siteUrl` vazio: o
site usa o endereço da Vercel sozinho.

## Personalizando

- **Cor principal**: escreva `color: 'azul'` (ou `'verde'`, `'roxo'`, `'rosa'`, `'laranja'`,
  `'cinza'`) no `personal.ts`. Botões, links, detalhes e a imagem de compartilhamento mudam
  juntos, com o contraste já testado no tema claro e no escuro. As ilustrações animadas têm cores
  próprias e não mudam. Para criar uma cor nova, adicione os tons em `src/lib/theme.ts`.
- **Animações de scroll**: todas passam por `src/app/components/Reveal.tsx` (o bloco sobe 16px e
  aparece ao entrar na tela). Quem ativa "reduzir movimento" no sistema vê o conteúdo parado.
- **Ilustrações animadas** (página inicial, contato, página 404 e capas de exemplo): arquivos
  Lottie `.json` em `public/animations/`. Para trocar, escolha uma em
  [lottiefiles.com/free-animations](https://lottiefiles.com/free-animations), baixe como
  **Lottie JSON**, envie para `public/animations/` e mude o `src` no componente que a usa.
- **Menu**: a lista `menuItems` em `src/app/components/Navbar.tsx`.
- **Imagem ao compartilhar o link**: `src/app/opengraph-image.tsx`, gerada a partir de
  `personal.ts`.

## O que faz um bom portfólio de dados

- **Projetos com começo, meio e fim.** Diga qual problema o projeto resolve, o que você fez e o
  resultado. "Automatizei um relatório que levava dois dias" conta mais que "fiz um dashboard".
- **Código público.** Um repositório organizado, com README, mostra como você trabalha.
- **Menos e melhor.** Três projetos bem explicados valem mais que dez cópias de tutorial.

## Para quem programa: rodando no computador

Com [Node.js](https://nodejs.org) 20 ou mais novo:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
npm install
npm run dev        # site em http://localhost:3000, atualiza ao salvar
```

Outros comandos: `npm run build` (versão de produção, também checa os tipos), `npm run start`
(roda o build), `npm run lint` e `npm run typecheck`. As variáveis opcionais ficam em
`.env.local` (copie de `.env.example`). O GitHub Actions roda `lint` e `build` em cada push e
pull request (`.github/workflows/ci.yml`).

Feito com Next.js, TypeScript, Tailwind CSS, Framer Motion e lottie-web.

## Licença

O código está sob a [MIT](LICENSE): use, modifique e publique como quiser, inclusive
comercialmente. Os dados de exemplo são fictícios e podem ser descartados.

As animações em `public/animations/` são do LottieFiles, criadas por Abdul Latif, e seguem a
Lottie Simple License, que também permite uso comercial. Créditos e termos em
[`public/animations/LICENSE.md`](public/animations/LICENSE.md).

Este repositório é só um ponto de partida e não aceita issues nem pull requests.
