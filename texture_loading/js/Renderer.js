class Renderer {

    /*
        @param param.width - ширина канвы
        @param param.height - высота канвы
        @param param.shader - параметры шейдера
    */

    constructor(param = {}) {

        // Канва

        this.canvas = document.createElement("canvas")
        this.width = param.width != undefined ? param.width : 512
        this.height = param.height != undefined ? param.height : 512

        // Контекст

        this.context = this.canvas.getContext("webgl2", param.context)

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

    render() {

    }

}
