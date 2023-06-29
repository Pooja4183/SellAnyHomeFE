import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sellProducts: [],
  sellTableHeaders: [],
  buyProducts: [],
  buyTableHeeaders: [],
  approvedProducts: [],
  approvedTableHeeaders: [],
  draftProducts: [],
  draftTableHeeaders: [],
  allProducts: [],
  allTableHeeaders: [],
  agents:[],
  agentTableHeaders: [],
  agent:null,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",

  initialState,

  reducers: {
    fetchProductsForSale(state, action) {
      state.sellProducts = action.payload;
      state.error = null;
    },
    fetchProductsForBuy(state, action) {
      state.buyProducts = action.payload;
      state.error = null;
    },
    fetchProductsForApproved(state, action) {
      state.approvedProducts = action.payload;
      state.error = null;
    },
    fetchProductsForDraft(state, action) {
      state.draftProducts = action.payload;
      state.error = null;
    },
    fetchProductsForAll(state, action) {
      state.allProducts = action.payload;
      state.error = null;
    },
    updateSellTableHeader(state, action) {
      state.sellTableHeaders = action.payload;
    },
    fetchProductsForSaleFailure(state, action) {
      state.error = action.payload;
      state.sellProducts = [];
    },
    fetchProductsForBuyFailure(state, action) {
      state.error = action.payload;
      state.buyProducts = [];
    },
    fetchProductsForApprovedFailure(state, action) {
      state.error = action.payload;
      state.approvedProducts = [];
    },
    fetchProductsForAllFailure(state, action) {
      state.error = action.payload;
      state.allProducts = [];
    },
    fetchProductsForDraftFailure(state, action) {
      state.error = action.payload;
      state.draftProducts = [];
    },
    createOrUpdateProductSuccess(state, action) {
      console.log("Success");
      state.product = action.payload;
      state.error = null;
    },

    createOrUpdateProductFailure(state, action) {
      state.product = null;
      state.error = action.payload;
      console.log("Failure");
    },
    /* Agent Stuff */
    fetchAgents(state, action) {
      state.agents = action.payload;
      state.error = null;
    },
    updateAgentTableHeader(state, action) {
      state.agentTableHeaders = action.payload;
    },
    createOrUpdateAgentSuccess(state, action) {
      state.agent = action.payload;
      state.error = null;
    },
    createOrUpdateAgentFailure(state, action) {
      state.agent = null;
      state.error = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;

export default adminSlice;
