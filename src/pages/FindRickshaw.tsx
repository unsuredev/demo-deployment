import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
interface FindRickshawProps {
  post: {
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FindRickshaw(props: FindRickshawProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography> */}
            {/* <Typography variant="subtitle1" paragraph>
            </Typography> */}
      <Button color="primary" variant="contained" style={{marginTop:"3rem" }} >Find Rickshaw</Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>

    </Grid>
  );
}
