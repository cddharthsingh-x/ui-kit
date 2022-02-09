import React from "react";
import { createIcon } from "../helpers/icon";

export const RoundedSquareIcon = createIcon((props) => {
    return (
        <svg viewBox="0 0 14 14" width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#prefix__clip0_887_27389)">
                <path
                    d="M10.333 12H3.667C2.747 12 2 11.254 2 10.333V3.667C2 2.747 2.746 2 3.667 2h6.666C11.254 2 12 2.746 12 3.667v6.666c0 .921-.746 1.667-1.667 1.667z"
                    stroke="currentColor"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0_887_27389">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                </clipPath>
            </defs>
        </svg>
    );
});
