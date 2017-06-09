const aleatorioNum=(min,max)=>{
  return Math.floor(Math.random() * (max - min)) + min ;
}
$( _ => {
  const punto =0;
const aleatorioValor=aleatorioNum(0,5);
 const contenedorImg = $(".face");
 contenedorImg.empty();
 const inputName=$("input[type='text']");
 const image = $(`<img class="coder" alt="${mexico[aleatorioValor].name}" src="${'assets/img/mexico/'+ mexico[aleatorioValor].image}" />`);
 contenedorImg.append(image);

 const compareImg=(a,b)=>{
  if(a==b){
    console.log("coencide");
    punto++;
  }
  else{
    console.log("fallaste");
  }
}
 $("input[type='button']").on("click",()=>{compareImg(inputName.val(),image.attr('alt'))});

})
