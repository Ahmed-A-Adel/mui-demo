import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  ShareRounded,
} from "@mui/icons-material";
function Post() {
  return (
    <Card sx={{ marginBottom: "1rem" }}>
      <CardHeader
        avatar={
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9wy-2dQHKS2J80vbRj3SSAXscCsTBgq46Q&usqp=CAU"
            sx={{ bgcolor: "red" }}
            aria-label="recipe"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Ahmed A Adel"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images6.alphacoders.com/345/345002.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareRounded />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
