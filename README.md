# Materiales CR

Prototipo académico para la preselección trazable de materiales y sistemas constructivos en Costa Rica, desarrollado en el curso **Taller de Materiales**.

La aplicación organiza alternativas según:

- ubicación y perfil ambiental del sitio;
- uso residencial, comercial, institucional administrativo o institucional salud;
- componente: cubierta, cerramientos, pisos, cielo rasos, puertas o ventanas;
- propiedades técnicas documentadas, condiciones de exposición y precios observados.

## Estado actual

Este repositorio contiene un MVP estático. Los datos visibles en `index.html` son demostrativos y todavía no constituyen un catálogo técnico validado. La actualización semanal automática, la georreferenciación avanzada y la base de datos remota son etapas posteriores.

## Cómo ver la aplicación

Abra `index.html` en un navegador o visite la dirección de GitHub Pages indicada en la descripción del repositorio cuando quede habilitada.

## Cómo aportar

1. Descargue `docs/Plantilla_Aportes_Materiales_CR.xlsx`.
2. Registre el producto o sistema, sus afirmaciones técnicas, fuentes y precios.
3. No sobrescriba precios anteriores; cada consulta es una observación histórica.
4. Cree un Issue de tipo **Aporte de material** para solicitar revisión.
5. Los datos solo pasan a la aplicación después de revisión de datos y revisión técnica.

Consulte [CONTRIBUTING.md](CONTRIBUTING.md) para el flujo detallado.

## Estructura

```text
.
├── index.html                         # Prototipo web
├── data/                              # Datos aprobados para futuras versiones
├── docs/
│   ├── Plantilla_Aportes_Materiales_CR.xlsx
│   └── ARQUITECTURA.md
└── .github/
    ├── ISSUE_TEMPLATE/
    └── workflows/
```

## Alcance y responsabilidad

La aplicación es una herramienta académica de preselección. No sustituye normativa aplicable, especificación contractual, diseño estructural, inspección del sitio ni criterio de un profesional responsable.

## Licencia

Pendiente de acuerdo del equipo y del profesor. No se asume autorización para redistribuir fichas técnicas, fotografías o documentos de terceros.

