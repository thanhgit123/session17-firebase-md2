import { createSlice } from "@reduxjs/toolkit";

const productState = createSlice({
    name:"admin-product",
    initialState:{
        products:[
            {
                id :1,
                name: "trà đá hay nước lọc",
                price: 4000,
              },
              {
                id :2,
                name: " trà đá",
                price: 5000,
              },
              {
                id :3,
                name: "sai",
                price: 6000,
              },
              {
                id :4,
                name: "là nước lọc",
                price: 1000,
              },
        ]
    },
    reducers:{

    }

});

const productReducer = productState.reducer;

const store = configureStore({
    reducer:{
        productReducer,
    }
  })

export default store;
