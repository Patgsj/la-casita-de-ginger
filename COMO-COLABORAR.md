# Cómo subir tu parte al proyecto

Cada integrante trabaja en una rama propia y después se junta con `main`. Así no nos pisamos los cambios.

## Antes de empezar

1. Tener una cuenta en GitHub y aceptar la invitación al repositorio que llega por correo.
2. Tener Git instalado.

## Pasos

1. Clonar el repositorio:
   `git clone https://github.com/Patgsj/la-casita-de-ginger.git`
2. Entrar a la carpeta y crear tu rama (usa el nombre de tu tarea):
   `cd la-casita-de-ginger`
   `git checkout -b pestanas`
3. Hacer tus cambios y probarlos abriendo `index.html` en el navegador.
4. Guardar los cambios:
   `git add .`
   `git commit -m "Agrego las pestañas de productos"`
5. Subir tu rama:
   `git push -u origin pestanas`
6. En GitHub, abrir un Pull Request de tu rama hacia `main` y avisar al grupo para revisarlo.

## Tareas

| Tarea | Rama | Dónde va | Se basa en |
|---|---|---|---|
| Pestañas de productos | `pestanas` | Sección de productos | Actividad 5, ejercicio 1 |
| Galería con botones | `galeria` | Sección de hechos a pedido | Actividad 5, ejercicio 3 |
| Lista de pedido | `lista-pedido` | Sección de pedidos | Actividad 6, ejercicio 3 |

## Reglas

- Usar solo lo visto en la unidad: HTML, CSS y JavaScript básico con eventos.
- Poner el JavaScript en un archivo propio dentro de `js/` (por ejemplo `js/pestanas.js`) y enlazarlo al final de `index.html`.
- Mantener los colores y la letra del sitio.
- Revisar que se vea bien en computador, tablet y celular.
- No borrar los créditos del template.
