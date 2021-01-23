import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Faqja kryesore</h1>
            <p>Kjo është faqja kryesore...</p>
        </div>
    );
};

export default Home;
