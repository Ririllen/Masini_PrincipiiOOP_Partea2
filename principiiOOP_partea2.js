// Pentru clasa Mașină creați o clasă copil VehiculElectric ce va avea în plus proprietatea baterie (procentaj).
// Creați getter și setter pentru fiecare proprietate. Toate proprietățile vor fi private.
// Pentru clasa Mașină, proprietățile vor fi protected
// Creați o metodă accelerează ce crește viteza cu 10 km/h și scade bateria cu 5%.
// Creați o metodă ce descrie mașina: Tesla albă, fabricată în 2018, merge cu 120 km/h și are 40% baterie.
// Creați o metodă încărcare ce va crește bateria cu 10%.
// Creați un UI care va conține un form pentru un vehicul. Adăugați un buton radio dacă vehiculul este electric.
// Adăugați câte un buton pentru accelerare, frânare și, eventual, încărcare.


class Car {
    _model;
    _culoare;
    _anFabricatie;
    _viteza;

    get model() {
        return this._model;
    }

    set model(model) {
        this._model = model;
    }    

    get culoare() {
        return this._culoare;
    }

    set culoare(culoare) {
        this._culoare = culoare;
    }   
    
    get anFabricatie() {
        return this._anFabricatie;
    }

    set anFabricatie(anFabricatie) {
        this._anFabricatie = anFabricatie;
    }
    
    get viteza() {
        return this._viteza;
    }

    set viteza(viteza) {
        this._viteza = viteza;
    }     

    accelereaza(){
        this._viteza += 10;
    }
    franeaza(){
        this._viteza -= 10;
    }
    descrie(){
        return `${this._model} ${this._culoare}, fabricat in ${this._anFabricatie}, viteza initiala: ${this._viteza} km/h.`;
    }
}

class VehiculElectric extends Car {
    #baterie = 100;
    constructor(model, culoare, anFabricatie, viteza) {
        super(model, culoare, anFabricatie, viteza);
        // this.#baterie = 100;
    }   

    get baterie() {
        return this.#baterie;
    }

    set baterie(baterie) {
        this.#baterie = baterie;
    }    
    
    accelereaza(){
        this._viteza += 10;

        if (this.#baterie - 5 < 0){
            this.#baterie = 0;
        } else {
            this.#baterie -= 5;
        }        
    }        

    descrie(){
        return `${this._model} ${this._culoare}, fabricat in ${this._anFabricatie}, viteza initiala: ${this._viteza} km/h, si are ${this.#baterie}% baterie`;
    }    

    incarcare(){
        if (this.#baterie + 10 <= 100){
            this.#baterie += 10;
        } else {
            this.#baterie = 100;
        }
    }   
}

// const masinaElectrica = new VehiculElectric("Toyota","Alba",2015,80);
// const masina = new Car("Nissan","Rosie",2020,70);

// masina.accelereaza();
// console.log(masina.descrie());


// masinaElectrica.accelereaza();
// masinaElectrica.incarcare();
// console.log(masinaElectrica.descrie());


// const masina = new Car();
// masina.model = "Renault";
// masina.culoare = "albastra";
// masina.anFabricatie = "2005";
// masina.viteza = 100;
// console.log(masina);

// masina.accelereaza();
// console.log(masina.descrie());


// const masinaElectrica = new VehiculElectric();
// masinaElectrica.model = "Renault Zoe";
// masinaElectrica.culoare = "gri";
// masinaElectrica.anFabricatie = "2020";
// masinaElectrica.viteza = 70;
// console.log(masinaElectrica);

// masinaElectrica.accelereaza();
// // masinaElectrica.incarcare();
// masinaElectrica.accelereaza();
// console.log(masinaElectrica.descrie());



const nCar = new Car(),
      eCar = new VehiculElectric();

let model = document.getElementById('model'),
    color = document.getElementById('color'),
    year = document.getElementById('year'),
    speed = document.getElementById('speed'),
    btnAccelereaza = document.querySelector('#accelerate'),
    btnFraneaza = document.querySelector('#frana'),
    btnIncarca = document.querySelector('#charge'),
    radio1 = document.getElementById('electric'),
    radio2 = document.getElementById('non-electric');

