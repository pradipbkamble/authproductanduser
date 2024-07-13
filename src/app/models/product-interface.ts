import { Observable } from "rxjs";


export interface Iproduct{
    pId: string;
    pname: string;
    feature: string;
    pstatus: "Delivered"|"InProcess"|"Dispatched";
    canraturn: string;
}



export interface Candeactivate{
    canDeactive:()=>boolean|Promise<boolean>|Observable<boolean>
}