
export const useSurveyAnswer=(locateAnswersFromStore: string[], fetchedApiData: any)=>
{

    return locateAnswersFromStore[3] === "Anime"
          ? fetchedApiData.tv.filter((val) =>
              val.genre.some((val1) => {
                const answer = locateAnswersFromStore[2];
                if (Array.isArray(answer)) {
                  return answer.some((val2) => val2.includes(val1.name));
                }
                return false;
              }),
            )
          : fetchedApiData.movies.filter((val) =>
              val.genre.some((val1) => {
                const answer = locateAnswersFromStore[2];
                if (Array.isArray(answer)) {
                  return answer.some((val2) => val2.includes(val1.name));
                }
                return false;
              }),
            )   
}

