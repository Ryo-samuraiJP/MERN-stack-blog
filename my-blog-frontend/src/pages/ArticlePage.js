import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import { useEffect, useState } from "react";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    setArticleInfo({ upvotes: Math.ceil(Math.random() * 10), comments: [] });
  }, []);

  const params = useParams(); 
  const articleId = params.articleId; 
  const article = articles.find(article => article.name === articleId);

  if(!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvote(s)</p>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );  
}
  
export default ArticlePage; 