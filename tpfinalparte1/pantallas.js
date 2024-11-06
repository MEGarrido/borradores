function aventura(estado){
  
  //Pantalla Menú
  if (estado===0){
    menu();
  }
  
  //Pantalla Créditos
  if(estado===41){
    creditos();
  }
  
  //Inicio de la aventura
  if ((estado>0) && (estado<11)){
    cambioEstado(1,estado,11,false);
  }
  
  //Desición de poder
  if (estado===10){
    desicion(estado);
  }
  
  //Continúa la aventura
  if ((estado>10)&&(estado<15)){
    cambioEstado(11,estado,15,false);
  }
  
  //Decision ACEPTAR o NEGARSE
  if(estado===14){
    desicion(estado);
  }
  
  //Primera rama (aceptar)
  if ((estado>14)&&(estado<17)){
    cambioEstado(15,estado,17,false);
  }
  
  //Decisión ir SOLO o en GRUPO
  if(estado===16){
    desicion(estado);
  }
  
  //Rama ir SOLO
  if ((estado>16)&&(estado<23)){
    cambioEstado(17,estado,23,true);
  }
  
  //Final rama ir SOLO
  if (estado===22){
    dibujaRestart();
  }
  
  //Rama ir en GRUPO
  if ((estado>22)&&(estado<29)){
    cambioEstado(23,estado,29,true);
  }
  
  //Final ir en GRUPO
  if (estado===28){
    dibujaRestart();
  }
  
  //Rama NEGARSE
  if ((estado>=29)&&(estado<31)){
    cambioEstado(29,estado,31,false);
  }
  
  //Decision CUEVA o IRSE
  if(estado===31){
    desicion(estado);
  }
  
  //Rama desicion IRSE
  if ((estado>31)&&(estado<35)){
    cambioEstado(32,estado,35,true);
  }
  //Final de IRSE
  if (estado===34){
    dibujaRestart();
  }
  
  //Rama decision CUEVA
  if ((estado>34)&&(estado<41)){
    cambioEstado(35,estado,41,true);
  }
  //Final decision CUEVA
  if (estado===40){
    dibujaRestart();
  }
  
}
