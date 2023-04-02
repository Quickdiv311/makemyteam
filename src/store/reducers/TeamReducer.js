import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: "team",
    initialState: {
        teams: [],
        selectedTeam: [],
        cap: {captain: '', vice: ''},
        total: 0
    },
    reducers:
    {
       initialize: (state,action) => {
        state.teams = [...action.payload];
       },

       select: (state, action) => {
        state.selectedTeam.push(action.payload);
        let index = state.teams.findIndex(i => i.id == action.payload.id);
        state.teams.splice(index,1);
       },

       cancel: (state, action) => {
        let index = state.selectedTeam.findIndex(i => i.id == action.payload.id);
        state.selectedTeam.splice(index,1);
       },

       reject: (state, action) => {
        let index = state.teams.findIndex(i => i.id == action.payload.id);
        state.teams.splice(index,1);
       },

        generate: (state,action) =>  {
            let arr = Array(4);
            arr[0] = state.teams.filter(i => i.Skill === 'WK');
            arr[1] = state.teams.filter(i => i.Skill === 'BAT');
            arr[2] = state.teams.filter(i => i.Skill === 'BOW');
            arr[3] = state.teams.filter(i => i.Skill === 'ALL');

            console.log(arr[0]);
            
            for(let i=0;i<arr.length;i++)
            {
            let index = Math.floor(Math.random() * arr[i].length);

            if(arr[i].length && !state.selectedTeam.includes(arr[i][index]))
            {
                state.selectedTeam.push(arr[i][index]);
                let indexO = state.teams.indexOf(arr[i][index]);
                state.total += arr[i][index].Credits;
                state.teams.splice(indexO,1);
            }
            }
            
          while(state.selectedTeam.length < 11 && state.total <= 100)
          {
              let index = Math.floor(Math.random() * state.teams.length);
              state.selectedTeam.push(state.teams[index]);
              state.total += state.teams[index].Credits;
              state.teams.splice(index,1);
          }

          let ind1 = Math.floor(Math.random() * state.selectedTeam.length);
          state.cap.captain = state.selectedTeam[ind1].Name;
          let ind2 = Math.floor(Math.random() * state.selectedTeam.length);
          state.cap.vice = state.selectedTeam[ind2].Name;
        }
    } 
})

export const teamReducer = teamSlice.reducer;
export const {generate,initialize,select,reject,cancel} = teamSlice.actions;
export const teamSelector = (state) => state.teamReducer.selectedTeam;
export const capSelector = (state) => state.teamReducer.cap;
export const totalSelector = (state) => state.teamReducer.total;
