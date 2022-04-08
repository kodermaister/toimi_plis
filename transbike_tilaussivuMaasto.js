
/* Kuvat Vaihtuu!! */ 

/* Mootrrin JS */
var a=0;
function show_hide_moottori()
{
    if (a==0)
        {
            document.getElementById("moottori").style.display="inline";
            document.getElementById("testi_teksti").style.display="none";
            document.getElementById("bg_info").style.display="none";
            document.getElementById("motor_header").style.display="inline";
            document.getElementById("bg_img").style.display="none"; /*laita erikuvat näihin muokkaa paremmat function nimet */
            document.getElementById("akku").style.display="none";
            document.getElementById("battery_header").style.display="none";
            document.getElementById("akku_info").style.display="none";
            document.getElementById("näyttö_header").style.display="none";
            document.getElementById("näyttö_info").style.display="none";
            document.getElementById("näyttö").style.display="none";
            document.getElementById("info").style.display="none";
            document.getElementById("info_header").style.display="none";
            document.getElementById("info_info").style.display="none";

            document.getElementById("motor_info").style.display="inline";
            return a=1;
        }
    else
        {
            document.getElementById("moottori").style.display="none";
            document.getElementById("testi_teksti").style.display="inline";
            document.getElementById("bg_info").style.display="inline";
            document.getElementById("bg_img").style.display="inline";
            document.getElementById("motor_header").style.display="none";
            document.getElementById("akku").style.display="none";
            document.getElementById("battery_header").style.display="none";
            document.getElementById("akku_info").style.display="none";
            document.getElementById("motor_info").style.display="none";
            document.getElementById("näyttö_header").style.display="none";
            document.getElementById("näyttö_info").style.display="none";
            document.getElementById("näyttö").style.display="none";
            document.getElementById("info").style.display="none";
            document.getElementById("info_header").style.display="none";
            document.getElementById("info_info").style.display="none";

            return a=0; 
        }
}

/* Akun JS */

var x=0;
function show_hide_akku()
{
    if (x==0)
        {
            document.getElementById("akku").style.display="inline";
            document.getElementById("testi_teksti").style.display="none";
            document.getElementById("bg_info").style.display="none";
            document.getElementById("battery_header").style.display="inline";
            document.getElementById("bg_img").style.display="none"; /*laita erikuvat näihin muokkaa paremmat function nimet */
            document.getElementById("moottori").style.display="none";
            document.getElementById("motor_header").style.display="none";
            document.getElementById("näyttö_header").style.display="none";
            document.getElementById("näyttö_info").style.display="none";
            document.getElementById("näyttö").style.display="none";
            document.getElementById("info").style.display="none";
            document.getElementById("info_header").style.display="none";
            document.getElementById("info_info").style.display="none";
            
            document.getElementById("motor_info").style.display="none";
            document.getElementById("akku_info").style.display="inline";
            return x=1;
        }
    else
        {
            document.getElementById("akku").style.display="none";
            document.getElementById("testi_teksti").style.display="inline";
            document.getElementById("bg_info").style.display="inline";
            document.getElementById("bg_img").style.display="inline";
            document.getElementById("battery_header").style.display="none";
            document.getElementById("moottori").style.display="none";
            document.getElementById("motor_header").style.display="none";
            document.getElementById("motor_info").style.display="none";
            document.getElementById("akku_info").style.display="none";
            document.getElementById("näyttö_header").style.display="none";
            document.getElementById("näyttö_info").style.display="none";
            document.getElementById("näyttö").style.display="none";
            document.getElementById("info").style.display="none";
            document.getElementById("info_header").style.display="none";
            document.getElementById("info_info").style.display="none";
            return x=0; 
        }
}

/* Näytön JS */

