import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDdSXdqX0JFgPI1CCCldDEyFdzDzFkl1kI';

// 関数ではなくクラスでコンポーネントを作成する理由
// 1. コンストラクタを設定できる
// 2. stateを使える
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // 一番親のコンポーネントでYoutubeからfetchする
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        {/* 子コンポーネント（VideoList）に'videos'という変数名で
            親コンポーネント（App）のデータ（videos）を渡す */}
        <VideoList 
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component to Page.
ReactDOM.render(<App />, document.querySelector('.container'));