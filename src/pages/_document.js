import Navigation from '@/components/navigations'
import { MDXProvider } from '@mdx-js/react'
import { Html, Head, Main, NextScript } from 'next/document'


const BackgroundProps = {
  background: 'rgb(9,78,121)',
  background: 'linear-gradient(180deg, rgba(9,78,121,1) 5%, rgba(24,187,178,1) 72%, rgba(14,210,143,1) 100%)'
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <NextScript />

      <body className='h-screen'>
        <div className='flex'>
          <div className='flex-3 text-green-500'>
            <Navigation />
          </div>

          <div class="relative rounded-2xl p-8 mt-5 w-screen mr-5 h-full">
            <div class="absolute -inset-px bg-gradient-to-r from-sky-400 to-teal-400 rounded-2xl" aria-hidden="true"></div>
            <div class="absolute inset-0 bg-zinc-900 rounded-2xl" aria-hidden="true"></div>
            <div style={{
              position: "relative"
            }}>
              <Main />
            </div>
          </div>

        </div>
      </body>
    </Html>
  )
}
