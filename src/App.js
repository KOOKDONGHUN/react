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
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import Subject from "./components/Subject"
import Control from "./components/Control"

class App extends Component{ // Component를 상속 받겠다
  constructor(props){ // 스테이트의 값을 초기화 하고자 한다. 초기의 값으로 render함수안에 존재하는 컴포넌트의 props를 설정하고자 한다.
    // 컴포넌트가 호출?실행? 될때 render 보다 먼저 호출이 돼서 변수들을 초기화 해야하는 경우 여기에 작성
    // 외부에 공개가 되지 않아야 할 것들은 this.state안에 정의 하도록 한다 (정보은닉)
    super(props);
    // state에 안넣는 이유는 UI 영향을 주는게 아니기 때문에 굳이 넣을 필요없음 (불필요한 렌더링 방지)
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome : {title : 'Welcome', desc:'Hello, React!!'},
      contents:[
        {id : 1, title : 'HTML', desc : 'HyperText ...'},
        {id : 2, title : 'CSS', desc : 'design'},
        {id : 3, title : 'JavaScript', desc : 'JavaScript is for interactive'},
      ]
    }
  }

  
  render(){ // 상속 받은 Component안의 render라는 메소드를 사용한다
    // render 안에서 this는 컴포넌트 자신을 가리킨다
    console.log('App render')
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === 'read') {
      var i = 0;
      while ( i < this.state.contents.length){
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+ 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        console.log(_title, _desc);
        this.max_content_id += 1;
        // 이렇게만 하면 리액트가 바꾼줄 모름 
        this.state.contents.push(
          {id:this.max_content_id, title:_title, desc: _desc}
        );
        this.setState(
          {contents : this.state.contents}
        );
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            // alert('hihihi');
            this.setState({
              mode : 'welcome'
            });
          }.bind(this)}
        >
        </Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){
            // alert('hi'); 
            console.log('event in', this); // .bind(this)가 없는 경우 event in undefined
            e.preventDefault(); // a 태그의 기본적인 동작 방법을 중지 시킨다.
            // return;
            console.log(e);
            // this.state.mode = 'welcome'; // 2가지 문제가 있음 
            this.setState({
              mode : 'welcome'
            });
            // this는 컴포넌트 자기자신이 아니라 아무것도 셋팅되지 않은 값
            // this를 찾을수 없어서 발생한 에러에 대한서는 함수가 끝나는 뒷 부분에 .bind(this)
            // bind를 해도 페이지에 변화가 없음 react는 state값이 바뀐줄 모름 때문에 setState
            // debugger;
          // }.bind(this)}>{this.state.subject.title}</a></h1>
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <TOC onChangePage={
          function(id){
            // alert('hihihi')
            // debugger;
            console.log(id);
            this.setState({
              mode : 'read',
              selected_content_id : Number(id)
            });
          }.bind(this)
        } data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {/* <ReadContent title={_title} desc={_desc}></ReadContent> */}
        {_article}
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
