import Vue from 'vue'
import VueRouter from 'vue-router'
import MyImages from '../components/MyImages.vue'
import FileUploadForm from '../components/FileUploadForm.vue'
import ImageGallery from '../components/ImageGallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ImageGallery
  },
  {
    path: '/upload-images',
    name: 'Upload Image',
    component: FileUploadForm
  },
  {
    path: '/my-images',
    name: 'My Images',
    component: MyImages
  }
]

const router = new VueRouter({
  routes
})

export default router
