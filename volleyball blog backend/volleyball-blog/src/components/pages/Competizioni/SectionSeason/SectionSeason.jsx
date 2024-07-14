import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";

import axios from "axios";


function SectionSeason(){

    const {season}=useParams()

    return(
        <div>
            {season}
        </div>
    )
}

export default SectionSeason