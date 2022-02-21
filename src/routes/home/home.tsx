import "./home.scss";
import logo from '../../assets/images/logo.svg'
import flowers from '../../assets/images/main-flower.svg'
import Button from "../../components/button/button"

export default function Home() {
  return (
    <div className="home">
      <div className="home-nav-left">
        <Button onClick={() => console.log("Explore")}>Explore</Button>
      </div>
      <div className="home-nav-right">
        <Button onClick={() => console.log("Link to tickets")}>Tickets</Button>
      </div>
      <div className="home-main">
        <div className="noise" />
        <img className="home-logo" src={logo} alt="logo" />
        <img className="home-flowers" src={flowers} alt="flowers" />
      </div>
    </div>
  );
}