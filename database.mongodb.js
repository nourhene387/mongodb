/*****************Create the Database ******** */
use ('contact')
db.createCollection("contactlist")
/*********************Insert Documents********* */
db.contactlist.insertMany([
    { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
    { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
    { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
    { lastName: "Alex", firstName: "brown", age: 4 },
    { lastName: "Denzel", firstName: "Washington", age: 3 }
 ])
/***************************Display All Contacts***************** */ 
db.contactlist.find()
/**************Display Information About One Person Using Their ID******************* */
const personId = ObjectId( "67059ef1c243136819761f33");
db.contactlist.find({ _id: personId })
/************** Display Contacts with Age Greater Than 18**************** */
db.contactlist.find({ age: { $gt: 18 } })


/*******************************Age > 18 and Name Containing "ah"******** */
db.contactlist.find({ age: { $gt: 18 }, firstName: /br/i })
/******************************* Update Contact's**************** */
db.contactlist.updateOne(
    { firstName: "Seif", lastName: "Kefi" }, 
    { $set: { firstName: "Anis", lastName: "Kefi" } } )          

 db.contactlist.find()
 /************************* */ 
 db.contactlist.deleteMany({ age: { $lt: 5 } })
 db.contactlist.find()
 
 