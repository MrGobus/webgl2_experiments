class Renderer {

    /*
        @param param.context - параметры контекста
        @param param.width - ширина канвы
        @param param.height - высота канвы
        @param param.shader - параметры шейдера
    */

    constructor(param = {}) {

        // Канва

        this.canvas = document.createElement("canvas")
        this.canvas.width = param.width != undefined ? param.width : 512
        this.canvas.height = param.height != undefined ? param.height : 512

        // Контекст

        this.context = this.canvas.getContext("webgl2", param.context != undefined ? param.context : {
            alpha: false
        })

        // Шейдер

        if (param.shader) {
            param.shader["renderer"] = this
        } else {
            param.shader = {
                renderer: this
            }
        }

        this.shader = new Shader(param.shader)

    }

}
