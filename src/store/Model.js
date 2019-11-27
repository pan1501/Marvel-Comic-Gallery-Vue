import axios from 'axios'
import d3 from "d3";

export const Model = {
    data: [],
    // nested the comics by its format
    nestedByFormat () {
        return d3.nest()
        .key(d => d.format)
        .map(this.data)
    },
    filterComicsByTitle (searchInput) {
        // Do clone for the raw data
        let comicsToFilterClone = JSON.parse(JSON.stringify(this.data))
        // filter out comics which its title doesn't contain the search
        let filteredComics = comicsToFilterClone.filter(comic => {
            return comic.title.includes(searchInput)
        })

        return filteredComics
    },
    getFilterOptions () {
        return Object.keys(this.nestedByFormat())
    },
    filterComicsByFormat (selectedType) {
        // if the selected type is empty just return the raw data
        if (selectedType === null) return this.data;
        return this.nestedByFormat()[selectedType];
    },
    getDataFromAPI (comicID, urlTokens, characterOrStories) {
        return axios.get(`https://gateway.marvel.com:443/v1/public/comics/${comicID}/${characterOrStories}?${urlTokens}`)
            .then(response => response.data.data.results)
    }
}