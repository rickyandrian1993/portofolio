import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  url: string;
  tooltip: string;
};

function ButtonIcon(props: Props) {
  return (
    <div className="tooltip tooltip-accent" data-tip={props.tooltip}>
      <a
        href={props.url}
        target="_blank"
        className="btn btn-circle btn-primary"
      >
        {props.children}
      </a>
    </div>
  );
}

export default ButtonIcon;
