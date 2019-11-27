  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-container {
  display:flex;
  flex-direction: column;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 95%;
}

.logo-container {
    flex: 1;
    width: 150px;
    margin: auto;
}

.logo {
  width: 100%;
}

.searchbar-container {
  display: flex;
}

.searchbar {
  width: 95%;
  padding: 12px 24px;
  background-color: white;
  font-size: 14px;
  line-height: 18px;
  border-radius: 1.5rem;
  border: 1px solid white;
}

.searchbar-button {
  vertical-align: middle;
  margin-left: -30px;
  border: none;
  display: inline-block;
  color: lightgreen;
  line-height: 44px;
}

.filter-container {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.filter {
  flex: 0.2;
}
</style>

<template>
  <div class="search-container">
    <div class="logo-container">
      <img class="logo" alt="Marvel logo" src="../assets/logo.png">
    </div>
    <div class='searchbar-container'>
      <input class='searchbar' type="text" placeholder="Search..." v-model="search">
      <div class='searchbar-button'>
        <font-awesome-icon icon="search" />
      </div>
    </div>
    <div class='filter-container'>
       <multiselect
          class="filter"
          :options="getFilterOptions"
          v-model="selectedType"
          placeholder="Select a type..."
          :allow-empty="true"
          :show-labels="false"/>
    </div>
  </div>
</template>

<script>
// importing Vuex
import { mapState, mapMutations, mapGetters } from 'vuex'

import Multiselect from 'vue-multiselect'

export default {
  name: 'searchSection',
  components: {
    Multiselect
  },
  computed: {
    ...mapGetters([
      'getSearchInput',
      'getFilterOptions',
      'getSelectedType'
    ]),
    search: {
      get () {
        return this.getSearchInput
      },
      set (searchInput) {
        this.SET_SEARCHINPUT(searchInput)
      }
    },
    selectedType: {
      get () {
        return this.getSelectedType;
      },
      set (value) {
        this.SET_SELECTEDTYPE(value);
      }
    },
  },
  methods: {
    ...mapMutations([
      'SET_SEARCHINPUT',
      'SET_SELECTEDTYPE'
    ])
  }
}
</script>