let butonApasat = false;

btnAccelereaza.addEventListener('click', () => {

    if (radio1.checked) {

        if (butonApasat === false){
            butonApasat = true;

            eCar.model = model.value;
            eCar.culoare = color.value;
            eCar.anFabricatie = year.value;
            eCar.viteza = Number(speed.value);

            eCar.accelereaza();
            document.querySelector('#result').textContent = eCar.descrie();  
        
        } else {
            eCar.accelereaza();
            document.querySelector('#result').textContent = eCar.descrie();  
        }
        radio1.disabled = true;      
        radio2.disabled = false; 

    } else {
        if (butonApasat === false){
            butonApasat = true;

            nCar.model = model.value;
            nCar.culoare = color.value;
            nCar.anFabricatie = year.value;
            nCar.viteza = Number(speed.value);

            nCar.accelereaza();
            document.querySelector('#result').textContent = nCar.descrie();       
        } else {
            nCar.accelereaza();
            document.querySelector('#result').textContent = nCar.descrie();  
        }
        radio2.disabled = true; 
        radio1.disabled = false;  
    }

    
})


btnFraneaza.addEventListener('click', () => {

    if (radio1.checked) {

        // if (butonApasat === false){
        //     butonApasat = true;

        //     eCar.model = model.value;
        //     eCar.culoare = color.value;
        //     eCar.anFabricatie = year.value;
        //     eCar.viteza = Number(speed.value);

        //     eCar.accelereaza();
        //     document.querySelector('#result').textContent = eCar.descrie();  
        
        // } else {
        //     eCar.accelereaza();
        //     document.querySelector('#result').textContent = eCar.descrie();  
        // }


        
        radio1.disabled = true;      
        radio2.disabled = false; 

    } else {
        if (butonApasat === false){
            butonApasat = true;

            nCar.model = model.value;
            nCar.culoare = color.value;
            nCar.anFabricatie = year.value;
            nCar.viteza = Number(speed.value);

            nCar.franeaza();
            document.querySelector('#result').textContent = nCar.descrie();       
        } else {
            nCar.franeaza();
            document.querySelector('#result').textContent = nCar.descrie();  
        }
        radio2.disabled = true; 
        radio1.disabled = false;  
    }
})

btnIncarca.addEventListener('click', () => {

    if (radio1.checked) {

        if (butonApasat === false){
            butonApasat = true;

            eCar.model = model.value;
            eCar.culoare = color.value;
            eCar.anFabricatie = year.value;
            eCar.viteza = Number(speed.value);

            eCar.incarcare();
            document.querySelector('#result').textContent = eCar.descrie();  
        
        } else {
            eCar.incarcare();
            document.querySelector('#result').textContent = eCar.descrie();  
        }
        radio1.disabled = true;      
        radio2.disabled = false; 

    } else {
        // if (butonApasat === false){
        //     butonApasat = true;

        //     nCar.model = model.value;
        //     nCar.culoare = color.value;
        //     nCar.anFabricatie = year.value;
        //     nCar.viteza = Number(speed.value);

        //     nCar.franeaza();
        //     document.querySelector('#result').textContent = nCar.descrie();       
        // } else {
        //     nCar.franeaza();
        //     document.querySelector('#result').textContent = nCar.descrie();  
        // }
        
        radio2.disabled = true; 
        radio1.disabled = false;  
    }
})


radio1.addEventListener('click', () => {
    model.value = "";
    color.value = "";
    year.value = "";
    speed.value = "";
    eCar.baterie = 100;

    btnFraneaza.disabled = true;
    btnIncarca.disabled = false;
    butonApasat = false;
})

radio2.addEventListener('click', () => {
    model.value = "";
    color.value = "";
    year.value = "";
    speed.value = "";

    btnFraneaza.disabled = false;
    btnIncarca.disabled = true;
    butonApasat = false;
})














