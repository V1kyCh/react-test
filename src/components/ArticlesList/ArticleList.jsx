import { Article } from "../Article/Article";

export const ArticleList = ({data}) => {
 return ( <ul>
        {
            data.map((article)=> {
            return <Article key={article.id} test='testText' articleInfo={article}/>
        //     return <li key={article.key}>
        //     <h2>{article.title}</h2>
        //     <p>{article.description}</p>
        // </li>
        })
        }
    </ul>
 )
}