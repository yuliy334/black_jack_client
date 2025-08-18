


function dillerPoints(dilerCards?: string):string {
    if(dilerCards == "jack" || dilerCards=="queen"||dilerCards=="king"){
        return "10";
    }
    else if(dilerCards == "ace"){
        return "11";
    }
    else{
        return dilerCards?? "";
    }
}

export default dillerPoints;
