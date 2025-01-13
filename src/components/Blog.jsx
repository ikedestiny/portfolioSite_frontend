import { useNavigate } from 'react-router-dom';
import '../style/Blog.css';

export default function Blog({ id, title, created, author, paragraphs }) {
    const navigate = useNavigate()
    const handleClick = (e, link) => {
        e.preventDefault();
        navigate(link);
    };


    return (
        <div className='blog'>
            <h2>{title}</h2>  {/* Title of the blog */}
            <p>By {author}</p>  {/* Author's name */}
            <p>{created}</p>  {/* Created date */}
            {/* <a href={`blogs/${id}`}>Read</a>  Link to the individual blog page */}
            <button className="glow-button" onClick={(e) => handleClick(e, `${id}`)}>Read!</button>
        </div>
    )
}
