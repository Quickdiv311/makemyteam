import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: "team",
    initialState: {
        teams:[
          {
           "Name": "I Kishan",
           "Team": 1,
           "Credits": 8.5,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "R Sharma",
           "Team": 1,
           "Credits": 9,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "S Yadav",
           "Team": 1,
           "Credits": 9,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "T David",
           "Team": 1,
           "Credits": 8,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "T Varma",
           "Team": 1,
           "Credits": 8,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "C Green",
           "Team": 1,
           "Credits": 7.5,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "H Shokeen",
           "Team": 1,
           "Credits": 6.5,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "P Chawla",
           "Team": 1,
           "Credits": 6,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "Arshad Khand",
           "Team": 1,
           "Credits": 5,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "J Behrendorff",
           "Team": 1,
           "Credits": 7,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "T Subbs",
           "Team": 1,
           "Credits": 7,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "N Wadhera",
           "Team": 1,
           "Credits": 4,
           "Skill": "BAT",
           "Status": "Sub"
          },
          {
           "Name": "A Tendulkar",
           "Team": 1,
           "Credits": 4.5,
           "Skill": "BOW",
           "Status": "Sub"
          },
          {
           "Name": "Ramandeep Singh",
           "Team": 1,
           "Credits": 6.5,
           "Skill": "ALL",
           "Status": "Sub"
          },
          {
           "Name": "K Kartikeya",
           "Team": 1,
           "Credits": 7,
           "Skill": "BOW",
           "Status": "Sub"
          },
          {
           "Name": "S Warrier",
           "Team": 1,
           "Credits": 5.5,
           "Skill": "BOW",
           "Status": "Sub"
          },
          {
           "Name": "D Conway",
           "Team": 2,
           "Credits": 8.5,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "Ms Dhoni",
           "Team": 2,
           "Credits": 7.5,
           "Skill": "WK",
           "Status": "Announced"
          },
          {
           "Name": "R Gaikwad",
           "Team": 2,
           "Credits": 8.5,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "S Dube",
           "Team": 2,
           "Credits": 7,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "R Jadeja",
           "Team": 2,
           "Credits": 9,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "M Santner",
           "Team": 2,
           "Credits": 6.5,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "D Chahar",
           "Team": 2,
           "Credits": 8.5,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "T Deshpande",
           "Team": 2,
           "Credits": 6,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "A Rahane",
           "Team": 2,
           "Credits": 7,
           "Skill": "BAT",
           "Status": "Announced"
          },
          {
           "Name": "S Magala",
           "Team": 2,
           "Credits": 6,
           "Skill": "BOW",
           "Status": "Announced"
          },
          {
           "Name": "D Pretorious",
           "Team": 2,
           "Credits": 7,
           "Skill": "ALL",
           "Status": "Announced"
          },
          {
           "Name": "A Rayudu",
           "Team": 2,
           "Credits": 7.5,
           "Skill": "BAT",
           "Status": "Sub"
          },
          {
           "Name": "R Hangregekar",
           "Team": 2,
           "Credits": 5.5,
           "Skill": "BOW",
           "Status": "Sub"
          },
          {
           "Name": "S Senapati",
           "Team": 2,
           "Credits": 5.5,
           "Skill": "BAT",
           "Status": "Sub"
          },
          {
           "Name": "S Rasheed",
           "Team": 2,
           "Credits": 5,
           "Skill": "BAT",
           "Status": "Sub"
          },
          {
           "Name": "Akash Singh",
           "Team": 2,
           "Credits": 4.5,
           "Skill": "BOW",
           "Status": "Sub"
          }
         ],
        cap: {captain: '', vice: ''},
        count: {WK: 0, BAT: 0, ALL: 0, BOW: 0},
        teamCount: [0,0],
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
        state.teamCount[state.teams[index].Team-1] +=1;
        state.total += state.teams[index].Credits;
        state.count[state.teams[index].Skill] += 1; 
       },

       cancel: (state,action) => {
        let index = state.teams.findIndex(i => i.Name === action.payload.Name);
        if(state.teams[index].Status==="PreSelectedAnnounced")
        {
            state.teams[index].Status = "Announced";
            state.teamCount[state.teams[index].Team-1] -=1;
            state.total -= state.teams[index].Credits;
            state.count[state.teams[index].Skill] -= 1;
        }
        if(state.teams[index].Status === "PreSelectedSub")
        {
            state.teams[index].Status = "Sub";
            state.teamCount[state.teams[index].Team-1] -=1;
            state.total -= state.teams[index].Credits;
            state.count[state.teams[index].Skill] -= 1; 
        }

        if(state.teams[index].Status === "RejectedAnnounced")
        {
          state.teams[index].Status = "Announced";
        }

        if(state.teams[index].Status === "AnnounceSub")
        {
          state.teams[index].Status = "Sub";
        }
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
          for(let i=0;i<state.teams.length;i++)
          {
                if(state.teams[i].Status == "SelectedAnnounced")
                {
                    state.teams[i].Status = "Announced";
                    state.teamCount[state.teams[i].Team-1] -=1;
                    state.total -= state.teams[i].Credits;
                    state.count[state.teams[i].Skill] -= 1;
                }
                if(state.teams[i].Status == "SelectedSub")
                {
                    state.teams[i].Status = "AnnounceSub";
                    state.teamCount[state.teams[i].Team-1] -=1;
                    state.total -= state.teams[i].Credits;
                    state.count[state.teams[i].Skill] -= 1;
                }
          }

          let announcedTeam = state.teams.filter(i => i.Status.includes("Announce"));

         while(state.count.WK<1 || state.count.BAT<1 || state.count.ALL<1 || state.count.BOW<1)
         {
            let ind = Math.floor(Math.random() * announcedTeam.length);
            let index = state.teams.findIndex(i => i.Name === announcedTeam[ind].Name);

            if(state.teams[index].Status.includes("Announce") && !state.teams[index].Status.includes("Selected") && !state.teams[index].Status.includes("Rejected") && !state.teams[index].Status.includes("Pre") && state.count[state.teams[index].Skill] <1)
            {    
              if(state.teams[index].Status.includes("Announced"))
              {
              state.teams[index].Status = "SelectedAnnounced";
              }
              if(state.teams[index].Status.includes("Sub"))
              {
              state.teams[index].Status = "SelectedSub";
              }
            state.teamCount[state.teams[index].Team-1] +=1;
              state.count[state.teams[index].Skill] += 1; 
              state.total += state.teams[index].Credits;
            }
         }

         while((state.count.WK + state.count.BAT + state.count.ALL + state.count.BOW) < 10)
         {
           let ind = Math.floor(Math.random() * announcedTeam.length);
           let index = state.teams.findIndex(i => i.Name === announcedTeam[ind].Name);

             if(state.teams[index].Status.includes("Announce") && !state.teams[index].Status.includes("Selected") && !state.teams[index].Status.includes("Rejected") && !state.teams[index].Status.includes("Pre") && ((state.total + state.teams[index].Credits) <= 90.5))
             {
             if(state.teams[index].Status.includes("Announced"))
             {
           state.teams[index].Status = "SelectedAnnounced";
             }
             if(state.teams[index].Status.includes("Sub"))
             {
           state.teams[index].Status = "SelectedSub";
             }
            state.teamCount[state.teams[index].Team-1] +=1;
                 state.count[state.teams[index].Skill] += 1; 
                 state.total += state.teams[index].Credits;
             }
         }
            
          while((state.count.WK + state.count.BAT + state.count.ALL + state.count.BOW) < 11)
          {
            let ind = Math.floor(Math.random() * announcedTeam.length);
            let index = state.teams.findIndex(i => i.Name === announcedTeam[ind].Name);

              if(state.teams[index].Status.includes("Announce") && !state.teams[index].Status.includes("Selected") && !state.teams[index].Status.includes("Rejected") && !state.teams[index].Status.includes("Pre") && ((state.total + state.teams[index].Credits) <= 100))
              {
              if(state.teams[index].Status.includes("Announced"))
              {
            state.teams[index].Status = "SelectedAnnounced";
              }
              if(state.teams[index].Status.includes("Sub"))
              {
            state.teams[index].Status = "SelectedSub";
              }
            state.teamCount[state.teams[index].Team-1] +=1;
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
        },

        generateCap: (state,action) => {
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
export const {generate,generateCap,initialize,select,reject,add,cancel} = teamSlice.actions;
export const teamSelector = (state) => state.teamReducer.teams;
export const teamCount = (state) => state.teamReducer.teamCount;
export const capSelector = (state) => state.teamReducer.cap;
export const totalSelector = (state) => state.teamReducer.total;
