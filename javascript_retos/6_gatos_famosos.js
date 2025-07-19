let cats = [
    {
      name: "Mimi",
      followers: [320, 120, 70]
    },
    {
      name: "Milo",
      followers: [400, 300, 100, 200]
    },
    {
      name: "Gizmo",
      followers: [250, 750]
    }
  ]

function findFamousCats(cats){
    let followers = [];
    let mostFamousCats = [];
    
    for(const cat of cats){
        const sum = cat.followers.reduce(function(accumulator, number){
            return accumulator + number;
        }, 0);
        followers.push(sum);
    }

    let maxFollowers = Math.max(...followers);

    for(const cat of cats){
        const sum = cat.followers.reduce(function(accumulator, number){
            return accumulator + number;
        }, 0);
        if(sum === maxFollowers){
            mostFamousCats.push(cat.name);
        }
    }

    return(mostFamousCats);
}

console.log(findFamousCats(cats));