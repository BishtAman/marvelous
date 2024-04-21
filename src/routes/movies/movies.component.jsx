import { PageHeading } from "../../components/page-heading/page-heading.component"
import MCU from '../../assets/PHASES/head.png'
import { Phases } from "../../components/phases/phases.component"

export const Movies = () => {
  return (
    <div className="text-black">
    <div className="mt-10">
    <PageHeading heading={MCU} />
    </div>
    <Phases />
  </div>
  )
}
