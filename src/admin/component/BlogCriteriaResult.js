import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBlogs
} from "../../store/adminAction";
import BlogGrid from "./BlogGrid";
import BlogForm from "./BlogForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BlogCriteriaResult = ({ title, editable, handleClose }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.admin.blogs);


  useEffect(() => {
    console.debug("Rows::", rows);
    const fetchData = async () => {
      try {
        dispatch(fetchBlogs());
       
        if(rows && rows.length>0) {
          setSelectedItem(rows[0]);
        }
       
      } catch (error) {
        console.error("Error fetching Blogs:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mb:15.5}}>
        <Grid item xs={12} sm={6} lg={6}>
          <Item elevation={6}>
            {rows && (
              <BlogGrid
                rows={rows}
                title={title}
                onItemSelect={setSelectedItem}
              />
            )}
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
            <BlogForm size="100" selectedItem={selectedItem} editable handleClose={handleClose}/>
        </Grid>
      </Grid>
  );
};

export default BlogCriteriaResult;
