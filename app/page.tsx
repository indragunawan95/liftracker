import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src="/mark.svg"
          alt="company"
          width={10}
          height={10}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <Label htmlFor="email">Your email address</Label>
            <div className="mt-2">
              <Input type="email" placeholder="email" />
            </div>
            <Label htmlFor="email">Your password</Label>
            <div className="mt-2">
              <Input type="password" placeholder="password" />
            </div>
            <div className="mt-2 flex justify-end">
              <Button>Log in</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
