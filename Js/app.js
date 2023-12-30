//@author Paul L. Hernandez <back2bytes@gmail.com> //
//@link https://github.com/onenada/ArmaTuPc //

// ------------------- Variables ---------------------- //
var preciosObj;
var totalObj;
var total;
// Variables de Motherboard //
var motherItem;
var selectMother;
var precioMother;
var imgMother;
var motherShopC;
var objCartMother;
var motherBoardBtn;
// Variables de Procesador //
var procItem;
var selectProc;
var precioProc;
var imgProc;
var procShopC;
var objCartProc;
var procesorBtn;
// Variables de Cooler //
var coolerITem;
var selectCooler;
var precioCooler;
var imgCooler;
var coolerShopC;
var objCartCooler;
var coolerBtn;
// Variables de Ram //
var ramITem;
var selectRam;
var precioRam;
var imgRam;
var ramShopC;
var objCartRam;
var ramBtn;
// Variables de GPU //
var gpuITem;
var selectGpu;
var precioGpu;
var imgGpu;
var gpuShopC;
var objCartGpu;
var gpuBtn;
// Variables de Storage //
var storageITem;
var selectStorage;
var precioStorage;
var imgStorage;
var storageShopC;
var objCartStorage;
var storageBtn;
// Variables de PSU //
var psuITem;
var selectPsu;
var precioPsu;
var imgPsu;
var psuShopC;
var objCartPsu;
var psuBtn;

// ------------------- Funciones ---------------------- //

//Funciones de Motherboard//

//Seleccionar motherboard de la lista de mothers disponibles//
function selectedMother(){
    const motherSelect = selectMother.options[selectMother.selectedIndex];
    precioMother.value=motherSelect.getAttribute('data-precio');
    imgMother.src=motherSelect.getAttribute('data-imagen');
}
//Captura de mother seleccionada para mover hacia el cesto//
function moviendoMother(event){
    motherItem=event.target;
}
//Cambio de los valores del cesto a la mother seleccionada//
function cambiarMother(event){
    event.preventDefault();
    motherShopC.src=motherItem.src;
    ObjCartMother.value=precioMother.value;
}
//Botón de reset para el modulo de motherboard//
function resetMother(){
    motherShopC.src='Media/Icons/shopcart.png';
    ObjCartMother.value='Vacio';
}

//Funciones de Procesador//

//Seleccionar procesador de la lista de procesadores disponibles//
function selectedProcesor(){
    const procesorSelect = selectProc.options[selectProc.selectedIndex];
    precioProc.value=procesorSelect.getAttribute('data-precio');
    imgProc.src=procesorSelect.getAttribute('data-imagen');
}
//Captura de cooler seleccionado para mover hacia el cesto//
function moviendoProc(event){
    procItem=event.target;
}
//Cambio de los valores del cesto al procesador seleccionada//
function cambiarProc(event){
    event.preventDefault();
    procShopC.src=procItem.src;
    ObjCartProc.value=precioProc.value;
}
//Botón de reset para el modulo de procesador//
function resetProcesor(){
    procShopC.src='Media/Icons/shopcart.png';
    ObjCartProc.value='Vacio';
}

//Funciones de Cooler//

//Seleccionar cooler de la lista de coolers disponibles//
function selectedCooler(){
    const coolerSelect = selectCooler.options[selectCooler.selectedIndex];
    precioCooler.value=coolerSelect.getAttribute('data-precio');
    imgCooler.src=coolerSelect.getAttribute('data-imagen');
}
//Captura de cooler seleccionado para mover hacia el cesto//
function moviendoCooler(event){
    coolerItem=event.target;
}
//Cambio de los valores del cesto al cooler seleccionada//
function cambiarCooler(event){
    event.preventDefault();
    coolerShopC.src=coolerItem.src;
    ObjCartCooler.value=precioCooler.value;
}
//Botón de reset para el modulo de cooler//
function resetCooler(){
    coolerShopC.src='Media/Icons/shopcart.png';
    ObjCartCooler.value='Vacio';
}

//Funciones de Ram//

//Seleccionar ram de la lista de memorias ram disponibles//
function selectedRam(){
    const ramSelect = selectRam.options[selectRam.selectedIndex];
    precioRam.value=ramSelect.getAttribute('data-precio');
    imgRam.src=ramSelect.getAttribute('data-imagen');
}
//Captura de ram seleccionada para mover hacia el cesto//
function moviendoRam(event){
    ramItem=event.target;
}
//Cambio de los valores del cesto a la ram seleccionada//
function cambiarRam(event){
    event.preventDefault();
    ramShopC.src=ramItem.src;
    ObjCartRam.value=precioRam.value;
}
//Botón de reset para el modulo de ram//
function resetRam(){
    ramShopC.src='Media/Icons/shopcart.png';
    ObjCartRam.value='Vacio';
}
//Funciones de Gpu//

