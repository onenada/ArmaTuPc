//@author Paul L. Hernandez <back2bytes@gmail.com> //
//@link https://github.com/onenada/ArmaTuPc //

// ------------------- Variables ---------------------- //


var motherItem;
var procItem;
var coolerITem;


// ----------------- Carga de objetos DOM ------------- //

//Objetos de motherboard//
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
    motherShopC.src=motherItem.src
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
    procShopC.src=procItem.src
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
//Cambio de los valores del cesto al procesador seleccionada//
function cambiarCooler(event){
    event.preventDefault();
    coolerShopC.src=coolerItem.src
    ObjCartCooler.value=precioCooler.value;
}
//Botón de reset para el modulo de procesador//
function resetCooler(){
    coolerShopC.src='Media/Icons/shopcart.png';
    ObjCartCooler.value='Vació';
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


// ------------------- EventListeners ----------------- //

//EventListener de Motherboard//
selectMother.addEventListener('change', selectedMother);
motherBoardBtn.addEventListener('click',resetMother);
//EventListener de Procesador//
selectProc.addEventListener('change', selectedProcesor);
procesorBtn.addEventListener('click',resetProcesor);
//EventListener de Procesador//
selectCooler.addEventListener('change', selectedCooler);
coolerBtn.addEventListener('click',resetCooler);