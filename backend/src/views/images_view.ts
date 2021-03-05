import Image from '../models/Images'

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.2.81:3333/uploads/${image.path}`

        }
    },

    renderMany(image: Image[]) {
        return image.map(image => this.render(image))
    }
}