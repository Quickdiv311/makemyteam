let a = [{"Name":"J Buttler","Team":1,"Credits":10.5,"Skill":"WK"},{"Name":"S Samson","Team":1,"Credits":9,"Skill":"WK"},{"Name":"D Padikkal","Team":1,"Credits":8.5,"Skill":"BAT"},{"Name":"Y Jaiswal","Team":1,"Credits":8.5,"Skill":"BAT"},{"Name":"R Ashwin","Team":1,"Credits":9,"Skill":"ALL"},{"Name":"R Parag","Team":1,"Credits":8,"Skill":"ALL"},{"Name":"S Hetmyer","Team":1,"Credits":8.5,"Skill":"BAT"},{"Name":"Y Chahal","Team":1,"Credits":9.5,"Skill":"BOW"},{"Name":"T Boult","Team":1,"Credits":8.5,"Skill":"BOW"},{"Name":"P Krishna","Team":1,"Credits":8.5,"Skill":"BOW"},{"Name":"O McCoy","Team":1,"Credits":8,"Skill":"BOW"},{"Name":"W Saha","Team":2,"Credits":9,"Skill":"WK"},{"Name":"M Wade","Team":2,"Credits":8,"Skill":"WK"},{"Name":"D Miller","Team":2,"Credits":9,"Skill":"BAT"},{"Name":"S Gill","Team":2,"Credits":9,"Skill":"BAT"},{"Name":"H Pandya","Team":2,"Credits":9.5,"Skill":"ALL"},{"Name":"R Tewatia","Team":2,"Credits":8,"Skill":"ALL"},{"Name":"R Khan","Team":2,"Credits":9.5,"Skill":"BOW"},{"Name":"M Shami","Team":2,"Credits":8.5,"Skill":"BOW"},{"Name":"A Joseph","Team":2,"Credits":8,"Skill":"BOW"},{"Name":"Y Dayal","Team":2,"Credits":8,"Skill":"BOW"},{"Name":"R S Kishore","Team":2,"Credits":8,"Skill":"BOW"}];
let ability = {'BAT':'BAT','WK':'WK','ALL':'ALL','BOW':'BOW'};
let total = 0;
let playerCount=0;
let index;
let b =[];
let teamCount = {1:0,2:0};
let skillsCount = {'BAT':0,'WK':0,'ALL':0,'BOW':0};

  function selectPlayer(i)
  {
    teamCount[a[i].Team] +=1;
    skillsCount[a[i].Skill] +=1;
    total+=a[i].Credits;
    b.push(a[i]);
    a.splice(i,1);
    playerCount++;
  }

  function rejectPlayer(i)
  {
    a.splice(i,1);
  }

  function preSelect(i,n,sk)
  {
    if((skillsCount[a[i].Skill] < n) && (a[i].Skill===sk) && teamCount[a[i].Team] <7 && total<=(100-a[i].Credits)) 
   {
    selectPlayer(i);
    }
    else
    {
      console.log("cannot pre select player `${i}`");
    }
  }  

function prefilter(i,n,sk)
  {
    if((skillsCount[a[i].Skill] < n) && (a[i].Skill===sk) && teamCount[a[i].Team] <7 && total<=(100-a[i].Credits)) 
   {
    selectPlayer(i);
    }
  }

function selectTeam(a,...input)
{
input[0] = input[0]<1 || input[0]==undefined ? 1: input[0];
input[1] = input[1]<3 || input[1]==undefined ? 3: input[1];
input[2] = input[2]<1 || input[2]==undefined ? 1: input[2];
input[3] = input[3]<3 || input[3]==undefined ? 3: input[3];

if(input[0]+input[1]+input[2]+input[3] <=11)
{
while(playerCount<(input[0]+input[1]+input[2]+input[3]))
{
  index=Math.floor(Math.random()*(a.length));

  prefilter(index,input[0],'WK');
  prefilter(index,input[1],'BAT');
  prefilter(index,input[2],'ALL');
  prefilter(index,input[3],'BOW');
}

while(playerCount<11)
{
    index=Math.floor(Math.random()*(a.length));

    if(total<=(100-a[index].Credits) && teamCount[a[index].Team] <7)
    {
       selectPlayer(index);
    }
}

printResult();
}
else
{
  console.log("Players more than 11");
}
}

function printResult()
{
let b1 = b.filter(i => i.Skill === ability.WK);
console.log(ability.WK);
b1.sort((a,b) => b.Credits - a.Credits);
b1.forEach(i => console.log(i.Name));
let b2 = b.filter(i => i.Skill === ability.BAT);
console.log(ability.BAT);
b2.sort((a,b) => b.Credits - a.Credits);
b2.forEach(i => console.log(i.Name));
let b3 = b.filter(i => i.Skill === ability.ALL);
console.log(ability.ALL);
b3.sort((a,b) => b.Credits - a.Credits);
b3.forEach(i => console.log(i.Name));
let b4 = b.filter(i => i.Skill === ability.BOW);
console.log(ability.BOW);
b4.sort((a,b) => b.Credits - a.Credits);
b4.forEach(i => console.log(i.Name));

console.log('');
console.log('CAPTAIN');
let j=Math.floor(Math.random()*(b.length));
let n= b[j];
console.log(n.Name);
console.log('VICE CAPTAIN');
b.splice(j,1);
let j1=Math.floor(Math.random()*(b.length));
n= b[j1];
console.log(n.Name);
}

selectTeam(a);

