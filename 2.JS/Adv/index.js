// Async-await >> Promise Chain >>Callback Hell

function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data", dataId);
            resolve("success");
            }, 3000);              
    });
}

// Callback Hell
getData (1, ()=>{
    console.log("getting data2..");
    getData(2, ()=>{
        console.log("getting data3..");
        getData(3)
    })
});


//Promise Chain

console.log("getting Data1..");
getData(1)
.then((res)=>{
    console.log("getting Data2..");
    return getData(2);
})
.then((res)=>{
    console.log("getting Data3..");
    return getData(3);
})
.then((res)=>{
    console.log(res);
});


//Async-Await

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}