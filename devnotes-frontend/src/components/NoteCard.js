import React from 'react'
import { Link } from 'react-router-dom';



const NoteCard = ({note: {title, content, url, id} }) => {
    
    return (
        <div className="notecard">
           
           <p><strong><Link to={`/notes/${id}`}>{title}</Link></strong></p>
            <h5>{title}</h5>
            <p>{content}</p>
            <p className="link"><a href={url} target="_blank" rel="noopener noreferrer">Click here to read more...</a></p>
           
        </div>
    )
   

}

export default NoteCard