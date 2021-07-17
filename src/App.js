import { useState } from "react";
import data from "./data";
import { Container, Header, Grid, Image, Icon, Button } from "semantic-ui-react";

function App() {

  const [counter, setCounter] = useState(1)

  const onIncrement = id => {
    const vote = data.map( post => {
      if(id === post.id){
        post.votes = post.votes + 1
      }
      return post.votes
    })
    setCounter(vote)
  }
  
  const onDecrement = id => {
    const vote = data.map( post => {
      if(id === post.id){
        post.votes = post.votes - 1
      }
      return post.votes
    })
    setCounter(vote)
  }

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
        <Grid key={post.id} columns={3}>
          <Grid.Column>
            <Image src={post.post_image_url} size="medium" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={2}>
            <Grid.Row>
              <Icon onClick={() => onIncrement(post.id)} name="angle up" />
            </Grid.Row>
            <h4 style={{paddingBottom: '10px'}}>{post.votes}</h4>
            <Grid.Row>
              <Icon onClick={() => onDecrement(post.id)} name="angle down" />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Container text textAlign="left">
              <a href={post.url}>
                {post.title}
              </a>
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
