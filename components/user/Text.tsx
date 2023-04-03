import React, { FC, useRef, useCallback, useState, useEffect } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import {Slider, FormControl, FormLabel} from "@mui/material";


interface TextProps {
  text: string;
  fontSize?: any;
}

interface TextComponent extends FC<TextProps> {
  craft?: {
    props: {
      text: "Hi",
      fontSize: 20
    },
    related: {
      settings: typeof TextSettings;
    };
  };
}

export const Text: TextComponent = ({ text, fontSize }) => {
  const { connectors: { connect, drag }, actions: { setProp } } = useNode((node) => ({
    isActive: node.events.selected
  }));
  const [editable, setEditable] = useState(false);

  return (
    <div ref={(ref) => { if (ref) connect(drag(ref)) }}>
      <ContentEditable
        html={text}
        onChange={(e) =>
          setProp((props: { text: string }) =>
            (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ''))
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign: 'left' }}
      />
    </div>
  );
};

const TextSettings = () => {
  const { actions: { setProp }, fontSize } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props: { fontSize: number | number[] }) => (props.fontSize = value));
          }}
        />
      </FormControl>
    </>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20
  },
  related: {
    settings: TextSettings
  }
};
export const TextResolver = {
  Text,
};