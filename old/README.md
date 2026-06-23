# Bruna Dias — Psicóloga Clínica

Site institucional da psicóloga Bruna Dias. Landing page estática, leve e focada em conversão via WhatsApp.

## Estrutura

```
├── index.html                    # Página principal
├── politica-de-privacidade.html
├── termos-de-uso.html
├── politica-de-cookies.html
├── css/
│   ├── main.css        # Entry point (importa os demais)
│   ├── variables.css   # Paleta e tokens
│   ├── base.css        # Reset e tipografia base
│   ├── components.css  # Header, botões, FAQ, footer
│   └── sections.css    # Estilos por seção
├── js/
│   └── main.js         # Menu mobile, FAQ accordion, links WhatsApp
└── assets/images/      # Fotos (substituir placeholders)
```

## Visualizar localmente

Abra `index.html` no navegador ou use um servidor estático:

```bash
python3 -m http.server 8080
# Acesse http://localhost:8080
```

## Personalização

| Item | Onde alterar |
|------|--------------|
| Fotos | `assets/images/bruna-dias.jpg` (hero e sobre) |
| WhatsApp | Número em `js/main.js` (`WHATSAPP_URL`) |
| Textos / formação | `index.html` — seção `#sobre` |
| Cores | `css/variables.css` |

## Deploy

Publique a pasta inteira em qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, cPanel).
