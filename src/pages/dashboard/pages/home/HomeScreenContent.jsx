import { BookSection } from "./booksection"
import { ChartSection } from "./chartsection"
import { TimeSection } from "./timeSection"


export const HomeScreenContent=()=>{
    return(
        <div>
            <TimeSection/>
            <ChartSection/>
            <BookSection/>
        </div>
    )
}