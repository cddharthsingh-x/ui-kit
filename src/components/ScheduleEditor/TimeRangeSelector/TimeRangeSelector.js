import classNames from "classnames";
import React, { Fragment } from "react";
import { TimePicker, TrashIcon } from "../../../";
import styles from "./TimeRangeSelector.module.scss";

const TimeRangeSelector = ({ value = [{}], name, onChange }) => {
    const handleAddNewRow = () => {
        onChange([...value, { startTime: null, endTime: null }], name);
    };

    const handleDeleteRow = (event, index) => {
        let timeRanges = [...value];
        timeRanges.splice(index, 1);
        onChange(timeRanges, name);
        event.preventDefault();
    };

    const handleChange = (v, index, key) => {
        let timeRanges = [...value];
        timeRanges[index][key] = v;
        onChange(timeRanges, name);
    };

    return (
        <Fragment>
            <div>
                <div className="d-block">
                    {value.map((timeRange, index) => (
                        <div key={index} className={classNames("d-flex mb-2", styles.row)}>
                            <span className="mr-2">Start Time</span>
                            <span className="mr-4">
                                <TimePicker
                                    value={timeRange.startTime}
                                    onChange={(v) => handleChange(v, index, "startTime")}
                                />
                            </span>
                            <span className="mr-2">End Time</span>
                            <span className="mr-4">
                                <TimePicker
                                    value={timeRange.endTime}
                                    onChange={(v) => handleChange(v, index, "endTime")}
                                />
                            </span>
                            <span
                                onClick={(e) => handleDeleteRow(e, index)}
                                className={classNames(
                                    styles.delete,
                                    "cursor-pointer ml-2 text-center p-1 rounded-circle bg-danger text-white",
                                )}
                            >
                                <TrashIcon />
                            </span>
                        </div>
                    ))}
                </div>
                <a onClick={handleAddNewRow} className={classNames("cursor-pointer d-block")}>
                    + add time range
                </a>
            </div>
        </Fragment>
    );
};

export default TimeRangeSelector;
