import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNotes} from '../actions/notes.js'
import Notes from '../components/Notes.js'


class NotesContainer extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    componentDidMount() {
      // debugger
      
        this.props.fetchNotes()
       
       
    }

    updateSearch = (event) => {
        this.setState ({
            search: event.target.value
        })
    }

    render(){
        const filteredNotes = this.props.notes.filter(note => {
           return note.title.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
        })
        return(
            <React.Fragment>
                <input type="text" placeholder="search" name ="search" value={this.state.search} onChange ={this.updateSearch}/>
             
             <Notes notes={filteredNotes}/>
             
            
         </React.Fragment>
        )
       
    }

}
const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
       
    }
}
//export default NotesContainer
export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)