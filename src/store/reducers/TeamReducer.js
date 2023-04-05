import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: "team",
    initialState: {
        teams: [
          {
           "Name": "J Buttler",
           "Team": 1,
           "Credits": 9,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "S samson",
           "Team": 1,
           "Credits": 8.5,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "S Hetmyer",
           "Team": 1,
           "Credits": 8,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "D Paddikal",
           "Team": 1,
           "Credits": 8,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "Y Jaiswal",
           "Team": 1,
           "Credits": 7.5,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "J Holder",
           "Team": 1,
           "Credits": 8.5,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "R Ashwin",
           "Team": 1,
           "Credits": 8,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "R Parag",
           "Team": 1,
           "Credits": 7.5,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "K Asif",
           "Team": 1,
           "Credits": 6,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "Y Chahal",
           "Team": 1,
           "Credits": 8.5,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "T Boult",
           "Team": 1,
           "Credits": 9,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "D Jurel",
           "Team": 1,
           "Credits": 6,
           "Skill": "BAT",
           "Status": "Sub"
          },
          {
           "Name": "D Ferreira",
           "Team": 1,
           "Credits": 6.5,
           "Skill": "ALL",
           "Status": "Sub"
          },
          {
           "Name": "S Sharma",
           "Team": 1,
           "Credits": 6,
           "Skill": "BOW",
           "Status": "Sub"
          },
          {
           "Name": "M Ashwin",
           "Team": 1,
           "Credits": 6.5,
           "Skill": "BOW",
           "Status": "Sub"
          },
          {
           "Name": "N Saini",
           "Team": 1,
           "Credits": 7,
           "Skill": "BOW",
           "Status": "Sub"
          },
          {
           "Name": "B Rajapaksa",
           "Team": 2,
           "Credits": 7.5,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "J Sharma",
           "Team": 2,
           "Credits": 7,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "P Singh",
           "Team": 2,
           "Credits": 6,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "S Dhawan",
           "Team": 2,
           "Credits": 9,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "S Khan",
           "Team": 2,
           "Credits": 6.5,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "S Curran",
           "Team": 2,
           "Credits": 9,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "S Raza",
           "Team": 2,
           "Credits": 7,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "A Singh",
           "Team": 2,
           "Credits": 8.5,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "R Chahar",
           "Team": 2,
           "Credits": 8,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "N Ellis",
           "Team": 2,
           "Credits": 7,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "H Brar",
           "Team": 2,
           "Credits": 6.5,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "R Dhawan",
           "Team": 2,
           "Credits": 6.5,
           "Skill": "ALL",
           "Status": "Sub"
          },
          {
           "Name": "A Taide",
           "Team": 2,
           "Credits": 5,
           "Skill": "BAT",
           "Status": "Sub"
          },
          {
           "Name": "H Bhatia",
           "Team": 2,
           "Credits": 5.5,
           "Skill": "BAT",
           "Status": "Sub"
          },
          {
           "Name": "M Rathee",
           "Team": 2,
           "Credits": 5,
           "Skill": "BAT",
           "Status": "Sub"
          },
          {
           "Name": "M Short",
           "Team": 2,
           "Credits": 6.5,
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
            state.teams[index].Status = "PreSelectedAnnounced";
        }
        if(state.teams[index].Status.includes("Sub"))
        {
            state.teams[index].Status = "PreSelectedSub";
        }
        state.total += state.teams[index].Credits;
        state.count[state.teams[index].Skill] += 1; 
       },

       reject: (state, action) => {
        let index = state.teams.findIndex(i => i.Name === action.payload.Name);
        state.teams[index].Status = "RejectedAnnounced";
       },

       add: (state, action) => {
        let index = state.teams.findIndex(i => i.Name === action.payload.Name);
        state.teams[index].Status = "AnnounceSub";
       },

        generate: (state,action) =>  {

          state.teams.filter(i => i.Status.includes("Selected") && !i.Status.includes("Pre")).forEach(i => i.Status.replace("Selected",""));

          let announcedTeam = state.teams.filter(i => i.Status.includes("Announce"));

         while(state.count.WK<1 || state.count.BAT<1 || state.count.ALL<1 || state.count.BOW<1)
         {
            let ind = Math.floor(Math.random() * announcedTeam.length);
            let index = state.teams.findIndex(i => i.Name === announcedTeam[ind].Name);

            if(state.teams[index].Status.includes("Announce") && !state.teams[index].Status.includes("Selected") && !state.teams[index].Status.includes("Rejected") && state.count[state.teams[index].Skill] <1)
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
            let ind = Math.floor(Math.random() * announcedTeam.length);
            let index = state.teams.findIndex(i => i.Name === announcedTeam[ind].Name);

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
          selected.splice(ind1,1); 
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
