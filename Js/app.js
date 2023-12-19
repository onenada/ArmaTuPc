//@author Paul L. Hernandez <back2bytes@gmail.com> //
//@link https://github.com/onenada/ArmaTuPc //

// ------------------- Variables ---------------------- //


var motherItem;
var procItem;
var coolerITem;
var ramItem;
var gpuItem;
var storageItem;
var psuItem;


// ----------------- Carga de objetos DOM ------------- //

//Objetos de Motherboard//
const selectMother=document.getElementById('motherBoard');
const precioMother=document.getElementById('precioMother');
const imgMother=document.getElementById('imgMother');
const motherShopC=document.getElementById('shopCartMotherb');
const ObjCartMother=document.getElementById('objCartMother');
const motherBoardBtn=document.getElementById('motherBoardBtn');
//Objetos de Procesador//
const selectProc=document.getElementById('procesor');
const precioProc=document.getElementById('precioProcesor');
const imgProc=document.getElementById('imgProcesor');
const procShopC=document.getElementById('shopCartProcesor');
const ObjCartProc=document.getElementById('objCartProcesor');
const procesorBtn=document.getElementById('procesorBtn');
//Objetos de Cooler//
const selectCooler=document.getElementById('cooler');
const precioCooler=document.getElementById('precioCooler');
const imgCooler=document.getElementById('imgCooler');
const coolerShopC=document.getElementById('shopCartCooler');
const ObjCartCooler=document.getElementById('objCartCooler');
const coolerBtn=document.getElementById('coolerBtn');
//Objetos de Ram//
const selectRam=document.getElementById('ram');
const precioRam=document.getElementById('precioRam');
const imgRam=document.getElementById('imgRam');
const ramShopC=document.getElementById('shopCartRam');
const ObjCartRam=document.getElementById('objCartRam');
const ramBtn=document.getElementById('ramBtn');
//Objetos de GPU//
const selectGpu=document.getElementById('gpu');
const precioGpu=document.getElementById('precioGpu');
const imgGpu=document.getElementById('imgGpu');
const gpuShopC=document.getElementById('shopCartGpu');
const ObjCartGpu=document.getElementById('objCartGpu');
const gpuBtn=document.getElementById('gpuBtn');
//Objetos de Storage//
const selectStorage=document.getElementById('storage');
const precioStorage=document.getElementById('precioStorage');
const imgStorage=document.getElementById('imgStorage');
const storageShopC=document.getElementById('shopCartStorage');
const ObjCartStorage=document.getElementById('objCartStorage');
const storageBtn=document.getElementById('storageBtn');
//Objetos de PSU//
const selectPsu=document.getElementById('psu');
const precioPsu=document.getElementById('precioPsu');
const imgPsu=document.getElementById('imgPsu');
const psuShopC=document.getElementById('shopCartPsu');
const ObjCartPsu=document.getElementById('objCartPsu');
const psuBtn=document.getElementById('psuBtn');
//Carga de precios en el cesto //
const preciosObj=document.getElementsByClassName('precioObj')
// Carga de Resultado total //
const totalOBj=document.getElementById('total')


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
    ObjCartMother.value='Vació';
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
    ObjCartProc.value='Vació';
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
    ObjCartCooler.value='Vació';
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
    ObjCartRam.value='Vació';
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
    ObjCartGpu.value='Vació';
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
    ObjCartStorage.value='Vació';
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
    ObjCartPsu.value='Vació';
}
//Funcion para sumar cada objeto seleccionado en el cesto//

function sumTotal() {
    let total = 0;

    for (let item of preciosObj) {
        // Verifica si el valor no es una cadena vacía y es un número
        if (item.value !== "Vació" && !isNaN(item.value)) {
            // Convierte el valor a número y suma al total
            total += parseFloat(item.value);
        }
    }
    totalOBj.value= total

}


// -------------------- Eventos Drag&Drop --------------------- //

//Eventos DnD de Motherboard//
imgMother.addEventListener('dragstart',moviendoMother);
motherShopC.addEventListener('dragover',event=>{event.preventDefault()});
motherShopC.addEventListener('drop', cambiarMother);
//Eventos DnD de Procesador//
imgProc.addEventListener('dragstart',moviendoProc);
procShopC.addEventListener('dragover',event=>{event.preventDefault()});
procShopC.addEventListener('drop', cambiarProc);
//Eventos DnD de Cooler//
imgCooler.addEventListener('dragstart',moviendoCooler);
coolerShopC.addEventListener('dragover',event=>{event.preventDefault()});
coolerShopC.addEventListener('drop', cambiarCooler);
//Eventos DnD de Ram//
imgRam.addEventListener('dragstart',moviendoRam);
ramShopC.addEventListener('dragover',event=>{event.preventDefault()});
ramShopC.addEventListener('drop', cambiarRam);
//Eventos DnD de GPU//
imgGpu.addEventListener('dragstart',moviendoGpu);
gpuShopC.addEventListener('dragover',event=>{event.preventDefault()});
gpuShopC.addEventListener('drop', cambiarGpu);
//Eventos DnD de Storage//
imgStorage.addEventListener('dragstart',moviendoStorage);
storageShopC.addEventListener('dragover',event=>{event.preventDefault()});
storageShopC.addEventListener('drop', cambiarStorage);
//Eventos DnD de PSU//
imgPsu.addEventListener('dragstart',moviendoPsu);
psuShopC.addEventListener('dragover',event=>{event.preventDefault()});
psuShopC.addEventListener('drop', cambiarPsu);


// ------------------- EventListeners ----------------- //

//EventListener de Motherboard//
selectMother.addEventListener('change', selectedMother);
motherBoardBtn.addEventListener('click',resetMother);
//EventListener de Procesador//
selectProc.addEventListener('change', selectedProcesor);
procesorBtn.addEventListener('click',resetProcesor);
//EventListener de Cooler//
selectCooler.addEventListener('change', selectedCooler);
coolerBtn.addEventListener('click',resetCooler);
//EventListener de Ram//
selectRam.addEventListener('change', selectedRam);
ramBtn.addEventListener('click',resetRam);
//EventListener de GPU//
selectGpu.addEventListener('change', selectedGpu);
gpuBtn.addEventListener('click',resetGpu);
//EventListener de Storage//
selectStorage.addEventListener('change', selectedStorage);
storageBtn.addEventListener('click',resetStorage);
//EventListener de PSU//
selectPsu.addEventListener('change', selectedPsu);
psuBtn.addEventListener('click',resetPsu);
//EventListener para total//
for(let item of preciosObj){
    item.addEventListener('change',sumTotal)
}