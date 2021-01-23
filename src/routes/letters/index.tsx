import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as style from "./style.css";

const Letters: FunctionalComponent = () => {
    const letters = ["A", "B", "C", "Ç", "D", "Dh", "E", "Ë", "F", "G", "Gj", "H", "I", "J", "K", "L", "Ll", "M", "N", "Nj", "O", "P", "Q", "R", "Rr", "S", "Sh", "T", "Th", "U", "V", "W", "X", "Xh", "Y", "Z", "Zh"];
    const [letter, setLetter] = useState<string>(letters[0]);

    // update the currently shown letter
    const getNextLetter = () => {
        setLetter(letters[Math.floor(Math.random() * letters.length)]);
    };

    // gets called when this route is navigated to
    useEffect(() => {
        const randomizeLetter = window.setInterval(() => getNextLetter(), 5 * 1000);

        // gets called just before navigating away from the route
        return () => {
            clearInterval(randomizeLetter);
        };
    }, []);

    return (
        <div class={style.letters}>
            <h1>GJEJ GËRMËN</h1>
            <p class={style.big}>{letter}</p>

            <button class={style.button} onClick={getNextLetter}>Përsëri</button>
        </div>
    );
};

export default Letters;
