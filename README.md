# 🎬 Contentful Series

**Contentful Series** é uma aplicação front-end que exibe uma galeria de séries utilizando dados dinâmicos vindos do CMS **Contentful**. O projeto foi desenvolvido com **Next.js**, **React** e **SCSS**, com foco em componentização, organização visual e consumo eficiente de conteúdo externo.

---

## 🧪 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) *(opcional, dependendo da versão final)*
- [SCSS (Sass)](https://sass-lang.com/)
- [Contentful CMS](https://www.contentful.com/)

---

## 📸 Preview

![Preview](./public/preview.png)  
> *Exibição dinâmica de séries e categorias como Breaking Bad, Arcane, Avatar, etc.*

---

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/xMattRx/Contentful_Series.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Contentful_Series
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` com suas chaves do Contentful:
   ```
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=SEU_SPACE_ID
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=SEU_ACCESS_TOKEN
   ```

5. Execute o projeto:
   ```bash
   npm run dev
   ```

6. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 🎯 Funcionalidades

- 🔄 Integração com Contentful para listar e categorizar séries
- 🧩 Componentes reutilizáveis com Next.js e React
- 🎨 Visual limpo e responsivo
- 🏷️ Exibição de categoria por card
- ⚙️ Estrutura preparada para escalabilidade

---

## 🧠 Possibilidades futuras

- Filtro por gênero ou ano
- Página individual para cada série
- Busca por nome ou categoria
- Dark mode

---

## 🌐 Deploy

Acesse a aplicação em produção:  
🔗 [contentful-series-one.vercel.app](https://contentful-series-one.vercel.app)

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

Desenvolvido por [xMattRx](https://github.com/xMattRx) 💡
