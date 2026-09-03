# Antigravity & AI Agent Directives (AGENTS.md)

Welcome, AI Agent (Antigravity, Cursor, Windsurf, Claude). This file contains the authoritative system context, architectural guidelines, and behavioral rules for navigating and modifying the PiyAPI repository. **Read this completely before executing tasks.**

## 1. Project Context
- **Name:** PiyAPI by Negentro
- **Purpose:** A Neuro-Symbolic, Self-Correcting, and Sovereign Cognitive Memory Operating System for AI agents. 
- **Nature of this Repo:** This repository acts as the public-facing developer documentation, frontend landing page, SDK usage guides, and configuration reference. *(Note: The core backend cognitive engine is proprietary and not stored in this repository).*

## 2. Directory Structure & Navigation
- **`/` (Root):** Contains primary markdown documentation (`README.md`, `benchmark.md`, `claude.md`, `SECURITY.md`, `CONTRIBUTING.md`), config files (`package.json`, `biome.json`), and project metadata.
- **`/web`:** The primary workspace for the frontend web application. It acts as the root for Vite (e.g., `index.html` lives here).
- **`.github/`:** CI/CD workflows (e.g., `health-check.yml`) and standardized issue templates.

## 3. Technology Stack & Hard Rules
When writing, refactoring, or modifying code, you **MUST** adhere to the following stack and rules:
- **Framework:** React 19 
- **Build Tool:** Vite 6
- **Language:** TypeScript 5.8+
  - **Rule:** Strict mode is MANDATORY. Ensure `tsc -b --noEmit` passes. Do not use `any` types unless absolutely unavoidable. Provide proper interface definitions for all props and state.
- **Styling:** Tailwind CSS v4
  - **Rule:** Use `@tailwindcss/vite` and standard Tailwind v4 conventions (`@import "tailwindcss";`).
- **Animation & Graphics:** GSAP for timelines/tweens, and Custom WebGL/WebGL2 for fragment/vertex shaders.
- **Backend/DB Integration:** Supabase JS (`@supabase/supabase-js`).
- **Formatting/Linting:** Biome (refer to `biome.json` at the root).

## 4. Agent Operational Guidelines
- **NPM Workspaces:** The root `package.json` uses an npm workspace targeting the `web/` directory. If installing frontend dependencies or running frontend scripts, ensure you are either running them from within `/web` or properly targeting the workspace from the root.
- **Documentation Parity:** If you update an API feature, configuration, or instruction, you **MUST** update both `README.md` (English) and `README.zh-CN.md` (Chinese) simultaneously to maintain parity.
- **Deep Architecture Guide:** For deeper architectural design patterns, frontend logic, and component guidelines, always consult `claude.md` first. It acts as the primary engineering guide.
- **Link Integrity:** When adding or moving markdown files, proactively check that relative links (e.g., `[Benchmarks](benchmark.md)` or internal anchor tags) remain intact and functional.

## 5. Development Philosophy
- **Premium Aesthetics:** PiyAPI is an enterprise-grade, state-of-the-art cognitive engine. Any frontend UI work must reflect a premium, modern design (dark modes, micro-animations, glassmorphism, dynamic GSAP elements). 
- **Self-Correction:** If a command fails (e.g., a missing dependency or lint error), proactively self-correct and fix the issue before asking the user.
- **Documentation:** Preserve all existing JSDoc comments and inline documentation unless instructed otherwise. When writing new complex logic, document the "why" alongside the "what".

## 6. How to Read This Repository (Context Ingestion)
When you (the AI agent) are first initialized or asked to perform a complex task, you should proactively read and ingest context in the following order:
1. **`AGENTS.md`** (This file) — For your operational boundaries and hard rules.
2. **`README.md`** — For a high-level overview of the PiyAPI cognitive memory engine, benchmark claims, and public API surface.
3. **`claude.md`** — For the deep technical architecture, component structures, state management (Supabase), and frontend GSAP/WebGL integration details.
4. **`/web/index.html` & `package.json`** — To understand the current dependency tree and confirm the frontend is isolated in the `web/` workspace.
