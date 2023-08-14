interface Item {
    pointA:string;
    pointB:string
}

export interface Match {
    teamA:string;
    teamB:string;
    tournament_type:string;
    b_point:string;
    f_point:string;
    m_point:string;
    b_f_m:boolean;
    items:Item[];
    upcoming:boolean;
    date:string;
    time:string;
    category:string
}