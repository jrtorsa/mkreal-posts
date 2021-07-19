import React from "react";
import { Grid, Button } from "semantic-ui-react";

const OrderButtons = ({sortAscPosts, sortDescPosts}) => {
  return (
    <Grid>
      <Grid.Row>
        <p style={{ padding: "10px 10px 0px 0px", fontWeight: "bold" }}>
          Orden:{" "}
        </p>
        <Button onClick={() => sortAscPosts()} primary basic>
          Ascendete
        </Button>
        <Button onClick={() => sortDescPosts()} primary>
          Descendente
        </Button>
      </Grid.Row>
    </Grid>
  );
};

export default OrderButtons;
