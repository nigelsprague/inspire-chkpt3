import { AppState } from "../AppState.js"
import { imagesService } from "../services/ImagesService.js"
import { Pop } from "../utils/Pop.js"

export class ImagesController {
  constructor() {
    console.log('Images Controller loaded')
    AppState.on('user', this.getImage)
    AppState.on('image', this.drawImage)
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawImage() {
    const image = AppState.image
    document.body.style.backgroundImage = `url(${image.imgUrl})`
  }
}