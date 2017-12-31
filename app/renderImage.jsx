import { Component } from 'react';

class RenderImage extends Component {
  console.log('react component');

  render(){
    const imageUrl = this.props.imageUrl;
    return (
      <div>
      <img src={imageUrl} />
    </div>);
  }
}