//Seleccionar GPU de la lista de GPUs disponibles//
function selectedGpu(){
    const gpuSelect = selectGpu.options[selectGpu.selectedIndex];
    precioGpu.value=gpuSelect.getAttribute('data-precio');
    imgGpu.src=gpuSelect.getAttribute('data-imagen');
}
//Captura de gpu seleccionada para mover hacia el cesto//
function moviendoGpu(event){
    gpuItem=event.target;
}
//Cambio de los valores del cesto a la gpu seleccionada//
function cambiarGpu(event){
    event.preventDefault();
    gpuShopC.src=gpuItem.src;
    ObjCartGpu.value=precioGpu.value;
}
//Botón de reset para el modulo de gpu//
function resetGpu(){
    gpuShopC.src='Media/Icons/shopcart.png';
    ObjCartGpu.value='Vacio';
}
//Funciones de Storage//

//Seleccionar disco de almacenamiento de la lista de almacenamientos disponibles//
function selectedStorage(){
    const storageSelect = selectStorage.options[selectStorage.selectedIndex];
    precioStorage.value=storageSelect.getAttribute('data-precio');
    imgStorage.src=storageSelect.getAttribute('data-imagen');
}
//Captura de almacenamiento seleccionada para mover hacia el cesto//
function moviendoStorage(event){
    storageItem=event.target;
}
//Cambio de los valores del cesto al storage seleccionada//
function cambiarStorage(event){
    event.preventDefault();
    storageShopC.src=storageItem.src;
    ObjCartStorage.value=precioStorage.value;
}
//Botón de reset para el modulo de storage//
function resetStorage(){
    storageShopC.src='Media/Icons/shopcart.png';
    ObjCartStorage.value='Vacio';
}
//Funciones de PSU//

//Seleccionar PSU de la lista de PSUs disponibles//
function selectedPsu(){
    const psuSelect = selectPsu.options[selectPsu.selectedIndex];
    precioPsu.value=psuSelect.getAttribute('data-precio');
    imgPsu.src=psuSelect.getAttribute('data-imagen');
}
//Captura de PSU seleccionada para mover hacia el cesto//
function moviendoPsu(event){
    psuItem=event.target;
}
//Cambio de los valores del cesto al PSU seleccionada//
function cambiarPsu(event){
    event.preventDefault();
    psuShopC.src=psuItem.src;
    ObjCartPsu.value=precioPsu.value;
}
//Botón de reset para el modulo de PSU//
function resetPsu(){
    psuShopC.src='Media/Icons/shopcart.png';
    ObjCartPsu.value='Vacio';
}
//Funcion para sumar cada objeto seleccionado en el cesto//

function sumTotal() {
    let total = 0;

    for (let item of preciosObj) {
         // Verifica si el valor no es una cadena vacía y es un número
        if (item.value !== "Vacio"&& !isNaN(item.value)){
            // Convierte el valor a número y quita los puntps 
            let numericValue = parseFloat(item.value.replace(/\./g, ''));
            // Suma el valor 
            total += numericValue;
        }
    }
    // Aca uso toLocaleString para volver el resultado a un formato de string local
    // en este caso es-ES que seria un subtag de lenguaje de region del BCP47
    // para mas información de los tag y sub tags consultar la lista de subtags de IANA 
    totalObj.value= total.toLocaleString();

}

//Funcion para cargar objetos del DOM // 

