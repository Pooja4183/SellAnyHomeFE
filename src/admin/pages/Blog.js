import React, { useState } from "react";
import MUIRichTextEditor from "mui-rte";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import StyledTextField from "../../component/custom/StyledTextField";
import { useDispatch } from "react-redux";
import { createBlog } from "../../store/adminAction";
import StyledButton from "../../component/custom/StyledButton";
import { Save } from "@mui/icons-material";

const Blog = () => {
  const dispatch = useDispatch();
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");

  const save = async(e) => {
    e.preventDefault();
    const raw = convertToRaw(editorState.getCurrentContent());
    console.log("Raw::", raw);
    try {
        await dispatch(createBlog(title, raw));
        setSuccess(true);
        setError(null);
      } catch (error) {
        setSuccess(false);
        setError(error.message);
      }
  };

  const handleEditorChange = (newEditorState) => {
    console.log("Content::", newEditorState.getCurrentContent());
    const value = stateToHTML(newEditorState.getCurrentContent());
    const raw = convertToRaw(newEditorState.getCurrentContent());
    console.log("Raw::", raw);
    setEditorState(newEditorState);
    console.log("Value::", editorState);
  };

  const handleChange = (e) => {
    console.log("Value::", e.target.value);
    setTitle(e.target.value);
    console.log("Title::", title);
  };

  return (
    <Paper
      component="form"
      onSubmit={save}
      elevation={24}
      sx={{ padding: 1, mb: 5,minHeight: "637px" }}
    >
      <Grid container>
        <Grid item xs={9}>
          <TextField
            label="Title"
            name="title"
            fullWidth
            value={title}
            required
            onChange={handleChange}
          ></TextField>
        </Grid>
        <Grid item xs={3} pl={1}>
          <Button type="Submit" value="Save" variant="contained">
            Save
            <Save sx={{ marginLeft: 1 }} />
          </Button>
        </Grid>
        <Grid item>
        {isSuccess && (
              <Typography
                variant="success"
                sx={{ marginTop: 2, marginLeft: 1, color: "green" }}
              >
                Your details has been sent successfully! We will connect with
                you shortly.
              </Typography>
            )}
            {error && (
              <Typography variant="error" sx={{ marginTop: 2, marginLeft: 1 }}>
                An error occurred: {error}
              </Typography>
            )}

          <MUIRichTextEditor
            label="Type something here"
            inlineToolbar={true}
            onSave={save}
            onChange={handleEditorChange}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Blog;
