# WebGL2 - Трансформации

## Сдвиг

| | | | |
|-|-|-|-|
|1|0|0|0|
|0|1|0|0|
|0|0|1|0|
|x|y|z|1|

[Пример](https://mrgobus.github.io/webgl2_experiments/transformations/translate.html)

## Масштаб

| | | | |
|-|-|-|-|
|x|0|0|0|
|0|y|0|0|
|0|0|z|0|
|0|0|0|1|

[Пример](https://mrgobus.github.io/webgl2_experiments/transformations/scale.html)

## Поворот

### Поворот вокруг оси X

| |          |           | |
|-|----------|-----------|-|
|1|         0|          0|0|
|0|cos(angle)|-sin(angle)|0|
|0|sin(angle)| cos(angle)|0|
|0|         0|          0|1|

[Пример](https://mrgobus.github.io/webgl2_experiments/transformations/rotate_x.html)

### Поворот вокруг оси Y

|           | |          | |
|-----------|-|----------|-|
| cos(angle)|0|sin(angle)|0|
|          0|1|         0|0|
|-sin(angle)|0|cos(angle)|0|
|          0|0|         0|1|

[Пример](https://mrgobus.github.io/webgl2_experiments/transformations/rotate_y.html)

### Поворот вокруг оси Z

|           |           | | |
|-----------|-----------|-|-|
| cos(angle)|-sin(angle)|0|0|
| sin(angle)| cos(angle)|0|0|
|          0|          1|0|0|
|          0|          0|0|1|

[Пример](https://mrgobus.github.io/webgl2_experiments/transformations/rotate_z.html)

### Поворот на углы Эйлера

```javascript
var yaw = new Date().getTime() / 1000
var pitch = new Date().getTime() / 1000
var roll = new Date().getTime() / 1000

var cosYaw = Math.cos(yaw)
var sinYaw = Math.sin(yaw)
var cosPitch = Math.cos(pitch)
var sinPitch = Math.sin(pitch)
var cosRoll = Math.cos(roll)
var sinRoll = Math.sin(roll)

matrix[ 0] =   cosYaw * cosRoll + sinYaw * sinPitch * sinRoll
matrix[ 1] =   sinRoll * cosPitch
matrix[ 2] = - sinYaw * cosRoll + cosYaw * sinPitch * sinRoll

matrix[ 4] = - cosYaw * sinRoll + sinYaw * sinPitch * cosRoll
matrix[ 5] =   cosRoll * cosPitch
matrix[ 6] =   sinRoll * sinYaw + cosYaw * sinPitch * cosRoll

matrix[ 8] =   sinYaw * cosPitch
matrix[ 9] = - sinPitch
matrix[10] =   cosYaw * cosPitch
```

[Пример](https://mrgobus.github.io/webgl2_experiments/transformations/rotate_euler.html)

### Перенос + Масштаб + Поворот

```javascript
var yaw = 0
var pitch = 0
var roll = new Date().getTime() / 1000

var s = Math.abs(Math.sin(new Date().getTime() / 500)) + 1

var scaleX = s
var scaleY = s
var scaleZ = s

var translateX = Math.sin(new Date().getTime() / 1000)
var translateY = 0
var translateZ = 0

var cosYaw = Math.cos(yaw)
var sinYaw = Math.sin(yaw)
var cosPitch = Math.cos(pitch)
var sinPitch = Math.sin(pitch)
var cosRoll = Math.cos(roll)
var sinRoll = Math.sin(roll)

matrix[ 0] = scaleX * (cosYaw * cosRoll + sinYaw * sinPitch * sinRoll)
matrix[ 1] = scaleY * (sinRoll * cosPitch)
matrix[ 2] = scaleZ * (-sinYaw * cosRoll + cosYaw * sinPitch * sinRoll)

matrix[ 4] = scaleX * (-cosYaw * sinRoll + sinYaw * sinPitch * cosRoll)
matrix[ 5] = scaleY * (cosRoll * cosPitch)
matrix[ 6] = scaleZ * (sinRoll * sinYaw + cosYaw * sinPitch * cosRoll)

matrix[ 8] = scaleX * (sinYaw * cosPitch)
matrix[ 9] = scaleY * (-sinPitch)
matrix[10] = scaleZ * (cosYaw * cosPitch)

matrix[12] = translateX
matrix[13] = translateY
matrix[14] = translateZ
```

[Пример](https://mrgobus.github.io/webgl2_experiments/transformations/translate_scale_rotate.html)

### Поворот вокруг вектора (glRotate(x, y, z, angle))

c = cos(angle)

s = sin(angle)

|                         |                         |                         |   |
|-------------------------|-------------------------|-------------------------|---|
| x * x * (1 - c) + c     | x * y * (1 - c) - z * s | x * z * (1 - c) + y * s | 0 |
| x * y * (1 - c) + z * s | y * y * (1 - c) + c     | y * z * (1 - c) - x * s | 0 |
| x * z * (1 - c) + y * s | y * z * (1 - c) + x * s | z * z * (1 - c) + c     | 0 |
|                       0 |                       0 |                       0 | 1 |

```javascript
var x = document.getElementById("x").value
var y = document.getElementById("y").value
var z = document.getElementById("z").value

var angle = new Date().getTime() / 1000

var invLength = 1.0 / Math.sqrt(x * x + y * y + z * z)
x *= invLength
y *= invLength
z *= invLength

var c = Math.cos(angle)
var s = Math.sin(angle)

var c1 = 1 - c

matrix[ 0] = x * x * c1 + c
matrix[ 1] = x * y * c1 - z * s
matrix[ 2] = x * z * c1 + y * s

matrix[ 4] = x * y * c1 + z * s
matrix[ 5] = y * y * c1 + c
matrix[ 6] = y * z * c1 - x * s

matrix[ 8] = x * z * c1 - y * s
matrix[ 9] = y * z * c1 + x * s
matrix[10] = z * z * c1 + c
```

[Пример](https://mrgobus.github.io/webgl2_experiments/transformations/rotate.html)
