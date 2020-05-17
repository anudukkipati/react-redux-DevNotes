export default (state=[], action) => {
    switch (action.type) {
        case "LOAD_NOTES":
             return  action.notes
        case "ADD_NOTE":
             return state.concat(action.note)
        case 'DELETE_NOTE':
             return state.filter((note)=>note.id !== action.id)
             
        default:
            return state
    }
}