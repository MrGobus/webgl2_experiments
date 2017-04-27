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

        // Vertex Buffer

        this.verticesBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(param.vertices != undefined ? param.vertices : []), gl.STATIC_DRAW)

        // Index Buffer

        this.indicesBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer)
        var indices = param.indices != undefined ? param.indices : []
        this.inidcesCount = indices.length
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Float32Array(indices), gl.STATIC_DRAW)

    }

}
