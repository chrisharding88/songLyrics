import React, {Component} from 'react'
import API from '../Utils/API'
import {SongForm} from '../Components/Form'



class LyricsPage extends Component {
    constructor(props){
        super(props) 
        this.state = {
            artist: '',
            title:'',
            lyrics: '',
            results:{}
        }
    }


    componentDidMount (){
        this.getSong(this.state.title)
    }

    handleInputChange = (event) => {
        const { name, value} = event.target;

        this.setState ({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        const songQuery = this.state.title

        this.getSong(songQuery)
    }

    getSong = (song) => {
        API.lyricSearch(song)
            .then((res) => {
                const response = res.data;
                console.log(response)
                this.setState({
                    result: response.songs,
                    title: response.songs[0]?.title,
                    artist:response.songs.primary_artist.name
                    
                })
            })
    }


    render() {

        return (
            <div className="container">
                <SongForm
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                />
            
            </div>
        )





    }




}
export default LyricsPage;