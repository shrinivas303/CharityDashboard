export interface DonorElement {
    name: string;
    date: string;
    amount: number;
}

export interface ExpenseElement {
    date: string;
    expense: number;
    details: string;
}

export interface DashboradDetail{
    TotalRecived: number,
    NoOfContribution:number,
    AvgPerPerson:number,
    TotalFood:number,
    TotalLiquid:number,
    TotalDrive:number,
    RationkitsGiven:number
}