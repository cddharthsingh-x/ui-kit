import React, { useState } from "react";
import { Checkbox } from "../..";

const CheckboxStories = {
    primary: true,
    title: "Forms & Fields/Checkbox",
    parameters: {
        docs: {
            description: {
                component: "Native browser checkbox component with some styling",
            },
        },
        design: {
            name: "Figma",
            type: "figma",
            url: "https://www.figma.com/file/tL2vrxuBIzujkDfYvVjUhs/%E2%9A%99%EF%B8%8F-01---DS-Core?node-id=7683%3A483048&viewport=7074%2C-1137%2C0.4",
        },
    },
};

export const Default = () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox label="Checkbox" checked={checked} onChange={(event_) => setChecked(event_.target.checked)} />;
};

export const Disabled = () => {
    return (
        <div className="space-y-3">
            <Checkbox checked disabled label="Checkbox" />
            <Checkbox disabled label="Checkbox" />
        </div>
    );
};

export const WithCustomClassName = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="space-y-3 bg-gray-800 p-4">
            <h3 className="text-white mb-2">Using className prop (simplified syntax):</h3>
            <Checkbox label="White text checkbox" className="text-white" checked={checked} onChange={(event_) => setChecked(event_.target.checked)} />
            <Checkbox label="Red text checkbox" className="text-red-500 font-bold" />
            <Checkbox label="Large text checkbox" className="text-xl" />
            
            <h3 className="text-white mt-4 mb-2">Using classNames.label prop (explicit syntax):</h3>
            <Checkbox label="White text checkbox" classNames={{ label: "text-white" }} />
            <Checkbox label="Red text checkbox" classNames={{ label: "text-red-500 font-bold" }} />
            <Checkbox label="Large text checkbox" classNames={{ label: "text-xl" }} />
        </div>
    );
};

export default CheckboxStories;
