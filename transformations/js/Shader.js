class Shader {

    /*
        @param param.renderer - рендерер
        @param param.vertexShaderSource - код вершинного шейдера
        @param param.fragmentShaderSource - код фрагментного шейдера
    */

    constructor (param = {}) {

        // Контекст

        this.renderer = param.renderer
        var gl = this.renderer.context

        // Вершинный шейдер

        this.vertexShader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(this.vertexShader, param.vertexShaderSource != undefined ? param.vertexShaderSource : "#version 300 es\nvoid main(){}")
        gl.compileShader(this.vertexShader)
        if (!gl.getShaderParameter(this.vertexShader, gl.COMPILE_STATUS)) {
            console.log("vertex shader compile error\n" + gl.getShaderInfoLog(this.vertexShader))
        }

        // Фрагментный шейдер

        this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(this.fragmentShader, param.fragmentShaderSource != undefined ? param.fragmentShaderSource : "#version 300 es\nvoid main(){}")
        gl.compileShader(this.fragmentShader)
        if (!gl.getShaderParameter(this.fragmentShader, gl.COMPILE_STATUS)) {
            console.log("fragment shader compile error\n" + gl.getShaderInfoLog(this.fragmentShader))
        }

        // Шейдерная программа

        this.program = gl.createProgram()
        gl.attachShader(this.program, this.vertexShader)
        gl.attachShader(this.program, this.fragmentShader)
        gl.linkProgram(this.program)
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            console.log("shader program link error\n" + gl.getProgramInfoLog(this.program))
        }

        // Список положений униформ

        this.uniformLocation = {}
        for (let i = 0; i < gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS); i++) {
            let uniform = gl.getActiveUniform(this.program, i);
            this.uniformLocation[uniform.name] = gl.getUniformLocation(this.program, uniform.name)
        }

        // Список положений атрибутов

        this.attribLocation = {}
        for (let i = 0; i < gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES); i++) {
            let attribute = gl.getActiveAttrib(this.program, i);
            this.attribLocation[attribute.name] = gl.getAttribLocation(this.program, attribute.name)
        }

    }

}
