import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAgents
} from "../../store/adminAction";
import AgentForm from "./AgentForm";
import AgentGrid from "./AgentGrid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AgentCriteriaResult = ({ title, editable, handleClose }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.admin.agents);


  useEffect(() => {
    console.debug("Rows::", rows);
    const fetchData = async () => {
      try {
        dispatch(fetchAgents());
       
        if(rows && rows.length>0) {
          setSelectedItem(rows[0]);
        }
       
      } catch (error) {
        console.error("Error fetching Agents:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mb:15.5}}>
        <Grid item xs={12} sm={6} lg={6}>
          <Item elevation={6}>
            {rows && (
              <AgentGrid
                rows={rows}
                title={title}
                onItemSelect={setSelectedItem}
              />
            )}
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
            <AgentForm selectedItem={selectedItem} editable handleClose={handleClose}/>
        </Grid>
      </Grid>
  );
};

export default AgentCriteriaResult;
