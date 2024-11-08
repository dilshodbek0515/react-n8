import "./Blog.scss";
import BlogComponent from "../../components/blog/Blog";

const BlogPage = () => {
    return (
        <div className='pages_blog'>
            <div className="oplata">
                <p><span>Главная</span>Блог</p>
                <h2>Блог</h2>
            </div>
            <BlogComponent />
            <BlogComponent />
        </div>
    );
}

export default BlogPage;
