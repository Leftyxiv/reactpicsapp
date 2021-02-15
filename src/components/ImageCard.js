import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ spans: 0 })
    this.imageRef = React.createRef();
  }
  setSpans = () => {
    const tall = this.imageRef.current.clientHeight;
    let spans = Math.ceil(tall / 10);
    this.setState({ spans })
    console.log(spans);
  };
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  render() {
    const { description, urls } = this.props.image;
    return ( 
    <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
      <img ref={this.imageRef} alt={description} src={urls.regular} />
    </div> )
  }
}

export default ImageCard;
