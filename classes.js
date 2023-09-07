class School {
    constructor(name, requiredClasses, recommenedClasses){
        this.name =name;
        this.recommenedClasses = recommenedClasses;
        this.requiredClasses = requiredClasses;
    }
    equal(a,b){
        if(a.length !== b.length){
            return false;
        }
        for(let i =0; i<a.length; i++){
            if(a[i] !== b[i]){
                return false;
            }
        }
        return true;
    }

    requirementsFufilled(schedule){
        if(this.equal(schedule, this.requiredClasses)){
            return true;
        }
        else{
            return false;
        }
    }
    recommendedFufilled(schedule){
        if(this.equal(schedule, this.recommendedFufilled)){
            return true;
        }
        else{
            return false;
        }
    }
}

const ucla = new School("UCLA", ["math104", "math105"], ["engr122", "engr156"]);

console.log(ucla.recommendedFufilled(['engr122', 'engr156']))