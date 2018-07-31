import React, {Component} from 'react';

class SearchBar extends Component {
  // クラスが持つ関数で、インスタンスの生成時に呼ばれる
  constructor(props) {
    // Componentクラスを継承
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;