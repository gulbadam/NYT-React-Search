import React from "react";

export const Container = ({ fluid, children }) =>
    <div className="container border border-info rounded">
    <div className={`container${fluid ? "-fluid" : ""}`}>
        {children}
        </div>
    </div>;