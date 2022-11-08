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

/* BARRA SMALL */

function barraSmall(){

    window.addEventListener('scroll', function(){
        const barra = document.querySelector('.header-contenedor');
        const body = document.querySelector('body');
        const logo = document.querySelector('.header-logo')

        if (barra.getBoundingClientRect().bottom >= 0){
            logo.classList.add('fija');
            body.classList.add('body-scroll')
        }
});
}




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
            mensaje.remove(); ingreso.value = '';
         },3500)
        }
        else{
            if(Math.ceil(valorIng) >=1 && valorIng <= 10){
                resul=783,20;
            }
            if(Math.ceil(valorIng) >10 && valorIng <=20){
                resul=922,30;
            }
            if(Math.ceil(valorIng) >20 && valorIng <=30){
                resul=1246,80;
            }
            if(Math.ceil(valorIng) >30 && valorIng <=40){
                resul=1550,60;
            }
            if(Math.ceil(valorIng) >40 && valorIng <=50){
                resul=1831.20;
            }
            if(Math.ceil(valorIng) >50 && valorIng <=60){
                resul=2093.50;
            }
            if(Math.ceil(valorIng) >60 && valorIng <=70){
                resul=2381.40;
            }
            if(Math.ceil(valorIng) >70 && valorIng <=80){
                resul=2604.70;
            }
            if(Math.ceil(valorIng) >80 && valorIng <=90){
                resul=2764.50;
            }
            if(Math.ceil(valorIng) >90 && valorIng <=100){
                resul=2963.30;
            }
            if(Math.ceil(valorIng) >100 && valorIng <=120){
                resul=3363.50;
            }
            if(Math.ceil(valorIng) >120 && valorIng <=140){
                resul=3747.80;
            }
            if(Math.ceil(valorIng) >140 && valorIng <=160){
                resul=4151.60;
            }
            if(Math.ceil(valorIng) >160 && valorIng <=180){
                resul=4554.20;
            }
            if(Math.ceil(valorIng) >180 && valorIng <=200){
                resul=4914.10;
            }
            if(Math.ceil(valorIng) >200 && valorIng <=250){
                resul=5899.90;
            }
            if(Math.ceil(valorIng) >250 && valorIng <=300){
                resul=6590.40;
            }
            if(Math.ceil(valorIng) >300 && valorIng <=350){
                resul=7495.70;
            }
            if(Math.ceil(valorIng) >350 && valorIng <=400){
                resul=8457;
            }
            if(Math.ceil(valorIng) >400 && valorIng <=500){
                resul=10301.70;
            }
            if(Math.ceil(valorIng) >500 && valorIng <=600){
                resul=12181.70;
            }
            if(Math.ceil(valorIng) >600 && valorIng <=700){
                resul=13435.80;
            }
            if(Math.ceil(valorIng) >700 && valorIng <=800){
                resul=15240.10;
            }
            if(Math.ceil(valorIng) >800 && valorIng <=900){
                resul=16266,20;
            }
            if(Math.ceil(valorIng) >900 && valorIng < 1000){
                resul=18059.60;
            }
            
            if(valorIngresoVd == '' || valorIngresoVd < 1000){
                mensaje.textContent = `Ingrese un valor válido en el segundo campo o un valor mayor a $ 1.000`;
                mensaje.classList.add('mensajeError');
                calculadora.appendChild(mensaje);
                setTimeout(() => {
                mensaje.remove(); ingresoVd.value = '';
                },3500)  
            }

            else{
                resulSeg=valorIngresoVd*0.008;
                envioTotal= resul + resulSeg;
                totalRed=envioTotal.toFixed(2);
    
                mensaje.textContent = `El valor de tu envío es de $${totalRed} + impuestos`;
                mensaje.classList.add('resultado');
                calculadora.appendChild(mensaje);
                setTimeout(() => {
                mensaje.remove(); ingreso.value = '', ingresoVd.value = '';
             },5000)
            }
            
            }        
    });
}
