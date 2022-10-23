

// CRUD w/ MOCK API GUIDE: https://docs.google.com/presentation/d/1hd64pAnilrKa2VBMedSANqh3HKX9UzG-/edit#slide=id.g13c17a834ff_0_6

const URL = "https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers"


//CREATE

function createFlowerType(flowerGroup){
    const URL = "https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers"

    //console.log("createFlowerGroup flowerGroup", flowerGroup);
//return $.post(URL, JSON.stringify(flowerGroup), x => console.log(x, "dududu"));


   return $.ajax({
        url: URL,
        data: JSON.stringify(flowerGroup),
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        crossDomain: true,
    });
}

//READ

function getFlowerList(){
    const URL = "https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers"
    console.log("return flower data", URL);
    return $.get(URL);  
}

//UPDATE

function updateFlowerGroup(flowerGroupData){
    console.log("createFlowersType", flowerGroupData);
    let newFlowersName = flowersGroupData.flowersName;       
    //console.log("updateFlowerGroup", newFlowersName);
    let flowerID = parseInct(flowersTypeData.id);
    //console.log("updateFlowerGroup ID", flowerTypeID);
        return $.ajax({
            url: `${URL/flowersId}`,
            dataType: "json",
            data: JSON.stringify({flowerType: newFlowerType}),
            contentType: "application/json",
            crossDomain:true,
            type:"PUT",
        });
}

//DELETE

function deleteFlowerType(id){
    const URL = "https://635206dcdfe45bbd55cd44e0.mockapi.io/W12P/flowers/id"
    console.log("deleteFlowerGroup ID", parseInt(id));
    return $.ajax({
        url: URL,
        crossDomain:true,
        data: JSON.stringify(id),
        type: "DELETE",
        contentType: "application/json",
        dataType: "json",
    });
}

//createFlowerType();

//createFlowerType({"flowerType":"flowerType 50","quantity":50,"color":"green",
//          "salePrice":"50.00","id":"50","\"flowerGroup\"":""});

console.log(deleteFlowerType({"flowerType":"flowerType 50","quantity":50,"color":"green",
"salePrice":"50.00","id":"50","\"flowerGroup\"":""}));

//console.log(flowerGroup)

console.log(getFlowerList());



