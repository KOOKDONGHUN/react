import React,{ Component } from 'react'; // react가 가지고 있는 Component라는 클래스를 사용하겠다

class ReadContent extends Component {
    render() {
      return (
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
  }

  export default ReadContent