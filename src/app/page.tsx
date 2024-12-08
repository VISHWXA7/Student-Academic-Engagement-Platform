import { Button } from "@/components/ui/button"


export default function Home() {
  return (
   <div className='' >
    <Button>
      Primary
    </Button>
    <Button variant="secondary">
      Secondary
    </Button>
    <Button variant="destructive">
      Destructive
    </Button>
    <Button variant='ghost'>
      GHOST
    </Button>
    <Button variant='muted'>
      muted
    </Button>
    <Button variant='outline'>
      outline
    </Button>
    <Button variant="teritary">
      teritary
    </Button>
   </div>
  )
}
