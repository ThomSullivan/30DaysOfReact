console.log('sanity')
// LEVEL 1
dog = {}
console.log(dog)
dog.name = 'Spot'
dog.legs = 4
dog.color = 'Black and White'
dog.age = 4
dog.bark = ()=>{
    return 'Woof Woof'
}
console.log(dog)
console.log(dog.bark())
dog.breed = 'Pug'
dog.getDogInfo = () =>{
    for (const i of Object.keys(dog)){
        console.log(i, dog[i])
    }
}
dog.getDogInfo()

//LEVEL 2
mostSkills = 0
mostSkilled = ''
loggedInCount = 0
highScoreUsers = 0
for (const i of Object.keys(users)){
    if(users[i].skills.length>mostSkills){
        mostSkills = users[i].skills.length
        mostSkilled = i
    }
    if(users[i].isLoggedIn == true){
        loggedInCount ++
    }
    if(users[i].points >= 50){
        highScoreUsers ++
    }
}
console.log(mostSkilled, mostSkills)
console.log(`There are ${loggedInCount} users logged in.\n${highScoreUsers} users have more than 49 points.`)
//LEVEL 3
const personAccount = {
    firstName : 'John',
    lastName : 'Smith',
    incomes : {
                work:35000,
                contracts:15000
              },
    expenses : {
                rent:15000,
                food:5000,
                phone:500
                },
    totalIncome: function(){
                    return Object.values(this.incomes).reduce((partialSum, a) => partialSum + a, 0)
                },
    totalExpenses: function(){
                    return Object.values(this.expenses).reduce((partialSum, a) => partialSum + a, 0)
                },
    accountBalance: function(){
                    return (this.totalIncome() - this.totalExpenses())
                },
    accountInfo: function(){
                    return `Account holder: ${this.firstName} ${this.lastName}\nBalance: ${this.accountBalance()}`
                }
}
console.log(personAccount.accountInfo())

function userIdGenerator(){
    return Math.random().toString(36).substring(2,9)
}
function showDateTime(){
    const now = new Date()
    const year = now.getFullYear()
    let month = now.getMonth()
    month = ('0'+ month).slice(-1)
    let date = now.getDate()
    date = ('0' + date).slice(-2)
    let readableHours = now.getHours()
    readableHours = ("0" + readableHours).slice(-2)
    let readableMinutes = now.getMinutes()
    readableMinutes = ('0'+ readableMinutes).slice(-2)
    return `${month+1}/${date}/${year} ${readableHours}:${readableMinutes}`
}


const signUp = (username, email, password) => {
    console.log(levelThreeUsers)
    levelThreeUsers.push({
        _id: userIdGenerator(),
        username : username,
        email : email,
        password : password,
        createdAt : showDateTime(),
        isLoggedIn : false

    })
}

signUp('Thom','Thom@thom.com','password')
console.log(Object.values(levelThreeUsers))

function signIn(username, password){
    
    var result = levelThreeUsers.find(item => item.username === username)
    if (typeof result == 'undefined'){
        return 'Unknown login or password'
    } else if (result.password === password){
        return `${username} logged in successfully`
    } else {
    return 'Unknown login or password'
    }
}   
console.log(signIn('Asa','123111'))
console.log(signIn('Asab','123111'))
console.log(signIn('Asab','123456'))
