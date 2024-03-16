let arr = [
{dp:"https://fotografias.lasexta.com/clipping/cmsimages01/2022/12/18/CFE6F043-7C91-4BB9-9643-84ADF679CAA4/messi-besa-copa-mundo_104.jpg?crop=993,993,x188,y0&width=1200&height=1200&optimize=low&format=webply",
story:"https://imageio.forbes.com/specials-images/imageserve/6512b7939428d14815ea8c22/Inter-Miami-trophy-ceremony---Credit--Yaroslav-Sabitov-YES-Market-Media-Alamy-Live/960x0.jpg?format=jpg&width=960"},

{dp:"https://images.ctfassets.net/3mv54pzvptwz/5eTv6hTyA1pqkFClYRn0qt/be626a573cbf1ee7e421b73f87ed6851/20221205_foto_GETTY_neymar_jr_jogo_brasil_x_coreia_copa_do_mundo__209_.jpg",
story:"https://wallpapercave.com/wp/wp5466599.jpg"},

{dp:"https://e1.pxfuel.com/desktop-wallpaper/534/828/desktop-wallpaper-cristiano-ronaldo-ronaldo-style.jpg",
story:"https://i.seadn.io/gae/rHXvaReypm1Us_SS-6KSrCsOjS88fe3O1xccwN2my5Qa_j-FpMdiihdgrujgWYFnoHWBnXdrQHrj3U1mckOeArrYXHng3io3Y4ZoKqY?auto=format&dpr=1&w=1000"},

{dp:"https://tmssl.akamaized.net/images/foto/galerie/de-bruyne-kevin-manchester-city-2023-2024-1705065571-126204.jpg?lm=1705065586",
story:"https://i.guim.co.uk/img/media/9f49f182ad0e9b588006ecdbdfed9e49d00afcd2/1396_301_1830_1098/master/1830.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2a8c07560377e0779e4396795141bae5"},

{dp:"https://tmssl.akamaized.net/images/foto/galerie/gerard-pique-1464871774-5489.jpg?lm=1483606072",
story:"https://media.gettyimages.com/id/1439308869/photo/barcelona-spain-gerard-pique-of-fc-barcelona-waves-to-fans-as-they-take-part-in-a-lap-of.jpg?s=612x612&w=0&k=20&c=7Dy3ep3edoGyLiPSkFPXSzrdsU3XWB5ssjUS4FAC5Lk="}]




// clutter ek variable h jo pura div ko hi input kra raha hai yha for each loop ke help se  
// elem saare elements deta h array ke aur idx index 
// arr ke andar object h jo ki elem ke hrough access krte ha and is liy . use krke image ko access kr skte h


let clutter ="";
let stories = document.querySelector('#stories');
arr.forEach(function(elem , idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`        
});

stories.innerHTML = clutter;

stories.addEventListener(("click"),function(dets){
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#fullscreen").style.display = "none";

    },3000)

})


