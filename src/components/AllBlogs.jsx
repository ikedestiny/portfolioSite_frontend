import Blog from "./Blog";
import useBlogStore from '../state/BlogStore';
import { useEffect } from "react";
import '../style/Blog.css'
import { useNavigate } from "react-router-dom";

export default function Blogs() {
    const navigate = useNavigate()
    const handleClick = (e, link) => {
        e.preventDefault();
        navigate(link);
    };
    const { get_all, all_blogs } = useBlogStore();

    useEffect(() => {
        get_all();
    }, [get_all]);

    console.log(all_blogs);

    return (
        <div className="blogHome">

            <div className="card-header text-center bg-secondary text-white">
                <h3 className="page-title">All Blogs</h3>
            </div>
            <div className="blog-inner">
                {
                    all_blogs.map(blog => {
                        // Log the id of each blog to the console
                        console.log(blog.id);
                        return (
                            <Blog
                                key={blog.id}
                                id={blog.id}
                                title={blog.title}
                                created={blog.created}
                                author={blog.author}
                                paragraphs={blog.paragraphs}
                            />
                        );
                    })
                }
            </div>
            <button className="glow-button" onClick={(e) => handleClick(e, '/write-blog')}>Write A Blog</button>
        </div>
    );
}
