import * as React from "react";
import { PropertyControls, ControlType } from "framer";

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    overflow: "hidden",
    borderRadius: "10px",
};

// Define type of property
interface Props {
    text: string;
}

export class Children extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    text: "Hello World!"
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Title" },
    }

    render() {
    return <div style={style}>{this.props.children}</div>;
    }
}
