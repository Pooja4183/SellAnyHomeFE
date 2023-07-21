import React from "react";

import { Autocomplete, TextField } from "@mui/material";

const AutocompleteTextField = ({
  options,
  nameProp,
  label,
  id,
  value,
  widthValue,
  onChange,
  setSearchString,
}) => {
  if (!widthValue) {
    widthValue = "60%";
  }

  const handleChange = (event, newValue) => {
    const inputValue = newValue || event.target.value;
    console.debug("Value", inputValue);
    onChange(nameProp, inputValue);
  };

  return (
    <Autocomplete
      fullWidth
      sx={{ width: widthValue }}
      name="myautocomplete"
      freeSolo
      options={options}
      filterOptions={(options, { inputValue }) => {
        console.log("Input Value::", inputValue);
        if (inputValue === "") {
          return options;
        }
        const lowercaseInput = inputValue.toLowerCase();
        const filteredValue = options.filter(
          (option) => option.toLowerCase().indexOf(lowercaseInput) !== -1
        );
        console.log("Filtered Values", filteredValue);
        if (filteredValue.length === 0) {
          console.log("Inside 1");
          setSearchString(inputValue);
          return [inputValue];
        } else {
          console.log("Inside 2");
          return filteredValue;
        }
      }} // Allow filtering all options
      onInputChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          name={nameProp}
          label={label}
          id={id}
          value={value}
          onChange={handleChange}
          size="small"
          sx={{
            background: "white",
            border: 0,
            borderRadius: 0,
          }}
          fullWidth
        />
      )}
    />
  );
};

export default AutocompleteTextField;
