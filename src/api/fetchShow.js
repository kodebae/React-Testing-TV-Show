
import axios from "axios";
// fetchShow.js
export const fetchShow = () => {
    return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
      .then(res => res.data) // or res.data, however you want to set that up
  }