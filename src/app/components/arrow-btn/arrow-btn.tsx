import { ArrowUpRight } from 'phosphor-react';
import './arrow-btn.css';

type ArrowBtnProps = {
    name: string;
    onClick?: () => void;
}

export default function ArrowBtn(children: ArrowBtnProps) {
    return <button className="arrow-btn" onClick={children.onClick}>
        {children.name}
        <ArrowUpRight size={16} />
    </button>
}