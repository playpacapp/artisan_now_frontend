import exp from "constants";
import React, { useState } from "react";
import { RadioGroup, Radio } from "react-radio-group";

export const CustomeRadioGroup: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleSelectionChange = (selectedValue: string) => {
        setSelectedValue(selectedValue)
    };

    const experiences = [
        { label: "Experiencias", value: "experiences" },
        { label: "Experiencias online", value: "online" },
        { label: "Experiencias LIVE", value: "live" },
        { label: "Todas las experiencias", value: "all" },
    ]

    return (
        <div>
            <RadioGroup
                className="flex flex-col gap-2"
                name="experiences"
                selectedValue={selectedValue}
                onChange={handleSelectionChange}
            >
                {experiences && experiences.map((item, key) => {
                    return (
                        <label key={key}  htmlFor={`${item.value}`}>
                            <Radio id={`${item.value}`} value={`${item.value}`} />
                            {" "} {item.label}
                        </label>
                    );
                })}
            </RadioGroup>
        </div>
    );
};