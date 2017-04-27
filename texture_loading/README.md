# WebGL2 - Загрузка текстуры

[Пример](https://mrgobus.github.io/webgl2_experiments/texture_loading/)

## Создание

```javascript
var texture = gl.createTexture()
```

## Загрузка

```javascript
var image = new Image()

image.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
}

image.src = "texture.jpg"
```
