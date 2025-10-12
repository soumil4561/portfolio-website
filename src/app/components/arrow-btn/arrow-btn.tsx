import { ArrowRightIcon } from "@phosphor-icons/react";
import "./arrow-btn.css";

type ArrowBtnProps = {
  icon: JSX.Element;
  name: string;
  onClick?: () => void;
};

export default function ArrowBtn(children: ArrowBtnProps) {
  return (
    <button className="arrow-btn" onClick={children.onClick}>
      <div className="arrow-identifier">
        {children.icon}
        <span className="arrow-identifier-name">{children.name}</span>
      </div>
      <ArrowRightIcon className="arrow" size={16} />
    </button>
  );
}
