export const Article = ({articleInfo}) =>{
    return (
        <li key={articleInfo.id}>
            <h2>{articleInfo.title}</h2>
            <p>{articleInfo.description}</p>
        </li>
    )
}