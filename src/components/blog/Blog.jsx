import "./Blog.scss"
import { memo } from "react"
import { BLOGS } from "../../static"
import { Link } from "react-router-dom"
const blogs = [
    BLOGS?.map((blog) => (
        <div className="blog_card" key={blog.id}>
            <img className="blog_img" src={blog.image} alt="blog_img" />
            <h3>{blog.title}</h3>
            <span>{blog.date}</span>
        </div>
    ))
]
const Blog = ({ language }) => {
    return (
        <div className="blog">
            <div className="blog_top">
                <h2 className="blogs_title">{language === "RU" ? "Блог" : "Blog"}</h2>
                <Link to={"/blog"}><button className="blogs_btn">{language === "RU" ? "Перейти в блог" : "Go to blog"}</button></Link>
            </div>
            <div className="blog_bottom">
                {blogs}
            </div>
        </div>
    )
}

export default memo(Blog)
