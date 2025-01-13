import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useBlogStore from '../state/BlogStore';
import "../style/BlogDetail.css";
function parseDateString(dateString) {
    if (dateString.length !== 10) {
        throw new Error("Invalid date string format");
    }

    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 5);
    const day = dateString.substring(5, 6);
    const hour = dateString.substring(6, 8);
    const minute = dateString.substring(8, 12);

    const date = new Date(year, month - 1, day, hour, minute);

    // Custom format
    const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;

    return formattedDate;
}
export default function BlogDetail() {
    const { id } = useParams(); // Correctly access the id parameter
    const { find_blog_by_id } = useBlogStore();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogData = await find_blog_by_id(id);
                setBlog(blogData);
            } catch (error) {
                console.error("Failed to fetch blog by id:", error);
            }
        };

        fetchBlog();
    }, [id, find_blog_by_id]);

    if (!blog) {
        return <div className="loading">Loading...</div>; // Show a loading indicator while fetching the blog
    }
    let dateString = ""
    //the date is gotten like an array of YY mm dd hh mm from server
    blog.created.forEach(s => dateString += s)

    return (
        <div className="blog-detail-container">
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-meta">
                <span className="blog-author">By {blog.author}</span>
                <span className="blog-created">{new Date(dateString).toLocaleDateString()}</span>
            </div>
            {blog.paragraphs.map((para, index) => (
                <div key={index} className="blog-paragraph-container">
                    <h2 className="paragraph-title">{para.title}</h2>
                    <p className="paragraph-content">{para.content}</p>
                </div>
            ))}
        </div>
    );
}
