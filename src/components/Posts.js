import React from "react";
import { Grid, Icon, Container } from "semantic-ui-react";

const Posts = () => {
  return (
    <>
      {posts.map((post) => (
        <Grid key={post.id} columns={3}>
          <Grid.Column>
            <Image src={post.post_image_url} size="medium" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={2}>
            <Grid.Row>
              <Icon onClick={() => onIncrement(post.id)} name="angle up" />
            </Grid.Row>
            <h4 style={{ paddingBottom: "10px" }}>{post.votes}</h4>
            <Grid.Row>
              <Icon onClick={() => onDecrement(post.id)} name="angle down" />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Container text textAlign="left">
              <a href={post.url}>{post.title}</a>
              <p>{post.description}</p>
              <span style={{ color: "blue" }}>Escrito por:</span>
              <Image src={post.writer_avatar_url} size="mini" circular spaced />
            </Container>
          </Grid.Column>
        </Grid>
      ))}
    </>
  );
};

export default Posts;
