  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comic-container {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  grid-gap: 30px;
  justify-content: baseline;
  margin-top: 12px;
}

.comic-background {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5), 0px 16px 32px rgba(0, 0, 0, 0.5);
  height: 250px;
  border-radius: 0.7rem;
  cursor: pointer;
}
.comic-price {
  color: white;
  border-radius: 1.5rem;
  width: 15%;
  padding: 3px 8px;
  font-size: 12px;
  top: 4px;
  left: 4px;
  position: relative;
  text-align: center;
  background-color: lightgreen;
}
.comic-title {
  margin-top:12px;
  font-size: 14px;
  text-align: left;
  color: #E6F7FF;
}
.comic-date {
  margin-top: 6px;
  font-size: 12px;
  text-align: left;
  color: #A1D1E6;
}
</style>

<template>
  <div class="comic-container">
      <div class="comic" v-on:click="openComicDetail(comic)" :key="comic.id" v-for="comic in getComicsData">
          <div class="comic-background" :style="{ backgroundImage: `url(${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension})` }">
              <div class="comic-price">${{comic.prices[0].price}}</div>
          </div>
          <div class="comic-title">
            {{ comic.title }}
          </div>
          <div class="comic-date">
            <!-- Only keeping the date -->
            {{ comic.dates[0].date.split("T")[0] }}
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'searchSection',
  computed: {
    ...mapGetters([
      'getComicsData'
    ])
  },
  methods: {
     ...mapMutations([
      'OPEN_COMIC_DETAIL'
    ]),
    openComicDetail (selectedComic) {
      this.OPEN_COMIC_DETAIL(selectedComic)
    }
  }
}
</script>
