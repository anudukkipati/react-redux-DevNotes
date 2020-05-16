import React, {Component} from 'react'


class NoteShow extends Component {
    state = {
        note: {}
      }

    componentDidMount() {
       //debugger
        console.log(this.props)
        let id = this.props.match.params.id;
    
        fetch(`http://localhost:3001/api/notes/${id}`)
          .then(resp => resp.json())
          .then(note => this.setState({ note }))
      }
    
       
    



    render(){
       console.log("from render", this.state.note)
       console.log("from render", this.props)
        return(
            <div className="noteshow">
                
                <h3>{this.state.note.title}</h3>
                <p>{this.state.note.content}</p>
                <p><a href ={this.state.note.url} target="_blank" rel="noopener noreferrer">Click here to to go to the link</a></p>
                
            </div>
        )
       
    }

}

export default NoteShow