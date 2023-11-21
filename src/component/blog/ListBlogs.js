import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { fetchBlogs } from "../../store/adminAction";
import { Link } from "react-router-dom";

import placeholderImg from "../../images/news.jpg";
import styles from "./blog.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function ListBlogs({title,size}) {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.admin.blogs);

  if(size === undefined){
    size = 10;
  }

  if(title === undefined) {
    title = "Latest Updates and News";
  }
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const renderContent = (contentState) => {
    if (!contentState || !contentState.blocks) {
      return null;
    }

    const entityMap = contentState.entityMap || {};

    const textBlocks = [];
    let imageBlock = placeholderImg;

    contentState.blocks.forEach((block, index) => {
      switch (block.type) {
        case "unstyled":
          textBlocks.push(block.text);
          break;
        case "atomic":
          if (block.entityRanges.length > 0) {
            const entityKey = block.entityRanges[0].key;
            const entity = entityMap[entityKey];
            if (entity.type === "IMAGE") {
              imageBlock = entity.data.url;
            }
          }
          break;
        default:
          break;
      }
    });

    return { textBlocks, imageBlock };
  };

  function truncateText(textBlocks, maxLength) {
    // Join the text blocks into a single string
    const fullText = textBlocks.join("");
    // Truncate the text to the desired length
    const truncatedText =
      fullText.length > maxLength
        ? fullText.substring(0, maxLength) + "..."
        : fullText;

    return truncatedText;
  }

  return (
    blogs && blogs.length>0 && (
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        className={styles.newsContainer}
        justifyContent={"space-between"}
        display={"flex"}
        sx={{flexGrow:1}}
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid item xs={12} className={styles.newsHeading}>
          <Item>
            <Typography variant="h2">{title}</Typography>
          </Item>
        </Grid>
        {blogs.slice(0,size).map((blog) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{ padding: 0 }}
            key={blog._id}
          >
            <Item>
              <Card
                sx={{ boxShadow: "none", width: "100%" }}
                className={styles.cardImg}
              >
                <CardActionArea>
                  <Link to={"/blog/" + blog._id}>
                    <CardMedia
                      component="img"
                      sx={{height:250}}
                      image={renderContent(blog.content).imageBlock}
                      alt={blog.title}
                    />
                  </Link>
                </CardActionArea>
                <CardContent className={styles.newsCont}>
                  <Typography
                    gutterBottom
                    component="div"
                    className={styles.newsContH}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={"justify"}
                  >
                    {blog.content
                      ? truncateText(
                          renderContent(blog.content).textBlocks,
                          150
                        )
                      : "No content available"}
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    )
  );
}
