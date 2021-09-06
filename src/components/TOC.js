import React,{ Component } from 'react'; // react가 가지고 있는 Component라는 클래스를 사용하겠다

class TOC extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length){
            lists.push(
            <li key={data[i].id}>
              <a href={"/content/" + data[i].id}
                data-id={data[i].id} 
                // onClick={function(e){ // 속성을 이용하는 방식
                //   // debugger;
                //   e.preventDefault();
                //   this.props.onChangePage(e.target.dataset.id);
                // }.bind(this)}>{data[i].title}
                
                onClick={function(id, e){ // 속성을 이용하지 않고 인자를 이용하는 방식
                  e.preventDefault();
                  this.props.onChangePage(id);
                }.bind(this, data[i].id)}>{data[i].title}
              </a>
            </li>);
            i += 1;
        }
      return(
        <nav>
          <ul>
              {lists}
          </ul>
      </nav>
      );
    }
  }

  export default TOC;