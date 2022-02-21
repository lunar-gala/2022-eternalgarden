import "./about.scss";

export default function About() {
  return (
    <>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <p>Body paragraph</p>
      <hr />
      <h5>Colors</h5>
      <div className="container">
        <div className="box box--white" />
        <div className="box box--off-white" />
        <div className="box box--off-black" />
        <div className="box box--disabled" />
        <div className="box box--gradient-accent" />
        <div className="box box--solid-accent" />
      </div>
    </>
  );
}
