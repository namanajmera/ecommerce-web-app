"use client";

import { Range } from "react-range";
import { useState } from "react";

const MIN = 0;
const MAX = 500;

const PriceRangeSlider = () => {
    const [values, setValues] = useState([50, 200]);
    return (
        <div className="w-full">
            <Range
                step={1}
                min={MIN}
                max={MAX}
                values={values}
                onChange={(vals) => setValues(vals)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="h-2 w-full rounded-full bg-gray-200"
                        style={{ ...props.style }}
                    >
                        <div
                            className="h-2 rounded-full bg-black"
                            style={{
                                position: "absolute",
                                left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                                width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
                            }}
                        />
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="h-4 w-4 bg-black rounded-full cursor-pointer"
                    />
                )}
            />

            <div className="flex justify-between text-sm mt-2 font-medium text-black">
                <span>${values[0]}</span>
                <span>${values[1]}</span>
            </div>
        </div>
    );
}

export default PriceRangeSlider