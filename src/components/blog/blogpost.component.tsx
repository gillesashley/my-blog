import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
  Chip,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
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
      <CssBaseline />
      <Container maxWidth="lg">
        <Card>
          <CardHeader
            title={post.title}
            subheader={<Chip label={post.date} color="primary" size="small" />}
          />
          <CardContent>
            <Typography variant="body1" paragraph>
              {post.content}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              By {post.author}
            </Typography>
          </CardContent>
          <Link to={"/blog"}>
            <Button variant="contained" color="primary">
              Back to Blog
            </Button>
          </Link>
        </Card>
      </Container>
    </>
  );
}
