import Copyright from "../Copyright";
import Icon from "../Icon";
import "./Rodape.css";

const Rodape = () => {
    return (
        <section className="rodape">
            <div className="socials">
                <Icon imgUrl={"/img/fb.png"} imgName="Facebook"/>
                <Icon imgUrl={"/img/tw.png"} imgName="Facebook"/>
                <Icon imgUrl={"/img/ig.png"} imgName="Facebook"/>
            </div>
            <div className="logo">
                <Icon imgUrl={"/img/logo.png"}  imgName={"Organo"}/>
            </div>
            <div className="developed-by">
                <Copyright developedByName="João Longuinho"/>
            </div>
        </section>
    )
}
export default Rodape;