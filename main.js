document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    scrollNav();
    navegacionFija();
    resaltarEnlaceActivo();
    mostrarFlete();
    barraSmall();
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
        body.classList.add('body-scroll');
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
        const logo = document.querySelector('.header-logo');

        if (body.getBoundingClientRect().right < 800 &  
           barra.getBoundingClientRect().bottom < 0) {

            logo.classList.add('fija-2');
            logo.classList.add('logo-barraSmall')
            console.log(11)
           }

        else{
            logo.classList.remove('fija-2');
            logo.classList.remove('logo-barraSmall');
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
                resul=939.90;
            }
            if(Math.ceil(valorIng) >10 && valorIng <=20){
                resul=1106.80;
            }
            if(Math.ceil(valorIng) >20 && valorIng <=30){
                resul=1496.20;
            }
            if(Math.ceil(valorIng) >30 && valorIng <=40){
                resul=1860.70;
            }
            if(Math.ceil(valorIng) >40 && valorIng <=50){
                resul=2197.40;
            }
            if(Math.ceil(valorIng) >50 && valorIng <=60){
                resul=2512.20;
            }
            if(Math.ceil(valorIng) >60 && valorIng <=70){
                resul=2857.70;
            }
            if(Math.ceil(valorIng) >70 && valorIng <=80){
                resul=3125.60;
            }
            if(Math.ceil(valorIng) >80 && valorIng <=90){
                resul=3317.40;
            }
            if(Math.ceil(valorIng) >90 && valorIng <=100){
                resul=3556.00;
            }
            if(Math.ceil(valorIng) >100 && valorIng <=120){
                resul=4036.20;
            }
            if(Math.ceil(valorIng) >120 && valorIng <=140){
                resul=4497.40;
            }
            if(Math.ceil(valorIng) >140 && valorIng <=160){
                resul=4891.60;
            }
            if(Math.ceil(valorIng) >160 && valorIng <=180){
                resul=5465.00;
            }
            if(Math.ceil(valorIng) >180 && valorIng <=200){
                resul=5896.90;
            }
            if(Math.ceil(valorIng) >200 && valorIng <=250){
                resul=7079.90;
            }
            if(Math.ceil(valorIng) >250 && valorIng <=300){
                resul=7908.50;
            }
            if(Math.ceil(valorIng) >300 && valorIng <=350){
                resul=8994.80;
            }
            if(Math.ceil(valorIng) >350 && valorIng <=400){
                resul=10148.40;
            }
            if(Math.ceil(valorIng) >400 && valorIng <=500){
                resul=12362.10;
            }
            if(Math.ceil(valorIng) >500 && valorIng <=600){
                resul=14618.10;
            }
            if(Math.ceil(valorIng) >600 && valorIng <=700){
                resul=16122.90;
            }
            if(Math.ceil(valorIng) >700 && valorIng <=800){
                resul=18288.10;
            }
            if(Math.ceil(valorIng) >800 && valorIng <=900){
                resul=19519.40;
            }
            if(Math.ceil(valorIng) >900 && valorIng < 1000){
                resul=21671.50;
            }
            
            if(valorIngresoVd == ''){
                mensaje.textContent = 'Ingrese un valor válido en el segundo campo';
                mensaje.classList.add('mensajeError');
                calculadora.appendChild(mensaje);
                setTimeout(() => {
                mensaje.remove(); ingresoVd.value = '';
                },3500); 
            }    

            if (valorIngresoVd < 1000){
                resulSeg = 8;
            }    
            

            else{
                resulSeg=valorIngresoVd*0.008;
            }
                envioTotal= resul + resulSeg;
                totalRed=envioTotal.toFixed(2);
    
                mensaje.textContent = `El valor de tu envío sería de $${totalRed} + impuestos`;
                mensaje.classList.add('resultado');
                calculadora.appendChild(mensaje);
                setTimeout(() => {
                mensaje.remove(); ingreso.value = '', ingresoVd.value = '';
             },5000)
            }
                          
    });
}
