# Laboratório 01 — GitHub Actions

Web Academy · UFAM — CI/CD, Aula 01 (Introdução e Fundamentos de CI).

Três workflows básicos em [`.github/workflows`](.github/workflows):

| Workflow | Arquivo | Disparo |
|---|---|---|
| 01 - Hello World (manual) | `01-hello-manual.yml` | `workflow_dispatch` — botão **Run workflow** |
| 02 - Hello World (agendado) | `02-hello-agendado.yml` | `schedule` — cron a cada 5 minutos |
| 03 - Build (push) | `03-build-push.yml` | `push` na `main` — compila o TypeScript, roda testes e executa |

O projeto compilado pelo workflow 03 é uma calculadora simples em TypeScript (`src/`), testada com o test runner nativo do Node (`test/`).

```bash
npm ci
npm run build
npm test
npm start
```
