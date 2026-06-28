# 🐙 GitHub API – Gestor de Repositorios

API REST construida con Node.js, Express y Octokit que permite consultar y gestionar repositorios de GitHub, ramas y usuarios, actuando como un intermediario entre tu aplicación y la API oficial de GitHub.

---

## 📋 Tabla de contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
  - [Variables de entorno](#variables-de-entorno)
  - [Token de GitHub](#token-de-github)
- [Uso](#-uso)
- [Endpoints disponibles](#-endpoints-disponibles)
- [Cómo probar la API](#-cómo-probar-la-api)
  - [Con Bruno (recomendado)](#con-bruno-recomendado)
  - [Con curl](#con-curl)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Errores comunes y soluciones](#-errores-comunes-y-soluciones)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 🚀 Características

- Obtener repositorios de un usuario.
- Obtener commits de un repositorio.
- Obtener detalles de un repositorio.
- Crear, actualizar y eliminar repositorios (requiere autenticación).
- Listar y crear ramas en un repositorio.
- Búsqueda de usuarios.
- Autenticación mediante token de acceso personal de GitHub.

---

## 🛠️ Tecnologías

- **Node.js** v22+
- **Express** v5
- **Octokit** (SDK oficial de GitHub)
- **Dotenv** para variables de entorno
- **Nodemon** para desarrollo
- **CORS** para peticiones cruzadas

---

## 📦 Requisitos previos

- Node.js y npm instalados.
- Una cuenta de GitHub.
- Un token de acceso personal con permisos adecuados (ver sección de configuración).
- (Opcional) Bruno, Postman o cualquier cliente HTTP para probar.

---

## 🔧 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/githubUserActivity.git
Project_URL = https://roadmap.sh/projects/github-user-activity