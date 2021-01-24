import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as style from "./style.css";

const Letters: FunctionalComponent = () => {
    const letters = [
        "A", "B", "C", "Ç", "D", "Dh", "E", "Ë", "F", "G", "Gj",
        "H", "I", "J", "K", "L", "Ll", "M", "N", "Nj", "O", "P",
        "Q", "R", "Rr", "S", "Sh", "T", "Th", "U", "V", "W", "X",
        "Xh", "Y", "Z", "Zh"
    ];
    const [auto, setAuto] = useState<boolean>(true);
    const [letter, setLetter] = useState<string>(letters[0]);

    // update the currently shown letter
    const getNextLetter = () => {
        return letters[Math.floor(Math.random() * letters.length)];
    };

    // gets called when this route is navigated to
    useEffect(() => {
        const randomizeLetter = window.setInterval(() => setLetter(getNextLetter()), 3 * 1000);

        // gets called just before navigating away from the route
        return () => {
            clearInterval(randomizeLetter);
        };
    }, []);

    return (
        <div class={style.letters}>
            <h1>GJEJ GËRMËN</h1>
            <p class={style.big}>{letter}</p>
            <div class={style.clicker} onClick={() => (setAuto(!auto))}> {auto ? '⏸' : '▶️'}</div>
            {auto ? '' : <button class={style.button} onClick={getNextLetter}>Tjetër</button>}
        </div>
    );
};

export default Letters;
