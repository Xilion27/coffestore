export default function Item ({title, description, ingredients}){
  return (
    <article>
      <hr></hr>
      <b><span>{title}</span></b>
      <p>{description}</p>
      <p>{ingredients}</p>
    </article>
  )
}










