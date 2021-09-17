import React,{ Component } from 'react'; // react가 가지고 있는 Component라는 클래스를 사용하겠다

class Control extends Component{
    render(){
      // function render(){ // 같은 말인데 최신 문법에서는 사용 하용안함
      return (
        // 컴포넌트를 만들때는 반드시 하나의 최상위 태그로 시작해야함 
        <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input>
        </li> {/* delete의 경우 페이지를 미리 로드하는 기능을 가진 사용자의 경우 미리 삭제가 될 수 있다. */}
        </ul>
      );
    }
  }
  

  export default Control;