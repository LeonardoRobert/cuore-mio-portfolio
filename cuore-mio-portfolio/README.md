# Cuore Mio — Portfólio (estático)

Arquivos gerados automaticamente para publicar no GitHub Pages.

## Conteúdo
- `index.html` — página principal (single-page)
- `styles.css` — estilos
- `scripts.js` — pequenos scripts
- `assets/` — imagens (logo e arte)

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `cuore-mio-portfolio`).
2. No seu computador, clone ou copie os arquivos para uma pasta local.
3. Substitua o conteúdo do README com suas informações se desejar.
4. Use os comandos abaixo (substitua `SEU_USUARIO` e `NOME_DO_REPO`):

```bash
git init
git add .
git commit -m "Site Cuore Mio"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

5. No GitHub: vá em *Settings > Pages* e selecione `main` branch / root (`/`). Salve.

O site ficará disponível em alguns minutos em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

## Personalizações rápidas
- Alterar textos: editar `index.html`.
- Trocar imagens: substituir arquivos dentro de `assets/`.
- Mudar número do WhatsApp: editar o link no `index.html` (procure `api.whatsapp.com/send?phone=`).

---

Gerado automaticamente por ChatGPT. Boa sorte com a publicação!