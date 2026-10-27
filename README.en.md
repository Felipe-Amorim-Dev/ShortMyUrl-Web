<p align="center"><img src="README/Capa.jpg" alt="Project cover ShortMyUrl-Web" width="100%" /></p>

<h1 align="center">🔗 ShortMyUrl Web</h1>

<p align="center"><em>Angular interface for creating short links.</em></p>

<p align="center">🇧🇷 <a href="README.md">Português</a> | 🇺🇸 English</p>

<p align="center"><img src="https://img.shields.io/badge/license-MIT-006bed?style=flat-square" alt="MIT" /> <img src="https://img.shields.io/github/last-commit/Felipe-Amorim-Dev/ShortMyUrl-Web?style=flat-square&color=006bed" alt="Last commit" /></p>

<p align="center"><a href="#sobre">About</a> • <a href="#tecnologias">Technologies</a> • <a href="#como-rodar">Running locally</a> • <a href="#licenca">License</a> • <a href="#autor">Author</a></p>

---

<a id="sobre"></a>
## 📖 About

Angular 19 and Tailwind CSS 4 frontend for the ShortMyUrl shortening service.

## ✨ Features

- Short URL creation interface
- ShortMyUrl API integration

## 🛠️ Technologies

![Angular 19](https://img.shields.io/badge/Angular_19-006bed?style=for-the-badge) ![TypeScript 5.7](https://img.shields.io/badge/TypeScript_5.7-006bed?style=for-the-badge) ![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS_4-006bed?style=for-the-badge) ![RxJS 7](https://img.shields.io/badge/RxJS_7-006bed?style=for-the-badge)

## 📦 Prerequisites

Node.js and npm compatible with the Angular version used by this project.

<a id="como-rodar"></a>
## 🚀 Running locally

```bash
git clone https://github.com/Felipe-Amorim-Dev/ShortMyUrl-Web.git
cd ShortMyUrl-Web
npm ci
npm start
```

http://localhost:4200

## 🔗 Related repositories

- [ShortMyUrl-DOTNET](https://github.com/Felipe-Amorim-Dev/ShortMyUrl-DOTNET) — Serviço de encurtamento .NET

## 🏗️ Architecture and responsibilities

- AppComponent handles form inputs, original and short URLs, and clipboard copying.
- UrlService encapsulates POST requests through HttpClient.
- src/environment/environment.ts sets the backend URL.

### Execution flow

1. Form → AppComponent.onSubmit() → UrlService.encurtar() → .NET API → MongoDB.
2. Response data updates urlNova; copiarUrl uses navigator.clipboard.writeText().
3. takeUntil and ngOnDestroy close the RxJS subscription.

### Local execution

```bash
npm ci
npm start
```

Project endpoint: http://localhost:4200

<a id="licenca"></a>
## 📄 License

Distributed under the [MIT license](LICENSE).

<a id="autor"></a>
## 👤 Author

**Felipe Figueiredo Amorim** — Full Stack Developer.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Felipe%20Amorim-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/felipe-amorim-dev/) [![E-mail](https://img.shields.io/badge/E--mail-contato-006bed?style=for-the-badge)](mailto:felipe.f.amorim@outlook.com)

<p align="center"><strong>Obrigado por visitar! / Thanks for visiting!</strong></p>
