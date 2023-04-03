// components/Toolbox.js
import React from "react";
import { Box, Typography, Button as MaterialButton } from "@mui/material";
import {Grid} from "@mui/material";
import { Element, useEditor } from "@craftjs/core";
import { Container } from "../user/Container";
import { Card } from "../user/Card";
import { Button } from "../user/Button";
import { Text } from "../user/Text";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid container direction="column"  alignItems="center" justifyContent="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
        <MaterialButton ref={ref=> {if (ref) connectors.create(ref, <Button children="Click me" size="small" />)}} variant="contained">Button</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref=> {if (ref) connectors.create(ref, <Text text="Hi world" fontSize="small" />)}} variant="contained">Text</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref=> {if (ref) connectors.create(ref, <Element is={Container} padding={20} canvas children={undefined} background={""} />)}} variant="contained">Container</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref=> {if (ref) connectors.create(ref, <Card background={""} />)}} variant="contained">Card</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};
export const ToolboxResolver = {
  Toolbox,
};