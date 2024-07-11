import axios from "axios";

const dictEvent=async(idSeason, idCompetition)=>{
    try {
        const response = await axios.get('http://localhost:5000/api/event/'+ `${idCompetition}/`+  `${idSeason}`);
        const events = response.data.events;
    
        const eventsByRound = {};
    
        events.forEach(event => {
          const round = event.intRound;
          if (!eventsByRound[round]) {
            eventsByRound[round] = [];
          }
          eventsByRound[round].push(event);
        });
    
        return eventsByRound;
      } catch (error) {
        console.error('Error fetching events:', error);
        return {};
      }
}

export default dictEvent