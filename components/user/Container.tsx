import React, { FC, ReactNode,useRef } from "react";
import { Paper,FormControl, FormLabel, Slider } from "@mui/material";
import { useNode } from "@craftjs/core";
import ColorPicker from 'material-ui-color-picker';


interface ContainerProps {
  background: string;
  padding?: number;
  children: ReactNode;
}
export const ContainerDefaultProps = {
  background : "#ffffff",
  padding: 3
};

interface ContainerComponent extends FC<ContainerProps> {
  craft?: {
    props: typeof ContainerDefaultProps,
    related: {
      settings: typeof ContainerSettings;
    };
  };
}

export const Container: ContainerComponent = ({background, padding = 0, children}) => {
    const { connectors: {connect, drag} } = useNode();
    //const ref = useRef<HTMLElement>(null);
  return (
    <Paper ref={ref => {if(ref) connect(drag(ref))}} style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </Paper>
  )
}

export const ContainerSettings = () => {
  const { background, padding, actions: {setProp} } = useNode(node => ({
    background: node.data.props.background,
    padding: node.data.props.padding
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker defaultValue={background || '#000'} onChange={color => {
          setProp((props: { background: string; }) => props.background = color)
        }} />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider defaultValue={padding} onChange={(_, value) => setProp((props: { padding: number | number[]; }) => props.padding = value)} />
      </FormControl>
    </div>
  )
}

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings
  }
}
export const ContainerResolver = {
  Container,
};
