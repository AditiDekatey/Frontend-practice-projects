const users = [
  { id: 101, name: " Ada ", scores: [10, 20, 30] },
  { id: 102, name: "", scores: [5, 0, 15] },
  { id: 103, name: null, scores: [7, 14] },
  { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },
  { id: 105, name: "Grace", scores: [] }
];
function normalizeName(value) {
    if (value ===null || value === undefined || (typeof (value) == "string" && value.trim() === ""))
        return "Unknown"
    else return value.trim()
}

function averageScore(scores) {
    if (!Array.isArray(scores)) {
        throw new Error('scores must be an array')
    } else if (scores.length == 0) {
        return null
    } else {
        let i,avgScore = 0
        for (let i = 0; i < scores.length; i++){
            avgScore = avgScore + scores[i]
        }
        avgScore = avgScore / scores.length
        return Math.round(avgScore*100)/100
    }
}
function buildUserSummary(user) {
    
    if (!(typeof(user) =='object') || user == null ) {
        throw new Error('user must be an object')
    } else return {
        id:user.id,
        name: normalizeName(user["name"]),
        scoreCount: (!Array.isArray(user.scores) || user.scores.length==0)?0:user.scores.length,
        avg:(!Array.isArray(user.scores) || user.scores.length==0)?null:averageScore(user.scores)
    }
}
function summarizeUsers(userArray) {
    if (!Array.isArray(userArray)) {
        throw new Error('userArray must be an array')
    }
    return userArray.map(buildUserSummary)
}
function safeSummarizeUsers(userArray) {
    try {       
        return{ok:true, data:summarizeUsers(userArray)}
    
    } catch (err){
        return {ok:false, error: `<${err.message}>`}
    }
}
function getUserDisplayNameById(userArray, id) {
    if (!Array.isArray(userArray)) {
         throw new Error("userArray must be an array") 
    } else if (typeof(id) != "number") {
        throw new Error("id must be a number")
    }
    let found = userArray.find(e=>e.id==id)
    if (found) {
        return normalizeName(found.name)
    }else throw new Error("user not found")
}
 
console.log(normalizeName(" Ada "));               // expected:Ada   
console.log(normalizeName("  "));                  // expected:Unknown
console.log(normalizeName(null));                  // expected:Unknown
console.log(averageScore([10, 20, 30]));           // expected:20
console.log(averageScore([]));                     // expected:null
console.log(buildUserSummary(users[0]));           // expected:{ id: 101, name: 'Ada', scoreCount: 3, avg: 20 }
console.log(buildUserSummary(users[3]));           // expected:{ id: 104, name: 'Unknown', scoreCount: 4, avg: 3 }
console.log(safeSummarizeUsers(users).ok);         // expected:true
console.log(getUserDisplayNameById(users, 105));   // expected:Grace
console.log(safeSummarizeUsers("not an array"));   // expected: { ok: false, error: '<Error: userArray must be an array>'



//PART C

// 1. typeof undefined = "undefined"
// 2. object
// 3. "" is used to initialize a variable, while null and undefined indicate intentionally empty values or uninitialized variables.In this example, "" is not null or undefined , and also requires trimming to check the empty string
