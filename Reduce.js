let ob={
    id_1:{
    item_1:'Item 1',
    item_2:'Item 1',
    },
    id_2:{
    item_3:'Item 3',
    item_4:'Item 4',
    }
  }
  let result={}
  for (const key of Object.keys(ob)) {
    let obj=ob[key]
    
   for (const keys of Object.keys(obj)) {
    result[keys]=key;
   
  }

  }
  console.log(result)
