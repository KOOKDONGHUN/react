import React,{ Component } from 'react'; // react가 가지고 있는 Component라는 클래스를 사용하겠다

class TOC extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
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