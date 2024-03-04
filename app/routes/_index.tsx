import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
    },
  ]
}

export default function Index() {
  return (
    <div className="container mt-10 mx-auto p-10 rounded bg-blue-500 text-white">
      <h1>Template for Remix (with Vite and Cloudflare) + TailwindCSS</h1>
      <ul>
        <li>
          <a
            className="underline hover:text-pink-600"
            target="_blank"
            href="https://github.com/mogita/remix-vite-tailwind-cloudflare"
          >
            Checkout the Template on GitHub
          </a>
        </li>
        <li>
          <a
            className="underline hover:text-pink-600"
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
        <li>
          <a className="underline hover:text-pink-600" target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}
