import React from "react";

import unsplash from "../api/unsplash";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { pics: [], term: "" };

  onSearchSubmit = async (term) => {
    const res = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });
    this.setState({ term });
    this.setState({ pics: res.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.pics} term={this.state.term}/>
      </div>
    );
  }
}

export default App;
