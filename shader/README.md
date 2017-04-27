# WebGL2 - Шейдер

## Создание

Создаем вершинный шейдер, задаем исходный код, компилируем и проверяем на ошибки

```javascript
var vertexShader = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vertexShader, [
    "#version 300 es",
    "in vec3 vertexPosition;",
    "void main(){",
        "gl_Position = vec4(vertexPosition, 1);",
    "}"
].join("\n"))
gl.compileShader(vertexShader)
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.log("vertex shader compile error\n" + gl.getShaderInfoLog(vertexShader))
}
```

Создаем фрагментный шейдер, задаем исходный код, компилируем и проверяем на ошибки

```javascript
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fragmentShader, [
    "#version 300 es",
    "out highp vec4 fragColor;",
    "void main(){",
        "fragColor = vec4(1, 1, 0, 1);",
    "}"
].join("\n"))
gl.compileShader(fragmentShader)
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.log("fragment shader compile error\n" + gl.getShaderInfoLog(fragmentShader))
}
```

Объединяем вершинный и фрагментный шейедр в шейдерную программу

```javascript
var shaderProgram = gl.createProgram()
gl.attachShader(shaderProgram, vertexShader)
gl.attachShader(shaderProgram, fragmentShader)
gl.linkProgram(shaderProgram)
if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.log("shader program link error\n" + gl.getProgramInfoLog(shaderProgram))
}
```

Получаем положения униформ

```javascript
var uniformLocation = {}
for (let i = 0; i < gl.getProgramParameter(shaderProgram, gl.ACTIVE_UNIFORMS); i++) {
    let uniform = gl.getActiveUniform(shaderProgram, i);
    this.uniformLocation[uniform.name] = gl.getUniformLocation(shaderProgram, uniform.name)
}
```

Получаем положения атрибутов

```javascript
var attributeLocation = {}
for (let i = 0; i < gl.getProgramParameter(shaderProgram, gl.ACTIVE_ATTRIBUTES); i++) {
    let attribute = gl.getActiveAttrib(shaderProgram, i);
    this.attributeLocation[attribute.name] = gl.getAttribLocation(shaderProgram, attribute.name)
}
```

## Использование

Разметка вершинного буфера

```javascript
var vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -0.5, -0.5, 0.0,
     0.0,  0.5, 0.0,
     0.5, -0.5, 0.0
]), gl.STATIC_DRAW)
gl.vertexAttribPointer(attributeLocation.vertexPosition, 3, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(attributeLocation.vertexPosition)
```

Включение шейдера

```javascript
gl.useProgram(shaderProgram)
```

Установка цвета материала (значение униформы)

```javascript
gl.uniform4f(uniformLocation["material.color"], 1, 1, 0, 1)
```
