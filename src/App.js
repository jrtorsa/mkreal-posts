import { useState } from "react";
import data from "./data";
import { Container, Header, Grid, Image, Icon, Button } from "semantic-ui-react";

function App() {
  const [votedPosts, setVotedPosts] = useState(0);

  return (
    <Container>
      <Header as="h1" textAlign="center" dividing>
        Blog Posts Populares
      </Header>
      <Grid>
        <Grid.Row>
          <p style={{padding: '10px 10px 0px 0px', fontWeight: 'bold'}}>Orden: </p>
        <Button primary basic>Ascendete</Button>
        <Button primary>Descendente</Button>
        </Grid.Row>
      </Grid>
      {data.map((post) => (
        <Grid columns={3}>
          <Grid.Column>
            <Image src={post.post_image_url} size="medium" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={2}>
            <Grid.Row>
              <Icon name="angle up" />
            </Grid.Row>
            <h4 style={{paddingBottom: '10px'}}>{post.votes}</h4>
            <Grid.Row>
              <Icon name="angle down" />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Container text textAlign="left">
              <Header as="h4" color="blue">
                {post.title}
              </Header>
              <p>{post.description}</p>
              <span style={{ color: "blue" }}>Escrito por:</span>
              <Image src={post.writer_avatar_url} size="mini" circular spaced />
            </Container>
          </Grid.Column>
        </Grid>
      ))}
    </Container>
  );
}

export default App;
