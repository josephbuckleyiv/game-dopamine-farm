import { useState } from "react";

const Scroll = (setDopamine, scrollValue) => {
    


   return () => setDopamine((x: number) => x + scrollValue);
}

export default Scroll;