import * as actionTypes from "../actions/actionTypes";
const initialState = {
  data: [
    { name: "Page A", uv: 4000, pv: 2400, amt: 1500 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2000 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2500 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 3000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 3200 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
  ],
  dataToSummary: [
    { name: "Page A", uv: 4000, pv: 2400, amt: 1500 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2000 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2500 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 3000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 3200 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
  ],
  dataPie: [
    { name: "Page A", amt: 2400 },
    { name: "Page B", amt: 2210 },
    { name: "Page C", amt: 2290 },
    { name: "Page D", amt: 2000 },
    { name: "Page E", amt: 2181 }
  ],
  countries1: "countries",
  countries2: "city",
  countries3: "state",
  dropDownlist: [
    {
      value: "1000",
      key: 0
    },
    {
      value: "20000",
      key: 1
    },
    {
      value: "1500",
      key: 2
    },
    {
      value: "200",
      key: 3
    }
  ],
  dropDownlist1: [
    {
      value: "usa",
      key: 0
    },

    {
      value: "china",
      key: 1
    },
    {
      value: "pakistan",
      key: 2
    },
    {
      value: "south africa",
      key: 3
    }
  ],
  dropDownlist2: [
    {
      value: "Allahabad",
      key: 0
    },

    {
      value: "Lucknow",
      key: 1
    },
    {
      value: "kanpur",
      key: 2
    },
    {
      value: "Pune",
      key: 3
    }
  ],
  dropDownlist3: [
    {
      value: "Uttar Pradesh",
      key: 0
    },

    {
      value: "Maharshtra",
      key: 1
    },
    {
      value: "Bihar",
      key: 2
    },
    {
      value: "Madhya Pradesh",
      key: 3
    }
  ],

  // firstName: "",
  // lastName: "",
  dataDropdowmn: [
    {
      value: "sam",
      key: 0
    },
    {
      value: "shanshank",
      key: 1
    },
    {
      value: "omkar",
      key: 2
    },
    {
      value: "south",
      key: 3
    }
  ],

  dropDownlist4: [
    {
      value: "7680",
      key: 0
    },
    {
      value: "15465",
      key: 1
    },
    {
      value: "1534",
      key: 2
    },
    {
      value: "124",
      key: 3
    }
  ],
  dropDownlist5: [
    {
      value: "34535",
      key: 0
    },
    {
      value: "35350",
      key: 1
    },
    {
      value: "786800",
      key: 2
    },
    {
      value: "756700",
      key: 3
    },
    {
      value: "7656",
      key: 4
    },
    {
      value: "87978",
      key: 5
    }
  ],
  dropDownlist6: [
    {
      value: "896",
      key: 0
    },
    {
      value: "75",
      key: 1
    },
    {
      value: "75",
      key: 2
    },
    {
      value: "7521",
      key: 3
    }
  ],

  search: "samiksha",
  dropDoewnName: "name",
  columns: [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
    }
  ],
  dataTable: [
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    {
      name: "samiksha",
      surname: "asFASE",
      birthYear: 2017,
      birthCity: 34
    }
    // {
    //   name: " shashank",
    //   surname: "asfgasedfg",
    //   birthYear: 2017,
    //   birthCity: 34
    // },
    // {
    //   name: "omkar",
    //   surname: "sfsd",
    //   birthYear: 2017,
    //   birthCity: 34
    // },
    // {
    //   name: "smriti",
    //   surname: "tdydryu",
    //   birthYear: 2017,
    //   birthCity: 34
    // },
    // {
    //   name: "sharivari",
    //   surname: "tdydryu",
    //   birthYear: 2017,
    //   birthCity: 34
    // },
    // {
    //   name: "snehal",
    //   surname: "tdydryu",
    //   birthYear: 2017,
    //   birthCity: 34
    // },
    // {
    //   name: "shivani",
    //   surname: "tdydryu",
    //   birthYear: 2017,
    //   birthCity: 34
    // }
  ]
};

export default (state = initialState, action) => {
  const newState = { ...state };

  console.log("newState.data initial", newState.dataToSummary);
  switch (action.type) {
    case actionTypes.Update_Data:
      console.log("action add reeducer", action.updateData);

      newState.dataToSummary = action.updateData;
      newState.dataPie = action.updateData;
      console.log("newState", newState);
      return newState;

    case actionTypes.Update_Data_OnmouseLeave:
      newState.dataToSummary = action.updateDataOnmouseLeave;
      newState.dataPie = action.updateDataOnmouseLeave;
      console.log(
        "action add reeducer after leave",
        action.updateDataOnmouseLeave
      );
      return newState;

    case actionTypes.Add_Records:
      console.log("action add reeducer", action.newRecord);
      const newArray = newState.dataTable;
      newArray.push(action.newRecord);
      newState.dataTable = newArray;

      console.log("newState", newState);
      return newState;

    case actionTypes.EDIT_RECORDS:
      console.log("Edit======>", action.editData);
      const newUpdatedArray = newState.dataTable;
      var foundIndex = newUpdatedArray.findIndex(
        x => x.name === action.editData.name
      );
      newUpdatedArray[foundIndex] = action.editData;

      console.log("newStateEdit", newState);
      return newState;

    case actionTypes.DELETE_RECORDS:
      console.log("Idddddd", action.deleteRecords);
      //return newState
      return state.filter((data, i) => i !== action.deleteRecords);

    default:
      return newState;
  }
};
