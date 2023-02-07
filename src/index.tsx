import Button from "./components/Button";
import Container from "./components/Container";
import Headline from "./components/Headline";
import Label from "./components/Label";

interface IFragment {
  counter: number;
  onIncrementCounter: () => void;
  theme: any;
}

declare global {
  interface Window {
    NodeComponent: any;
  }
}

const Root = ({ counter, onIncrementCounter, theme }: IFragment) => {
  return (
    <Container theme={theme}>
      <Label theme={theme}>fragment</Label>
      <Headline theme={theme}>Hello JS Kongress!</Headline>
      <h2>
        Count: <strong>{counter}</strong>
      </h2>
      <Button theme={theme} onClick={onIncrementCounter}>
        Increment
      </Button>
    </Container>
  );
};

window.NodeComponent = Root;
