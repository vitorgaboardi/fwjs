import "./Tab.css";

export interface TextProps {
    text: string
}

export function MainText(props: TextProps){
    return(
        <div className="tabPane">
            {props.text}
        </div>
    );
}