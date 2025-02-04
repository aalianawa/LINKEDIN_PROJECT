import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardActions,
  // Menu,
  // MenuItem,
  TextField,
  Button,
  Link,
} from "@mui/material";
import img from "../assets/Capture.PNG";
import profile from "../assets/1737113951052.jpg"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from "emoji-picker-react";

const Posts = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleEmojiSelect = (emoji) => {
    setShowEmojiPicker(false);
  };

  const handleCommentClick = () => {
    setCommentOpen(!commentOpen);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {/* Left Sidebar */}
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, borderRadius: "16px" }}>
            <img src={profile} width={70} className="rounded-5 mt-5" />
            <Typography variant="h6" align="start" mt={5}>
              Aalia Nawaz
            </Typography>
            <Typography mt={1} mb={1} variant="body2" align="start" sx={{color:"#000000E6"}}>
              Frontend Developer | JavaScript | Bootstrap5 | React.js | Next.js
            </Typography>
            <Link href="#" sx={{textDecoration: 'none', fontSize: "14px", color:"#00000099"}}>Khairpur District, Sindh</Link>
            <Typography sx={{display:"flex"}}>

            </Typography>
          </Card>
        </Grid>

        {/* Main Feed */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2 }}>
            <CardHeader
              avatar={<Avatar>A</Avatar>}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Aalia Nawaz"
              subheader="Frontend Developer | React Js | Next Js"
            />
            <CardMedia component="img" height="250" image={img} alt="Post" />
            <CardContent>
              <Typography variant="body2">
                This is a sample post description.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "space-between" }}
              disableSpacing
            >
              <div
                onMouseEnter={() => setShowEmojiPicker(true)}
                onMouseLeave={() => setShowEmojiPicker(false)}
                style={{ position: "relative" }}
              >
                <IconButton sx={{ display: "flex" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 50 50"
                  >
                    <path
                      fill="currentColor"
                      d="M40 23.2c0-2.1-1.7-3.2-4-3.2h-6.7c.5-1.8.7-3.5.7-5c0-5.8-1.6-7-3-7c-.9 0-1.6.1-2.5.6c-.3.2-.4.4-.5.7l-1 5.4c-1.1 2.8-3.8 5.3-6 7V36c.8 0 1.6.4 2.6.9c1.1.5 2.2 1.1 3.4 1.1h9.5c2 0 3.5-1.6 3.5-3c0-.3 0-.5-.1-.7c1.2-.5 2.1-1.5 2.1-2.8c0-.6-.1-1.1-.3-1.6c.8-.5 1.5-1.4 1.5-2.4c0-.6-.3-1.2-.6-1.7c.8-.6 1.4-1.6 1.4-2.6m-2.1 0c0 1.3-1.3 1.4-1.5 2c-.2.7.8.9.8 2.1s-1.5 1.2-1.7 1.9c-.2.8.5 1 .5 2.2v.2c-.2 1-1.7 1.1-2 1.5c-.3.5 0 .7 0 1.8c0 .6-.7 1-1.5 1H23c-.8 0-1.6-.4-2.6-.9c-.8-.4-1.6-.8-2.4-1V23.5c2.5-1.9 5.7-4.7 6.9-8.2v-.2l.9-5c.4-.1.7-.1 1.2-.1c.2 0 1 1.2 1 5c0 1.5-.3 3.1-.8 5H27c-.6 0-1 .4-1 1s.4 1 1 1h9c1 0 1.9.5 1.9 1.2"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M16 38h-6c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m-6-16v14h6V22z"
                    ></path>
                  </svg>
                  <Typography sx={{ fontSize: "14px" }} variant="h6">
                    like
                  </Typography>
                </IconButton>
                {showEmojiPicker && (
                  <div
                    style={{
                      position: "absolute",
                      top: -50,
                      left: 0,
                      background: "white",
                      borderRadius: 5,
                    }}
                  >
                    <EmojiPicker
                      onEmojiClick={handleEmojiSelect}
                      previewConfig={{ showPreview: false }}
                    />
                  </div>
                )}
              </div>
              <IconButton onClick={handleCommentClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.5 13.5h11v-1h-11zm0-3h11v-1h-11zm0-3h11v-1h-11zM3 17V3h18v17.077L17.923 17zm1-1h14.35L20 17.644V4H4zm0 0V4z"
                  ></path>
                </svg>{" "}
                <Typography sx={{ fontSize: "14px" }} variant="h6">
                  comment
                </Typography>
              </IconButton>
              <IconButton>
                <RepeatIcon width={20} height={20} />
                <Typography sx={{ fontSize: "14px" }} variant="h6">
                  repost
                </Typography>
              </IconButton>
              <IconButton>
                <SendIcon width={20} height={20} />
                <Typography sx={{ fontSize: "14px" }} variant="h6">
                  send
                </Typography>
              </IconButton>
            </CardActions>
            {commentOpen && (
              <CardContent>
                {comments.map((comment, index) => (
                  <Typography key={index} variant="body2" sx={{ mt: 1 }}>
                    {comment}
                  </Typography>
                ))}
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  sx={{ mt: 1 }}
                />
                <Button
                  onClick={handleAddComment}
                  sx={{ mt: 1 }}
                  variant="contained"
                >
                  Comment
                </Button>
              </CardContent>
            )}
          </Card>
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">Suggestions</Typography>
            <Typography variant="body2" color="text.secondary">
              Follow new connections here.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
