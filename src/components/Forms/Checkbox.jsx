import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { useId } from "../../hooks/useId";
import styles from "./Checkbox.module.css";

/**
 * Checkbox component with label support
 * @param {Object} props
 * @param {React.ReactNode} [props.label] - Optional label text. When provided, the className prop will be applied to this label.
 * @param {string} [props.className] - CSS class names to apply to the label element (only effective when label is provided)
 * @param {Object} [props.classNames] - Object with checkbox and label class names for more granular styling
 * @param {string} [props.classNames.checkbox] - CSS class names for the checkbox input
 * @param {string} [props.classNames.label] - CSS class names for the label element
 */
export const Checkbox = ({ label, className, classNames = {}, ...rest }) => {
    const id = useId("checkbox");

    return (
        <div className={clsx("ui-checkbox", "flex items-center")}>
            <input
                type="checkbox"
                className={clsx(
                    "ui-checkbox-input",
                    classNames.checkbox,
                    styles.checkbox,
                    "h-4 w-4 rounded !border-primary text-white transition-colors disabled:border-none disabled:bg-gray-light disabled:text-gray-light",
                )}
                {...rest}
                id={id}
            />

            {label ? (
                <label
                    htmlFor={id}
                    className={clsx("ui-checkbox-label", classNames.label, "ml-2 leading-none text-gray-darker", className)}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

Checkbox.propTypes = {
    label: PropTypes.node,
    className: PropTypes.string,
    classNames: PropTypes.shape({ checkbox: PropTypes.string, label: PropTypes.string }),
    onChange: PropTypes.func,
};
