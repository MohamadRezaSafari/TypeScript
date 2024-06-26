import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[ e.target.name ]: e.target.value});
    }

    onSubmit(e){
      e.preventDefault();

      const post = {
        title: this.state.title,
        body: this.state.body
      };

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(res => res.json())
      .then(data => console.log(data));
    }


  render() {
    return (
      <>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            Title:
            <input type='text'  onChange={this.onChange} value={this.state.title}  />

            Body:
            <input type='text'  onChange={this.onChange} value={this.state.body} />

            <button type='submit'>Submit</button>
        </form>
      </>
    )
  }
}

export default Postform;