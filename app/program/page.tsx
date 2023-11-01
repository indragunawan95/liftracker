import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
  Input,
  Button
} from "@/components/ui"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type PropsWorkout = {
  title: string,
  imgUrl?: string,
  set: number,
  rep: number,
  weight: number
}

const WorkoutCard = ({ title, imgUrl, set, rep, weight }: PropsWorkout) => {
  return (
    <div className="my-2">
      <Card>
        <CardContent>
          <div className="w-full flex flex-col flex-wrap">
            <div className="mt-2">
              {title}
            </div>
            <div className="flex gap-5">
              <div>Img {imgUrl}</div>
              <div className="flex flex-col">
                <div>Set: {set}</div>
                <div>Rep: {rep}</div>
              </div>

              <div>Weight: {weight} kg</div>

            </div>
            <div className="flex justify-end">
              <Button>Record</Button>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const Program = () => {
  const workout: string[] = ["Push Up", "Pull Up"]
  return (
    <>
      <div>
        <div className="w-full flex justify-center my-10">
          <h2>Push Pull Leg</h2>

        </div>
        <div className="flex justify-center gap-3">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a day" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Days</SelectLabel>
                <SelectItem value="mon">Monday</SelectItem>
                <SelectItem value="tue">Tuesday</SelectItem>
                <SelectItem value="wed">Wednesday</SelectItem>
                <SelectItem value="thu">Thursday</SelectItem>
                <SelectItem value="sat">Saturday</SelectItem>
                <SelectItem value="sun">Sunday</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col justify-center items-center my-10">

          <WorkoutCard
            title="Push Up wolololo"
            set={4}
            rep={8}
            weight={12}
          />
          <WorkoutCard
            title="Pull Up"
            set={4}
            rep={8}
            weight={12}
          />

        </div >
      </div>

    </>

  )
}

export default Program