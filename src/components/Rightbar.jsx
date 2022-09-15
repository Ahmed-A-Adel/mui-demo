import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      flexGrow={2}
      sx={{
        display: { xs: "none", sm: "block" },
        maxHeight: "calc(100vh - 93px)",
        position: "sticky",
        top: "64px",
        left: "0",
        mt: "10px",
        padding: "16px 8px",
      }}
      style={{ marginLeft: "0" }}
      component="aside"
      p={2}
    >
      <Typography variant="h6" fontWeight={100} mb={0.5}>
        Online Freinds
      </Typography>
      <AvatarGroup max={4} sx={{ justifyContent: "start" }}>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIP6RSz3owkfri-IadQkVLO62YxayhFVxSw&usqp=CAU" />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmFHhInaYqN1h9JoG2Hfkx9WMshr7X_61ZA&usqp=CAU" />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxnbQjAEbNjPANRqs1A9RvitgU3yRRaBcnA&usqp=CAU" />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjr4f0Cq_kuAU89SpCgOBD1Spbl3xhbNQGnA&usqp=CAU" />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIP6RSz3owkfri-IadQkVLO62YxayhFVxSw&usqp=CAU" />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIP6RSz3owkfri-IadQkVLO62YxayhFVxSw&usqp=CAU" />
      </AvatarGroup>
      {/* ____________________ Online freinds List __________________ */}
      <Typography variant="h6" fontWeight={100} mt={2} mb={1}>
        Latest Picuers{" "}
      </Typography>
      <ImageList col={3}>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIP6RSz3owkfri-IadQkVLO62YxayhFVxSw&usqp=CAU"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxnbQjAEbNjPANRqs1A9RvitgU3yRRaBcnA&usqp=CAU"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmFHhInaYqN1h9JoG2Hfkx9WMshr7X_61ZA&usqp=CAU"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      {/* ___________ Latest converstion List __________________________ */}
      <Typography variant="h6" fontWeight={100} mt={2} mb={1}>
        Latest Conversition{" "}
      </Typography>
      <List sx={{ height: "26vh", overflow: "scroll" }}>
        <ListItem
          alignItems="flex-start"
          style={{
            paddingLeft: "0",
            paddingRight: "0",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ListItemAvatar style={{ minWidth: "0" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Ra0HlHzIS8Vcwg56d_81RaefUf5lo1cjJg&usqp=CAU"
            />
          </ListItemAvatar>
          <ListItemText
            style={{ width: "98%" }}
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          style={{
            paddingLeft: "0",
            paddingRight: "0",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxILQRAowi7ym9x3aBFLV6AMIqjUAqnNBS9Q&usqp=CAU"
            />
          </ListItemAvatar>
          <ListItemText
            style={{ width: "98%" }}
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          style={{
            paddingLeft: "0",
            paddingRight: "0",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          alignItems="flex-start"
        >
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLMfiHnXSBwvmje45OPwg2x3oWdL6n0h9JQ&usqp=CAU"
            />
          </ListItemAvatar>
          <ListItemText
            style={{ width: "98%" }}
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Rightbar;
