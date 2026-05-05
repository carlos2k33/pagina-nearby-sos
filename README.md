# Pagina Nearby SOS

Sitio web oficial de Nearby SOS — aplicación de seguridad personal.

## Stack tecnológico

- Next.js 16
- React
- TypeScript
- Tailwind CSS

## Pipeline de seguridad (DevSecOps)

Este repositorio tiene integrado un pipeline de seguridad automatizado que corre en cada push y pull request hacia main.

### Herramientas configuradas

| Herramienta | Tipo | Qué hace |
|-------------|------|----------|
| Dependabot | SCA | Escanea dependencias con CVEs conocidos semanalmente y abre PRs automáticos con los parches |
| GitLeaks | Secrets scanning | Escanea todo el historial de git buscando credenciales, API keys o contraseñas expuestas |
| Semgrep | SAST | Análisis estático del código fuente buscando vulnerabilidades del OWASP Top 10 |

### Flujo del pipeline

Push / Pull Request hacia main
1. GitLeaks — detecta secretos en el historial
2. Semgrep — analiza el código con reglas OWASP Top 10
3. npm install — instala dependencias
4. npm run build — valida que el proyecto compila

### Decisiones de seguridad documentadas

**PostCSS XSS (Moderate) — Riesgo aceptado**
Dependencia transitiva introducida por Next.js 16.2.4. No explotable en el contexto de uso actual ya que el CSS es controlado internamente. Pendiente de resolución por el equipo de Next.js upstream.

**esbuild (Moderate) — Riesgo aceptado**
Afecta únicamente el servidor de desarrollo local, nunca el entorno de producción. No hay parche disponible actualmente.

### Vulnerabilidades resueltas

Al configurar Dependabot se detectaron y resolvieron 21 vulnerabilidades mediante actualización de dependencias:

- Next.js actualizado de 15.5.9 a 16.2.4 — resolvió múltiples CVEs de DoS
- Drizzle ORM actualizado de 0.44.7 a 0.45.2 — resolvió SQL injection (CWE-89)
- flatted actualizado de 3.3.3 a 3.4.2 — resolvió Prototype Pollution
- minimatch y picomatch actualizados — resolvieron ReDoS
- postcss, eslint y otras dependencias de desarrollo actualizadas

## Desarrollo local

Instalar dependencias y correr el servidor de desarrollo:

npm install
npm run dev

## Variables de entorno

Crear un archivo .env en la raíz del proyecto. Este archivo está incluido en .gitignore y nunca debe commitearse.

DATABASE_URL="postgresql://..."