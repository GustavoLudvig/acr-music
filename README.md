# ACR Music – Site do Prof. Andrey Cardoso Rosa

## Estrutura de Arquivos

```
acr-music-site/
├── index.html          ← Página principal
├── style.css           ← Estilos completos
├── script.js           ← JavaScript (menu, carrossel, animações)
├── vercel.json         ← Config de deploy na Vercel
├── images/
│   └── logo.png        ← Logo ACR Music (já incluída)
└── README.md
```

---

## Como personalizar

### 1. Foto do professor (Seção "Para você")
- Localize o `<div class="foto-placeholder">` no `index.html`
- Substitua o div inteiro por: `<img src="images/sua-foto.jpg" alt="Prof. Andrey Cardoso Rosa" style="width:100%;border-radius:50%;max-width:380px;">`
- Salve a foto em `images/` com boa resolução (mín. 600×600 px)

### 2. Imagens dos cursos (Seção "Cursos Disponíveis")
- Cada `<div class="curso-img-placeholder">` pode ser substituído por uma tag `<img>`
- Dimensões ideais: **640×480 px** (ratio 4:3)
- Formato recomendado: `.webp` ou `.jpg`

### 3. Capas dos Cursos Online (Seção Hotmart)
- Substitua cada `<div class="online-img-placeholder">` por `<img src="images/capa-curso-X.jpg">`
- Dimensões ideais: **1280×720 px** (ratio 16:9)
- Depois de ter o link do checkout Hotmart, substitua `href="#"` pelo link real

### 4. Carrossel (Seção "Sobre")
- Cada `<div class="carousel-slide">` recebe uma imagem real:
  ```html
  <div class="carousel-slide">
    <img src="images/foto-espaco-1.jpg" alt="Espaço Musical ACR" style="width:100%;border-radius:10px;">
  </div>
  ```
- Atualize também a quantidade de `.dot` no HTML se mudar o número de slides

### 5. Depoimentos
- Substitua os textos de exemplo pelos depoimentos reais dos alunos
- Para adicionar foto: troque o `<div class="depo-avatar">` por `<img src="..." style="width:44px;height:44px;border-radius:50%;object-fit:cover;">`

### 6. Mapa do Google
- O iframe do Google Maps usa coordenadas aproximadas para a Rua Olavo Bilac, 242 – Canto
- Para atualizar: vá em maps.google.com, pesquise o endereço, clique em "Compartilhar" → "Incorporar mapa" e substitua o `src` do iframe

### 7. E-mail de contato
- Substitua `contato@acrmusicfloripa.com.br` pelo seu e-mail real no rodapé e no link `mailto:`

---

## Deploy na Vercel (gratuito)

1. Crie conta em [vercel.com](https://vercel.com)
2. Instale a CLI: `npm install -g vercel`
3. Na pasta do projeto, rode: `vercel`
4. Siga as instruções e em minutos o site estará online com HTTPS
5. Para conectar domínio próprio: painel Vercel → Settings → Domains

---

## Domínio (Spaceship)

O Spaceship é uma ótima opção — preços competitivos e painel moderno.
Após registrar, adicione no painel:
- **Tipo:** CNAME
- **Nome:** `@` (ou `www`)
- **Valor:** `cname.vercel-dns.com`

A Vercel reconhece automaticamente após a configuração.

---

## WhatsApp

Todos os botões apontam para: `+55 48 96390-0313`
Para alterar, busque no `index.html` por `5548963900313` e substitua pelo número desejado (somente dígitos, com DDI e DDD).
