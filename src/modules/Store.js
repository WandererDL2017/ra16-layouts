import IconSwitch from "./IconSwitch";
import React, { useState } from "react";
import Cards from "./Cards";
import ListView from "./ListView";

function Store({products}) {
  const [viewIcon, setViewIcon] = useState('view_module');
  let view;
  if (viewIcon === 'view_list') {
    view = <Cards cards={products}/>
  } else {
    view = <ListView items={products}/>
  }

  return (
    <>
      <IconSwitch icon={viewIcon} onSwitch={setViewIcon}/>
      {view}
    </>
  )
}

export default Store;