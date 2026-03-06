import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Demand-Supply Variance', value: '5%' },
  { id: 2, name: 'OTIF', value: '95%' },
  { id: 3, name: 'Inventory Days', value: '30' },
  { id: 4, name: 'Forecast Accuracy', value: '85%' },
];

const dashboardSlice = createSlice({
  name: 'dashboardKPIs',
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;