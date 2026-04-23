# TODO: Tornar site compatível com Android/iOS (PWA)

## Passos do Plano (Aprovado):
- [x] 1. Criar PWA assets: `static/manifest.json`, `static/sw.js`, ícone (base64).
- [x] 2. TODO.md criado.
- [x] 3. Editar `templates/perfect_final_fixed.html`: Adicionar link manifest, script SW, melhorias touch/fullscreen vídeo, orientação lock.
- [x] 4. Editar `server.py`: Adicionar rotas /manifest.json e /sw.js.
- [x] 5. Ícone via base64 no manifest.
- [ ] 6. Testar: Executar server, acessar via mobile browser/IP (encontre seu IP com `ipconfig`).
- [ ] 7. Verificar PWA install (Chrome: Menu > Instalar app), vídeo fullscreen iOS, responsivo.

**Status: Todos edits concluídos. Próximo: Teste!**
