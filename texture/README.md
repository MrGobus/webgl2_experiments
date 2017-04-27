# WebGL2 - Текстура

[Пример](https://mrgobus.github.io/webgl2_experiments/texture/texture.html)

## Создание

Создает текстуру 2x2 пикселя, без линейной фильтрации, на основе данных из массива типа Uint8

```javascript
var texture = gl.createTexture()
gl.bindTexture(gl.TEXTURE_2D, texture)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 2, 2, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([
    0xFF, 0xFF, 0x00, 0xFF, // r, g, b, a
    0xFF, 0x00, 0xFF, 0xFF,
    0x00, 0xFF, 0xFF, 0xFF,
    0xFF, 0x00, 0x00, 0xFF,
]))
```

## Использование

```javascript
gl.useProgram(shader.program)

gl.bindTexture(gl.TEXTURE_2D, texture)

gl.bindVertexArray(vertexArray)
gl.drawElements(gl.TRIANGLE_STRIP, 4, gl.UNSIGNED_SHORT, 0)
```
