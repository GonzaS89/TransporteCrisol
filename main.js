document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    scrollNav();
    navegacionFija();
    resaltarEnlaceActivo();
    mostrarFlete();
};

function scrollNav(){
    const enlaces = document.querySelectorAll('.header-navegacion a');

    enlaces.forEach ( enlace => {

        const link = enlace;    
        
        link.addEventListener('click', function(e){

            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        });
    });
};


function navegacionFija(){

    window.addEventListener('scroll', function(){
        const barra = document.querySelector('.header-contenedor');
        const body = document.querySelector('body');

   if (barra.getBoundingClientRect().bottom >= 0){
        barra.classList.add('fija');
        body.classList.add('body-scroll')
    }
    else{
        barra.classList.remove('fija');
        body.classList.remove('body-scroll')
    }
    
});
};

function resaltarEnlaceActivo(){

    window.addEventListener('scroll', function(){

        const enlaces = document.querySelectorAll('.header-navegacion a');
        const nosotros = document.getElementById('nosotros');
        const servicios = document.getElementById('servicios');
        const calculadora = document.getElementById('calculadora');
        const contacto = document.getElementById('contacto');
        

        enlaces.forEach(enlace => {

            const enlaceNos = enlaces[0];
            const enlaceCalc = enlaces[1]
            const enlaceServ = enlaces[2];
            const enlaceCont = enlaces[3];

            const enlaceValor = enlace.attributes.href.value;
            const nosotrosConID = '#' + nosotros.attributes.id.value;
            const serviciosConID = '#' + servicios.attributes.id.value;
            const contactoConID = '#' + contacto.attributes.id.value;
            const calcConID = '#' + calculadora.attributes.id.value;

            if (nosotros.getBoundingClientRect().top > 100){
                enlaceNos.classList.remove('resaltado')
            }
            if(nosotros.getBoundingClientRect().top <= 150
            && nosotros.getBoundingClientRect().bottom >= 150 
            && enlaceValor == nosotrosConID)
            {
            enlaceNos.classList.add('resaltado')
            enlaceCalc.classList.remove('resaltado');
            }
            if (calculadora.getBoundingClientRect().top <= 150 
           && calculadora.getBoundingClientRect().bottom >= 150 
           && enlaceValor == calcConID){

            enlaceServ.classList.remove('resaltado');
            enlaceNos.classList.remove('resaltado');
            enlaceCalc.classList.add('resaltado'); 
           }
           if (servicios.getBoundingClientRect().top <= 150 
           && servicios.getBoundingClientRect().bottom >= 150 
           && enlaceValor == serviciosConID){

            enlaceServ.classList.add('resaltado'); 
            enlaceCont.classList.remove('resaltado');
            enlaceCalc.classList.remove('resaltado'); 

           }

           if (contacto.getBoundingClientRect().top <= 150 
           && contacto.getBoundingClientRect().bottom >= 150 
           && enlaceValor == contactoConID){

            enlaceServ.classList.remove('resaltado');
            enlaceCont.classList.add('resaltado'); 
           }
    });
});
};

function mostrarFlete(){
    const boton = document.getElementById('btn2');

        
      
    boton.addEventListener('click', function(){
        const calculadora = document.querySelector('.calculadora');
        const ingreso = document.getElementById('kgs');
        const ingresoVd = document.getElementById('valor')
        const valorIngresoVd = ingresoVd.value;
        const valorIng = ingreso.value;
        let resul;
        let resulSeg;
        let envioTotal;
        const mensaje = document.createElement('p');

        if(valorIng == '' || valorIng == 0 || valorIng >1000){
            
            mensaje.textContent = `El primer campo esta vacío o contiene un valor incorrecto. Ingrese un valor válido entre 1 y 1000`;
            mensaje.classList.add('mensajeError');
            calculadora.appendChild(mensaje);
            setTimeout(() => {
            mensaje.remove();
         },3500)
        }
        else{
            if(Math.ceil(valorIng) >=1 && valorIng <= 10){
                resul=642;
            }
            if(Math.ceil(valorIng) >10 && valorIng <=20){
                resul=756;
            }
            if(Math.ceil(valorIng) >20 && valorIng <=30){
                resul=1022;
            }
            if(Math.ceil(valorIng) >30 && valorIng <=40){
                resul=1271;
            }
            if(Math.ceil(valorIng) >40 && valorIng <=50){
                resul=1501;
            }
            if(Math.ceil(valorIng) >50 && valorIng <=60){
                resul=1716;
            }
            if(Math.ceil(valorIng) >60 && valorIng <=70){
                resul=1952;
            }
            if(Math.ceil(valorIng) >70 && valorIng <=80){
                resul=2135;
            }
            if(Math.ceil(valorIng) >80 && valorIng <=90){
                resul=2266;
            }
            if(Math.ceil(valorIng) >90 && valorIng <=100){
                resul=2429;
            }
            if(Math.ceil(valorIng) >100 && valorIng <=120){
                resul=2757;
            }
            if(Math.ceil(valorIng) >120 && valorIng <=140){
                resul=3072;
            }
            if(Math.ceil(valorIng) >140 && valorIng <=150){
                resul=3403;
            }
            if(Math.ceil(valorIng) >150 && valorIng <=160){
                resul=3733;
            }
            if(Math.ceil(valorIng) >180 && valorIng <=200){
                resul=4028;
            }
            if(Math.ceil(valorIng) >200 && valorIng <=250){
                resul=4836;
            }
            if(Math.ceil(valorIng) >250 && valorIng <=300){
                resul=5402;
            }
            if(Math.ceil(valorIng) >300 && valorIng <=350){
                resul=6144;
            }
            if(Math.ceil(valorIng) >350 && valorIng <=400){
                resul=6932;
            }
            if(Math.ceil(valorIng) >400 && valorIng <=500){
                resul=8444;
            }
            if(Math.ceil(valorIng) >500 && valorIng <=600){
                resul=9985;
            }
            if(Math.ceil(valorIng) >600 && valorIng <=700){
                resul=11013;
            }
            if(Math.ceil(valorIng) >700 && valorIng <=800){
                resul=12492;
            }
            if(Math.ceil(valorIng) >800 && valorIng <=900){
                resul=13333;
            }
            if(Math.ceil(valorIng) >900 && valorIng <=1000){
                resul=14803;
            }
            
            if(valorIngresoVd == '' || valorIngresoVd < 1000){
                mensaje.textContent = `Ingrese un valor válido en el segundo campo o un valor mayor a $ 1.000`;
                mensaje.classList.add('mensajeError');
                calculadora.appendChild(mensaje);
                setTimeout(() => {
                mensaje.remove();
                },3500)  
            }

            else{
                resulSeg=valorIngresoVd*0.008;
                envioTotal= resul + resulSeg;
                totalRed=envioTotal.toFixed(2);
    
                mensaje.textContent = `El valor de tu envío es de $${totalRed} más IVA`;
                mensaje.classList.add('resultado');
                calculadora.appendChild(mensaje);
                setTimeout(() => {
                mensaje.remove();
             },5000)
            }
            
            }        
    });
}
