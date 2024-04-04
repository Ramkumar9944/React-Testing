type GreetProps = {
  name?: string;
};
const Greet = (props: GreetProps) => {
  return <h1>Hello {props.name}</h1>;
};
export default Greet;
