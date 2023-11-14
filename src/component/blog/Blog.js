import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { fetchBlogs } from '../../store/adminAction';
import { Link } from "react-router-dom";

import bolgImg from '../../images/news.jpg';
import styles from './blog.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Blog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.admin.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const renderContent = (contentState) => {
    if (!contentState || !contentState.blocks) {
      return null;
    }

    const entityMap = contentState.entityMap || {};

    const textBlocks = [];
    let imageBlock = bolgImg;

    contentState.blocks.forEach((block, index) => {
      switch (block.type) {
        case 'unstyled':
          textBlocks.push(block.text);
          break;
        case 'atomic':
          if (block.entityRanges.length > 0) {
            const entityKey = block.entityRanges[0].key;
            const entity = entityMap[entityKey];
            if (entity.type === 'IMAGE') {
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
    const fullText = textBlocks.join('');
    console.log("full Text::", textBlocks);
    // Truncate the text to the desired length
    const truncatedText = fullText.length > maxLength
      ? fullText.substring(0, maxLength) + '...'
      : fullText;
  
    return truncatedText;
  }
  
  return (
    blogs && (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className={styles.newsContainer}
        >
             <Grid container spacing={2} className={styles.newsHeading} >
            <Grid item xs={12}>
              <Item sx={{ borderRadius: 0, boxShadow: "none" , textAlign:'center', padding:0 ,}}>
                <Typography variant='h2'>Latest Updates and News</Typography>
              </Item>
              
            </Grid>
          </Grid>
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} sx={{ padding: 0 }} key={blog._id}>
              <Item
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: 'none',
                
                }}
              >
                <Card sx={{ boxShadow: 'none' }} className={styles.cardImg}>
                  <CardActionArea>
                  <Link to={"/blog/" + blog._id}>
                    <CardMedia component="img" height="200" image={renderContent(blog.content).imageBlock} alt="green iguana" />
                    </Link>
                  </CardActionArea>
                  <CardContent className={styles.newsCont}>
                    <Typography gutterBottom component="div" className={styles.newsContH}>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={"justify"}>
                    {blog.content ? truncateText(renderContent(blog.content).textBlocks, 150) : 'No content available'}
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
}
