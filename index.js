let sporsmal = [
    {
        sporsmal: "Hva er dette?",
        alt1: "Minne",
        alt2: "Hovedkort",
        alt3: "SSD",
        alt4: "CPU",
        alt5: "neste spørsmål",
        riktig: 1,
        svart: false,
    },
    {
        sporsmal: "hva står SSD for?",
        alt1: "1, Ane er handy",
        alt2: "Minst et par. hun er litt vimsete",
        alt3: "har ikke noe å si. klarer det ikke uansett",
        alt4: "trippel espresso",
        alt5: "neste spørsmål",
        riktig: 3,
        svart: false
    },
    {
        sporsmal: "hvor mange G-er trenger man for å bytte en lyspære?",
        alt1: "1, Jakob er gud",
        alt2: "Minst et par. han er litt fjern",
        alt3: "har ikke noe å si. klarer det uansett",
        alt4: "vær forsiksiktig, før han stjeler lyspæra",
        riktig: 1,
        svart: false,
    },
    {
        sporsmal: "Hihihihi",
        alt1: "Halvor veeeet hva som skjer",
        alt2: "Faen ass damn",
        alt3: "har ikke noe å si. klarer det uansett",
        alt4: "vær forsiksiktig, før han stjeler lyspæra",
        riktig: 1,
        svart: false,
    }
]
let poengene = 0
let currentSpm = 0
let isWaiting = false
console.log("hey")

function init() {
    document.getElementById("alt1").innerText = sporsmal[currentSpm].alt1
    document.getElementById("alt2").innerText = sporsmal[currentSpm].alt2
    document.getElementById("alt3").innerText = sporsmal[currentSpm].alt3
    document.getElementById("alt4").innerText = sporsmal[currentSpm].alt4
    document.getElementById("spm").innerText = sporsmal[currentSpm].sporsmal
    document.getElementById("poeng").innerText = "Poeng:" + poengene


}

function handleAnswer(alt) {
    if (isWaiting) return
    if (currentSpm == sporsmal.length -1){
        quiz()
        console.log("hvaa")
        return
    }
    /*
    1. se om svaret er riktig
    2. gjøre boksen rød eller grønn basert på svaret
    3. bytte spørsmål
    */
    console.log("he")

    if (alt == sporsmal[currentSpm].riktig &&
        !sporsmal[currentSpm].svart
    ) {
        const newalt = document.getElementById("alt" + alt.toString())
        newalt.innerText = "Riktig!"
        newalt.className = "bg-green-700 flex p-4 rounded-md h-40 w-96 items-center justify-center"

    

        const spm = document.getElementById("spm")

        console.log(poeng)
        console.log(sporsmal[currentSpm].svart)


        if (!sporsmal[currentSpm].svart) {
            poengene += 1

        }
        document.getElementById("poeng").innerText = "Poeng:" + poengene
        sporsmal[currentSpm].svart = true;


        isWaiting = true
        setTimeout(() => {
            currentSpm++;
            spm.innerText = sporsmal[currentSpm].sporsmal
            document.getElementById("alt1").innerText = sporsmal[currentSpm].alt1
            document.getElementById("alt2").innerText = sporsmal[currentSpm].alt2
            document.getElementById("alt3").innerText = sporsmal[currentSpm].alt3
            document.getElementById("alt4").innerText = sporsmal[currentSpm].alt4
            alt1.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt2.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt3.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt4.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            isWaiting = false

        }, 1000);



    }
    else if (alt == sporsmal[currentSpm].neste)
        nesteSpm(0)





    else if (alt == sporsmal[currentSpm].forrige) {
        forrigeSpm(0)
        console.log("yoo")
    }



    else {
        console.log("hei")
        let newalt = document.getElementById("alt" + alt.toString())
        newalt.innerText = "Feil! Noob"
        newalt.className = "bg-red-700 flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
    }




}


function nesteSpm() {

    if (currentSpm + 1 >= sporsmal.length)
        setSpm(0)
    else setSpm(currentSpm + 1)

}

function forrigeSpm() {

    if (currentSpm - 1 < 0)
        setSpm(sporsmal.length - 1)
    else setSpm(currentSpm - 1)

}

function setSpm(spmID) {
    const spm = document.getElementById("spm")

    setTimeout(() => {


        currentSpm = spmID;

        spm.innerText = sporsmal[currentSpm].sporsmal
        document.getElementById("alt1").innerText = sporsmal[currentSpm].alt1
        document.getElementById("alt2").innerText = sporsmal[currentSpm].alt2
        document.getElementById("alt3").innerText = sporsmal[currentSpm].alt3
        document.getElementById("alt4").innerText = sporsmal[currentSpm].alt4
        alt1.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
        alt2.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
        alt3.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
        alt4.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"

        if (sporsmal[currentSpm].svart != null) {
            console.log("g er er tulling", sporsmal[currentSpm].svart)
        }

    }, 200);
}

function quiz() {
        let sko = document.getElementById("quizen")
        let hore = document.getElementById("finishPage")
        let slutt = document.getElementById("sluttPoeng")
        sko.innerHTML = ""
        hore.className = "z-20 flex h-screen w-screen bg-blue-300 justify-center items-center"
        slutt.innerHTML= "du fikk " + poengene + " poeng"

    
    
}