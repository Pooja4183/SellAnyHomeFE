import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sellProducts: [],
  productTableHeaders: [],
  buyProducts: [],
  approvedProducts: [],
  draftProducts: [],
  allProducts: [],
  directProducts: [],
  agents: [],
  agentTableHeaders: [],
  agent: null,
  cnt_sellProducts: 0,
  cnt_buyProducts: 0,
  cnt_approvedProducts: 0,
  cnt_draftProducts: 0,
  cnt_allProducts: 0,
  cnt_agents: 0,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",

  initialState,

  reducers: {
    fetchProductsForSale(state, action) {
      state.sellProducts = action.payload.property;
      state.cnt_sellProducts = action.payload.totalRecords;
      state.error = null;
    },
    fetchProductsForBuy(state, action) {
      state.buyProducts = action.payload.property;
      state.cnt_buyProducts = action.payload.totalRecords;
      state.error = null;
    },
    fetchProductsForApproved(state, action) {
      state.approvedProducts = action.payload.property;
      state.cnt_approvedProducts = action.payload.totalRecords;
      state.error = null;
    },
    fetchProductsForDraft(state, action) {
      state.draftProducts = action.payload.property;
      state.cnt_draftProducts = action.payload.totalRecords;
      state.error = null;
    },
    fetchProductsForAll(state, action) {
      state.allProducts = action.payload.property;
      state.cnt_allProducts = action.payload.totalRecords;
      state.error = null;
    },
    fetchDirectlyCreatedProducts(state, action) {
      state.directProducts = action.payload;
      state.error = null;
    },
    updateProductTableHeaders(state, action) {
      state.productTableHeaders = action.payload;
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
      const index = state.products.findIndex(
        (element) => element.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
      state.error = null;
    },

    createOrUpdateProductFailure(state, action) {
      state.product = null;
      state.error = action.payload;
      console.log("Failure");
    },
    /* Agent Stuff */
    fetchAgents(state, action) {
      state.agents = action.payload.agents;
      state.cnt_agents = action.payload.totalRecords;
      state.error = null;
    },
    updateAgentTableHeader(state, action) {
      state.agentTableHeaders = action.payload;
    },
    createOrUpdateAgentSuccess(state, action) {
      state.agent = action.payload;
      const index = state.agents.findIndex(
        (element) => element.id === action.payload.id
      );
      if (index !== -1) {
        state.agents[index] = action.payload;
      }
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
