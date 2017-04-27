# WebGL2 - VAO (Vertex Array Object)

## Создание

Создаем и устанавливаем вершинный массив

```javascript
var vertexArray = gl.createVertexArray()
gl.bindVertexArray(vertexArray)
```

Создаем и размечаем вершинный буфер

```javascript
var vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -0.5, -0.5, 0,
    -0.5,  0.5, 0,
     0.5, -0.5, 0,
     0.5,  0.5, 0
]), gl.STATIC_DRAW)
gl.vertexAttribPointer(attributeLocation.vertexPosition, 3, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(attributeLocation.vertexPosition)
```

Создаем и размечаем буфер цветов вершин

```javascript
var colorBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    1, 1, 0, 1,
    1, 0, 1, 1,
    0, 1, 1, 1,
    1, 0, 0, 1
]), gl.STATIC_DRAW)
gl.vertexAttribPointer(attributeLocation.vertexColor, 4, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(attributeLocation.vertexColor)
```

Буфер индексов

```javascript
var indexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
    0, 1, 2, 3
]), gl.STATIC_DRAW)
```

## Использование

```javascript
gl.bindVertexArray(vertexArray)
gl.drawElements(gl.TRIANGLE_STRIP, 4, gl.UNSIGNED_SHORT, 0)
```
