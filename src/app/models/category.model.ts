
interface Teams {
    teamA:string;
    teamB:string;
    teamA_point:string;
    teamB_point:string
}

interface Match {
    teams:Teams;
    on_going:boolean;
    date:string;
    time:string
  }
  interface Series {
    name: string;
    matchList?: Match[];
  }
 export  interface Category {
    name:string;
    icon:string;
    seriesList:Series[]
  }
  