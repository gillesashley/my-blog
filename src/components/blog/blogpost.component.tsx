import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
  Chip,
} from "@mui/material";
import Container from "@mui/material/Container";
import { blogPosts } from "../../utils/posts.utils";
import { Link } from "react-router-dom";

export default function BlogPost() {
  const { id = "" } = useParams<{ id?: string }>();
  const postId = parseInt(id, 10);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <Typography variant="h5" color="error">
        Blog post not found.
      </Typography>
    );
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card sx={{ maxWidth: 800, width: "100%" }}>
        <CardHeader
          title={post.title}
          subheader={<Chip label={post.date} color="primary" size="small" />}
          sx={{ borderBottom: "1px solid #e0e0e0" }}
        />
        <CardContent sx={{ paddingBottom: 3 }}>
          <Typography variant="body1" paragraph>
            {post.content}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            By: {post.author}
          </Typography>
        </CardContent>
        <Link to={"/blog"} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ borderTop: "1px solid #e0e0e0", borderRadius: "0" }}>
            Back to Blog
          </Button>
        </Link>
      </Card>
    </Container>
    </>
  );
}
