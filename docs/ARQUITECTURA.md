# Arquitectura y decisiones del sistema

## Objetivo

La plataforma ofrece **alternativas compatibles bajo supuestos declarados**. No autoriza materiales ni reemplaza el criterio profesional.

## Flujo de decisión

```text
Ubicación + exposición local + uso + componente + requisitos
                              ↓
             filtros obligatorios e incompatibilidades
                              ↓
             alternativas técnicamente compatibles
                              ↓
       evaluación transparente con reglas versionadas
                              ↓
 ranking + condiciones + incertidumbre + fuentes + mantenimiento
```

## Separación de datos

- **Producto o sistema:** qué se evalúa.
- **Afirmación técnica:** propiedad, restricción o desempeño documentado.
- **Fuente:** evidencia y alcance de la afirmación.
- **Precio observado:** valor comercial fechado que nunca sobrescribe el historial.
- **Perfil ambiental:** variables regionales derivadas de ubicación y condiciones locales confirmadas.
- **Regla de recomendación:** umbral, exclusión o peso acordado por el proyecto.

## Fases

1. **MVP estático:** GitHub Pages, plantilla Excel y catálogo pequeño revisado.
2. **Datos versionados:** CSV/JSON aprobados mediante Pull Request.
3. **Base operativa:** PostgreSQL/Supabase, usuarios, permisos e historial.
4. **Integraciones:** precios desde fuentes autorizadas y capas geográficas con procedencia.

## Riesgos controlados

- No comparar precios con unidades funcionales diferentes.
- No inferir microclima únicamente con coordenadas.
- No usar un puntaje para ocultar una incompatibilidad crítica.
- No publicar propiedades sin unidad, condición y fuente.
- No exponer claves ni permitir escritura anónima en una base futura.
- No prometer scraping semanal hasta validar autorización, estabilidad y control de calidad.

