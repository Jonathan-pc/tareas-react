import { Tarjeta } from "./Tarjeta"; 

export function BlogPost(props) {
  const parrafos = props.parrafos.split("\n").map((texto, index) => (
    <p className="post-paragraph" key={index}>
      {texto}
    </p>
  ));

  return (
    <article className="post">
      <header className="post-header">
        <h2 className="post-title">{props.titulo}</h2>
        <Tarjeta {...props.autor} />
      </header>
      {parrafos}
    </article>
  );
}
