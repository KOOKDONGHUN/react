import React,{ Component } from 'react'; // react가 가지고 있는 Component라는 클래스를 사용하겠다

class CreateContent extends Component {
    render() {
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post" onSubmit={
            function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)
          }>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p>
              <textarea name="desc" placeholder="desc"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent