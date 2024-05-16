import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  url: string;
};

function ButtonIcon(props: Props) {
  return (
    <a href={props.url} target="_blank" className="btn btn-circle btn-primary">
      {props.children}
    </a>
  );
}

export default ButtonIcon;
