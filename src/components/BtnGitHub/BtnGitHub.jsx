import './style.css';

import gitHub from './gitHub-black.svg';

const btnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub repo
        </a>
    )
}

export default btnGitHub;