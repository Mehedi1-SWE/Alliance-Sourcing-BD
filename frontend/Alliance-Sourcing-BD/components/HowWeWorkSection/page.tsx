import { getWeWorks } from "@/lib/weWork"
import HowWeWork from "@/components/HowWeWork/page"

export default async function HowWeWorkSection() {
  const steps = await getWeWorks()
  return (
    <div>
      <HowWeWork steps={steps} />
    </div>
  )
}