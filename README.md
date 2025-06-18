# 🌱 Verdes do Seu Luiz - Site de Produtos Orgânicos

## 📋 Sobre o Projeto

Site completo para uma loja de produtos orgânicos com funcionalidades de carrinho de compras, formulários de contato, autenticação e catálogo de produtos.

## 🗂️ Estrutura do Projeto

```
Verdes do Seu Luiz/
├── index.html              # Página inicial
├── produtos.html           # Catálogo de produtos
├── sobre.html              # Página "Quem Somos"
├── contato.html            # Página de contato
├── carrinho.html           # Carrinho de compras
├── login.html              # Página de login
├── cadastro.html           # Página de cadastro
├── recuperar-senha.html    # Recuperação de senha
├── style.css               # Estilos CSS
├── script.js               # JavaScript centralizado
└── README.md               # Este arquivo
```

## 🚀 Funcionalidades

### 📱 Menu Mobile
- Menu responsivo que funciona em dispositivos móveis
- Animações suaves de abertura/fechamento
- Fechamento automático ao clicar em links

### 🛒 Carrinho de Compras
- Adicionar/remover produtos
- Controles de quantidade
- Cálculo automático de subtotal, frete e desconto
- Cupom de desconto (exemplo: "verde10")
- Estado de carrinho vazio

### 🔍 Filtros e Busca
- Filtros por categoria (Legumes, Verduras, Frutas, Ervas)
- Busca por nome e descrição
- Contador de produtos encontrados
- Ordenação por relevância, preço e nome

### 📝 Formulários
- Formulário de contato com validação
- Login com feedback visual
- Cadastro com confirmação de senha
- Recuperação de senha
- Máscara para telefone

### 🎨 Design Responsivo
- Layout adaptável para todos os dispositivos
- Animações CSS suaves
- Feedback visual em todas as ações
- Cores e tipografia consistentes

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e responsividade
- **JavaScript ES6+** - Funcionalidades interativas
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Inter)

## 🔧 Como Usar

### Para Desenvolvedores

1. **Estrutura do JavaScript**
   - Todo o JavaScript está centralizado em `script.js`
   - Funcionalidades são inicializadas automaticamente
   - Funções globais disponíveis para compatibilidade

2. **Adicionando Novas Funcionalidades**
   ```javascript
   // No script.js
   function novaFuncionalidade() {
       // Sua lógica aqui
   }
   
   // Para compatibilidade com onclick
   window.novaFuncionalidade = novaFuncionalidade;
   ```

3. **Páginas Específicas**
   - Cada página pode ter seu próprio script específico
   - Use `document.addEventListener('DOMContentLoaded', function() { ... })`
   - Chame funções do script.js quando necessário

### Para Usuários

1. **Navegação**
   - Menu principal no topo
   - Links de navegação no footer
   - Botões "Voltar" nas páginas de autenticação

2. **Compras**
   - Adicione produtos ao carrinho
   - Ajuste quantidades
   - Aplique cupons de desconto
   - Finalize a compra

3. **Contato**
   - Preencha o formulário de contato
   - Use os links de telefone e e-mail
   - Consulte o horário de funcionamento

## 🎯 Funcionalidades Específicas por Página

### `index.html`
- Hero section com call-to-action
- Produtos em destaque
- Benefícios da empresa
- Newsletter

### `produtos.html`
- Filtros por categoria
- Busca de produtos
- Controles de quantidade
- Paginação

### `carrinho.html`
- Lista de itens
- Controles de quantidade
- Resumo do pedido
- Cupom de desconto
- Finalização de compra

### `contato.html`
- Formulário de contato
- Informações de contato
- Horário de funcionamento
- Mapa placeholder

### `sobre.html`
- História da empresa
- Missão e valores
- Equipe
- Números e estatísticas

### Páginas de Autenticação
- Login
- Cadastro
- Recuperação de senha
- Validação de formulários

## 🎨 Variáveis CSS

O projeto usa variáveis CSS para consistência:

```css
:root {
  --primary-color: #2d5a27;
  --primary-light: #4a7c59;
  --primary-dark: #1e3d1a;
  --secondary-color: #8bc34a;
  --accent-color: #ff6b35;
  --text-primary: #2c3e50;
  --text-secondary: #7f8c8d;
  --background-light: #f8f9fa;
  --background-white: #ffffff;
  --border-color: #e9ecef;
  --shadow-light: 0 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 20px rgba(0, 0, 0, 0.15);
  --shadow-heavy: 0 8px 30px rgba(0, 0, 0, 0.2);
  --border-radius: 12px;
  --border-radius-small: 8px;
  --transition: all 0.3s ease;
}
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🔍 SEO e Acessibilidade

- Meta tags adequadas
- Estrutura semântica HTML5
- Labels em formulários
- Contraste de cores apropriado
- Navegação por teclado

## 🚀 Deploy

Para fazer deploy do projeto:

1. Faça upload de todos os arquivos para seu servidor
2. Certifique-se de que todos os arquivos estão na mesma pasta
3. Acesse `index.html` como página inicial

## 📞 Suporte

Para dúvidas ou sugestões:
- **E-mail**: contato@verdesdoseuluiz.com
- **Telefone**: (48) 99999-9999
- **Endereço**: Rua das Hortênsias, 123 - São José, SC

---

**Desenvolvido com ❤️ para a Verdes do Seu Luiz** 