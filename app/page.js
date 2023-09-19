import Image from 'next/image'
import { PostCard, Categories, PostWidget } from './components'

let posts = [
  {
    title: 'React Apps Testing using Jest',
    excerpt: 'expert 01 loremse'
  },
  {
    title: 'React and typescript',
    excerpt: 'expert 0002 loremse'
  },
]

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8 py-10">
      <section className='grid grid-cols-1 gap-12 lg:grid-cols-12 '>
        <div className=' col-span-1 lg:col-span-8 '>
          {posts.map((post) => (
              <PostCard post={post} key={post.title}/>
            ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </section>
    </main>
  )
}
