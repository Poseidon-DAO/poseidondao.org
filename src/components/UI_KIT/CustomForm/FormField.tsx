import { FormFieldLabel, TextareaField, TextInputField } from "evergreen-ui";
import { useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";

interface FormFieldProps {
  type: string;
  required?: boolean;
  onChange: (event: string) => void;
  value: string;
}

export function FormField({ required = true, onChange, type, value }: FormFieldProps) {
  const formLabel = (copy: string, ...props: any) => <FormFieldLabel {...props} color='white'>{copy} {required && " *"}</FormFieldLabel>
  const isServer = typeof window === "undefined";

  const updateValue = (value: string) => {
    if (!isServer) {
      localStorage.setItem('form-'+type, value);
      onChange(value);
    }
  };

  const [isFocused, setFocused] = useState(false)
  
  const FormField = () => {
    const formType = type.charAt(0).toUpperCase() + type.slice(1)
    switch (type) {
      case "name":
        return (
          <>
            {formLabel(formType)}
            <TextInputField
              type="text"
              name="name"
              id="name"
              style={isFocused ? focusedStyle : {}}
              onFocus={() => setFocused(true)}
              onBlur={()=>setFocused(false)}
              value={value}
              placeholder="John Doe"
              onChange={(e: any) => updateValue(e.target.value)}
            />
          </>
        );
      case "email":
        return (
          <>
            {formLabel(formType)}
            <TextInputField
              type="email"
              name="email"
              id="email"
              value={value}
              style={isFocused ? focusedStyle : {}}
              onFocus={() => setFocused(true)}
              onBlur={()=>setFocused(false)}
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
            {formLabel(formType, type === 'website' ? false : true)}
            <TextInputField
              type="text"
              name={type}
              value={value}
              id={type}
              style={isFocused ? focusedStyle : {}}
              onFocus={() => setFocused(true)}
              onBlur={()=>setFocused(false)}
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
      case "textarea":
        return (
          <>
            {formLabel(formType, false)}
            <TextareaField
              value={value}
              name={type}
              id={type}
              style={isFocused ? {borderBottom: '0.5px solid #4824fa'} : {}}
              onFocus={() => setFocused(true)}
              onBlur={()=>setFocused(false)}
              onChange={(e: any) => updateValue(e.target.value)}
              placeholder="Tell us about yourself"
            />
          </>
        );
      default:
        return;
    }
  };
  return (
    <FormGroup style={{ textAlign: "left", marginBottom: ".5rem", width: '100%' }}>
      {FormField()}
    </FormGroup>
  );
}

const focusedStyle = {
  border: '0.5px solid #4824fa',
}