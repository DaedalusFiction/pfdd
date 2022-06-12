import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selecter({ selectOptions }) {
    const [fieldValue, setFieldValue] = React.useState("");

    const handleChange = (event) => {
        setFieldValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Affiliation</InputLabel>
                <Select
                    value={fieldValue}
                    label="Affiliation"
                    onChange={handleChange}
                >
                    {selectOptions.map((option) => {
                        return <MenuItem value={option}>{option}</MenuItem>;
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