function domCargado(){
    //Objetos de Motherboard//
    selectMother=document.getElementById('motherBoard');
    precioMother=document.getElementById('precioMother');
    imgMother=document.getElementById('imgMother');
    motherShopC=document.getElementById('shopCartMotherb');
    ObjCartMother=document.getElementById('objCartMother');
    motherBoardBtn=document.getElementById('motherBoardBtn');
    //Objetos de Procesador//
    selectProc=document.getElementById('procesor');
    precioProc=document.getElementById('precioProcesor');
    imgProc=document.getElementById('imgProcesor');
    procShopC=document.getElementById('shopCartProcesor');
    ObjCartProc=document.getElementById('objCartProcesor');
    procesorBtn=document.getElementById('procesorBtn');
    //Objetos de Cooler//
    selectCooler=document.getElementById('cooler');
    precioCooler=document.getElementById('precioCooler');
    imgCooler=document.getElementById('imgCooler');
    coolerShopC=document.getElementById('shopCartCooler');
    ObjCartCooler=document.getElementById('objCartCooler');
    coolerBtn=document.getElementById('coolerBtn');
    //Objetos de Ram//
    selectRam=document.getElementById('ram');
    precioRam=document.getElementById('precioRam');
    imgRam=document.getElementById('imgRam');
    ramShopC=document.getElementById('shopCartRam');
    ObjCartRam=document.getElementById('objCartRam');
    ramBtn=document.getElementById('ramBtn');
    //Objetos de GPU//
    selectGpu=document.getElementById('gpu');
    precioGpu=document.getElementById('precioGpu');
    imgGpu=document.getElementById('imgGpu');
    gpuShopC=document.getElementById('shopCartGpu');
    ObjCartGpu=document.getElementById('objCartGpu');
    gpuBtn=document.getElementById('gpuBtn');
    //Objetos de Storage//
    selectStorage=document.getElementById('storage');
    precioStorage=document.getElementById('precioStorage');
    imgStorage=document.getElementById('imgStorage');
    storageShopC=document.getElementById('shopCartStorage');
    ObjCartStorage=document.getElementById('objCartStorage');
    storageBtn=document.getElementById('storageBtn');
    //Objetos de PSU//
    selectPsu=document.getElementById('psu');
    precioPsu=document.getElementById('precioPsu');
    imgPsu=document.getElementById('imgPsu');
    psuShopC=document.getElementById('shopCartPsu');
    ObjCartPsu=document.getElementById('objCartPsu');
    psuBtn=document.getElementById('psuBtn');
    //Carga de precios en el cesto //
    preciosObj=document.getElementsByClassName('precioObj');
    // Carga de Resultado total //
    totalObj=document.getElementById('total');
    // Eventos DnD de Motherboard//
    imgMother.addEventListener('dragstart',moviendoMother);
    motherShopC.addEventListener('dragover',event=>{event.preventDefault()});
    motherShopC.addEventListener('drop', cambiarMother);
    // Eventos DnD de Procesador//
    imgProc.addEventListener('dragstart',moviendoProc);
    procShopC.addEventListener('dragover',event=>{event.preventDefault()});
    procShopC.addEventListener('drop', cambiarProc);
    // Eventos DnD de Cooler//
    imgCooler.addEventListener('dragstart',moviendoCooler);
    coolerShopC.addEventListener('dragover',event=>{event.preventDefault()});
    coolerShopC.addEventListener('drop', cambiarCooler);
    // Eventos DnD de Ram//
    imgRam.addEventListener('dragstart',moviendoRam);
    ramShopC.addEventListener('dragover',event=>{event.preventDefault()});
    ramShopC.addEventListener('drop', cambiarRam);
    // Eventos DnD de GPU//
    imgGpu.addEventListener('dragstart',moviendoGpu);
    gpuShopC.addEventListener('dragover',event=>{event.preventDefault()});
    gpuShopC.addEventListener('drop', cambiarGpu);
    // Eventos DnD de Storage//
    imgStorage.addEventListener('dragstart',moviendoStorage);
    storageShopC.addEventListener('dragover',event=>{event.preventDefault()});
    storageShopC.addEventListener('drop', cambiarStorage);
    // Eventos DnD de PSU//
    imgPsu.addEventListener('dragstart',moviendoPsu);
    psuShopC.addEventListener('dragover',event=>{event.preventDefault()});
    psuShopC.addEventListener('drop', cambiarPsu);

    // EventListener de Motherboard//
    selectMother.addEventListener('change', selectedMother);
    motherBoardBtn.addEventListener('click',resetMother);
    // EventListener de Procesador//
    selectProc.addEventListener('change', selectedProcesor);
    procesorBtn.addEventListener('click',resetProcesor);
    // EventListener de Cooler//
    selectCooler.addEventListener('change', selectedCooler);
    coolerBtn.addEventListener('click',resetCooler);
    // EventListener de Ram//
    selectRam.addEventListener('change', selectedRam);
    ramBtn.addEventListener('click',resetRam);
    // EventListener de GPU//
    selectGpu.addEventListener('change', selectedGpu);
    gpuBtn.addEventListener('click',resetGpu);
    // EventListener de Storage//
    selectStorage.addEventListener('change', selectedStorage);
    storageBtn.addEventListener('click',resetStorage);
    // EventListener de PSU//
    selectPsu.addEventListener('change', selectedPsu);
    psuBtn.addEventListener('click',resetPsu);

}
// ---------------------- Inicio de eventos -------------------- //
document.addEventListener('DOMContentLoaded',domCargado);
document.addEventListener('drop',sumTotal);
document.addEventListener('click',sumTotal);
