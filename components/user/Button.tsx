import {
  Button as MaterialButton,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@mui/material";
import { FC,ReactNode } from "react";
import { useNode } from "@craftjs/core";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  color?: any;
  children?: ReactNode;
}

interface ButtonComponent extends FC<ButtonProps> {
  craft?: {
    props: { 
      size: "small", 
      variant: "contained",
      color: "primary",
      text: "Click me"
    },
    related: {
      settings: typeof ButtonSettings;
    };
  };
}

export const Button: ButtonComponent = ({ size, variant, color }) => {
  return (
    <MaterialButton size={size} variant={variant} color={color}>
      Button
    </MaterialButton>
  );
};

const ButtonSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup
          defaultValue={props.size}
          onChange={(e) =>
            setProp((props: { size: string | undefined; }) => (props.size = e.target.value as ButtonProps["size"]))
          }
        >
          <FormControlLabel
            label="Small"
            value="small"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Medium"
            value="medium"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Large"
            value="large"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Variant</FormLabel>
        <RadioGroup
          defaultValue={props.variant}
          onChange={(e) =>
            setProp(
              (props: { variant: string | undefined; }) =>
                (props.variant = e.target.value as ButtonProps["variant"])
            )
          }
        >
          <FormControlLabel
            label="Text"
            value="text"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Outlined"
            value="outlined"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Contained"
            value="contained"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup
          defaultValue={props.color}
          onChange={(e) =>
            setProp(
              (props: { color: any; }) => (props.color = e.target.value as ButtonProps["color"])
            )
          }
        >
          <FormControlLabel
            label="Default"
            value="default"
            control={<Radio size="small" color="default" />}
          />
          <FormControlLabel
            label="Primary"
            value="primary"
            control={<Radio size="small" color="primary" />}
          />
          <FormControlLabel
            label="Secondary"
            value="secondary"
            control={<Radio size="small" color="primary" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

Button.craft = {
  props: { 
    size: "small", 
    variant: "contained",
    color: "primary",
    text: "Click me"
  },
  related: {
    settings: ButtonSettings,
  },
};
export const ButtonResolver = {
  Button,
};
