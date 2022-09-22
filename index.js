let sporsmal = [
    {
        sporsmal: "Hva er en gris?",
        alt1: "et dyr",
        alt2: "en gjenstand",
        alt3: "en feit bil",
        alt4: "et menneskenavn",
        alt5: "neste spørsmål",
        riktig: 1,
        svart: null,
    },
    {
        sporsmal: "hvor mange Aner trenger du for å bytte en lyspære?",
        alt1: "1, Ane er handy",
        alt2: "Minst et par. hun er litt vimsete",
        alt3: "har ikke noe å si. klarer det ikke uansett",
        alt4: "trippel espresso",
        alt5: "neste spørsmål",
        riktig: 3,
        svart: null
    },
    {
        sporsmal: "hvor mange G-er trenger man for å bytte en lyspære?",
        alt1: "1, Jakob er gud",
        alt2: "Minst et par. han er litt fjern",
        alt3: "har ikke noe å si. klarer det uansett",
        alt4: "vær forsiksiktig, før han stjeler lyspæra",
        riktig: 1
    },
    {
        sporsmal: "Hihihihi",
        alt1: "Halvor veeeet hva som skjer",
        alt2: "Faen ass damn",
        alt3: "har ikke noe å si. klarer det uansett",
        alt4: "vær forsiksiktig, før han stjeler lyspæra",
        riktig: 1,
        svart: null,
    }
]
let poengene = 0
let currentSpm = 0
let ikkeDobbel = 0

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
    /*
    1. se om svaret er riktig
    2. gjøre boksen rød eller grønn basert på svaret
    3. bytte spørsmål
    */
    console.log("he")
    document.getElementById("alt" + sporsmal[currentSpm].riktig).ariaDisabled = false

    if (alt == sporsmal[currentSpm].riktig) {
        document.getElementById("alt" + sporsmal[currentSpm].riktig).ariaDisabled = true
        const newalt = document.getElementById("alt" + alt.toString())
        sporsmal[currentSpm].svart = alt
        newalt.innerText = "Riktig!"
        newalt.className = "bg-green-700 flex p-4 rounded-md h-40 w-96 items-center justify-center"

        const spm = document.getElementById("spm")



        console.log(poeng)
        
        ikkeDobbel +=1

        if (ikkeDobbel === 1){
            poengene += 1
        }
        document.getElementById("poeng").innerText = "Poeng:" + poengene

        console.log(ikkeDobbel)

        setTimeout(() => {
            currentSpm += 1

            spm.innerText = sporsmal[currentSpm].sporsmal
            document.getElementById("alt1").innerText = sporsmal[currentSpm].alt1
            document.getElementById("alt2").innerText = sporsmal[currentSpm].alt2
            document.getElementById("alt3").innerText = sporsmal[currentSpm].alt3
            document.getElementById("alt4").innerText = sporsmal[currentSpm].alt4
            alt1.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt2.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt3.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            alt4.className = "flex p-4 rounded-md h-40 w-96 items-center justify-center shadow-md hover:shadow-2xl"
            ikkeDobbel = 0

        }, 1000);



    }
    else if (alt == sporsmal[currentSpm].neste)
            nesteSpm(0)





    else if (alt == sporsmal[currentSpm].forrige) 
        {
            forrigeSpm(0)
                console.log("yoo")
        }


        
    else {
        console.log("hei")
        const newalt = document.getElementById("alt" + alt.toString())
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

        if (sporsmal[currentSpm].svart != null){
console.log("g er er tulling", sporsmal[currentSpm].svart)
        }

    }, 200);
}
