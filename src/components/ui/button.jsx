import React from "react";

export function Button({ children, ...props }) {
    return (
        <button {...props} className={"btn-primary " + (props.className || "")}>
            {children}
        </button>
    );
}

