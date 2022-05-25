import "./MainText.css";

export interface TextProps {
    text: string;
    backgroundColor?: string;
}

export function MainText({backgroundColor, text}: TextProps){
    return(
        <div 
            className="textPane"
            style={{ backgroundColor }}>
            {text}
        </div>
    );
}