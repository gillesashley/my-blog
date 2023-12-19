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
  updateBlogPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export default function BlogList({
  blogPosts,
  updateBlogPosts,
}: BlogListProps) {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleCreatePost = (data: { title: string; content: string }) => {
    const newPost = {
      id: blogPosts.length + 1,
      title: data.title,
      date: new Date().toLocaleDateString("en-US"),
      content: data.content,
      author: "John Doe",
    };

    updateBlogPosts([...blogPosts, newPost]);
    setIsCreatePostModalOpen(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ mb: 3, mt: 3, ml: 3, fontWeight: "bold" }}>
          Blog Posts
        </Typography>
        <Button variant="contained" sx={{ ml: 3 }} onClick={() => setIsCreatePostModalOpen(true)}>
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
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardHeader
              title={post.title}
              subheader={<Chip label={post.date} color="primary" size="small" sx={{ mt: 1 }} />}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component={Link}
                to={`/blog/${post.id}`}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                {post.content.substring(0, 150) + "..."}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto" }}>
              <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1 }}>
                By {post.author}
              </Typography>
              <Link to={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
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
