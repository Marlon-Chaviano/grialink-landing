# Grialink Landing — Claude Entry Point

> Las reglas completas del proyecto están en **`AGENTS.MD`** (léelo antes de tocar código).

## Skills — CRITICAL (antes de ejecutar)

Antes de implementar o cambiar código ante un prompt:

1. Identificar el dominio de la tarea.
2. Buscar un skill aplicable en `.agents/skills/`, `.cursor/skills/` y `.claude/skills/` si existen (y `find-skills` / `pnpx skills find` si no hay match local).
3. Leer el `SKILL.md` coincidente y seguirlo **antes** de escribir código.
4. Si no hay skill, seguir `AGENTS.MD`; no inventar convenciones paralelas.

Resumen mínimo:

- Astro + Tailwind; reutilizar componentes en `src/components/ui`, `shared`, `sections`.
- Adaptar diseños externos al design system existente (tokens, spacing, tipografía).
- Sin estilos ad-hoc ni componentes duplicados.
