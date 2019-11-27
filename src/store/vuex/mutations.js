import { Model } from "../Model.js";

export const mutations = {
  SET_DATA_READY: (state) => {
    state.comicsData = Model.data
    state.filterOptions = Model.getFilterOptions()
    state.dataReady = true
  },
  SET_SEARCHINPUT: (state, newSearchInput) => {
    state.searchInput = newSearchInput
    // filter comics base on title seached
    state.comicsData = Model.filterComicsByTitle(newSearchInput)
  },
  SET_SELECTEDTYPE: (state, newSelectedType) => {
    state.selectedType = newSelectedType;
    // filter comics base on selected type
    state.comicsData = Model.filterComicsByFormat(newSelectedType)
  },
  OPEN_COMIC_DETAIL: (state, selectedComic) => {
    // change to show detail of the selected comic
    state.showDetail = true
    state.selectedComicDetails = selectedComic
    // get data for related characters of the selected comic
    Model.getDataFromAPI(selectedComic.id, state.urlTokens, "characters").then(data => state.relatedCharacters = data)
    // get data for related stories of the selected comic
    Model.getDataFromAPI(selectedComic.id, state.urlTokens, "stories").then(data => state.relatedStories = data)
  },
  CLOSE_COMIC_DETAIL: (state) => {
    state.showDetail = false
  }
}

export default mutations
