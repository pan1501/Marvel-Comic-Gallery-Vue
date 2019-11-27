export const getters = {
  getDataReady: state => state.dataReady,
  getComicsData: state => state.comicsData,
  getDisplayDetail: state => state.showDetail,
  getSearchInput: state => state.searchInput,
  getFilterOptions: state => state.filterOptions,
  getSelectedType: state =>  state.selectedType,
  getSelectedComicDetails: state => state.selectedComicDetails,
  getRelatedCharacters: state => state.relatedCharacters,
  getRelatedStories: state => state.relatedStories
}

export default getters
