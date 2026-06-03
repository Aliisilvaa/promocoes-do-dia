# 📘 Tutorial Completo — Editar o site "Promoções do Dia"

> Site no ar: **https://promocoes-do-dia.vercel.app**

Esse tutorial cobre **TUDO** que você pode precisar mudar no site, com 3 caminhos
diferentes — escolha o que for mais confortável pra você.

---

## 🗺️ Sumário rápido

1. [Qual caminho usar](#qual-caminho-usar)
2. [O que muda onde](#o-que-muda-onde) — tabela de referência
3. [Caminho A — Editar pelo GitHub (recomendado)](#caminho-a--editar-pelo-github)
4. [Caminho B — Editar no computador](#caminho-b--editar-no-computador)
5. [Caminho C — Painel da Vercel](#caminho-c--painel-da-vercel)
6. [Como ver o resultado](#como-ver-o-resultado)
7. [Voltar uma versão antiga (rollback)](#voltar-uma-versão-antiga)
8. [Resolver problemas](#resolver-problemas)

---

## Qual caminho usar

| Você quer... | Use o caminho |
|---|---|
| Trocar texto, link, foto pelo celular ou navegador | **A — GitHub** |
| Editar com calma no computador, várias coisas de uma vez | **B — Computador** |
| Só ver as visitas, configurar domínio, ver versões antigas | **C — Vercel** |
| Configurar Pixel da Meta sem mexer no código | **C — Vercel** (variável de ambiente) |

---

## O que muda onde

| Quero mudar isto... | Arquivo / Local | Caminho |
|---|---|---|
| Link do WhatsApp | `config.js` → linha `whatsappLink` | A ou B |
| Pixel da Meta | `config.js` → linha `metaPixelId` | A, B ou C |
| Título "Promoções do Dia" | `config.js` → `textos.titulo` | A ou B |
| Subtítulo | `config.js` → `textos.subtitulo` | A ou B |
| Texto do botão | `config.js` → `textos.botaoCta` | A ou B |
| Selo amarelo no topo | `config.js` → `textos.selo` | A ou B |
| Rodapé | `config.js` → `textos.rodape` | A ou B |
| Nomes do pop-up | `config.js` → `nomesPopup` | A ou B |
| Adicionar/remover marketplace | `config.js` → `marketplaces` + arquivo em `assets/marketplaces/` | A ou B |
| Foto da Aline (fundo) | `assets/aline-background.jpg` | A ou B |
| Logo do grupo | `assets/logo-grupo.png` | A ou B |
| Domínio próprio (ex: promocoesdodia.com.br) | Vercel → Settings → Domains | C |
| Ver quantas visitas o site teve | Vercel → Analytics | C |
| Voltar uma versão antiga | Vercel → Deployments → Promote | C |

---

## Caminho A — Editar pelo GitHub

> ⭐ **Recomendado** pra quem não usa Terminal. Você edita os arquivos no navegador
> (computador OU celular) e o site atualiza sozinho em ~15 segundos.

### Pré-requisito (configuração única — feita uma vez só)

Antes de poder usar este caminho, o site precisa estar conectado a um repositório
do GitHub. Se você não fez isso ainda, peça pro desenvolvedor configurar
(ou diga "Claude, configura o GitHub e conecta na Vercel").

Após configurado, você terá uma URL parecida com:
`https://github.com/SEU-USUARIO/promocoes-do-dia`

### A.1 — Trocar o link do WhatsApp

1. Abra o repositório: `https://github.com/SEU-USUARIO/promocoes-do-dia`
2. Clique no arquivo **`config.js`**
3. No canto superior direito, clique no ícone de **lápis** ✏️
4. Procure a linha que começa com `whatsappLink:` (linha 11)
5. Apague o link antigo (deixe as aspas `"..."`) e cole o novo
6. Role até o final, escreva o que você mudou (ex: "Link do WhatsApp atualizado")
7. Clique **Commit changes** (botão verde)
8. **Pronto** — em ~15 segundos o site novo está no ar

> 📱 **Funciona no celular**: instale o app GitHub no celular, ou acesse pelo
> navegador. O processo é exatamente igual.

### A.2 — Trocar a foto do fundo (Aline com tablet)

1. Abra `https://github.com/SEU-USUARIO/promocoes-do-dia`
2. Entre na pasta **`assets`**
3. Encontre o arquivo **`aline-background.jpg`**
4. Clique no arquivo e depois no ícone de **lixeira** 🗑️ para apagar
5. Confirme em "Commit changes"
6. Volte na pasta `assets`
7. Clique em **Add file** → **Upload files**
8. Arraste a nova foto
9. **IMPORTANTE**: o arquivo precisa se chamar **exatamente** `aline-background.jpg`
   - Se a sua foto tiver outro nome, renomeie antes de subir
10. Clique **Commit changes**
11. Em ~15s o fundo já mudou no site

> 📐 **Dica**: use uma foto com pelo menos 1080×1080 pixels para o fundo ficar
> bonito mesmo desfocado.

### A.3 — Trocar a logo do grupo

Igual ao A.2, mas o arquivo se chama **`logo-grupo.png`**.

### A.4 — Trocar uma logo de marketplace

1. Entre em `assets/marketplaces/` no GitHub
2. Apague o arquivo antigo (`shopee.png`, por exemplo)
3. Suba o novo arquivo **com o mesmo nome**
4. Commit

### A.5 — Adicionar um marketplace novo

1. Suba a logo nova em `assets/marketplaces/` (ex: `kabum.png`)
2. Abra `config.js`
3. Procure o bloco `marketplaces:` (linha 56)
4. Adicione uma linha nova antes do `],` final:
   ```js
   { nome: "Kabum", arquivo: "kabum.png" },
   ```
5. Commit

### A.6 — Mudar textos da página

1. Abra `config.js`
2. Procure o bloco `textos:` (linha 30)
3. Mude o texto **entre as aspas**, sem apagar as aspas nem a vírgula
4. Commit

❌ Errado:
```js
titulo: Achadinhos da Aline,
```
✅ Certo:
```js
titulo: "Achadinhos da Aline",
```

### A.7 — Mudar nomes do pop-up

1. Abra `config.js`
2. Procure o bloco `nomesPopup:` (linha 42)
3. Adicione novos nomes entre aspas, separados por vírgula
4. Commit

---

## Caminho B — Editar no computador

> Pra quem prefere editar com calma, várias coisas de uma vez.

### B.1 — Pré-requisito (uma vez só)
- Tenha o **Node.js** instalado: https://nodejs.org (versão LTS)
- Tenha a pasta do projeto em algum lugar do computador
  (no seu caso: `/Users/carloshenriqueborges/Documents/Achadinhos Aline`)

### B.2 — Como editar

1. **Abra a pasta** `Achadinhos Aline`
2. Edite os arquivos que precisar:
   - Para texto/links/configurações: abra o **`config.js`** no Bloco de Notas, TextEdit ou VS Code
   - Para imagens: substitua os arquivos em `assets/` ou `assets/marketplaces/`
3. **Salve** todos os arquivos

### B.3 — Publicar a nova versão

Abra o **Terminal** (Mac: ⌘ + Espaço → "Terminal") e cole isto, tudo em uma linha só:

```bash
cd "/Users/carloshenriqueborges/Documents/Achadinhos Aline" && npx vercel deploy --prod --yes
```

Aperte Enter. Em ~15 segundos a página nova está no ar em
`https://promocoes-do-dia.vercel.app`.

Se for a primeira vez no Terminal, ele pode pedir login na Vercel — basta abrir
o link que aparecer e fazer login com GitHub.

### B.4 — Atalho: criar um botão de "publicar"

Se você usa muito, dá pra criar um atalho. Crie um arquivo chamado
**`publicar.command`** dentro da pasta do projeto com este conteúdo:

```bash
#!/bin/bash
cd "/Users/carloshenriqueborges/Documents/Achadinhos Aline"
npx vercel deploy --prod --yes
echo ""
echo "✅ Pronto! Acesse https://promocoes-do-dia.vercel.app"
read -p "Pressione Enter para fechar..."
```

Depois rode `chmod +x publicar.command` uma vez. A partir daí basta dar **duplo-clique
no `publicar.command`** que ele publica sozinho.

---

## Caminho C — Painel da Vercel

URL do painel: **https://vercel.com/achadinhos/promocoes-do-dia**

Faça login com a mesma conta GitHub que usou pra criar o site.

### C.1 — Ver visitas (Analytics)

1. No painel do projeto, clique em **Analytics** (menu superior)
2. Veja: visitantes, visualizações, dispositivos mais usados, países

> 💡 Free Tier: 2.500 eventos/mês grátis. Mais que suficiente pra começar.

### C.2 — Configurar Pixel da Meta sem mexer no código

Você pode configurar o Pixel ID como **variável de ambiente**. Assim, mesmo sem
saber programar, o Pixel funciona:

1. Painel → **Settings** → **Environment Variables**
2. Clique em **Add New**
3. Preencha:
   - **Key**: `META_PIXEL_ID`
   - **Value**: o número do seu Pixel (ex: `1234567890123456`)
   - **Environments**: marque **Production**, **Preview** e **Development**
4. Clique **Save**
5. Vá em **Deployments** (menu superior)
6. Encontre o deploy mais recente, clique nos **3 pontinhos** (`⋯`)
7. Clique em **Redeploy** → **Use existing Build Cache: NÃO** → **Redeploy**

> ⚠️ **Atenção**: este método só funciona se o desenvolvedor configurou o site
> para ler a variável de ambiente. Caso contrário, edite direto no `config.js`
> (linha 17, `metaPixelId`).

### C.3 — Configurar domínio próprio

Se você comprou um domínio (ex: `promocoesdodia.com.br`):

1. Painel → **Settings** → **Domains**
2. Digite o domínio: `promocoesdodia.com.br`
3. Clique **Add**
4. A Vercel mostra **2 registros DNS** que você precisa adicionar no seu
   provedor de domínio (Registro.br, GoDaddy, Hostinger, etc.)
5. Adicione lá no provedor e aguarde ~5 minutos
6. A Vercel detecta sozinho e ativa HTTPS automaticamente

### C.4 — Ver versões antigas / fazer rollback

Veja a seção **"Voltar uma versão antiga"** abaixo.

---

## Como ver o resultado

Depois de qualquer alteração:

1. **Aguarde 15–30 segundos** após salvar/commitar
2. Acesse `https://promocoes-do-dia.vercel.app`
3. **Atualize a página com Ctrl+F5** (Windows) ou **Cmd+Shift+R** (Mac) pra forçar
   o navegador a buscar a versão nova (sem cache)

Se ainda não apareceu, espere mais 1 minuto e tente de novo.

### Modo invisível pra testar

Abra a página no **modo anônimo / privado** do navegador — assim você vê
exatamente como um novo visitante vê (sem cache).

---

## Voltar uma versão antiga

Errou algo? Sem problemas, dá pra voltar pra qualquer versão anterior em 2 cliques.

1. Acesse https://vercel.com/achadinhos/promocoes-do-dia
2. Clique na aba **Deployments**
3. Você verá uma lista de todas as versões já publicadas (com data e hora)
4. Encontre a versão que estava funcionando bem
5. Clique nos **3 pontinhos** (`⋯`) à direita
6. Clique em **Promote to Production**
7. **Pronto** — o site voltou pra aquela versão em ~5 segundos

> 🛡️ **Importante**: a Vercel guarda **todas** as versões. Você pode voltar pra
> qualquer uma a qualquer momento, mesmo de semanas atrás.

---

## Resolver problemas

### ❌ A página apareceu toda branca / quebrada

Isso geralmente acontece quando alguma vírgula ou aspa foi removida no `config.js`.

**Solução rápida**: faça **rollback** (seção acima) pra última versão funcionando.

**Solução definitiva**:
1. Abra o `config.js` no GitHub ou no computador
2. Compare com o original — toda linha de configuração precisa terminar com
   vírgula `,` e textos precisam estar entre aspas `"..."`
3. Salve e publique de novo

### ❌ A nova foto/logo não aparece

Confira:
- O nome do arquivo está **exatamente igual** ao antigo?
  (Ex: `aline-background.jpg` — letra minúscula, com hífen, sem espaço)
- O arquivo está na **pasta certa**? (`assets/` para fundo/logo, `assets/marketplaces/`
  para logos de loja)
- Você atualizou a página com **Ctrl+F5 / Cmd+Shift+R**?

### ❌ O botão do WhatsApp leva pra lugar errado

1. Abra `config.js`
2. Confira a linha `whatsappLink:` — o link precisa começar com `https://`
3. Tem que estar entre aspas: `"https://..."`
4. Não esqueça da vírgula no final: `"...",`

### ❌ O pop-up "Fulano entrou" não aparece

- Aguarde **3 a 4 segundos** após abrir a página (não aparece imediato)
- Verifique se o JavaScript está habilitado no navegador
- Tente em modo anônimo

### ❌ Erro no Terminal: "vercel: command not found"

Você precisa do Node.js instalado. Baixe em https://nodejs.org e instale.

### ❌ Erro no Terminal: "Permission denied" no Mac

Rode antes:
```bash
chmod +x publicar.command
```

---

## Glossário rápido

- **Vercel**: empresa que hospeda o site (de graça)
- **GitHub**: lugar onde os arquivos do site ficam guardados
- **Deploy / Publicar**: o ato de subir a nova versão pra internet
- **Commit**: salvar uma mudança no GitHub
- **Production**: a versão que todo mundo vê
- **Preview**: versão de teste, só você vê
- **DNS**: configuração que liga um domínio (`promocoesdodia.com.br`) ao site
- **Cache**: cópia da página que o navegador guarda — por isso às vezes você
  precisa apertar Ctrl+F5 pra ver a versão nova

---

## 📞 Quando pedir ajuda

Se alguma coisa não funcionar como esperado:

1. Tente o **rollback** primeiro (volta pra versão anterior, instantâneo)
2. Anote:
   - O que você tentou fazer
   - O que apareceu (de preferência com print da tela)
   - Qual horário você fez a alteração
3. Mande pro desenvolvedor — com isso ele consegue resolver rápido

---

**Site:** https://promocoes-do-dia.vercel.app
**Painel:** https://vercel.com/achadinhos/promocoes-do-dia
**Atualizado em:** 21/05/2026
