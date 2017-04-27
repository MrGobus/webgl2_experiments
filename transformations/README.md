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
