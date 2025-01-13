import Blog from "./Blog";
import useBlogStore from '../state/BlogStore';
import { useEffect } from "react";
import '../style/Blog.css'

export default function Blogs() {
    const { get_all, all_blogs } = useBlogStore();

    useEffect(() => {
        get_all();
    }, [get_all]);

    console.log(all_blogs);

    return (
        <div className="blogHome">
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
    );
}
