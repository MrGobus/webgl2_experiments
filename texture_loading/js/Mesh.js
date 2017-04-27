class Mesh {

    /*
        @param param.renderer - Рендерер
        @param param.vertices - массив вершин (формат верины: x,y,z, u,v)
        @param param.indices - массив индексов
    */

    constructor (param = {}) {

        this.renderer = param.renderer

        // Контекст

        var gl = renderer.context

        // Vertex Array Object

        this.vertexArray = gl.createVertexArray()
        gl.bindVertexArray(this.vertexArray)

        // Вершины

        this.verticesBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(param.vertices != undefined ? param.vertices : []), gl.STATIC_DRAW)
        gl.vertexAttribPointer(this.renderer.shader.attribLocation["vertexPosition"], 3, gl.FLOAT, false, 20, 0)
        gl.enableVertexAttribArray(this.renderer.shader.attribLocation["vertexPosition"])
        gl.vertexAttribPointer(this.renderer.shader.attribLocation["vertexTexCoord"], 2, gl.FLOAT, false, 20, 12)
        gl.enableVertexAttribArray(this.renderer.shader.attribLocation["vertexTexCoord"])

        // Индексы

        this.indicesBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer)
        var indices = param.indices != undefined ? param.indices : []
        this.indicesCount = indices.length
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

    }

    draw() {
        var gl = this.renderer.context
        gl.bindVertexArray(this.vertexArray)
        gl.drawElements(gl.TRIANGLE_STRIP, this.indicesCount, gl.UNSIGNED_SHORT, 0)
    }

}
