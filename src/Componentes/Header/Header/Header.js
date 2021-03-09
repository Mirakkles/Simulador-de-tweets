
import TwitterLogo  from '../../Assets/Img/twitter-logo.png';
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <img src={TwitterLogo} alt={TwitterLogo} />
            <h1>Tweet Simulator</h1>
        </div>
    );
    
}