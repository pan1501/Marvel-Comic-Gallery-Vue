  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 250px;
  width: 100%
}

.back-button {
  position: absolute;
  top: 35px;
  left: 24px;
  color: lightgreen;
  font-size:20px;
  cursor: pointer;
}

.title-section {
  padding: 20px;
  display:flex;
  justify-content: space-evenly;
}
.other-info {
  color: #B8D8E6;
  margin-top:12px;
}
.story {
  color: #B8D8E6;
  margin-top:20px;
}
.profile-pic-container {
 margin-top: -70px;
}
.profile-pic {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 140px;
  height: 215px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5), 0px 16px 32px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.detail-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 18px;
}

.title {
  font-size: 28px;
  color: #E3F4FC;
}

.sub-title {
  font-size: 24px;
  color: #E3F4FC;
}

.seperater {
  margin: 30px 20px;
  border: 1px solid #0F303D;
  box-sizing: border-box;
}

.overview-section {
  padding: 20px;
}

.header {
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  color: #E3F4FC;
}

.body {
  font-size: 16px;
  margin-top:12px;
  text-align: left;
  color: #9FBBC7;
}

@media only screen and (max-width: 414px) {
  .detail-section {
    align-items: baseline;
  }
}

.related-section {
  padding: 20px;
}
.characters-conainter, .stories-conainter {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  grid-gap: 30px;
  justify-content: baseline;
  margin-top: 12px;
  margin-bottom: 12px;
}
.character-background, .story-background {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5), 0px 16px 32px rgba(0, 0, 0, 0.5);
  height: 250px;
  border-radius: 0.7rem;
}

.character-name, .story-name {
  margin-top:12px;
  font-size: 20px;
  text-align: left;
  color: #E6F7FF;
}

.character-description, .story-description {
  margin-top:12px;
  font-size: 15px;
  text-align: left;
  color: #E6F7FF;
}
</style>

<template>
  
  <div>
    <div class="background" :style="{ backgroundImage: `url(${getSelectedComicDetails.thumbnail.path}/landscape_incredible.${getSelectedComicDetails.thumbnail.extension})`}"/>
    <div class= "back-button">
      <font-awesome-icon icon="arrow-left" v-on:click="closeComicDetail()" />
    </div>
    <div class="title-section">
      <div class="profile-pic-container">
          <div class="profile-pic" :style="{ backgroundImage: `url(${getSelectedComicDetails.thumbnail.path}/portrait_medium.${getSelectedComicDetails.thumbnail.extension})`}"/>
      </div>
      <div class="detail-section">
          <div class="title">
              <strong>
                {{ getSelectedComicDetails.title }}
              </strong>
          </div>
          <div class="other-info">
              <!-- Only keeping the date -->
              On sale: {{ getSelectedComicDetails.dates[0].date.split("T")[0] }}
              <span>
                  &#183;
              </span>
              Print Price: ${{ getSelectedComicDetails.prices[0].price }}
          </div>
          <div class="story">
            {{ this.cleanUpDescription() }}
          </div>
      </div>
    </div>

    <div class="related-section">
        <div class="related-characters-container" v-if="getRelatedCharacters && getRelatedCharacters.length > 0">
          <div class="sub-title">
            Related Characters
          </div>
          <div class="characters-conainter">
            <div class="character" :key="character.id" v-for="character in getRelatedCharacters">
              <div class="character-background" :style="{ backgroundImage: `url(${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension})` }">
              </div>
              <div class="character-name">{{character.name}}</div>
              <div class="character-description">{{character.description}}</div>
            </div>
          </div>
        </div>
         <div class="related-stories-container" v-if="getRelatedStories && getRelatedStories.length > 0">
           <div class="sub-title">
            Related Stories
          </div>
          <div class="stories-conainter">
            <div class="story" :key="story.id" v-for="story in getRelatedStories">
              <div class="story-background" v-if="story.thumbnail !== null" :style="{ backgroundImage: `url(${story.thumbnail.path}/portrait_uncanny.${story.thumbnail.extension})` }"/>
              <div class="story-background" v-else :style="{ backgroundImage: `url(https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg)` }"/>
              <div class="story-name">{{ story.title }}</div>
              <div class="story-description">{{ story.description }}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'comicDetailSection',
  computed: {
    ...mapGetters([
      'getSelectedComicDetails',
      'getRelatedCharacters',
      'getRelatedStories'
    ])
  },
  methods: {
    ...mapMutations([
      'CLOSE_COMIC_DETAIL'
    ]),
    closeComicDetail() {
      this.CLOSE_COMIC_DETAIL()
    },
    cleanUpDescription () {
      // Remove <br>
      return this.getSelectedComicDetails.description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,'');
    }
  }
}
</script>
