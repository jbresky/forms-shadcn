'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


// const initialDog = {
//   image: "",
//   breed: {
//     id: 0,
//     name: ""
//   }
// }

export default function Home() {

  const router = useRouter()

  return (
    <main className="p-6">
      <div className='flex m-auto flex-col gap-6 w-96'>
        <h1 className='text-xl font-bold self-start pb-2'>
          Forms
        </h1>
        <Button onClick={() => router.push('/forms/basic')}>Basic form</Button>
        <Button>Intermediate form</Button>
        <Button>Advanced form</Button>
      </div>
    </main>
  )
}

// const [dog, setDog] = useState(initialDog)
// const [loading, setLoading] = useState(false)

// useEffect(() => {
  //   updateDog()
  // }, [])
  
  // const updateDog = (breedId?: any) => {
    //   setLoading(true);
    //   getDog(breedId)
//     .then((newDog: any) => {
  //       setDog(newDog);
  //       setLoading(false);
  //     })
  //     .catch((error: any) => {
    //       console.log(error);
    //       setLoading(false);
    //     })
    // }


    {/* <section className='pb-4 flex flex-col gap-8 justify-center items-center'>
      <h1 className='text-4xl'>Doggyfy</h1>
      <p className='text-2xl text-muted-foreground'> {" "}
        Discover what dog breed you are based on your zodiac sign.
      </p>
      </section>
      <div className='flex gap-6 pt-8 pb-24 justify-center'>
      <SelectSign updateDog={updateDog}/>
      <Button>Let&apos;s go</Button> 
      </div>
    <DogContainer dog={dog} loading={loading}/> */}