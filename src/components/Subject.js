import React,{ Component } from 'react'; // react가 가지고 있는 Component라는 클래스를 사용하겠다

class Subject extends Component{
    render(){
      // function render(){ // 같은 말인데 최신 문법에서는 사용 하용안함
      return (
        // 컴포넌트를 만들때는 반드시 하나의 최상위 태그로 시작해야함 
        <header>
          <h1><a href="/">{this.props.title}</a></h1>
          {this.props.sub}
      </header>
      );
    }
  }
  

  export default Subject;