var y=0;
function show_hide_näyttö()
{
    if (y==0)
        {
            document.getElementById("näyttö").style.display="inline";
            document.getElementById("testi_teksti").style.display="none";
            document.getElementById("bg_info").style.display="none";
            document.getElementById("näyttö_header").style.display="inline";
            document.getElementById("bg_img").style.display="none"; 
            document.getElementById("näyttö_info").style.display="inline";
            document.getElementById("info").style.display="none";
            document.getElementById("info_header").style.display="none";
            document.getElementById("info_info").style.display="none";
            document.getElementById("akku").style.display="none";
            document.getElementById("battery_header").style.display="none";
            document.getElementById("akku_info").style.display="none";
            document.getElementById("moottori").style.display="none";
            document.getElementById("motor_header").style.display="none";
            document.getElementById("motor_info").style.display="none";

            
            return y=1;
        }
    else
        {
            document.getElementById("näyttö").style.display="none";
            document.getElementById("bg_img").style.display="inline";
            document.getElementById("testi_teksti").style.display="inline";
            document.getElementById("bg_info").style.display="inline";
            document.getElementById("näyttö_header").style.display="none";
            document.getElementById("näyttö_info").style.display="none";
            document.getElementById("info").style.display="none";
            document.getElementById("info_header").style.display="none";
            document.getElementById("info_info").style.display="none";
            document.getElementById("akku").style.display="none";
            document.getElementById("battery_header").style.display="none";
            document.getElementById("akku_info").style.display="none";
            document.getElementById("moottori").style.display="none";
            document.getElementById("motor_header").style.display="none";
            document.getElementById("motor_info").style.display="none";
            return y=0; 
        }
}

/* Tekniset tiedot JS */

var z=0;
function show_hide_tekniset_tiedot()
{
    if (z==0)
        {
            document.getElementById("info").style.display="inline";
            document.getElementById("testi_teksti").style.display="none";
            document.getElementById("bg_info").style.display="none";
            document.getElementById("info_header").style.display="inline";
            document.getElementById("bg_img").style.display="none"; 
            document.getElementById("info_info").style.display="inline";
            document.getElementById("akku").style.display="none";
            document.getElementById("battery_header").style.display="none";
            document.getElementById("akku_info").style.display="none";
            document.getElementById("moottori").style.display="none";
            document.getElementById("motor_header").style.display="none";
            document.getElementById("motor_info").style.display="none";
            document.getElementById("näyttö_header").style.display="none";
            document.getElementById("näyttö_info").style.display="none";
            document.getElementById("näyttö").style.display="none";
            return z=1;
        }
    else
        {
            document.getElementById("info").style.display="none";
            document.getElementById("bg_img").style.display="inline";
            document.getElementById("testi_teksti").style.display="inline";
            document.getElementById("bg_info").style.display="inline";
            document.getElementById("info_header").style.display="none";
            document.getElementById("info_info").style.display="none";
            document.getElementById("akku").style.display="none";
            document.getElementById("battery_header").style.display="none";
            document.getElementById("akku_info").style.display="none";
            document.getElementById("moottori").style.display="none";
            document.getElementById("motor_header").style.display="none";
            document.getElementById("motor_info").style.display="none";
            document.getElementById("näyttö_header").style.display="none";
            document.getElementById("näyttö_info").style.display="none";
            document.getElementById("näyttö").style.display="none";
            return z=0; 
        }
}




/* FORM */


const toimi = document.getElementById('toimi')
const form = document.getElementById('form')
const maksut = document.getElementById('maksut')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (toimi.value !== 'Kyllä'){
        alert('Jompikumpi täytyy valita, jotta voidaan siirtyä maksuun.')
        e.preventDefault()
    }
    if (maksut.value !== 'Kyllä'){
        alert('Maksuehdot ovat hyväksyttävä, jotta voidaan siirtyä maksamaan. Otathan yhteyttä, jos jokin ehto mietityttää.')
        e.preventDefault()
    }
    if (messages.length > 0){
    e.preventDefault()
    errorElement.innerHTML = messages.join(',')
    }
})