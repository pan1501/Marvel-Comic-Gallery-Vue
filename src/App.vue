<style>
body {
  background-color: #081C24;
  margin: 0px;
}
a {
  text-decoration: none;
}
.popular-comics-container {
  padding: 0 17px;
}

.popular-comics-title {
  margin-top: 44px;
  text-align: left;
  font-size: 20px;
  color: #E3F4FC;
}

.lds-ring {
  display: inline-block;
  position: absolute;
  top:45%;
  left: 45%;
  width: 100px;
  height: 100px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #dfc;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #dfc transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<template>
  <div>
    <!-- if data is ready then render -->
    <div id="popular-comics-container" v-if="getDataReady">
      <div v-if="getDisplayDetail">
        <comicDetailSection />
      </div>
      <div v-else>
        <searchSection />
        <div class="popular-comics-title">
          <strong>Popular Comics</strong>
        </div>
        <popularComicSection/>
      </div>
    </div>
    <div v-else class="loading">
      <!-- else Loading  -->
      <div class="lds-ring">
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchSection from './components/searchSection.vue'
import popularComicSection from './components/popularComicSection.vue'
import comicDetailSection from './components/comicDetailSection'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    searchSection,
    popularComicSection,
    comicDetailSection
  },
  methods: {
    ...mapActions([
      'LOAD_DATA'
    ])
  },
  mounted () {
    this.LOAD_DATA()
  },
  computed: {
    ...mapGetters([
      'getDataReady',
      'getDisplayDetail',
      'getSelectedComicDetails'
    ])
  },
}
</script>
