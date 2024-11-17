import "./Blog.scss";
import { memo, useEffect } from "react";
import BlogComponent from "../../components/blog/Blog";
import { Link } from "react-router-dom"

const BlogPage = ({ language }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='pages_blog'>
            <div className="oplata">
                <div className="flex gap-5 items-center">
                    <Link to={"/"}>
                        <span>{language === "RU" ? "Главная" : "Home"}</span>
                    </Link>
                    <Link to={"/blog"}>
                        <p className="mt-[2px]">{language === "RU" ? "Блог" : "Blog"}</p>
                    </Link>
                </div>
                <h2>{language === "RU" ? "Блог" : "Blog"}</h2>
            </div>
            <BlogComponent />
            <BlogComponent />
        </div>
    );
}

export default memo(BlogPage);
