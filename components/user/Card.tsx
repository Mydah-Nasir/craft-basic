import React, { FC , ReactNode} from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import {useNode, Element} from "@craftjs/core";
import {ContainerSettings} from "./Container";
import {ContainerDefaultProps} from "./Container";

interface CardProps {
  background: string;
  padding?: number;
  children?: ReactNode
}
interface CardComponent extends FC<CardProps> {
  craft?: {
    props: typeof ContainerDefaultProps,
    related: {
      settings: typeof ContainerSettings;
    };
  };
}


export const Card: CardComponent = ({background, padding = 20}) => {
  return (
    <Container background={background} padding={padding}>
      <Element id="text" is="div" canvas background={""}> // Canvas Node of type div
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is="div" canvas background={""}> // Canvas Node of type div
        <Button size="small" children="Learn more" />
      </Element>
    </Container>
  )
}

Card.craft = {
  props: ContainerDefaultProps,
  related: {
    // Since Card has the same settings as Container, we'll just reuse ContainerSettings 
    settings: ContainerSettings
  }
}
export const CardResolver = {
  Card,
};
