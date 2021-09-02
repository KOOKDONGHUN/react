// import logo from './logo.svg';
import './App.css';

//import { render } from 'react-dom';
// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       Hello, React!!
//     </div>
//   );
// }

import React,{ Component } from 'react'; // react가 가지고 있는 Component라는 클래스를 사용하겠다

import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"

class App extends Component{ // Component를 상속 받겠다
  constructor(props){ // 스테이트의 값을 초기화 하고자 한다. 초기의 값으로 render함수안에 존재하는 컴포넌트의 props를 설정하고자 한다.
    // 컴포넌트가 호출?실행? 될때 render 보다 먼저 호출이 돼서 변수들을 초기화 해야하는 경우 여기에 작성
    // 외부에 공개가 되지 않아야 할 것들은 this.state안에 정의 하도록 한다 (정보은닉)
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome : {title : 'Welcome', desc:'Hello, React!!'},
      contents:[
        {id : 1, title : 'HTML', desc : 'HyperText ...'},
        {id : 2, title : 'CSS', desc : 'defign'},
        {id : 3, title : 'JavaScript', desc : 'JavaScript is for interactive'},
      ]
    }
  }

  
  render(){ // 상속 받은 Component안의 render라는 메소드를 사용한다
    console.log('App render')
    var _title, _desc = null;
    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if (this.state.mode === 'read') {
      _title = this.state. contents[0].title;
      _desc = this.state. contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e){
            // alert('hi'); 
            e.preventDefault(); // a 태그의 기본적인 동작 방법을 중지 시킨다.
            console.log(e);
            // this.state.mode = 'welcome'; // 2가지 문제가 있음 
            this.setState({
              mode : 'welcome'
            });
            // this는 컴포넌트 자기자신이 아니라 아무것도 셋팅되지 않은 값
            // this를 찾을수 없어서 발생한 에러에 대한서는 함수가 끝나는 뒷 부분에 .bind(this)
            // bind를 해도 페이지에 변화가 없음 react는 state값이 바뀐줄 모름 때문에 setState
            // debugger;
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

// class App extends Component{
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
