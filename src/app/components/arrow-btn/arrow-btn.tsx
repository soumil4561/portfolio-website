import { ArrowRight } from 'phosphor-react';
import './arrow-btn.css';

type ArrowBtnProps = {
    icon: JSX.Element;
    name: string;
    onClick?: () => void;
}

export default function ArrowBtn(children: ArrowBtnProps) {
    return <button className="arrow-btn" onClick={children.onClick}>
        <div className='identifier'>
            {children.icon}
            <span className='identifier-name'>{children.name}</span>
        </div>
        <ArrowRight className="arrow" size={16} />
    </button>
}