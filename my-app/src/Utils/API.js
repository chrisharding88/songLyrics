import axios from 'axios'
const API_Key = '4195d16db2msh6f2905f0a0f95cbp11c06ajsn2a2e672d6c67'
const URL =  'https://genius.p.rapidapi.com/artists/16775/songs'

export default {
    lyricSearch: function(song){
        return axios.get(`${URL}`, {
            headers: {
                'x-rapidapi-key': `${API_Key}`,
                'x-rapidapi-host': 'genius.p.rapidapi.com'
            }
        })
    }
}