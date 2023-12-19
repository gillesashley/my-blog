import { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { blogPosts } from "../../utils/posts.utils";
import { Link } from "react-router-dom";
import CreatePostModal from "../create-post-modal/create-post-modal.components";

interface Post {
  id: number;
  title: string;
  date: string;
  content: string;
  author: string;
}

interface BlogListProps {
  blogPosts: Post[];
}

export default function BlogList({ blogPosts }: BlogListProps) {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleCreatePost = (data: {
    title: string;
    content: string;
  }) => {
    console.log("new post data", data);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{ mb: 3, mt: 3, ml: 3, fontWeight: "bold" }}
        >
          Blog Posts
        </Typography>
        <Button
          variant="contained"
          sx={{ ml: 3 }}
          onClick={() => setIsCreatePostModalOpen(true)}
        >
          Create Post
        </Button>
        <CreatePostModal
          open={isCreatePostModalOpen}
          onClose={() => setIsCreatePostModalOpen(false)}
          onSubmit={handleCreatePost}
        />
      </Grid>
      {blogPosts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card>
            <CardHeader
              title={post.title}
              subheader={
                <Chip label={post.date} color="primary" size="small" />
              }
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component={Link}
                to={`/blog/${post.id}`}
              >
                {post.content.substring(0, 150) + "..."}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography variant="body2" color="textSecondary">
                By {post.author}
              </Typography>
              <Link to={`/blog/${post.id}`}>
                <Button size="small" variant="contained">
                  Read More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
