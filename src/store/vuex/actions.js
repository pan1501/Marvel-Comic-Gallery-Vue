import { Model } from "../Model.js";
import state from './state'
import axios from 'axios'
import md5 from 'md5'

const publicKey = 'd66864441c217ff226ecf5318a190a51'
const privateKey = 'd70aa9a09d68c5a0a0e371cc8a0484329118feaa'
const date = new Date()
// get current time stamp
var timestamp = date.getTime()
// trander to md5 hash
var hash = md5(timestamp + privateKey + publicKey)

export const actions = {
  LOAD_DATA: function ({ commit }) {
    // Sent request to api and get respond data
    axios
      .get(`http://gateway.marvel.com/v1/public/comics?orderBy=modified&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
      .then((response) => {
        state.urlTokens = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        Model.data = response.data.data.results
        commit("SET_DATA_READY")
      })
  }
}