<template>
  <div class="container">
      <div class="card"> 
       <div class="card-content">
            <h1 class=""></h1>
       </div>
      </div>
  </div>
</template>

<script
import { Players, PictureDeck, CurrentPicture, Init} from '../models/Game '
Init();

export default {
  name: 'Home',
  data:{}=>({
    Players,
    PictureDesk,
    CurrentPicture
  }),
  components: {
    
  }
}
</script>
<style>
  img.card-image{
    width: 100%
  }
</style>
