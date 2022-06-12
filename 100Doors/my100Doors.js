const _ = require('lodash');
var doors;


class Doors {

    constructor(){
        doors=[];
        
        for(var i=0; i<100; i++){
            doors.push(new Boolean(true));
        }
    };

    Pass(num){

        var status="";

        for(var i=0; i<doors.length; i=i+num){
            if(doors[i]){
                status+="@";
                doors[i]=false;
            }else{
                status+="#";
                doors[i]=true;
            }
        }

        return status;


    }
}
module.exports = Doors;
