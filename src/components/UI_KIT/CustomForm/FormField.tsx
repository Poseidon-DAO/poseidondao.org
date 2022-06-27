import {
  FormFieldLabel,
  SelectField,
  TextareaField,
  TextInputField,
} from "evergreen-ui";
import { useState } from "react";
import { FormGroup } from "reactstrap";

interface FormFieldProps {
  type: string;
  required?: boolean;
  onChange: (event: string) => void;
  value: string;
}

const PROJECTS = ["Derivatives", "Genesis", "Other"];

export function FormField({
  required = true,
  onChange,
  type,
  value,
}: FormFieldProps) {
  const formLabel = (copy: string, ...props: any) => (
    <FormFieldLabel {...props} color="white">
      {copy} {required && " *"}
    </FormFieldLabel>
  );
  const isServer = typeof window === "undefined";

  const updateValue = (value: string) => {
    if (!isServer) {
      localStorage.setItem("form-" + type, value);
      onChange(value);
    }
  };

  const [isFocused, setFocused] = useState(false);

  const FormField = () => {
    const formType = type.charAt(0).toUpperCase() + type.slice(1);
    switch (type) {
      case "name":
        return (
          <>
            {formLabel(formType)}
            <TextInputField
              type="text"
              name="name"
              id="name"
              label=""
              style={isFocused ? focusedStyle : {}}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              value={value}
              placeholder="John Doe"
              onChange={(e: any) => updateValue(e.target.value)}
            />
          </>
        );
      case "project":
        return (
          <>
            {formLabel(formType)}
            <SelectField
              width="100%"
              defaultValue={"empty"}
              style={
                isFocused
                  ? focusedStyle
                  : { backgroundColor: "white", borderRadius: "5px" }
              }
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e: any) => updateValue(e.target.value)}
              appearance="default"
            >
              <option disabled selected value="empty">
                {" "}
                -- select an option --{" "}
              </option>
              {PROJECTS.map((project) => (
                <option value={project} selected>
                  {project}
                </option>
              ))}
            </SelectField>
          </>
        );
      case "email":
        return (
          <>
            {formLabel(formType)}
            <TextInputField
              type="email"
              label=""
              name="email"
              id="email"
              value={value}
              style={isFocused ? focusedStyle : {}}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="john.doe@gmail.com"
              onChange={(e: any) => updateValue(e.target.value)}
            />
          </>
        );
      case "twitter":
      case "instagram":
      case "website":
        return (
          <>
            {formLabel(formType, type === "website" ? false : true)}
            <TextInputField
              type="text"
              name={type}
              value={value}
              label=""
              id={type}
              style={isFocused ? focusedStyle : {}}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e: any) => updateValue(e.target.value)}
              placeholder={
                type === "website"
                  ? "https://www.john-doe.com"
                  : type === "instagram"
                  ? "https://instagram.com/JohnDoe"
                  : "https://twitter.com/JohnDoe"
              }
            />
          </>
        );
      case "samples":
        return (
          <>
            {formLabel("NFT proposals", false)}
            <TextInputField
              type="text"
              name={type}
              value={value}
              label=""
              id={type}
              style={isFocused ? focusedStyle : {}}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e: any) => updateValue(e.target.value)}
              placeholder="Please provide a link to a public Drive/Dropbox like folder with files"
            />
          </>
        );
      case "bio":
        return (
          <>
            {formLabel("Bio", false)}
            <TextareaField
              value={value}
              name={type}
              label=""
              id={type}
              style={isFocused ? { borderBottom: "0.5px solid #4824fa" } : {}}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e: any) => updateValue(e.target.value)}
              placeholder="Tell us about yourself"
            />
          </>
        );
      case "exhibitions":
        return (
          <>
            {formLabel("Exhibitions", false)}
            <TextareaField
              value={value}
              name={type}
              label=""
              id={type}
              style={isFocused ? { borderBottom: "0.5px solid #4824fa" } : {}}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onChange={(e: any) => updateValue(e.target.value)}
              placeholder="Tell us about your exhibitions if you had any"
            />
          </>
        );
      default:
        return;
    }
  };
  return (
    <FormGroup
      style={{ textAlign: "left", marginBottom: ".5rem", width: "100%" }}
    >
      {FormField()}
    </FormGroup>
  );
}

const focusedStyle = {
  border: "0.5px solid #4824fa",
  backgroundColor: "white",
  borderRadius: "5px",
};
