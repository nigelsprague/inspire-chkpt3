import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { api } from "./AxiosService.js"

class ImagesService {
  async getImage() {
    const response = await api.get('api/images')
    const newImage = new Image(response.data)
    AppState.image = newImage
  }
}

export const imagesService = new ImagesService()