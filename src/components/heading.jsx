import "../App.css";
import { TextInfo } from "./ThemeConstant";

function Heading({ text, classes, size, span, span2, textTwo, textThree, br1, br2 }) {
    return (
        <h1 className={`pt-2 ${size} font-bold font-outfit ${classes}`}>
            {text}
            {br1}
            <span className={`${TextInfo}`}>{span}</span>
            {br2}
            {textTwo}
            <span className={`${TextInfo}`}>{span2}</span>
            {textThree}
        </h1>
    );
}


export default Heading;