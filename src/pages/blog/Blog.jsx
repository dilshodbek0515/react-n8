import "./Blog.scss";
import { memo } from "react";
import BlogComponent from "../../components/blog/Blog";
import { Link } from "react-router-dom"

const BlogPage = () => {
    return (
        <div className='pages_blog'>
            <div className="oplata">
                <div className="flex gap-5 items-center">
                    <Link to={"/"}>
                        <span>Главная</span>
                    </Link>
                    <Link to={"/blog"}>
                        <p className="mt-[2px]">Блог</p>
                    </Link>
                </div>
                <h2>Блог</h2>
            </div>
            <BlogComponent />
            <BlogComponent />
        </div>
    );
}

export default memo(BlogPage);
