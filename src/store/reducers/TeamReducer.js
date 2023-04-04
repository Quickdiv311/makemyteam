import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: "team",
    initialState: {
        teams: [
                {
                 "Name": "D Conway",
                 "Team": 1,
                 "Credits": 8.5,
                 "Skill": "WK",
                 "Status": "Announced"
                },
                {
                 "Name": "Ms Dhoni",
                 "Team": 1,
                 "Credits": 7.5,
                 "Skill": "WK",
                 "Status": "Announced"
                },
                {
                 "Name": "R Gaikwad",
                 "Team": 1,
                 "Credits": 8.5,
                 "Skill": "BAT",
                 "Status": "Announced"
                },
                {
                 "Name": "A Rayudu",
                 "Team": 1,
                 "Credits": 7.5,
                 "Skill": "BAT",
                 "Status": "Announced"
                },
                {
                 "Name": "S Dube",
                 "Team": 1,
                 "Credits": 7,
                 "Skill": "BAT",
                 "Status": "Announced"
                },
                {
                 "Name": "R Jadeja",
                 "Team": 1,
                 "Credits": 9,
                 "Skill": "ALL",
                 "Status": "Announced"
                },
                {
                 "Name": "B Stokes",
                 "Team": 1,
                 "Credits": 9,
                 "Skill": "ALL",
                 "Status": "Announced"
                },
                {
                 "Name": "M Ali",
                 "Team": 1,
                 "Credits": 8.5,
                 "Skill": "ALL",
                 "Status": "Announced"
                },
                {
                 "Name": "M Santner",
                 "Team": 1,
                 "Credits": 6.5,
                 "Skill": "ALL",
                 "Status": "Announced"
                },
                {
                 "Name": "D Chahar",
                 "Team": 1,
                 "Credits": 8.5,
                 "Skill": "BOW",
                 "Status": "Announced"
                },
                {
                 "Name": "R Hangregekar",
                 "Team": 1,
                 "Credits": 5.5,
                 "Skill": "BOW",
                 "Status": "Announced"
                },
                {
                 "Name": "T Deshpande",
                 "Team": 1,
                 "Credits": 6,
                 "Skill": "BOW",
                 "Status": "Sub"
                },
                {
                 "Name": "S Senapati",
                 "Team": 1,
                 "Credits": 5.5,
                 "Skill": "BAT",
                 "Status": "Sub"
                },
                {
                 "Name": "S Rasheed",
                 "Team": 1,
                 "Credits": 5,
                 "Skill": "BAT",
                 "Status": "Sub"
                },
                {
                 "Name": "A Rahane",
                 "Team": 1,
                 "Credits": 7,
                 "Skill": "BAT",
                 "Status": "Sub"
                },
                {
                 "Name": "Nishant sindhu",
                 "Team": 1,
                 "Credits": 5.5,
                 "Skill": "BOW",
                 "Status": "Sub"
                },
                {
                 "Name": "N Pooran",
                 "Team": 2,
                 "Credits": 8.5,
                 "Skill": "WK",
                 "Status": "Announced"
                },
                {
                 "Name": "KL Rahul",
                 "Team": 2,
                 "Credits": 9,
                 "Skill": "WK",
                 "Status": "Announced"
                },
                {
                 "Name": "D Hooda",
                 "Team": 2,
                 "Credits": 8,
                 "Skill": "BAT",
                 "Status": "Announced"
                },
                {
                 "Name": "A Badoni",
                 "Team": 2,
                 "Credits": 7,
                 "Skill": "BAT",
                 "Status": "Announced"
                },
                {
                 "Name": "M Stoinis",
                 "Team": 2,
                 "Credits": 8.5,
                 "Skill": "ALL",
                 "Status": "Announced"
                },
                {
                 "Name": "K Pandya",
                 "Team": 2,
                 "Credits": 8,
                 "Skill": "ALL",
                 "Status": "Announced"
                },
                {
                 "Name": "K Mayers",
                 "Team": 2,
                 "Credits": 7,
                 "Skill": "ALL",
                 "Status": "Announced"
                },
                {
                 "Name": "M Wood",
                 "Team": 2,
                 "Credits": 8,
                 "Skill": "BOWL",
                 "Status": "Announced"
                },
                {
                 "Name": "R Bishnoi",
                 "Team": 2,
                 "Credits": 8,
                 "Skill": "BOWL",
                 "Status": "Announced"
                },
                {
                 "Name": "J Unadkat",
                 "Team": 2,
                 "Credits": 7.5,
                 "Skill": "BOWL",
                 "Status": "Announced"
                },
                {
                 "Name": "A Khan",
                 "Team": 2,
                 "Credits": 8.5,
                 "Skill": "BOWL",
                 "Status": "Announced"
                },
                {
                 "Name": "K Gowtham",
                 "Team": 2,
                 "Credits": 6.5,
                 "Skill": "ALL",
                 "Status": "Sub"
                },
                {
                 "Name": "Yash Thakur",
                 "Team": 2,
                 "Credits": 6,
                 "Skill": "BOW",
                 "Status": "Sub"
                },
                {
                 "Name": "Prenak Mankad",
                 "Team": 2,
                 "Credits": 6,
                 "Skill": "ALL",
                 "Status": "Sub"
                },
                {
                 "Name": "Amit Mishra",
                 "Team": 2,
                 "Credits": 7,
                 "Skill": "BOW",
                 "Status": "Sub"
                },
                {
                 "Name": "D Sams",
                 "Team": 2,
                 "Credits": 7,
                 "Skill": "ALL",
                 "Status": "Sub"
                }
        ],
        cap: {captain: '', vice: ''},
        count: {WK: 0, BAT: 0, ALL: 0, BOW: 0},
        total: 0
    },
    reducers:
    {

       select: (state, action) => {
        let index = state.teams.findIndex(i => i.Name === action.payload.Name);
        if(state.teams[index].Status.includes("Announced"))
        {
            state.teams[index].Status = "SelectedAnnounced";
        }
        if(state.teams[index].Status.includes("Sub"))
        {
            state.teams[index].Status = "SelectedSub";
        }
        state.total += state.teams[index].Credits;
        state.count[state.teams[index].Skill] += 1; 
       },

       reject: (state, action) => {
        let index = state.teams.findIndex(i => i.id === action.payload.id);
        state.teams[index].Status = "RejectedAnnounced";
       },

       add: (state, action) => {
        let index = state.teams.findIndex(i => i.id === action.payload.id);
        state.teams[index].Status = "AnnounceSub";
       },

        generate: (state,action) =>  {

         while(state.count.WK<2 || state.count.BAT<2 || state.count.ALL<2 || state.count.BOW<2)
         {
            let index = Math.floor(Math.random() * state.teams.length);
            if(state.teams[index].Status.includes("Announce") && !state.teams[index].Status.includes("Selected") && !state.teams[index].Status.includes("Rejected") && state.count[state.teams[index].Skill] <2)
            {    
              if(state.teams[index].Status.includes("Announced"))
              {
              state.teams[index].Status = "SelectedAnnounced";
              }
              if(state.teams[index].Status.includes("Sub"))
              {
              state.teams[index].Status = "SelectedSub";
              }
              state.count[state.teams[index].Skill] += 1; 
              state.total += state.teams[index].Credits;
            }
         }
            
          while((state.count.WK + state.count.BAT + state.count.ALL + state.count.BOW) < 11)
          {
              let index = Math.floor(Math.random() * state.teams.length);

              
              if(state.teams[index].Status.includes("Announce") && !state.teams[index].Status.includes("Selected") && !state.teams[index].Status.includes("Rejected") && ((state.total + state.teams[index].Credits) <= 100))
              {
              if(state.teams[index].Status.includes("Announced"))
              {
            state.teams[index].Status = "SelectedAnnounced";
              }
              if(state.teams[index].Status.includes("Sub"))
              {
            state.teams[index].Status = "SelectedSub";
              }
                  state.count[state.teams[index].Skill] += 1; 
                  state.total += state.teams[index].Credits;
              }
          }

          let selected = state.teams.filter(i => i.Status.includes("Selected"));
          
          let ind1 = Math.floor(Math.random() * selected.length);
          state.cap.captain = selected[ind1].Name;
          let ind2 = Math.floor(Math.random() * selected.length);
          state.cap.vice = selected[ind2].Name;
        }
    } 
})

export const teamReducer = teamSlice.reducer;
export const {generate,initialize,select,reject,add} = teamSlice.actions;
export const teamSelector = (state) => state.teamReducer.teams;
export const capSelector = (state) => state.teamReducer.cap;
export const totalSelector = (state) => state.teamReducer.total;
