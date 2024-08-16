import { PageHeading } from "../../components/page-heading/page-heading.component"
import MCU from '../../assets/shows/HEAD.png'
import TV_SHOWS from "../../data/show_data"
import { ShowsCard } from "../../components/shows-card/shows-card.component"

export const Shows = () => {
  return (
    <div className="text-black">
    <div className="mt-10">
    <PageHeading heading={MCU} />
    </div>
    <div className="flex flex-wrap justify-center">
    {TV_SHOWS.map(({ showName, mainImage }) => (
          <ShowsCard key={showName} showName={showName} mainImage={mainImage} />
        ))}
    </div>
  </div>
  )
}
