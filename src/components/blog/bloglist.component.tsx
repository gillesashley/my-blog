import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { blogPosts } from '../../utils/posts.utils';
import { Link } from 'react-router-dom';

export default function BlogList() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Blog Posts
        </Typography>
      </Grid>
      {blogPosts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card>
            <CardHeader
              title={post.title}
              subheader={(
                <Chip label={post.date} color="primary" size="small" />
              )}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component={Link} to={`/blog/${post.id}`}>
                {post.content.substring(0, 150) + '...'}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary">
                By {post.author}
              </Typography>
              <Button size="small" variant="contained">
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

