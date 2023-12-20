import { useEffect, useState } from "react";
import { Grid, Typography, Card, CardContent, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchBlogPosts } from "../../utils/api.utils";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlogPosts();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error in component", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{ mb: 3, mt: 3, ml: 3, fontWeight: "bold" }}
        >
          Blog Posts
        </Typography>
      </Grid>
      {blogPosts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h3"
              component={Link}
              to={`/blog/${post.id}`}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <CardHeader title={post.title} />
            </Typography>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ textDecoration: "none", color: "blue" }}
              >
                {post.body}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
