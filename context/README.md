# WebGL2 - Создание контекста

[Пример](https://mrgobus.github.io/webgl2_experiments/context/context.html)

## Создание

Создаем html элемент *canvas* размером 512x512 и добавляем его на страницу

```javascript
var canvas = document.createElement("canvas")
canvas.width
 = 512
canvas.height = 512
document.body.appendChild(canvas)
```

Получаем контекст *webgl2*

```javascript
var gl = canvas.getContext("webgl2")
```

## Использование

Очищаем канву средствами WebGL2.

```javascript
gl.clearColor(1, 1, 0, 1)
gl.clear(gl.COLOR_BUFFER_BIT)
```
