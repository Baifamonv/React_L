import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';


const API_KEY = 'AIzaSyCgcq3vzE_G-eOzu1cUSWDKQRCb8kn3BNA';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo:null
    };
  this.videoSearch('surfboard');
  }

  videoSearch(term){
    // search take some time
    YTSearch({key:API_KEY, term: term},( videos ) => {
      this.setState({
        videos: videos,
        selectedVideo:videos[0]
      });
    });
  }


  render(){
    //slower the function render frequency
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return(
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          //pass function to manipulate the components
          //call backs could be replaced by redux
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
